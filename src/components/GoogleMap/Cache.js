let COUNTER = 0;
const SCRIPT_NAME_TO_STATUS = new Map();

const _onLoad = scriptName => {
  return cb => {
    const scriptStatus = SCRIPT_NAME_TO_STATUS.get(scriptName);
    if (scriptStatus) {
      scriptStatus.promise.then(() => {
        scriptStatus.error ? cb(scriptStatus.error) : cb(null, scriptStatus);
      });
    } else {
      // TODO:
    }
  };
};

export const Cache = (window_ => {
  return scriptnameToSrc => {
    const cache = {};

    const _scriptTag = (scriptName, src) => {
      if (!SCRIPT_NAME_TO_STATUS.has(scriptName)) {
        const tag = document.createElement('script');
        const promise = new Promise((resolve, reject) => {
          const body = document.getElementsByTagName('body')[0];
          tag.type = 'text/javascript';
          tag.async = false; // Load in order

          const handleError = evt => {
            SCRIPT_NAME_TO_STATUS.get(scriptName).errored = true;
            reject(evt);
            cleanup();
          };

          const handleLoaded = () => {
            SCRIPT_NAME_TO_STATUS.get(scriptName).resolved = true;
            resolve(src);
            cleanup();
          };

          const cbName = `loaderCB${COUNTER++}${Date.now()}`;

          const cleanup = () => {
            if (window_[cbName] && typeof window_[cbName] === 'function') {
              window_[cbName] = null;
            }
          };

          tag.onload = handleLoaded;
          tag.onerror = handleError;

          // Pick off callback, if there is one
          if (src.match(/callback=CALLBACK_NAME/)) {
            src = src.replace(/(callback=)[^\&]+/, `$1${cbName}`);
            window[cbName] = tag.onload;
          } else {
            tag.addEventListener('load', tag.onload);
          }
          tag.addEventListener('error', tag.onerror);

          tag.src = src;
          body.appendChild(tag);
          return tag;
        });
        const initialState = {
          loaded: false,
          error: false,
          promise,
          tag,
        };
        SCRIPT_NAME_TO_STATUS.set(scriptName, initialState);
      }
      return SCRIPT_NAME_TO_STATUS.get(scriptName);
    };

    Object.keys(scriptnameToSrc).forEach(scriptName => {
      cache[scriptName] = {
        tag: _scriptTag(scriptName, scriptnameToSrc[scriptName]),
        onLoad: _onLoad(scriptName),
      };
    });

    return cache;
  };
})(window);
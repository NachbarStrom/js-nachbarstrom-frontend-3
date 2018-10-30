export const GoogleApi = opts => {
  opts = opts || {};

  const URL = 'https://maps.googleapis.com/maps/api/js';
  const googleVersion = '3';

  const requestParams = {
    key: opts.apiKey,
    callback: 'CALLBACK_NAME',
    libraries: (opts.libraries || []).join(','),
    client: opts.client,
    v: googleVersion,
    channel: null,
    language: null,
    region: null,
  };

  const paramsPostfix = Object.keys(requestParams)
    .filter(k => !!requestParams[k])
    .map(k => `${k}=${requestParams[k]}`)
    .join('&');

  return `${URL}?${paramsPostfix}`;
};

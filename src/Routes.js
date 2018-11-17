// Enum similar to https://stackoverflow.com/questions/44447847/enums-in-javascript-with-es6

const EVALUATION = "/evaluation";
const routes = {
  INDEX: "/",

  EVALUATION: EVALUATION,
  LOADING: `${EVALUATION}/loading`,
  RESULTS: `${EVALUATION}/results`,
  FINANCIAL: `${EVALUATION}/financial`,
  SUMMARY: `${EVALUATION}/summary`,
  DONE: `${EVALUATION}/done`,
};
export const ROUTES = Object.freeze(routes);

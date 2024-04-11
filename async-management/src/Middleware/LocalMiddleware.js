const localStorageMiddleware = (store) => (next) => (action) => {
  console.log("Action dispatched: ", store);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return next(action);
};

export default localStorageMiddleware;

// const localStorageMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//       let result = next(action);
//       localStorage.setItem("reduxState", JSON.stringify(store.getState()));
//       return result;
//     };
//   };
// };

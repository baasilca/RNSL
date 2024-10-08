export const PromiseHelperAllSettled = (promises: any[]) => {
  return Promise.all(
    promises.map(function (promise) {
      return promise
        .then(function (value: any) {
          return {state: 'fulfilled', value: value};
        })
        .catch(function (reason: any) {
          return {state: 'rejected', reason: reason};
        });
    }),
  );
};

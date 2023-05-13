type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  let cache: {
    [key: string]: number
  } = {};
  return function(...args) {
    let key = JSON.stringify(args);

    if (key in cache) return cache[key];
    else {
      cache[key] = fn(...args);
      return cache[key];
    }
  }
}

function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Arguments must be numbers');
  } else {
    return a + b; 
  }
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo(1, 2)); // Output: 3
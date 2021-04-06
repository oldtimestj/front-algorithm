Array.prototype.reduce = function (fn, initValue) {
  let result = initValue ? initValue : this[0];
  for (let i = initValue ? 1 : 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    result = fn(result, this[i], i, this);
  }
  return result;
}

// 使用
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((a, b) => a * b, 1);
console.log(reduceArr);
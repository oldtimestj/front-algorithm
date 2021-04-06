/**
 * 手写filter方法
 * filter()方法返回一个新数组，返回的每一项是在回调函数中执行结果true。
 */

Array.prototype.filter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    fn(this[i], i, this[i]) && result.push(this[i]);
  }
  return result;
}

//使用
const arr = [1, 2, 3, 4, 5];
const mapArr = arr.filter(item => item > 2);
console.log(mapArr);
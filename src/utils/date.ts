import { isString } from './is';

export const parseTimestamp = (date: string | Date): number => {
  if (isString(date) === true) {
    date = date.toString().replace(/-/g, '/');
  }
  return date ? new Date(date).getTime() : 0;
};
// interface timeObj {
//   'M+': number; // 月份
//   'D+': number; // 日
//   'h+': number; // 小时
//   'm+': number; // 分
//   's+': number; // 秒
//   'q+': number; // 季度
//   'S': number
// }
// 格式化日期 实例 common.formatDate(date, 'YYYY-MM-DD hh:mm')
export const formatDate = (date: any, fmt: string = ''): Date | string | number => {
  if (!date) return '';
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/');
  }
  let dateTemp: Date;
  if (date > 0) {
    let dateNum = Number(date);
    if (dateNum.toString().length < 11) {
      dateNum *= 1000;
    }
    dateTemp = new Date(dateNum);
  } else {
    dateTemp = new Date(date);
  }
  if (dateTemp.toString() === 'Invalid Date') {
    dateTemp = new Date(date.toString().replace(/-/g, '/'));
    if (dateTemp.toString() === 'Invalid Date') {
      return date;
    }
    return date;
  } else {
    date = dateTemp;
  }
  var o: ObjTypes<number> = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k].toString() : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 *
 * @param func    {Function}   实际要执行的函数
 * @param wait    {Number}     执行间隔，单位是毫秒（ms），默认100ms
 *
 * @return        {Function}   返回一个“节流”函数
 */

export function throttle(func: Function, wait = 100): Function {
  // 利用闭包保存定时器和上次执行时间
  // eslint-disable-next-line
  let timer: any = 0;
  let previous = 0; // 上次执行时间
  // eslint-disable-next-line
  return function(this: any): void {
    // 保存函数调用时的上下文和参数，传递给 fn
    const context = this;
    const args = arguments;
    const now = +new Date();
    if (previous && now < previous + wait) {
      // 周期之中
      clearTimeout(timer);
      timer = setTimeout(function(): void {
        previous = now;
        func.apply(context, args);
      }, wait);
    } else {
      previous = now;
      func.apply(context, args);
    }
  };
}

/**
 * @param     func     {Function}   实际要执行的函数
 * @param     delay    {Number}     延迟时间，单位是毫秒（ms）
 * @return    {Function}
 */

export function debounce(func: Function, delay = 1000): Function {
  // eslint-disable-next-line
  let timer: any = 0;
  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 func 函数
  // eslint-disable-next-line
  return function(this: any): void {
    // 保存函数调用时的上下文和参数，传递给func
    var context = this;
    var args = arguments;
    // 函数被调用，清除定时器
    clearTimeout(timer);
    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 func
    timer = setTimeout(function(): void {
      func.apply(context, args);
    }, delay);
  };
}

/**
 * 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
 * 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const start = new Date(date).getFullYear() + '-01-01'
  return (new Date(date).getTime() - new Date(start).getTime())/1000/60/60/24 + 1
};
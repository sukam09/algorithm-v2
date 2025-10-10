/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [intervals[0]];
  const n = intervals.length;
  for (let i = 1; i < n; i++) {
    const [sa, ea] = mergedIntervals[mergedIntervals.length - 1];
    const [sb, eb] = intervals[i];
    if (sb <= ea) {
      const sc = Math.min(sa, sb);
      const ec = Math.max(ea, eb);
      mergedIntervals.pop();
      mergedIntervals.push([sc, ec]);
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }
  return mergedIntervals;
};

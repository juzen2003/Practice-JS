/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
// intervals: a set of non-overlapping intervals, sorted in ascending order according to start time
// 1. first,  add all the intervals ending before newInterval starts (left)
// 2. merge all overlapping intervals to one considering newInterval (inserted)
// 3. finally, add all the intervals starting after newInterval ends (right)
var insert = function(intervals, newInterval) {
  let n = intervals.length;
  let res = [];
  let i = 0;

  while(i < n && intervals[i].end < newInterval.start) {
    res.push(intervals[i]);
    i++;
  }

  while(i < n && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[i].start);
    newInterval.end = Math.max(newInterval.end, intervals[i].end);
    i++;
  }

  res.push(newInterval);

  // i < n && intervals[i].start > newInterval.end
  while(i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};

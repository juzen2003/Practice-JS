/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
// 1. sort intervals based on start
// 2. check if overlapped, if end[i] > start[i+1], we continue to expand end[i] with Math.max(end[i], end[i+1])
// 3. else if not overlapped, end[i] < start[i+1], we found a distinct interval

// Time: O(n log n), because of sort
// intervals is an array of Interval
var merge = function(intervals) {
  let n = intervals.length;
  intervals.sort((a, b) => a.start - b.start);

  let start = [];
  let end = [];
  let res = [];

  for(let i = 0; i < n; i++) {
    start.push(intervals[i].start);
    end.push(intervals[i].end);
  }

  let endMax = 0;
  for(let i = 0, j = 0; i < n; i++) {
    endMax = Math.max(endMax, end[i]);
    if(endMax < start[i+1] || i === n-1) {
      res.push(new Interval(start[j], endMax));
      j = i + 1;
    }
  }

  return res;
};

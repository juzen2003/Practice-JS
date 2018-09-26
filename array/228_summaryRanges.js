/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
   let n = nums.length;
   let res = [];

   for(let i = 0; i < n; i++) {
     let current = nums[i];
     while(i+1 < n && nums[i+1] === nums[i] + 1) {
       i++;
     }

     if(current === nums[i]) {
       res.push(`${nums[i]}`);
     } else {
       res.push(current + "->" + nums[i]);
     }
   }

   return res;
 };

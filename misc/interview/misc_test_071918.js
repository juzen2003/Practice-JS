// create a function that display 2 * n where n from 0 to 11
const createNumTable = function (n) {
  let res = [];
  for(let i = 0; i < n; i++) {
    res.push(i * 2);
  }

  return res;
};

console.log(createNumTable(11));

schema:
EmpId, EmpName, ReferredBy
1, Jerry, NULL
2, Ted, 1
3, Jenna, 1
4, Tom, NULL

// Count the user who is ReferredBy Jerry

SELECT COUNT(*)
FROM table as t1
JOIN table as t2
ON t1.EmpId = t2.ReferredBy
GROUP BY EmpName

SELECT COUNT(*)
FROM table
WHERE ReferredBy = 1

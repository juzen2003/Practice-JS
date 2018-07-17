// =================
// Q1:
// =================
// A company wants to decrease cart abandonment by its customers where in users add item in the cart but instead of purchasing leave the site. Currently, company has 10,000 total daily users who add item into the cart and 30% abandonment rate. Company's current product price is $1000 and its own cost is $500 ($500 in net profit from each customer that goes through the purchase). As a way to increase its profit, company decides to discount product pricing for its customers by 5% (profit decreases to $450 per product sold) Company quickly realizes that not all customers were leaving the site because of the price issue.
//
// Question 1 - What must be the minimum cart abandonment (maximum success of the promotion - "inflection point") where it still did not make sense for company to keep the discount - so the company discontinued the discount?
// ---
//
// Further, after 3 months it was realized, when users bought items with 5% discount the returns company got decreased by 25% - every such return costs company $50 in restocking the item. With this new information company restored the promotion and gave the promotions manager $10,000 in bonus and still not lost money.
//
// Question 2 - What must be the company's original product return rate ?

// =================
// Answer:
// =================
Q1:
Before promotion, with 30% abandonment rate, daily profit is 10000 * 0.7 * 500 = 3500000
With promotion, to keep at least the same profit, the abandonment rate cannot be higher than 1 - (3500000 / 450) / 10000 ~= 22.22%

Answer to Q1: 22.22%

Q2:
Assume number of return in 3 month is N
To keep at least the same amount of money cost:
N * 50 = N * (1 - 25%) * 50 + 10000 => N = 800
So the original return rate is 800 products / 3 month which is about 266.67 products per month

Answer to Q2: return rate: 266.67 products per month

// =================
// Q2:
// =================
// Please write code (in programming language you prefer) with mysql queries (as needed) for these 2 very simple problems. Note, try to have syntactically correct code.
//
//
// Problem 1 :
// You have a table called member which has 3 columns email, age_as_integer, gender - email is the primary key and age value is integer like 20, 30 , 40, 41, etc
//
// a. We want to find out in this table which age has the most number of members
// b. As a next step, we want to find a band of 5 years where we have most number of profiles so it can be age 1 to age 5 or age 2 to age 6 or age 15 to age 20 - any band of 5 yrs
//
//
// Problem 2 :
// Write code to find elements in an array of integers that are not only duplicates but that are within 3 array index apart so in an example array of (1, 3, 4, 1, 2, 6, 1, 9, 8, 3)
// we will get 1 as answer but not 3 because although 3 is duplicate the occurrence happens at more than 3 indices apart

// =================
// Answer:
// =================
Problem 1:
a. the only row info pop out would be the age that has the most number of memebers
SELECT
  age_as_integer, COUNT(*)
FROM
  member
GROUP BY
  age_as_integer
ORDER BY
  COUNT(*) DESC
LIMIT
  1

b. use sql to get a list of age with number of members in that age
SELECT
  age_as_integer, COUNT(*)
FROM
  member
GROUP BY
  age_as_integer
ORDER BY
  COUNT(*) DESC

Problem 2:
const findDup = function(arr) {
  if(arr.length === 0) return [];
  let res = [];
  let notValid = [];

  for(let i = 0; i < arr.length; i++) {
    // if element at i is the same as the one at i + 3, and it's not been logged and not been visited yet, we log it
    if(arr[i] === arr[i+3] && !res.includes(arr[i]) && !notValid.includes(arr[i])) {
      res.push(arr[i]);
    } else {
      notValid.push(arr[i]);
      continue;
    }
  }

  return res;
};

// test cases
console.log(findDup([1,3,4,1,2,6,1,9,8,3])); // [1]
console.log(findDup([1,6,4,1,2,6,3,9,8,3])); // [1, 3]
console.log(findDup([1,3,4,1,2,6,3,9,8,3])); // [1]
console.log(findDup([1,2,4,3,2,6,3,9,8,3])); // [2, 3]
console.log(findDup([1,2,6,3,2,6,3,9,6,3])); // [2, 6, 3]
console.log(findDup([1,3])); // []

// =================
// Q3:
// =================
// For the following situation you do not have to write code, but give us an overview of your solution, database schema, important queries, data aggregation strategy, coding modules, any crons, and anything that you feel relevant to explain your solution
// We have a retail store that logs every visitor who visits the store. Every visitor's unique email id is noted down (which can change over time). We want to generate reports that gives,
//
// a. For any hour (assume hour matches calendar hour - and user will query by giving start date as input parameter for this query) how many visitors were first time visitors vs repeat visitors (note, during the hour it is possible there is one visit by a new customer is first time visit but follow on visit by the same visitor is repeat visit)
//
// b. Is there particular block of 15 minutes interval when there are the most number of visitors (new and repeat combined) in a particular day and in a particular week (assume user will give any date mm-dd-yyyy as input parameter for both of these queries) (Please note, while considering the intervals, interval between 0 to 15 minutes as well as 1 to 16 minutes are valid and distinct 15 minute intervals)
//
//
// c. Is there particular block of 5 minutes interval when there is most significant drop in number of visitors (new and repeat combined) from the immediate 5 minutes interval preceding this 5 minutes block of interval

// =================
// Q4:
// =================
// Please write JavaScript code so that given an array of integers it gives outputs the largest number which is an even number and it is sum of any two numbers in the array. So e.g. if array is (1, 2, 3, 4, 5) then the answer is 8 (sum of 5 and 3)

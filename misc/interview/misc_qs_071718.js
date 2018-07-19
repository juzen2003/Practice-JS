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
SQL code:
SELECT
  age_as_integer, COUNT(*)
FROM
  member
GROUP BY
  age_as_integer
ORDER BY
  COUNT(*) DESC
LIMIT
  1;

b. join the same table to get a list of number of members in age range (5 as interval) and display the age range with most members
SQL code:
SELECT
  m1.age_as_integer as age1, m2.age_as_integer as age2, COUNT(m2.email) as profile_count
FROM
  member as m1
JOIN
  member as m2 ON age1 BETWEEN age2 - 5 AND age2
GROUP BY
  m1.age_as_integer
ORDER BY
  profile_count DESC
LIMIT
  1;

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
// Answer:
// =================
We can use relational database with the following data schema: user_name, email_id, latest_visit_time, and previous_visit_time.
user_name (string): name for each unique visitor.
email_id (string): unique email id for each visitor.
latest_visit_time (hh:min:sec, mm-dd-yy): this would store the time when a new data is created or an exisiting data is updated.
previous_visit_time (hh:min:sec, mm-dd-yy): if the visitor is a 1st time visitor, this column would be null, else it would store the latest_visit_time info from previous update of the data.

a.
1. Select all the data that has lateset visit time with the date equal to the start date.
2. For each hour on the targeted date, we can have two queries
  a. select the first time visitors by setting condition where the previous_visit_time is null or not in the current hourly range.
  b. select the repeat visitors by setting condition where the previous_visit_time is in the range of current hour.
3. Apply the above two queries for each hour on the targeted date, and we can get the first time visitors vs repeat visitors in every hour of that date.

b.
1. Select all the data that has the latest visit time with the same given date from input.
2. We need to self join the table on which the latest visit time from table 1 (t1) is between lastest visit time from table 2 (t2) - 15 minutes and latest visit time from table 2 (t2). (t1 between t2 - 15mins and t2)
3. Once we got join table from step 2, we have to group t1 and count the email_id or user_name to get the number of visitors in each 15 minutes block from t1
4. Order the result from step 3 by the count to get the busiest 15 minutes block.

c.
1. Use the similar steps from b to get the visitors in each 5 minutes block.
2. Store the all the number of visitors for each 5 minutes block.
3. Use the data from step 2 and create a function to find the max difference between two adjacent 5 minutes block to get the max drop.

// =================
// Q4:
// =================
// Please write JavaScript code so that given an array of integers it gives outputs the largest number which is an even number and it is sum of any two numbers in the array. So e.g. if array is (1, 2, 3, 4, 5) then the answer is 8 (sum of 5 and 3)

// =================
// Answer:
// =================
const maxSumOfTwoNumber = function(arr) {
  // return null when input is not valid
  if(arr.length <= 1) return null;
  if(arr.length == 2 && arr[0] % 2 !== arr[1] % 2) return null;

  let largestTwoEvenNums = [0,0];
  let largestTwoOddNUms = [0,0];

  // keep updating the largest 2 even & odd numbers
  for(let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if(currentNum % 2 === 0) {
      if(currentNum > largestTwoEvenNums[0]) {
        if(currentNum > largestTwoEvenNums[1]) {
          largestTwoEvenNums[0] = largestTwoEvenNums[1];
          largestTwoEvenNums[1] = currentNum;
        } else {
          largestTwoEvenNums[0] = currentNum;
        }
      }
    } else {
      if(currentNum > largestTwoOddNUms[0]) {
        if(currentNum > largestTwoOddNUms[1]) {
          largestTwoOddNUms[0] = largestTwoOddNUms[1];
          largestTwoOddNUms[1] = currentNum;
        } else {
          largestTwoOddNUms[0] = currentNum;
        }
      }
    }
  }

  // return the largest even sum between two arrays
  let sum1 = largestTwoEvenNums[0] + largestTwoEvenNums[1];
  let sum2 = largestTwoOddNUms[0] + largestTwoOddNUms[1];

  if(sum1 > sum2) {
    return sum1;
  } else {
    return sum2;
  }
};

// test case
console.log(maxSumOfTwoNumber([1,2,3,4,5])); // 8
console.log(maxSumOfTwoNumber([3,23,33,98,2])); // 100
console.log(maxSumOfTwoNumber([1,95,97,99,100])); // 196
console.log(maxSumOfTwoNumber([2,33,55,8,6])); // 88
console.log(maxSumOfTwoNumber([3,23])); // 26
console.log(maxSumOfTwoNumber([11, 8])); // null

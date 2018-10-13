function numberOfPairs(a, k) {
  // sort the input array in ascending order
  a.sort((el1, el2) => el1 - el2);

  // look for number of distinct pair in a
  let low = 0;
  let high = a.length - 1;
  let count = 0;

  while(low < high) {
      let num1 = a[low];
      let num2 = a[high];

      // ignore repetitve element unless they are the last 2 elements not been visited yet
      if(a[low] === a[low + 1] && high != low + 1) {
          low++;
      } else if(num1 + num2 === k) {
          count++;
          low++;
          high--;
      } else if(num1 + num2 > k) {
          high--;
      } else {
          low++
      }
  }

  return count;
}


const https = require('https');
/*
 * Complete the function below.
 * URL is https://jsonmock.hackerrank.com/api/movies/search/?Title=substr
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(substr) {
  let page = 1;
  let totalPage;
  let moviesData;
  let titles = [];
  let url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${page}`;

  https.get(url, (res) => {
    let data = "";

    // receive data
    res.on("data", (d) => {
        data += d;
    });

    // receive response
    res.on("end", () => {
        let resData = JSON.parse(data);

        moviesData = resData["data"]
        totalPage = resData["total_pages"];

        for(let i = 0; i < moviesData.length; i++) {
            titles.push(moviesData[i]["Title"]);
        }

        console.log(titles);

    });
  });
};

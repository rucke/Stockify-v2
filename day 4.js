
let fetchStock = (date) => {

  let url = `
https://www.worldtradingdata.com/api/v1/history_multi_single_day?symbol=NDA-SE.ST&date=${date}&api_token=MGVWXF6BuAadXOHYovxla5lljlc1s2ITHqrMfJM6fjZcL8FiCfQsz5jFFz4K
`



      let receivedNews = (stockData) => {
        if (stockData.data) {
          document.querySelectorAll(`.stock${date}`).forEach((element) => {
            element.innerHTML = stockData.data["NDA-SE.ST"].close
            })

        }
          else {
            document.querySelectorAll(`.stock${date}`).forEach((element) => {
              element.innerHTML = "Markets closed"
            })

          }

      }

  // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
  // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
  fetch(url)
    .then(response => response.json())
    .then(receivedNews)

}


let url = "https://newsapi.org/v2/everything?sources=svenska-dagbladet%2Cwall-street-journal%2Cfinancial-times%2Cfinancial-post%2Cthe-economist%2Cfortune%2Cbloomberg&q=nordea&from=2018-12-24&to=2019-01-23&sortBy=publishedAt&apiKey=658f46e6eb2e47a897691f0f6d4408da"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    let date = article.publishedAt.split("T")[0]
    fetchStock(date)
    document.querySelector(".puff").innerHTML +=
    `
    <div class="news">
        <img src= "${article.urlToImage}">

    <div class="pufftext">
        <p>${article.publishedAt}</p>
        <a href="${article.url}">${article.title}</a>
        <p>  ${article.description} </p>
        <div class = "stockclose stock${date}">

        </div>
    </div>
    `



  })
}


// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)

//API no2

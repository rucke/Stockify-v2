
let newsarticle = [{
  date: "16 januari 2019",
  title:"Nu brinner det!",
  underrubrik:"Börsen faller i hela Asien",
  brödtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "avskriv.jpg",
  kurs: "0,23%"
},
{
  date: "16 januari 2019",
  title: "Köp Fingerprint, NU!",
  underrubrik:"Folkaktien har aldrig varit hetare",
  brödtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "nalle.jpg",
  kurs: "-1,3%"
}]

let articlesdiv = document.querySelector(".puff")

newsarticle.forEach ((article) => {
//efter back-tick lägger man alla htmlkod som man vill ha på den texten man suger in.
  articlesdiv.innerHTML += `


    <div class="news">
      <img src= "${article.image}">

      <div class="pufftext">
        <p>${article.date}</p>
        <a href="https://www.affarsvarlden.se/bors-ekonominyheter/nordea-skriver-av-goodwill-i-ryssland-6944880">${article.title}</a>
        <h3>
          ${article.underrubrik}
        </h3>
        <p>
          ${article.brödtext}
          </p>
      </div>

    </div>

        <p>${article.kurs}</p>
        <!-- Start TC2000 widget -->
        <iframe width="100%" noresize="noresize" scrolling="no" height=200px frameborder="0" src="https://widgets.tc2000.com/WidgetServer.ashx?id=128707"></iframe>
        <!-- END TC2000 Widget -->



`
})

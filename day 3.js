
let newsarticle = [{
  title:"Nu brinner det!",
  underrubrik:"Börsen faller i hela Asien",
  brödtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

},
{
  title: "Köp Fingerprint, NU!",
  underrubrik:"Folkaktien har aldrig varit hetare",
  brödtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}]

let articlesdiv = document.querySelector(".foretag")

newsarticle.forEach ((article) => {
//efter back-tick lägger man alla htmlkod som man vill ha på den texten man suger in.
  articlesdiv.innerHTML += `
<h1>
${article.title}
</h1>

<h2>
${article.underrubrik}
</h2>

<p>${article.brödtext}
</p>

`
})

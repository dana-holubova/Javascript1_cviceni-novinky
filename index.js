const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const news = document.querySelector(".news")
news.style.backgroundColor = "#fff"
news.style.maxWidth = "60rem"

document.querySelector("h1").classList.add("news__title")

document.querySelector("#zprava1").classList.add("post--main")

document.querySelector("#zprava3 > img").src = "images/zprava3-novy.jpg"

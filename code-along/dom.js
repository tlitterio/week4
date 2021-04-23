let pageTitleElement = document.querySelector(`.page-title`)
console.log(pageTitleElement)
pageTitleElement.innerHTML= `Wow!`

let movieElements = document.querySelectorAll(`.movies-to-watch li`)
// for (let i=0;i<movieElements.length;i++){
//     let movieElement = movieElements[i]
//     console.log(movieElement)
//     movieElement.innerHTML = `The Martian`
// }

let movieList = document.querySelector(`.movies-to-watch`)
console.log(movieList)

movieList.insertAdjacentHTML(`beforeend`,`
<li>The Martian</li>
<li>Apollo</li>
<li>The Wiz</li>
`)
    let pageTitleElement = document.querySelector(`.page-title`)
    pageTitleElement.innerHTML = `Movies to watch!`

    // let movieElements = document.querySelectorAll(`.movies-to-watch li`)
    // // loop through all the elements (all the <li>s)
    // for (let i = 0; i < movieElements.length; i++) {
    //   // store a reference to each movie <li>
    //   let movieElement = movieElements[i]
    // 
    //   // change the HTML for each <li>
    //   movieElement.innerHTML = `Spaceballs`
    // }

    // store a reference to the element with class "movies-to-watch"
    let moviesListElement = document.querySelector(`.movieis-to-watch`)

    // insert some HTML before the end of the element - </ul>
    moviesListElement.insertAdjacentHTML(`beforeend`, `
      <li>Spaceballs</li>
      <li>Apollo 13</li>
      <li>The Martian</li>
    `)

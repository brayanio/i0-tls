'news',
`
${Service.Util.Nav}
<br>
<div class="container">
  <div class="card bg-dark text-white">
      <div class="card-body">
        <div class="mb-4">
            <h2 class="card-title tls-font" i0="title"></h2>
            <h6 class="card-subtitle text-muted" i0="date"></h6>
        </div>
        <div i0="article"></div>
      </div>
  </div>
</div>
<br>
`,
(ui, article) => {

  i0.load('nav', [
      // {text: '', href: ''}
  ], ui.nav)

  if(!article) {
    return i0.toRoute('#')
  }
  ui.title.innerText = article.title
  ui.date.innerText = article.date

  article.article.forEach(obj => {
    let el
    switch(obj.type){
      case 'p': 
        el = i0.element(`<p class="card-text">${obj.text}</p>`)
        break
      case 'title': 
        el = i0.element(`<h${obj.size} class="card-title">${obj.text}</h${obj.size}>`)
        break
      case 'br': 
        el = i0.element(`<br class="my-${obj.y}">`)
        break
      case 'a': 
        el = i0.element(`<a class="card-link text-decoration-none btn btn-primary" href="${obj.href}" ${obj.href.substring(0,1) !== '#' ? 'target="_blank"' : ''}>${obj.text}</a>`)
        break
    }
    if(el)
      ui.article.appendChild(el)
    else
      console.error('Article Load Error', obj)
  })
}
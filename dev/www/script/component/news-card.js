'news-card',
`
<div class="col-sm-6 col-md-4 col-xl-3">
  <a class="card m-2 text-decoration-none text-white bg-success" i0="link">
    <h6 class="card-header text-center" i0="title"></h6>
    <div class="card-body">
      <p class="card-text text-center" i0="desc" style="height: 81px"></p>
    </div>
  </a>
</div>
`,
(ui, article) => {
  ui.title.innerText = article.title
  ui.desc.innerText = article.short
  ui.link.href="#link"
  ui.link.onclick = e => {
    e.preventDefault()
    i0.toRoute('#news', article)
  }
}
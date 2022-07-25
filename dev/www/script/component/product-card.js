'product-card',
`
<div class="col-sm-6 col-md-4 col-lg-3 p-2">
  <div class="card bg-transparent shadow-0 border-0">
      <img i0="img" class="card-img-top mb-3">
      <div class="card-body bg-dark" i0="border">
          <h4 class="card-title tls-font" i0="title"></h4>
          <p class="card-text" i0="desc" style="height: 80px"></p>
          <div class="d-flex justify-content-end">
            <a i0="link" target="_blank" class="card-link btn text-decoration-none"></a>
          </div>
      </div>
  </div>
</div>
`,
(ui, props) => {

  ui.img.src = props.img
  ui.title.innerText = props.title
  ui.desc.innerText = props.desc
  ui.link.href = props.href
  ui.link.innerText = props.link
  ui.border.classList.add(`border-${props.border}`, 'border')
  ui.link.classList.add(`btn-${props.border}`)

}
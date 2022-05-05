'social-card',
`
<div class="col-sm-6 col-md-4 col-xl-3">
  <a class="card m-2 text-decoration-none text-white bg-primary" i0="link" target="_blank">
    <h6 class="card-header text-center" i0="title"></h6>
    <div class="card-body">
      <p class="card-text text-center" i0="desc" style="height: 102px"></p>
    </div>
  </a>
</div>
`,
(ui, props) => {

  ui.title.innerText = props.title
  ui.link.href = props.href
  ui.desc.innerText = props.desc

}
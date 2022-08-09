'home',
`
    ${Service.Util.Nav}
    <br>
    <div class="container">
        <div class="card bg-dark text-white border-0">
            <div class="container">
                <div class="d-flex align-items-end mb-4">
                    <img src="./asset/logo.PNG" width="128" height="128">
                    <h1 class="card-title tls-font ps-4">Todd Lewis Studio</h1>
                </div>
                <div class="row mt-4 my-5">
                    <p class="card-text fs-4 col-md-6 col-lg-6 offset-md-1 offset-lg-1">Based in Denver, Colorado, <b class="tld-font">Todd Lewis Studio</b> is the most experienced independant crypto game studio in the industry.</p>
                </div>
                <br class="my-3">
                <div class="row bg-light bg-opacity-10 py-5">
                    <h3 class="card-title text-center mb-4">News</h3>
                    <div class="container">
                        <div class="row flex-sm-row-reverse flex-column-reverse justify-content-center" i0="news"></div>
                    </div>
                </div>
                <div class="row bg-black bg-opacity-50 py-5">
                    <h3 class="card-title text-center mb-4">Products</h3>
                    <div class="container">
                        <div class="row justify-content-center" i0="products"></div>
                    </div>
                </div>
                <div class="row bg-danger bg-opacity-10 py-5">
                    <h3 class="card-title text-center mb-4">Mission</h3>
                    <div class="container">
                        <div class="row d-flex align-items-center my-4">
                            <div class="col-md-4 text-center text-md-end">
                                <img src="./asset/me.PNG" width="180" height="180" class="rounded shadow-sm">
                            </div>
                            <div class="col-md-6 offset-md-1">
                                <b class="card-title">Todd Lewis</b>
                                <p class="card-text">I created this company to express my authentic creative style. Some of my passions include coding, crypto, and meditation. I hope to cultivate an audience and provide an experience that is worth remembering.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row bg-primary bg-opacity-10 py-5">
                    <h3 class="card-title text-center mb-4">Social</h3>
                    <div class="container">
                        <div class="row justify-content-center" i0="socials"></div>
                    </div>
                </div>
                <div class="row justify-content-center py-5">
                    <h3 class="card-title text-center mb-4">Business</h3>
                    <div class="col-md-6 col-lg-4">
                        <div class="card m-2 bg-secondary">
                            <div class="card-body">
                                <h6 class="card-title">Contact</h6>
                                <div class="card-text">
                                    <a class="card-link text-decoration-none link-light" href="mailto:todd.lewis.art@gmail.com">todd.lewis.art@gmail.com</a> 
                                    <br>
                                    <a class="card-link text-decoration-none link-light">...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card m-2 bg-secondary">
                            <div class="card-body">
                                <h6 class="card-title">Location</h6>
                                <div class="card-text">
                                    ...
                                    <br> 
                                    Denver, CO 80012, USA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex text-muted justify-content-center">
                <small>© Todd Lewis Studio LLC, Denver, CO. All rights reserved.</small>
            </div>
        </div>
        <br>
    </div>
`,
ui => {

    i0.load('nav', [
        // {text: '', href: ''}
    ], ui.nav)

    Service.Import.Articles().forEach(article => {
        ui.news.appendChild( i0.load('news-card', article) )
    })

    ;[
        {title: 'Youtube', desc: 'Todd Lewis Studio channel features coding, project updates, and more.', href: 'https://www.youtube.com/channel/UCkDvVlBZY2bmjOBBe5ZnjCw'},
        {title: 'Twitter', desc: 'Stay up to date with daily TLS tweets.', href: 'https://twitter.com/ToddLewisStudio'},
        // {title: 'Discord', desc: 'Wisp Discord features a community for Wisp players to communicate.', href: ''},
        {title: 'OpenSea', desc: 'Wisp NFTs soon to be playable in Wisp.', href: 'https://opensea.io/collection/wisp-crypto'},
    ].forEach(props => ui.socials.appendChild( i0.load('social-card', props) ))

    ;[
        {
            title: 'Wisp',
            img: './asset/wisp.PNG',
            desc: 'Wisp is a collectible game with a focus on strategy and trading.',
            link: 'wispcrypto.com',
            href: 'https://wispcrypto.com',
            border: 'primary'
        },
        {
            title: 'i0',
            img: './asset/i0.PNG',
            desc: 'The full-stack JavaScript solution.',
            link: 'i0framework.com',
            href: 'https://i0framework.com',
            border: 'success'
        }
    ].forEach(props => ui.products.appendChild( i0.load('product-card', props) ))

}
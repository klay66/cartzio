import './nav.css'
import Logo from '../image/Logo.png'
import mane from '../image/top.jpg'
export default function Nav() {
    return (
        <header>
            <div className="top-nav">
                <p>Refer a friend & get $50 in credits each 🎉</p>
            </div>
            <div id="navbar" class="navbar navbar-expand-lg">
                <div class="container">
                    <div class="col-lg-3">
                        <a class="navbar-brand" href="#">
                            <img src={Logo} />
                        </a>
                    </div>
                    <div class="links collapse navbar-collapse col-lg-6" id="main">
                        <ul class="navbar-nav mb-2 mb-lg-0">

                            <li className='active'>Home</li>
                            <li>Products</li>
                            <li>Shop</li>
                            <li>Pages</li>
                            <li>Sale</li>
                            <li>Contact</li>

                        </ul>
                    </div>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main"
                        aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className='search col-lg-3 col-md-9 col-sm-12'>
                        <div className='me-3 mt-2'><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className='icon'><i class="fa-regular fa-heart"></i></div>
                        <div className='icon'><i class="fa-solid fa-cart-shopping"></i></div>
                        <div className='image'>
                            <img src={mane} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </header>
    )
}
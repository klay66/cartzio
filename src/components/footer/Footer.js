import React from 'react'
import logo from '../image/logo-n.png'
import './footer.css'
import american from '../image/cash-1.jpeg'
import disc from '../image/cash-2.jpeg'
import master from '../image/cash-3.jpeg'
import paypal from '../image/cash-4.jpeg'
import visa from '../image/cash-5.jpeg'
export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='Social col-lg-3 col-md-6 col-sm-12' >
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <p className='mt-4'>Upgrade your style with our curated sets. Choose confidence embrace your unique look.</p>
                        <ul className='mt-4'>
                            <li><i class="fa-solid fa-cart-shopping"></i></li>
                            <li><i class="fa-solid fa-basketball"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-regular fa-envelope"></i></li>
                        </ul>
                    </div>
                    <div className=' shopping col-lg-6 col-md-6 col-sm-12'>
                        <h3 className='pb-3'>Shopping & Clothes</h3>
                        <div className='clothes d-flex align-items-center'>
                            <div className='info me-4'>
                                <ul>
                                    <li>Men</li>
                                    <li>Jackets & Coats</li>
                                    <li>Jeans</li>
                                    <li>Loungewear</li>
                                    <li>Polo shirts</li>
                                    <li>Shirts</li>
                                </ul>
                            </div>
                            <div className='info me-4'>
                                <ul>
                                    <li>Men</li>
                                    <li>Jackets & Coats</li>
                                    <li>Jeans</li>
                                    <li>Loungewear</li>
                                    <li>Polo shirts</li>
                                    <li>Shirts</li>
                                </ul>
                            </div>
                            <div className='info me-4'>
                                <ul>
                                    <li>Men</li>
                                    <li>Jackets & Coats</li>
                                    <li>Jeans</li>
                                    <li>Loungewear</li>
                                    <li>Polo shirts</li>
                                    <li>Shirts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='News col-lg-3 col-md-6 col-sm-12'>
                        <h4>Newslette</h4>
                        <p>Sign up and receive the latest tips via email.</p>
                        <form>
                            <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                            <input type="email" placeholder="Email" name="email"></input>
                            <button className='bt' type="submit" id="submitsubscribe" name="send" >Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className='buying row pt-4 pb-3'>
                    <div className='foot col-lg-3 col-md-6 col-sm-12 ps-5'>
                        <p>Free delivery</p>
                    </div>
                    <div className='foot col-lg-3 col-md-6 col-sm-12 ps-5'>
                        <p>Free delivery</p>
                    </div>
                    <div className='foot col-lg-3 col-md-6 col-sm-12 ps-5'>
                        <p>Free delivery</p>
                    </div>
                    <div className='foot col-lg-3 col-md-6 col-sm-12 ps-5'>
                        <p>Free delivery</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container pt-4 pb-4'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <p>© 2024 Cartzio. Design &amp; Develop with <i class="mdi mdi-heart text-red-600"></i> by Shreethemes.</p>
                    </div>
                    <div className='cash col-lg-6 col-md-6 col-sm-12'>
                        <ul className='d-flex justify-content-end'>
                            <li>
                                <a href="">
                                    <img src={american} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={disc} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={master} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={paypal} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={visa} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

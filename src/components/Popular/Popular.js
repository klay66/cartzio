import React from 'react'
import './popular.css'
import bag from '../image/Popular-1.jpg'
import smart from '../image/Popular-2.jpg'
import Sandals from '../image/Popular-3.jpeg'
import Skirt from '../image/Popular-4.jpg'

export default function Popular() {
    return (
        <section className='popular'>
            <div className='container'>
                <div className='title row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h3>Popular Items</h3>
                        <p>Popular items in this week</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <a href="">See More Items &rarr;</a>
                    </div>
                </div>
                <div className='shop row'>
                    <div className='product-shop col-lg-3 col-md-6 col-sm-12'>
                        <div className='icons'>
                            <div className='icon'><i class="fa-regular fa-heart"></i></div>
                            <div className='icon'><i class="fa-regular fa-eye"></i></div>
                            <div className='icon'><i class="fa-regular fa-bookmark"></i></div>
                        </div>
                        <img src={bag} alt="img" />
                        <button className='btn'>Add To Cart</button>

                        <p>Orange Luxurious Bag</p>
                        <p>
                            $16.00
                            <del>$21.00</del>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </p>
                    </div>
                    <div className='product-shop col-lg-3 col-md-6 col-sm-12'>
                        <div className='icons'>
                            <div className='icon'><i class="fa-regular fa-heart"></i></div>
                            <div className='icon'><i class="fa-regular fa-eye"></i></div>
                            <div className='icon'><i class="fa-regular fa-bookmark"></i></div>
                        </div>
                        <img src={smart} alt="img" />
                        <button className='btn'>Add To Cart</button>

                        <p>Smart Watch</p>
                        <p>
                            $16.00
                            <del>$21.00</del>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </p>
                    </div>
                    <div className='product-shop col-lg-3 col-md-6 col-sm-12'>
                        <div className='icons'>
                            <div className='icon'><i class="fa-regular fa-heart"></i></div>
                            <div className='icon'><i class="fa-regular fa-eye"></i></div>
                            <div className='icon'><i class="fa-regular fa-bookmark"></i></div>
                        </div>
                        <img src={Sandals} alt="img" />
                        <button className='btn'>Add To Cart</button>

                        <p>White Sandals</p>
                        <p>
                            $16.00
                            <del>$21.00</del>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </p>
                    </div>
                    <div className='product-shop col-lg-3 col-md-6 col-sm-12'>
                        <div className='icons'>
                            <div className='icon'><i class="fa-regular fa-heart"></i></div>
                            <div className='icon'><i class="fa-regular fa-eye"></i></div>
                            <div className='icon'><i class="fa-regular fa-bookmark"></i></div>
                        </div>
                        <img src={Skirt} alt="img" />
                        <button className='btn'>Add To Cart</button>

                        <p>Ladies Skirt</p>
                        <p>
                            $16.00
                            <del>$21.00</del>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

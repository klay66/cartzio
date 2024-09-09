import React from 'react'
import './collections.css'
import Kids from '../image/col-1.jpg'
import Men from '../image/clo-2.jpg'
import Ladies from '../image/col-3.jpg'
import Smart from '../image/col-4.jpg'
import Sunglasses from '../image/col-5.jpg'
export default function Collections() {
    return (
        <section className='collection'>
            <h3>Shop The Collections</h3>
            <p>Shop the latest products from the most popular collections</p>
            <div className='container'>
                <div className='collection-info row'>
                    <a href="#" className='col-lg-2 col-md-5 col-sm-12'>
                        <img src={Kids} alt="img" />
                        <h4>Kids Wear</h4>
                    </a>
                    <a href="#" className='col-lg-2 col-md-5 col-sm-12'>
                        <img src={Ladies} alt="img" />
                        <h4>Ladies Wear </h4>
                    </a>
                    <a href="#" className='col-lg-2 col-md-5 col-sm-12'>
                        <img src={Men} alt="img" />
                        <h4>Men's Wear</h4>
                    </a>
                    <a href="#" className='col-lg-2 col-md-5 col-sm-12'>
                        <img src={Smart} alt="img" />
                        <h4>Smart Watch</h4>
                    </a>
                    <a href="#" className='col-lg-2 col-md-5 col-sm-12'>
                        <img src={Sunglasses} alt="img" />
                        <h4>Sunglasses</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

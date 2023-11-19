import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Embrace the convenience of online shopping with our cutting-edge e-commerce app. Experience a world where shopping is made easy, and benefits abound for both customers and sellers alike.Explore a vast selection of products right at your fingertips, 24/7. Enjoy the flexibility to shop from the comfort of your home, save time, and discover exclusive deals and discounts that make every purchase a delight.Our e-commerce platform bridges the gap between buyers and sellers, fostering a global marketplace that transcends geographical boundaries. Sellers can reach a wider audience, while customers gain access to a diverse range of high-quality products.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
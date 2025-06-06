import React from 'react';
import './Customer.css';
import aerrow from '../../assets/aerrow.png';
import image2 from '../../assets/image2.png';

const Customer = () => {
  return (
    <section className="testimonials">
      <div className="customer-testimonials">
        <p className='text-xl-start'>Customer Testimonials</p>
      </div>

      <div className="desc">
        <p className='text-xl-start'>This tool has transformed my productivity and organization!</p>
      </div>

      <div className="feedback position-relative">
        <div className="rectangle position-absolute top-0 z-0 d-block"></div>

        <div className="feedback-rectangle position-relative d-flex flex-wrap align-items-center justify-content-between z-1">
          <div className="feedback-rectangle-left">
            <p className="customer-thoughts text-xl-start">
              “Using this website has made my tasks so much easier! I can't imagine my day without it.”
            </p>

            <div className="user d-flex align-items-center">
              <img src={aerrow} alt="arrow icon" />
              <div className="user-name">
                <p className='text-xl-start'>Sherri Cronin</p>
                <p className='text-xl-start'>Project Manager, TechCorp</p>
              </div>
            </div>

            <div className="slider d-flex">
              <i className="fa-solid fa-circle-chevron-right fa-flip-horizontal" style={{ color: '#ff4054' }}></i>
              <i className="fa-solid fa-circle-chevron-right" style={{ color: '#ff4054' }}></i>
            </div>
          </div>

          <div className="user-image">
            <img src={image2} alt="user testimonial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;

import React from 'react'
import "./Join.css"
import phonr from "../../assets/phone.png"

const Join = () => {
  return (
    <>
        <section className='join-us'>
            <img src={phonr}alt="" />
            <div className="start">
                <p>Start Organizing Your Life Today</p>
                <p>Join us now and transform your productivity with our intuitive to-do list platform!</p>
                <div className="join-btn">
                    <button className='signup'>Sign up</button>
                    <button className='learn'>Learn More</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Join
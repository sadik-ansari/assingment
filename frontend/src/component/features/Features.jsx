import React, { use } from 'react'
import "./Features.css"
import note from "../../assets/note.png";
import idea from "../../assets/idea.png";
import user from "../../assets/user.png";
import share from "../../assets/share.png";

const Features = () => {
  return (
    <>
        <div className="features">
            <div className="features-title"><p>Transform Your Productivity with Our Innovative To-Do List Features</p></div>
            <div className="features-cards">
                <div className="features-cards-one" id='cards-height'>
                    <div className="card-one-content-one">
                        <div className="user-friendly-icon"><img src={user} alt="" /></div>
                        <p>01</p>
                    </div>
                    <div className="user-friendly"><p>User-Friendly Interface</p></div>
                    <div className="loading">
                        <p></p>
                        <p></p>
                    </div>
                    <p className='dec'>Our platform offers seamless task management to boost your efficiency.</p>
                </div>
                <div className="features-cards-two" id='cards-height'>
                      <div className="card-two-content-one">
                        <div className="Collaborate-icon"><img src={share} alt="" /></div>
                        <p>02</p>
                    </div>
                    <div className="collaborate"><p>Collaborate & Share Effortlessly</p></div>
                    <div className="loading">
                        <p></p>
                        <p></p>
                    </div>
                    <p className='dec'>Invite team members to work together and achieve your goals faster.</p>
                </div>
                <div className="features-cards-three" id='cards-height'>
                    <div className="card-three-content-one">
                        <div className="Effortless-icon"><img src={idea} alt="" /></div>
                        <p>03</p>
                    </div>
                    <div className="effortless"><p>Effortless Collaboration</p></div>
                    <div className="loading">
                        <p></p>
                        <p></p>
                    </div>
                    <p className='dec'>Invite team members to work together and achieve your goals faster.</p>
                </div>
                <div className="features-cards-fourth" id='cards-height'>
                    <div className="card-fourth-content-one">
                        <div className="Seamless-icon"><img src={note} alt="" /></div>
                        <p>04</p>
                    </div>
                    <div className="seamless"><p>Seamless Access</p></div>
                    <div className="loading">
                        <p></p>
                        <p></p>
                    </div>
                    <p className='dec'>Stay connected and manage your tasks on the go with ease.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features
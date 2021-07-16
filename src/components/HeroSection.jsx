import React from 'react'
import '../App.css'
import './css/HeroSection.css'
import Button from './Button'

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Get Started
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    Watch Trailer <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

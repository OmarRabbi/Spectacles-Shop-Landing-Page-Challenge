import React from 'react'
import manImage from '../assets/images/banner-image/man-image.png'
import sliderDot from '../assets/images/banner-image/slider-1.png'
import style from '../assets/styles/banner.module.css'

export default function Hero() {
  return (
    <div className={`${style.container}`}>
        <div className={`${style.circle}`}></div>
        <div className={`${style.wrapper}`}>
        <div className={`${style.content}`}>
            <h1>Personalized Eyeglass Shopping</h1>
            <button>Buy Now</button>
        </div>
        <div className={`${style.imageContainer}`}>
            <img src={manImage} alt="Man with Glasses"/>
        </div>
        <div className={`${style.sliderNavigation}`}>
            <img src={sliderDot} className={`${style.dot}`}/>
            <img src={sliderDot} className={`${style.dot}`}/>
            <img src={sliderDot} className={`${style.dot}`}/>
        </div>
        </div>
    </div>
  )
}

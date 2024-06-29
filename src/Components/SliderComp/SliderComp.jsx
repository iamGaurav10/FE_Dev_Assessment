import React from 'react'
import "./SliderComp.css"
import data from "../utils/SliderSettings/slider.json"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import { SliderSettings } from '../utils/SliderSettings/Slider'
import "swiper/css"
import { IoIosArrowDroprightCircle } from "react-icons/io";


const SliderComp = () => {
    console.log(data)
  return (
    <div className='slider_container'>
        <Swiper {...SliderSettings}>
            {
                data.map((card,i)=>(
                    <SwiperSlide>
                        <div className='s_card'>
                            <span>{card.title}</span>
                            <span>{card.subtitle}</span>
                            <span>{card.bottomText} <IoIosArrowDroprightCircle />
                            </span>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </div>
  )
}

export default SliderComp
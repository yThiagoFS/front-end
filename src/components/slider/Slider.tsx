import {Swiper, SwiperProps} from "swiper/react"

import {Navigation, Pagination, A11y, Autoplay} from "swiper"

import {ReactNode} from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./Slider.css"
import "swiper/css/autoplay"

interface SliderProps{
    settings: SwiperProps,
    children: ReactNode
}

export default function Slider({settings, children}: SliderProps) {
    return(
        <Swiper modules = {[Navigation, Pagination, A11y, Autoplay]}{...settings}>
            {children}
        </Swiper>
    )
}
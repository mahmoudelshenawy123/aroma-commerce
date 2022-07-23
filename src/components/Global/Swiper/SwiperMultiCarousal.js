import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper";

function SwiperMultiCarousal(props) {

    let products =props.products
    let Component=props.comp.type
    return (
        <Swiper
            spaceBetween={props.distance||5}
            autoplay={{
                delay: 25000,
                disableOnInteraction: false,
            }}
            loop={props.loop||true}
            loopFillGroupWithBlank={true}
            slidesPerView={props.count||3}
            modules={[Autoplay]}
            breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                //   spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                //   spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 2,
                //   spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 3,
                //   spaceBetween: 50,
                },
                "@2.00": {
                  slidesPerView: 4,
                //   spaceBetween: 50,
                },
              }}

            >
                {
                    products && products.map(product=>(
                        <SwiperSlide key={product.id}>
                            <Component products={product} key={product.name+product.id}/>
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    )
}

export default SwiperMultiCarousal
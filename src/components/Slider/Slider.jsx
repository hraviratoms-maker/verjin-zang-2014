import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ed1 from '../../images/ed1.JPG';
import ed2 from '../../images/ed2.JPG';
import ed3 from '../../images/ed3.JPG';
import ed4 from '../../images/ed4.JPG';
import ed5 from '../../images/ed5.JPG';
import ed6 from '../../images/ed6.JPG';
import ed7 from '../../images/ed7.JPG';
import ed8 from '../../images/ed8.JPG';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const imageArray = [ed1, ed2, ed3, ed4, ed5, ed6, ed7, ed8];

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    imageArray?.map((el, idx) => {
                        return (
                            <SwiperSlide>
                                <img src={el} key={idx} />
                            </SwiperSlide>
                        )
                    })
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default Slider;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import javaScript from '../../img/javascript-js-icon-2048x2048-nyxvtvk0.png';
import react from '../../img/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.webp';
import typescript from '../../img/typescript.png';
import html from '../../img/Ikona-html.png';
import css from '../../img/file-type-css-icon-1806x2048-r5fwjl3p.png';
import scss from '../../img/Sass_Logo_Color.svg.png';
import Styles from '../slider/slider.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/element/css/autoplay';

const Slider = () => {
  const imgList = [javaScript, react, typescript, html, scss, css];
  return (
    <div className={Styles.container}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0, // Без задержки для непрерывного движения
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={10000}
        allowTouchMove={false}>
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <img className={Styles.img} src={img} alt={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

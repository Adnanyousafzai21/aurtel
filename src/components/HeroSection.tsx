"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarusel from "./HeroCarusel";
import MainpageText from "./MainpageText";
import { LeftArrowIcon, RightArrowIcon } from "../app/icons";

const data = [{
  text: "Empowering growth: Contract solutions and expert insights for success.",
  image: "/images/slider-1.png"
}, {
  text: "Client-centered approach. Industry-leading results ",
  image: "/images/slider-2.png"
}, {
  text: "Transforming services into lasting partnership. ",
  image: "/images/slider-3.png"
},
{
  text: "Contact Aurtel Consulting Group to see how our expertise can foster your business growth",
  image: "/images/slider-4.png"
},];

type Props = {
  className?: string; 
  onClick?: () => void;
  type: "prev" | "next"; 
};

const SamplePrevArrow = ({ className, onClick, type }: Props): JSX.Element => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "#1B436B",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {type === "prev" ? (
        <RightArrowIcon width={60} height={60}  />

      ) : (
        <LeftArrowIcon width={60} height={60}  />
      )}
    </div>
  );
};
const HeroSection = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <SamplePrevArrow type="prev" />, 
    nextArrow: <SamplePrevArrow type="next" />, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, 
        },
      },
    ],
  }
  return (
    <>
      <div className="md:h-[calc(100vh-112px)] h-[calc(100vh-80px)] border">
        <Slider {...settings} className="lg:h-full custom-width ">
          {data.map((items, index) => {
            return <HeroCarusel imageURL={items.image} text={items.text} key={index} />
          })}
        </Slider>
      </div>
      <MainpageText />
    </>
  );
}

export default HeroSection;
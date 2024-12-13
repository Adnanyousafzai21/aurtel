"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarusel from "./HeroCarusel";
import MainpageText from "./MainpageText";
import { LeftArrowIcon, RightArrowIcon } from "../app/icons";

const data = [{
  text: "Empowering growth: Contract solutions and expert insights for success.",
  image: "/images/hero-1.png"
}, {
  text: "Client-centered approach. Industry-leading results ",
  image: "/images/hero-2.png"
}, {
  text: "Transforming services into lasting partnership. ",
  image: "/images/hero-3.png"
},
{
  text: "Contact Aurtel Consulting Group to see how our expertise can foster your business growth",
  image: "/images/hero-4.png"
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
        //@ts-ignore
        <RightArrowIcon width={20} height={20} fill="white" />

      ) : (
        //@ts-ignore
        <LeftArrowIcon width={20} height={20} fill="white" />
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
      <div className="lg:h-screen ">
        <Slider {...settings} className="lg:h-screen custom-width">
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
"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarusel from "./HeroCarusel";
import MainpageText from "./MainpageText";
  import { LeftArrowIcon, RightArrowIcon } from "../icons";

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", fontSize: "60px", background: "#1B436B", width: "40px", height: "40px", textAlign: "center", paddingTop: "10px", borderRadius: "50%" }}
//       onClick={onClick}
//     />
//   );
// }

function SamplePrevArrow(props: any) {
  const { className, style, onClick, type } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B436B",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {type === "prev" ? (
        //@ts-ignore
        <LeftArrowIcon width={20} height={20} fill="white" />
      ) : (
        //@ts-ignore
        <RightArrowIcon width={20} height={20} fill="white" />
      )}
    </div>
  );
}
const HeroSection = () => {
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
    // arrows: false, // Disable default arrows
    prevArrow: <SamplePrevArrow type="prev" />, // Custom left arrow
    nextArrow: <SamplePrevArrow type="next" />, // Custom right arrow
  };
  return (
    <>
      <div className="h-screen ">
        <Slider {...settings} className="h-screen custom-width">
          {data.map((items) => {
            return <HeroCarusel imageURL={items.image} text={items.text} />
          })}
        </Slider>
      </div>
      <MainpageText />
    </>
  );
}

export default HeroSection;
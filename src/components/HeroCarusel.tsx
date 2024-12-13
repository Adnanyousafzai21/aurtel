import Image from "next/image";
type HeroCaruselProps = {
  imageURL: string;
  text: string
}
const HeroCarusel = ({ imageURL, text }: HeroCaruselProps) => {
  return (
    <div className="relative h-[500px] lg:h-screen costumwidth2">
      <Image
        src={imageURL}
        alt="Slide"
        width={100}
        height={100}
        objectFit="cover"
      />
      <div className="absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center ">
        <div
          className="w-[250px] min-h-[200px] bg-[#1B436B] p-5 rounded flex justify-center items-center opacity-90"
          style={{ boxShadow: "1px 1px 5px 10px rgba(27, 67, 107)" }}
        >
          <p className="text-white text-[16px]  text-center leading-8">{text}</p>
        </div>

      </div>
    </div>

  );
};

export default HeroCarusel;

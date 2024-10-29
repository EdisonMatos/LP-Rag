import HeroBgImg from "../../../assets/imgs/hero/heroBG.jpg";
import HeroShieldImg from "../../../assets/imgs/hero/shield.png";
import TitleImg from "../../../assets/imgs/hero/title.png";
import CtaTitleImg from "../../../assets/imgs/hero/ctaTitle.png";
import SatanImg from "../../../assets/imgs/hero/satan.png";
import ButtonImg from "../../../assets/imgs/hero/button.png";

import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function UnderHero() {
  return (
    <div
      className="w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
      }}
    >
      <SectionArea paddingtop={false}>
        <SectionWrapper className="text-white">
          <div className="flex flex-col items-center justify-center">
            <img src={HeroShieldImg} className="w-[90%]"></img>
            <img src={TitleImg} className="w-[90%]"></img>
            <img
              src={SatanImg}
              className="w-[80%] my-[30px] image-scale-animation"
            ></img>
            <img src={CtaTitleImg} className="w-[80%] mb-[40px]"></img>
            <a className="flex justify-center">
              <img
                src={ButtonImg}
                className="w-[60%] hover:scale-125 transition mb-[60px]"
              ></img>
            </a>
            <p className="text-center">
              Desenvolvido por Ed
              <br />
              <br />
              <a
                href="https://www.paperstreet.com.br/"
                target="_blank"
                className="underline"
              >
                Visite meu site
              </a>
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

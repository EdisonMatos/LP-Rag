import HeroBgImg from "../../../assets/imgs/hero/heroBG.jpg";
import HeroShieldImg from "../../../assets/imgs/hero/shield.png";
import TitleImg from "../../../assets/imgs/hero/title.png";
import CtaTitleImg from "../../../assets/imgs/hero/ctaTitle.png";
import SatanImg from "../../../assets/imgs/hero/satan.png";
import ButtonImg from "../../../assets/imgs/hero/button.png";
import FlagImg from "../../../assets/imgs/hero/flag.png";

import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import MotionDivUpToDown from "../../animation/MotionDivUpToDown";
import MotionDivLeftToRight from "../../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../../animation/MotionDivRightToLeft";

export default function UnderHero() {
  return (
    <div
      className="w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
      }}
    >
      <SectionArea paddingbot={false}>
        <SectionWrapper className="text-white">
          <div className="flex flex-col items-center justify-center">
            <MotionDivDownToUp className="relative flex flex-col items-center">
              <img
                src={HeroShieldImg}
                className="w-[90%] mb-[30px] hover:scale-110 transition"
              ></img>
            </MotionDivDownToUp>
            <MotionDivRightToLeft className="flex flex-col items-center">
              <img
                src={TitleImg}
                className="w-[90%] hover:scale-110 transition"
              ></img>
            </MotionDivRightToLeft>
            <MotionDivLeftToRight className="flex flex-col items-center">
              <img
                src={SatanImg}
                className="w-[80%] my-[60px] image-scale-animation"
              ></img>
            </MotionDivLeftToRight>
            <MotionDivRightToLeft className="flex flex-col items-center">
              <img
                src={CtaTitleImg}
                className="w-[80%] mb-[40px] desktop1:my-[60px] hover:scale-110 transition"
              ></img>
            </MotionDivRightToLeft>
            <MotionDivLeftToRight className="flex flex-col items-center">
              <a
                href="https://discord.gg/zQajYuFAtA"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src={ButtonImg}
                  className="w-[60%] desktop1:w-[40%] hover:scale-125 transition mb-[60px]"
                ></img>
              </a>
            </MotionDivLeftToRight>
            <MotionDivRightToLeft className="flex flex-col items-center">
              <p className="text-center mb-[30px]">
                Desenvolvido por Edison Matos (Ed)
                <br />
                <a
                  href="https://www.paperstreet.com.br/"
                  target="_blank"
                  className="hover:underline"
                >
                  Precisa de um site? Clique aqui
                </a>
              </p>
            </MotionDivRightToLeft>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

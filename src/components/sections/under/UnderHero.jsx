import HeroBgImg from "../../../assets/imgs/hero/heroBG.jpg";
import HeroShieldImg from "../../../assets/imgs/hero/shield.png";
import TitleImg from "../../../assets/imgs/hero/title.png";
import CtaTitleImg from "../../../assets/imgs/hero/ctaTitle.png";
import SatanImg from "../../../assets/imgs/hero/satan.png";
import ButtonImg from "../../../assets/imgs/hero/button.png";

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
      <SectionArea>
        <SectionWrapper className="text-white">
          <div className="flex flex-col items-center justify-center">
            <MotionDivDownToUp className="flex flex-col items-center">
              <img src={HeroShieldImg} className="w-[90%]"></img>
            </MotionDivDownToUp>
            <MotionDivUpToDown className="flex flex-col items-center">
              <img src={TitleImg} className="w-[90%]"></img>
            </MotionDivUpToDown>
            <MotionDivLeftToRight className="flex flex-col items-center">
              <img
                src={SatanImg}
                className="w-[80%] my-[30px] image-scale-animation"
              ></img>
            </MotionDivLeftToRight>
            <MotionDivRightToLeft className="flex flex-col items-center">
              <img src={CtaTitleImg} className="w-[80%] mb-[40px]"></img>
            </MotionDivRightToLeft>
            <MotionDivDownToUp className="flex flex-col items-center">
              <a
                href="https://discord.gg/zQajYuFAtA"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src={ButtonImg}
                  className="w-[60%] hover:scale-125 transition mb-[60px]"
                ></img>
              </a>
            </MotionDivDownToUp>
            <MotionDivUpToDown className="flex flex-col items-center">
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
            </MotionDivUpToDown>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

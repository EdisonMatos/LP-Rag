import { Link } from "react-scroll";
import content from "../../content/content";
import { useState, useEffect } from "react";
import IconButton from "../interactives/IconButton";
import Button from "../interactives/Button";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function ListGroupSocial({ LightMode }) {
  const [scrolling, setScrolling] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = (show) => {
    setShowSubMenu(show);
  };

  return (
    <ul
      className={`h-14 hidden desktop1:flex my-auto items-center justify-end tablet1:items-center desktop1:gap-8 desktop2:gap-8 w-full font-normal text-paragraph3 font-secondFont ${
        LightMode
          ? scrolling
            ? "text-black"
            : "text-white"
          : scrolling
          ? "text-lighter"
          : "text-lighter transition-color duration-1000"
      }`}
    >
      <li className="transition group h-[24px] ">
        <Link
          to="home"
          className="relative font-semibold cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          href="#"
        >
          <span
            className={`h-[24px] inline-block
              ${
                LightMode
                  ? scrolling
                    ? "hover:text-black"
                    : "hover:text-white"
                  : scrolling
                  ? "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
                  : "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
              } `}
          >
            {content.texts.navbar.menuItems[0]}
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              LightMode
                ? scrolling
                  ? "bg-black"
                  : "bg-white"
                : scrolling
                ? "bg-lighter"
                : "bg-lighter"
            }`}
          ></div>
        </Link>
      </li>

      <li className="transition group h-[24px]">
        <Link
          to="service"
          className="relative font-semibold cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          href="#"
        >
          <span
            className={`h-[24px] inline-block
              ${
                LightMode
                  ? scrolling
                    ? "hover:text-black"
                    : "hover:text-white"
                  : scrolling
                  ? "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
                  : "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
              } `}
          >
            {content.texts.navbar.menuItems[1]}
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              LightMode
                ? scrolling
                  ? "bg-black"
                  : "bg-white"
                : scrolling
                ? "bg-lighter"
                : "bg-lighter"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group h-[24px]">
        <Link
          to="about"
          className="relative font-semibold cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          href="#"
        >
          <span
            className={`h-[24px] inline-block
              ${
                LightMode
                  ? scrolling
                    ? "hover:text-black"
                    : "hover:text-white"
                  : scrolling
                  ? "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
                  : "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
              } `}
          >
            {content.texts.navbar.menuItems[2]}
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              LightMode
                ? scrolling
                  ? "bg-black"
                  : "bg-white"
                : scrolling
                ? "bg-lighter"
                : "bg-lighter"
            }`}
          ></div>
        </Link>
      </li>
      <li className="transition group h-[24px]">
        <Link
          to="faq"
          className="relative font-semibold cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          href="#"
        >
          <span
            className={`h-[24px] inline-block
              ${
                LightMode
                  ? scrolling
                    ? "hover:text-black"
                    : "hover:text-white"
                  : scrolling
                  ? "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
                  : "hover:text-lighter [text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
              } `}
          >
            {content.texts.navbar.menuItems[3]}
          </span>
          <div
            className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              LightMode
                ? scrolling
                  ? "bg-black"
                  : "bg-white"
                : scrolling
                ? "bg-lighter"
                : "bg-lighter"
            }`}
          ></div>
        </Link>
      </li>
      <li>
        <div className="flex gap-[10px] items-center">
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label="Contato"
            buttonLink={whatsappContactLink}
            className={`${scrolling ? "" : ""}`}
            textclassName="text-paragraph3"
            size="small"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-headset"
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
            }
          />

          {/* Início Botões das redes sociais na navbar */}

          {/* <a
          href{content.texts.infos.instagramProfile}
          target="_blank"
          className={scrolling ? "" : "invert"}
        >
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            }
          />
        </a>
        <a
          href={content.texts.infos.facebookProfile}
          target="_blank"
          className={scrolling ? "" : "invert"}
        >
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            }
          />
        </a>
        <a
          href={content.texts.infos.linkedInProfile}
          target="_blank"
          className={scrolling ? "" : "invert"}
        >
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            }
          />
        </a> */}

          {/* Fim Botões das redes sociais na navbar */}
        </div>
      </li>
    </ul>
  );
}

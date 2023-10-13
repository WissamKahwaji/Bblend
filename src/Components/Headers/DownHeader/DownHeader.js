import React, { useEffect, useState } from "react";
import Container from "../../UI/SectionContainer/SectionContainer";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const DownHeader = () => {
  const { t } = useTranslation();
  const [isNav, setIsNav] = useState(false);
  const colorsData = useSelector((state) => state.colorsSlice);
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const logoData = useSelector((state) => state.logoSlice);
  const mainLogoData = useSelector((state) => state.mainLogoSlice);
  console.log(logoData);
  const cartData = useSelector((state) => state.cartSlice);
  const cartLengthStyle = {
    backgroundColor: colorsData.mainColor,
  };
  console.log(mainLogoData);
  const location = useLocation(); // Access the current route location

  useEffect(() => {
    setIsNav(false); // Set isNav to false when the route changes
  }, [location]);
  const contactInfoData = useSelector((state) => state.contactInfoSlice);

  return (
    <Container
      className={`flex items-center justify-between lg:justify-start !py-2 !scroll-pl-6 lg:px-8 relative`}
    >
      <div className={`block lg:hidden text-3xl mr-5`}>
        <CiMenuBurger
          className={`cursor-pointer`}
          onClick={() => setIsNav(!isNav)}
        />
      </div>

      <ul
        className={`${
          isNav ? "-left-40 " : "-left-[400rem]"
        } w-screen flex flex-col absolute bg-white top-[2.85rem]  duration-700 h-screen`}
      >
        {navLinksData.map(
          (ele, i) =>
            ele.title !== "" && (
              <li className={`py-4 pr-4 border-b border-black flex justify-end`}>
                <NavLink
                  to={ele.path}
                  style={({ isActive }) => ({
                    color: isActive ? colorsData.navLinksColor : "black",
                    "&:hover": {
                      color: colorsData.navLinksColor,
                    },
                  })}
                  className={`font-medium text-xl`}
                >
                  {t(ele.title)}
                </NavLink>
              </li>
            )
        )}
        {/* <li className={`flex items-center justify-between py-4 px-2`}>
          <a
            href={`mailto:${contactInfoData.Email}`}
            className={`!mr-0 flex items-center`}
          >
            <MdOutlineAlternateEmail className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Email Message")}</span>
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${contactInfoData.whatsapp}`}
            className={`flex items-center`}
          >
            <BsWhatsapp className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("WhatsApp")}</span>
          </a>
          <a
            href={`tel:${contactInfoData.callUs}`}
            className={`flex items-center`}
          >
            <PiDeviceMobileSpeaker className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Call Us")}</span>
          </a>
        </li> */}
      </ul>
      <div className={`flex items-center justify-between w-full`}>
        <div className={`lg:mx-4 w-20 md:w-40`}>
          <Link to="/" className={`w-full`}>
            <img src={mainLogoData} alt={logoData.toString().slice(0, 3)} />
          </Link>
        </div>
        <div className={`hidden lg:block`}>
          <ul className={`flex items-center [&>*]:mr-2 `}>
            {navLinksData.map(
              (ele, i) =>
                ele.title !== "" && (
                  <li>
                    <NavLink
                      to={ele.path}
                      style={({ isActive }) => ({
                        color: isActive ? colorsData.navLinksColor : "black",
                        "&:hover": {
                          color: colorsData.navLinksColor,
                        },
                      })}
                      className={() =>
                        [
                          "block",
                          "mr-4",
                          "text-center",
                          "transition-colors",
                          "duration-[300ms]",
                        ].join(" ")
                      }
                    >
                      {t(ele.title)}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      <div className={`flex justify-end items-center lg:hidden`}>
        <LanguageSwitcher />

        <div className={`flex items-center`}>
          <Link to="/my_cart" className={`relative`}>
            <span
              style={cartLengthStyle}
              className={`absolute z-50 w-4 h-4 flex items-center justify-center rounded-full text-white text-xs -top-2 -right-1`}
            >
              {cartData.length}
            </span>
            <AiOutlineShoppingCart className={`text-2xl font-medium mx-2`} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DownHeader;

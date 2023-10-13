import React from "react";
import Container from "../../UI/SectionContainer/SectionContainer";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const UpHeader = () => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const cartData = useSelector((state) => state.cartSlice);

  console.log(colorsData);
  const styles = {
    "border-bottom-color": colorsData.mainColor,
  };
  const cartLengthStyle = {
    backgroundColor: colorsData.mainColor,
  };
  const contactInfoData = useSelector((state) => state.contactInfoSlice);
  console.log(contactInfoData);
  return (
    <div className={`hidden lg:block`}>
      <Container
        className={`flex items-center justify-between border-b border-b-black border-opacity-30`}
      >
        <div className={`flex items-center [&>*]:mx-4`}>
          <a
            href={`tel:${contactInfoData.callUs}`}
            className={`flex items-center`}
          >
            <PiDeviceMobileSpeaker className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Call Us")}</span>
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${contactInfoData.whatsapp}`}
            className={`flex items-center`}
          >
            <BsWhatsapp className={`text-2xl mx-1`} />
            <span className={`text-sm font-medium`}>{t("WhatsApp")}</span>
          </a>
          <a
            href={`mailto:${contactInfoData.Email}`}
            className={`!mr-0 flex items-center`}
          >
            <MdOutlineAlternateEmail className={`text-2xl mr-1`} />
            <span className={`text-sm font-medium`}>{t("Email Message")}</span>
          </a>
        </div>
        <div className={`flex-1 flex justify-end items-center`}>
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
    </div>
  );
};

export default UpHeader;

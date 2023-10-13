import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    window.localStorage.setItem("language", selectedLanguage);
    document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
  };

  // Get the detected language from i18n.language
  const detectedLanguage = i18n.language;

  return (
    <div className={`flex items-center `}>
      <div className={`flex items-center mx-4`}>
        <select
          name="language"
          id="language"
          className={`border border-[#C9C9C9] rounded-md outline-none`}
          value={detectedLanguage}
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

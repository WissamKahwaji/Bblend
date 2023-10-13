import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const FAQItem = ({ data }) => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const colorStyle = {
    color: colorsData.mainColor,
  };

  // Replace numbers followed by hyphens with line breaks
  const formattedContent = data.faqContent.replace(
    /\d-/g,
    (match) => `<br>${match}`
  );
  const faqItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  console.log(formattedContent);
  return (
    <div
      className={`flex flex-col mx-auto md:w-[70%] rounded-md p-2`}
      style={faqItemStyle}
    >
      <h3 style={colorStyle} className={`text-2xl font-semibold`}>
        {t(data.faqTitle)}
      </h3>
      <p
        className={`text-xl`}
        dangerouslySetInnerHTML={{ __html: t(formattedContent) }}
      />
    </div>
  );
};

export default FAQItem;

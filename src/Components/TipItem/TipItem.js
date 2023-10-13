import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const TipItem = ({ data }) => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const colorStyle = {
    color: colorsData.mainColor,
  };
  // Replace numbers followed by hyphens with line breaks
  const formattedContent = t(data.tipContent).replace(
    /\d-/g,
    (match) => `<br><br>${match}`
  );
  const tipItemStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  console.log(formattedContent);
  console.log(data);
  return (
    <div
      className={`flex flex-col mx-auto md:w-[70%] rounded-md p-2`}
      style={tipItemStyle}
    >
      <h3 style={colorStyle} className={`text-2xl font-semibold`}>
        {t(data.tipTitle)} : 
      </h3>
      <p
        className={`text-xl`}
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
};

export default TipItem;

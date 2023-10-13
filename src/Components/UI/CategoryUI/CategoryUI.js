import React from "react";
import Container from "../SectionContainer/SectionContainer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../../../Components/SharedCss/SharedCss.module.css";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
const CategoryUI = ({ CategoryUIData, path, categoryNumber, className }) => {
  const { t } = useTranslation();
  return (
    <Container className={`mt-4 md:mt-16 ${className}`}>
      <div className={`flex justify-between items-center mb-4`}>
        <h2 className={`text-sm md:text-4xl font-bold ${styles["play-font"]}`}>
          {t(CategoryUIData.title)}
        </h2>
        <Link to={path}>{t("Check All")}</Link>
      </div>
      <ul className={`grid grid-cols-3 gap-10`}>
        {CategoryUIData.products.slice(0, 3).map((ele, i) => (
          <li key={i}>
            <SingleProductCard
              id={ele.id}
              path={`/${categoryNumber}/${ele.id}`}
              src={ele.img}
              alt={ele.title}
              title={ele.title}
              price={ele.deepDetails.first.price}
              size={ele.deepDetails.first.size}
              desc={ele.desc}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryUI;

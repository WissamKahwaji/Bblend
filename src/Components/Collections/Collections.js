import React from "react";
import Container from "../UI/SectionContainer/SectionContainer";
import styles from "../../Components/SharedCss/SharedCss.module.css";
import { useSelector } from "react-redux";

const Collections = () => {
  const logoData = useSelector((state) => state.logoSlice);
  const collectionsData = useSelector((state) => state.collectionsSlice);
  return (
    <Container className={`block`}>
      {collectionsData.length > 0 && (
        <div
          className={`flex flex-col md:grid md:grid-cols-2 md:gap-5 h-screen w-full`}
        >
          <div className={`relative mb-4 h-1/2 md:h-screen`}>
            <img
              className={`h-full w-full object-contain bg-gray-400`}
              src={logoData}
              alt={collectionsData[0].description}
            />
            <p
              className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
            >
              {collectionsData[0].description}
            </p>
          </div>
          <div className={`md:grid md:grid-rows-2 gap-5 h-1/2 md:h-screen w-full`}>
            <div
              className={`md:grid md:grid-cols-2 md:gap-5 flex justify-between mb-4 h-1/2 md:h-full`}
            >
              <div className={`relative h-[100%] w-full`}>
                <img
                  className={`w-full h-full object-contain bg-gray-400`}
                  src={logoData}
                  alt={collectionsData[1].description}
                />
                <p
                  className={`absolute w-full bottom-0 py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
                >
                  {collectionsData[1].description}
                </p>
              </div>
              <div className={`relative h-[100%] w-full`}>
                <img
                  className={`w-full  h-full object-contain bg-gray-400`}
                  src={logoData}
                  alt={collectionsData[2].description}
                />
                <p
                  className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
                >
                  {collectionsData[2].description}
                </p>
              </div>
            </div>
            <div className={`relative h-1/2 md:h-full w-full`}>
              <img
                className={`w-full  h-full object-contain bg-gray-400`}
                src={logoData}
                alt={collectionsData[3].description}
              />
              <p
                className={`absolute w-full bottom-0  py-2 text-center text-white bg-black bg-opacity-50 ${styles["play-font"]}`}
              >
                {collectionsData[3].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Collections;

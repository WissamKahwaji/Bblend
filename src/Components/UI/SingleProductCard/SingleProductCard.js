import React from "react";
import { useTranslation } from "react-i18next";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProductCard = ({
  id,
  path,
  src,
  alt,
  title,
  price,
  size,
  desc,
  className,
  imgClassName,
  isDiscount,
  discountPercentage,
  weight,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    const newCartEntryObject = {
      id: id,
      title: title,
      price: price,
      desc: desc,
      quantity: 1,
      size: size,
      img: src,
      weight: weight,
    };
    dispatch(cartActions.addToCart({ ...newCartEntryObject }));
    console.log(newCartEntryObject);
    toast("Your item has been added to your cart 🤩");
  };
  const colorsData = useSelector((state) => state.colorsSlice);
  const buttonStyle = {
    color: colorsData.mainColor,
  };

  const logoData = useSelector((state) => state.logoSlice);
  console.log(logoData);
  return (
    <>
      <Link to={path} className={`flex flex-col items-center ${className}`}>
        <div className={`mb-2 relative overflow-hidden`}>
          {isDiscount && (
            <span
              className={`absolute w-20 md:w-32  bg-red-600 -rotate-45 z-10  top-2 md:top-4  -left-7  text-[0.5rem] md:text-base text-center text-white`}
            >
              {discountPercentage}
            </span>
          )}
          <img
            src={src ? src : logoData}
            alt={alt}
            className={`rounded-lg h-[100px] md:h-[300px] bg-gray-300 overflow-hidden ${imgClassName}`}
          />
        </div>
        <div className={`flex flex-col w-full overflow-hidden`}>
          <p
            className={`text-lg whitespace-nowrap overflow-hidden text-ellipsis text-center`}
          >
            {t(title)}
          </p>
        </div>
      </Link>
      <div className={`flex flex-col`}>
        <h4
          className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs min-h-[20px]`}
        >
          {t(desc)}
        </h4>
        <div
          className={`flex items-center justify-between flex-wrap md:mt-2 md:px-10`}
        >
          <button
            style={buttonStyle}
            className={`flex items-center`}
            onClick={addToCartHandler}
          >
            <AiOutlineShoppingCart className={`text-lg md:text-2xl`} />
          </button>
          {/* <button
            style={buttonStyle}
            className={`underline sm:text-sm`}
            onClick={buyNowHandler}
          >
            {t("Buy Now")}
          </button> */}
          <p>
            <span> {t("From")} </span>
            <span className={`font-semibold text-lg md:text-3xl`}>
              {price}
            </span>{" "}
            {t("AED")}
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SingleProductCard;

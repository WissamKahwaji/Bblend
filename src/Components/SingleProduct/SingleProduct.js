import React, { useState } from "react";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { Rating } from "@mui/material";
import SizeSelector from "../UI/Selection/Selection";

const SingleProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const colorsData = useSelector((state) => state.colorsSlice);
  const h3Style = {
    color: colorsData.mainColor,
  };
  const buttonStyle = {
    border: `2px ${colorsData.mainColor} solid`,
    color: colorsData.mainColor,
  };
  const imgContainerStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const { t } = useTranslation();

  // Initialize state to store the selected size, price, and weight
  const [selectedSize, setSelectedSize] = useState(
    data.deepDetails[0]?.size || ""
  );
  const [priceBasedOnSize, setPriceBasedOnSize] = useState(
    data.deepDetails[0]?.price || data.price
  );
  const [weightBasedOnSize, setWeightBasedOnSize] = useState(
    data.deepDetails[0]?.weight || data.weight
  );

  // Function to update the price and weight when the size changes
  const updatePriceAndWeightBasedOnSize = (size) => {
    const selectedSizeObj = data.deepDetails.find((item) => item.size === size);

    if (selectedSizeObj) {
      setPriceBasedOnSize(selectedSizeObj.price);
      setWeightBasedOnSize(selectedSizeObj.weight);
    } else {
      // If the selected size is not found, fallback to the default price and weight
      setPriceBasedOnSize(data.price);
      setWeightBasedOnSize(data.weight);
    }
  };

  // Handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    updatePriceAndWeightBasedOnSize(size);
  };

  // Function to add the product to the cart
  const addToCartHandler = () => {
    const newCartEntryObject = {
      id: params.productID,
      title: data.title,
      price: +priceBasedOnSize,
      desc: data.desc,
      quantity: 1,
      size: selectedSize,
      img: data.img,
      weight: +weightBasedOnSize,
    };
    dispatch(cartActions.addToCart({ ...newCartEntryObject }));
    console.log(newCartEntryObject);
    toast("Your item has been added to your cart 🤩");
  };

  const cartData = useSelector((state) => state.cartSlice);
  console.log(cartData);

  const buyNowHandler = () => {
    const newCartEntryObject = {
      id: params.productID,
      title: data.title,
      price: +priceBasedOnSize,
      desc: data.desc,
      quantity: 1,
      size: selectedSize,
      img: data.img,
      weight: +weightBasedOnSize,
    };

    dispatch(cartActions.addToCart({ ...newCartEntryObject }));
    console.log(newCartEntryObject);

    // Use the useNavigate hook to redirect the user to the `/my_cart` page.
    navigate("/my_cart");
  };

  const [selectedImg, setSelectedImg] = useState(data.img); // Initialize selectedImg with the default image

  const imgClickHandler = (e) => {
    // Update the selectedImg state with the clicked image's source
    setSelectedImg(e.target.src);
  };

  return (
    <SectionContainer>
      <div>
        <div
          className={`flex flex-col md:flex-row justify-between w-full md:w-[80%] mx-auto`}
        >
          <div className={`md:w-1/3 w-full`}>
            <img src={selectedImg} alt={data.title} className={`rounded-md`} />
          </div>
          <div
            className={`flex md:hidden items-center p-2 rounded-lg !bg-opacity-60 mt-4 md:mt-0 mb-4`}
            style={imgContainerStyle}
          >
            {data.imgs.map((ele, i) => (
              <img
                onClick={imgClickHandler}
                src={ele}
                key={i}
                alt={i}
                className={`w-16 md:w-32 rounded-2xl mx-2 last:!mr-0 hover:scale-150  duration-300 cursor-pointer`}
              />
            ))}
          </div>
          <div className={` flex flex-col justify-between md:w-1/2 w-full`}>
            <div className={`flex flex-col`}>
              <h3 style={h3Style} className={`text-3xl font-semibold mb-4`}>
                {data.titleAr
                  ? window.localStorage.getItem("language") === "en"
                    ? data.title
                    : data.titleAr
                  : t(data.title)}
              </h3>
              <h4
                className={`w-full overflow-hidden text-ellipsis whitespace-nowrap mb-2`}
              >
                {data.descAR
                  ? window.localStorage.getItem("language") === "en"
                    ? data.desc
                    : data.descAR
                  : t(data.desc)}
              </h4>
              <div className={`flex  items-center`}>
                <label style={h3Style} className={`text-2xl`}>
                  0
                </label>
                <Rating
                  name="size-small"
                  defaultValue={0}
                  size="small"
                  readOnly
                />
              </div>
              {data.deepDetails[0].size !== "" && (
                <SizeSelector
                  deepDetails={data.deepDetails}
                  selectedSize={selectedSize}
                  onSelectSize={handleSizeChange}
                />
              )}

              <h4 className={`mb-4 text-xl`}>
                {t("Price")} :{" "}
                <span className={`font-semibold text-2xl`}>
                  {priceBasedOnSize}
                </span>{" "}
                {t("AED")}
              </h4>
              <button
                onClick={addToCartHandler}
                style={buttonStyle}
                className={`self-center flex justify-center items-center text-white px-4 py-1 rounded-lg  duration-150  mb-4`}
              >
                <span className={`mr-2 text-2xl font-medium`}>
                  {t("Add To Cart")}
                </span>
                <BsFillCartPlusFill />
              </button>
              <button
                style={buttonStyle}
                className={`underline mb-2 rounded-md text-white text-2xl hidden md:block`}
                onClick={buyNowHandler}
              >
                {t("Buy Now")}
              </button>
            </div>
            <div
              className={`hidden md:flex items-center p-2 rounded-lg !bg-opacity-60 mt-4 md:mt-0`}
              style={imgContainerStyle}
            >
              {data.imgs.map((ele, i) => (
                <img
                  onClick={imgClickHandler}
                  src={ele}
                  key={i}
                  alt={i}
                  className={`w-16 md:w-32 rounded-2xl mx-2 last:!mr-0 hover:scale-150  duration-300 cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </div>
        {data.type === "Only Natural Hair" && (
          <div className={`w-full md:w-[80%] mx-auto mt-10 text-2xl`}>
            {t("If Your Hair is Not Natural Please Check")}{" "}
            <Link to="/extra_2" className={`font-bold underline`}>
              {t("FAQ")}
            </Link>
          </div>
        )}

        <div className={`w-full md:w-[80%] mx-auto mt-4`}>
          {data.desc && (
            <div className={`mb-4 w-full`}>
              <h4 style={h3Style} className={`mb-2 text-2xl font-semibold`}>
                {t("Description")} :
              </h4>
              <p>
                {data.descAR
                  ? window.localStorage.getItem("language") === "en"
                    ? data.desc
                    : data.descAR
                  : t(data.desc)}
              </p>
            </div>
          )}
          {data.usage && (
            <div className={`mb-4 w-full`}>
              <h4 style={h3Style} className={`mb-2 text-2xl font-semibold`}>
                {t("Usage Information")} :{" "}
              </h4>
              <p>
                {data.usageAR
                  ? window.localStorage.getItem("language") === "en"
                    ? data.usage
                    : data.usageAR
                  : t(data.usage)}
              </p>
            </div>
          )}
          {data.ing && (
            <div className={`mb-4 w-full`}>
              <h4 style={h3Style} className={`mb-2 text-2xl font-semibold`}>
                {t("Ingredients")} :{" "}
              </h4>
              <p>
                {data.ingAR
                  ? window.localStorage.getItem("language") === "en"
                    ? data.ing
                    : data.ingAR
                  : t(data.ing)}
              </p>
            </div>
          )}
          {data.exp && (
            <div className={`mb-4 w-full`}>
              <h4 style={h3Style} className={`mb-2 text-2xl font-semibold`}>
                {t("Expiry Information")} :{" "}
              </h4>
              <div>
                {data.expAR
                  ? window.localStorage.getItem("language") === "en"
                    ? data.exp
                    : data.expAR
                  : t(data.exp)}
              </div>
            </div>
          )}
        </div>
        <button
          style={buttonStyle}
          className={`underline mb-2 rounded-md text-white text-2xl block md:hidden w-full`}
          onClick={buyNowHandler}
        >
          {t("Buy Now")}
        </button>
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
    </SectionContainer>
  );
};

export default SingleProduct;

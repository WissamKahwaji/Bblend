import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../../Components/ProductsList/ProductsList";
import { baseURL } from "../../API/baseURL";

const ProductsPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle="Our Products" />
      <ProductsList data={data} />
    </PageContainer>
  );
};

export default ProductsPage;
export const productsPageLoader = async () => {
  // const promises = [
  //   fetch(
  //     "https://siimediabblends-default-rtdb.firebaseio.com/CategoryOne/products.json"
  //   ).then((response) => response.json()),
  //   fetch(
  //     "https://siimediabblends-default-rtdb.firebaseio.com/CategoryTwo/products.json"
  //   ).then((response) => response.json()),
  //   // fetch(
  //   //   "https://siimediabblends-default-rtdb.firebaseio.com/CategoryThree/products.json"
  //   // ).then((response) => response.json()),
  // ];

  // const dataResponse = await Promise.all(promises);
  // const data = [];
  // dataResponse.forEach((products) => {
  //   const productArray = Object.values(products);
  //   data.push(...productArray);
  // });
  const response = await fetch(`${baseURL}allProducts.json`);
  const responseData = await response.json();
  console.log(responseData);
  const data = [];

  for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
      const obj = responseData[key];
      const imgsArray = Object.values(obj.imgs);
      const newObj = {
        id: key,
        ...obj,
        imgs: imgsArray,
      };
      data.push(newObj);
    }
  }
  console.log(data);
  return data;
};

import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import { baseURL } from "../../API/baseURL";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { useLoaderData } from "react-router-dom";

const SingleProductPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <PageContainer>
      <SingleProduct data={data} />
    </PageContainer>
  );
};

export default SingleProductPage;
export const singleProductPageLoader = async ({ params }) => {
  const categoryNumber = params.categoryNumber;
  const productId = params.productID;
  const response = await fetch(
    `${baseURL}${categoryNumber}/products/${productId}.json`
  );
  const data = await response.json();
  // Convert the imgs object into an array of image URLs
  const imgsArray = Object.values(data.imgs);

  // Replace the imgs object in the data with the imgsArray
  data.imgs = imgsArray;

  const deepDetailsArray = [];

  for (const key in data.deepDetails) {
    if (data.deepDetails.hasOwnProperty(key)) {
      const item = data.deepDetails[key];
      deepDetailsArray.push(item);
    }
  }

  // Replace deepDetails object with deepDetailsArray in the data object
  data.deepDetails = deepDetailsArray;

  console.log(data);


  return data;
};

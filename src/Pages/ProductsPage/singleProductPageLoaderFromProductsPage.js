import { baseURL } from "../../API/baseURL";

export const singleProductPageLoaderFromProductsPage = async ({ params }) => {
  const productId = params.productID;
  const response = await fetch(`${baseURL}allProducts/${productId}.json`);
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

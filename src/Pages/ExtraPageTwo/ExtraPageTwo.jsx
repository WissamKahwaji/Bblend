import React from "react";
import PageContainer from "../../Components/UI/PageContainer/PageContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import { useSelector } from "react-redux";
import { baseURL } from "../../API/baseURL";
import { useLoaderData } from "react-router-dom";
import FAQItem from "../../Components/FAQItem/FAQItem";

const ExtraPageTwo = () => {
  const navLinksData = useSelector((state) => state.navLinksSlice);
  const data = useLoaderData();
  console.log(data);
  return (
    <PageContainer>
      <PageHeading pageHeadingTitle={navLinksData[6].title} />
      <ul>
        {data.map((ele) => (
          <li className={`mb-8`}>
            <FAQItem data={ele} />
          </li>
        ))}
        {/* {data.map(
          <li className={`mb-8`}>
            <FAQItem data={data} />
          </li>
        )} */}
      </ul>
    </PageContainer>
  );
};

export default ExtraPageTwo;
export const extraPageTwoLoader = async () => {
  const response = await fetch(`${baseURL}faq.json`);
  const data = await response.json();
  const dataArray = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push(data[key]);
    }
  }
  console.log(dataArray);
  return dataArray;
};

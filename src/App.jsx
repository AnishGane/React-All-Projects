import React from "react";
// import QRGenerator from "./components/P7_QRGenerator";
// import LightDarkTheme from "./components/P8_LightDarkTheme";
import ScrollIndicator from "./components/P9_ScrollIndicator";
// import TreeView from "./components/P6_RecurssiveNavMenu";
// import sidemenu from "./components/P6_RecurssiveNavMenu/data";
// import LoadMoreData from "./components/P5_LoadMoreData";
// import ImageSlider from "./components/P4_Image_Slider/index.jsx";
// import Accordian from "./components/P1_accordian_selection/index.jsx";
// import RandomColorGenerator from "./components/P2_Random_Color/index.jsx";
// import StarRating from "./components/P3_Star_Rating/index.jsx";

const App = () => {
  return (
    <div>
      {/* Project 1 */}
      {/* <Accordian />*/}
      {/* Project 2 */}
      {/*<RandomColorGenerator /> */}
      {/* Project 3 */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Project 4 */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* Project 5 */}
      {/* <LoadMoreData /> */}
      {/* Project 6 */}
      {/* <TreeView menus={sidemenu} /> */}
      {/* Project 7 */}
      {/* <QRGenerator /> */}
      {/* Project 8 */}
      {/* <LightDarkTheme /> */}
      {/* Project 9 */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
};

export default App;

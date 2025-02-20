import React from "react";
import LoadMoreData from "./components/P5_LoadMoreData";
// import ImageSlider from "./components/P4_Image_Slider/index.jsx";
// import Accordian from "./components/P1_accordian_selection/index.jsx";
// import RandomColorGenerator from "./components/P2_Random_Color/index.jsx";
// import StarRating from "./components/P3_Star_Rating/index.jsx";

const App = () => {
  return (
    <div>
      {/* <Accordian />*/}
      {/*<RandomColorGenerator /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      <LoadMoreData />
    </div>
  );
};

export default App;

// Page for showing all the content in the demo
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CarouselSlide from "./CarouselSlide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slide from "@material-ui/core/Slide";

const shortNewsInfo = [
  {
    backgroundColor: "#ff7c7c",
    title: "Canada to Officially Open Door to Young Hong Kongers Next Week",
    url: "/article/1",
    time: 1,
  },
  {
    backgroundColor: "#ffb6b9",
    title: "Indonesia bans forced religious attire in schools",
    url: "/article/2",
    time: 1,
  },
  // { backgroundColor: "#8deaff", title: "Short New 3", url: "/article/3" ,time: 1 },
  // { backgroundColor: "#ffe084", title: "Short New 4", url: "/article/4" ,time: 1 },
  // { backgroundColor: "#d9d9d9", title: "Short New 5", url: "/article/5" ,time: 1 },
];

const longNewsInfo = [
  {
    backgroundColor: "#d9d9d9",
    title: "UK mulls raising tax for tech firms that",
    url: "/article/6",
    time: 1,
  },
  {
    backgroundColor: "#ffb6b9",
    title: "China issues new anti-monopoly rules for",
    url: "/article/7",
    time: 1,
  },
  // { backgroundColor: "#8deaff", title: "Long Form 3", url: "/article/8" ,time: 1 },
  // { backgroundColor: "#ffe084", title: "Long Form 4", url: "/article/9" ,time: 1 },
  // { backgroundColor: "#d9d9d9", title: "Long Form 5", url: "/article/10" ,time: 1 },
];

const ebooksInfo = [
  { backgroundColor: "#8deaff", title: "Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley", url: "/article/11", time: 1 },
  { backgroundColor: "#ffb6b9", title: "The Beasts of Tarzan by Edgar Rice Burroughs", url: "/article/12", time: 1 },
  // { backgroundColor: "#8deaff", title: "Ebook 3", url: "/article/13" ,time: 1 },
  // { backgroundColor: "#ffe084", title: "Ebook 4", url: "/article/14" ,time: 1 },
  // { backgroundColor: "#d9d9d9", title: "Ebook 5", url: "/article/15" ,time: 1 },
];

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

function Demo() {
  const [index, setIndex] = React.useState(0);

  const shortNewscontent = shortNewsInfo[index];
  const shortNewsnumSlides = shortNewsInfo.length;

  const longNewscontent = longNewsInfo[index];
  const longNewsnumSlides = longNewsInfo.length;

  const ebookscontent = ebooksInfo[index];
  const ebooksnumSlides = ebooksInfo.length;

  const [slideIn, setSlideIn] = React.useState(true);
  const [slideDirection, setSlideDirection] = React.useState("down");

  // const onArrowClick = (direction) => {
  //   const increment = direction === "left" ? -1 : 1;
  //   const newIndex = (index + increment + numSlides) % numSlides;

  //   const oppDirection = direction === "left" ? "right" : "left";
  //   setSlideDirection(direction);
  //   setSlideIn(false);

  //   setTimeout(() => {
  //     setIndex(newIndex);
  //     setSlideDirection(oppDirection);
  //     setSlideIn(true);
  //   }, 100);
  // };

  // Event Listener for arrow keys
  // React.useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.keyCode === 39) {
  //       onArrowClick("right");
  //     }
  //     if (e.keyCode === 37) {
  //       onArrowClick("left");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // });

  return (
    <div className="demo">
      <h1 className="h1Content">ShortFormNews</h1>
      <br></br>
      <div className="carouselShortNews">
        {/* <Arrow direction="left" clickFunction={() => onArrowClick("left")} /> */}
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <CarouselSlide content={shortNewsInfo} />
          </div>
        </Slide>
        {/* <Arrow direction="right" clickFunction={() => onArrowClick("right")} /> */}
      </div>

      <br></br>
      <br></br>

      <h1 className="h1Content">LongFormNews</h1>
      <br></br>
      <div className="carouselLongNews">
        {/* <Arrow direction="left" clickFunction={() => onArrowClick("left")} /> */}
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <CarouselSlide content={longNewsInfo} />
          </div>
        </Slide>
        {/* <Arrow direction="right" clickFunction={() => onArrowClick("right")} /> */}
      </div>

      <br></br>
      <br></br>

      <h1 className="h1Content">Ebooks</h1>
      <br></br>
      <div className="carouselLongNews">
        {/* <Arrow direction="left" clickFunction={() => onArrowClick("left")} /> */}
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <CarouselSlide content={ebooksInfo} />
          </div>
        </Slide>
        {/* <Arrow direction="right" clickFunction={() => onArrowClick("right")} /> */}
      </div>
    </div>
  );
}

export default Demo;

import styled, { keyframes } from "styled-components";
import bootImage from "../../public/image/Bootstrap.png";
import nextJsImage from "../../public/image/nextjs.png";
import reactImage from "../../public/image/React.png";
import queryImage from "../../public/image/react-query.jpg";
import typeImage from "../../public/image/Typescript.png";
import cssImage from "../../public/image/css.png";
import htmlImage from "../../public/image/HTML.png";
import jsImage from "../../public/image/JS.png";
import clangImage from "../../public/image/C.png";
import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
interface rightImageProps {
  Image: StaticImageData;
  i: number;
  Lang: string;
}
const SlidePage = () => {
  const slideRef = useRef<any>([]);
  const containerRef = useRef<any>();
  const [count, setCount] = useState<number>(0);
  // const elementLength = 5;
  // function callback() {
  //   setCount(count + 1);
  // }
  // useEffect(() => {
  //   containerRef.current = callback;
  // });
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     containerRef.current();
  //   }, 2500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleNext = () => {
    setActiveIndex((activeIndex) => (activeIndex + 1) % 5);
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    intervalId = setInterval(handleNext, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const rightImage: rightImageProps[] = [
    { Image: cssImage, i: 0, Lang: "css3" },
    { Image: jsImage, i: 1, Lang: "javascript" },
    { Image: typeImage, i: 2, Lang: "typescript" },
    { Image: clangImage, i: 3, Lang: "C lang" },
    { Image: htmlImage, i: 4, Lang: "HTML5" },
    { Image: cssImage, i: 5, Lang: "css3" },
    { Image: jsImage, i: 6, Lang: "javascript" },
    { Image: typeImage, i: 7, Lang: "typescript" },
    { Image: clangImage, i: 8, Lang: "C lang" },
  ];
  return (
    <>
      <SlideContainer>
        <SlideItemList ref={containerRef}>
          {rightImage.map((user) => (
            <>
              <SlideItem activeIndex={activeIndex}>
                <SlideImage
                  src={user.Image}
                  width={50}
                  height={50}
                ></SlideImage>
                <LangText style={{ color: "#fff" }}>{user.Lang}</LangText>
              </SlideItem>
            </>
          ))}
        </SlideItemList>
      </SlideContainer>
    </>
  );
};
export default SlidePage;
const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  top: 250px;
  width: 3456px;
  height: 200px;
  left: -1536px;
`;
const SlideItemList = styled.ul`
  display: flex;
`;
const SlideItem = styled.li<{ activeIndex: number }>`
  width: 200px;
  height: 100px;
  margin-right: 100px;
  margin-left: 100px;
  list-style: none;
  transform: ${(props) => "translateX(" + props.activeIndex * 384 + "px)"};
  transition: 1s ease;
`;
const SlideImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
`;
const LangText = styled.div`
  position: relative;
  top: -50px;
  left: 50px;
  margin-left: 10px;
  font-family: "Gugi", cursive;
  font-size: 25px;
  font-weight: 400;
`;

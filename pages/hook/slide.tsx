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
const Slide = ({ children }: { children: any }) => {
  const [count, setCount] = useState<number>(0);
  const handleNext = () => {
    setCount((count) => (count + 1) % 8);
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    intervalId = setInterval(handleNext, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const slideProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { count })
  );
  return <SlideContainer></SlideContainer>;
};
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
  const handleNext = () => {
    setCount((count) => (count + 1) % 8);
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    intervalId = setInterval(handleNext, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const rightImage: rightImageProps[] = [
    { Image: htmlImage, i: 4, Lang: "HTML5" },
    { Image: cssImage, i: 5, Lang: "css3" },
    { Image: jsImage, i: 6, Lang: "javascript" },
    { Image: typeImage, i: 7, Lang: "typescript" },
    { Image: clangImage, i: 8, Lang: "C lang" },
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
              <SlideItem activeIndex={count}>
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
const scroll = keyframes`
  	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-384px * 5))}
`;
const SlideContainer = styled.div`
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  top: 200px;
  width: 1920px;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(50, 50, 50, 1) 0%,
      rgba(50, 50, 50, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;
const SlideItemList = styled.ul`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: calc(384px * 10);
`;
const SlideItem = styled.li<{ activeIndex: number }>`
  height: 100px;
  width: 384px;
  list-style: none;
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

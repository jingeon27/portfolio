import styled from "styled-components";
import Github from "../public/image/Github.png";
import TypeImage from "../public/image/Typescript.png";
import RecoilImage from "../public/image/Typescript.png";
import BootImage from "../public/image/Bootstrap.png";
import CssImage from "../public/image/css.png";
import HtmlImage from "../public/image/HTML.png";
import NextJsImage from "../public/image/nextjs.png";
import ReactImage from "../public/image/React.png";
import QueryImage from "../public/image/react-query.jpg";
import JsImage from "../public/image/JS.png";
import ClangImage from "../public/image/C.png";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
interface rightImageProps {
  Image: StaticImageData;
  Lang: string;
}
const SlidePage = () => {
  let loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
  function nextMove() {}
  //   const cloneElement = () => {
  //     list.prepend(items[lastIndex].cloneNode(true));
  //     list.append(items[0].cloneNode(true));
  //     setTranslate({ reset: true });
  //   };
  //   const setTransition = (value) => {
  //     list.style.transition = value;
  //   };

  //   const setTranslate = ({ index, reset }) => {
  //     if (reset) list.style.transform = `translate(-${list.clientWidth}px, 0)`;
  //     else
  //       list.style.transform = `translate(-${
  //         (index + 1) * list.clientWidth
  //       }px, 0)`;
  //   };
  const rightImage: rightImageProps[] = [
    { Image: HtmlImage, Lang: "HTML5" },
    { Image: CssImage, Lang: "css3" },
    { Image: JsImage, Lang: "javascript" },
    { Image: TypeImage, Lang: "typescript" },
    { Image: ClangImage, Lang: "C lang" },
  ];
  return (
    <>
      <SlideContainer>
        <SlideItemList>
          {rightImage.map((user) => (
            <>
              <SlideItem>
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
        {/* <SlideItemList>
          {rightImage.map((user) => (
            <>
              <SlideItem>
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
        <SlideItemList>
          {rightImage.map((user) => (
            <>
              <SlideItem>
                <SlideImage
                  src={user.Image}
                  width={50}
                  height={50}
                ></SlideImage>
                <LangText style={{ color: "#fff" }}>{user.Lang}</LangText>
              </SlideItem>
            </>
          ))}
        </SlideItemList> */}
      </SlideContainer>
    </>
  );
};
export default SlidePage;
const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  top: 250px;
  width: 1920px;
  height: 200px;
`;
const SlideItemList = styled.ul`
  display: flex;
  transform: translate(0, 0);
`;
const SlideItem = styled.li`
  width: 200px;
  height: 100px;
  margin-right: 100px;
  margin-left: 100px;
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

import styled, { keyframes } from "styled-components";
import bootImage from "../../public/image/Bootstrap.png";
import nextJsImage from "../../public/image/nextjs.png";
import reactImage from "../../public/image/React.png";
import queryImage from "../../public/image/react-query.jpg";
import recoilImage from "../../public/image/recoil.jpg";
import typeImage from "../../public/image/Typescript.png";
import cssImage from "../../public/image/css.png";
import htmlImage from "../../public/image/HTML.png";
import jsImage from "../../public/image/JS.png";
import clangImage from "../../public/image/C.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface imageProps {
  Image: StaticImageData;
  Lang: string;
}
const SlidePage = () => {
  const rightImage: imageProps[] = [
    { Image: htmlImage, Lang: "HTML5" },
    { Image: cssImage, Lang: "css3" },
    { Image: jsImage, Lang: "javascript" },
    { Image: typeImage, Lang: "typescript" },
    { Image: clangImage, Lang: "C lang" },
    { Image: htmlImage, Lang: "HTML5" },
    { Image: cssImage, Lang: "css3" },
    { Image: jsImage, Lang: "javascript" },
    { Image: typeImage, Lang: "typescript" },
    { Image: clangImage, Lang: "C lang" },
  ];
  const leftImage: imageProps[] = [
    { Image: reactImage, Lang: "React" },
    { Image: recoilImage, Lang: "recoil" },
    { Image: bootImage, Lang: "Bootstrap" },
    { Image: nextJsImage, Lang: "Next.js" },
    { Image: queryImage, Lang: "ReactQuery" },
    { Image: reactImage, Lang: "React" },
    { Image: recoilImage, Lang: "recoil" },
    { Image: bootImage, Lang: "Bootstrap" },
    { Image: nextJsImage, Lang: "Next.js" },
    { Image: queryImage, Lang: "ReactQuery" },
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
      </SlideContainer>
      <SlideContainer>
        <SlideItemlistRight>
          {leftImage.map((user) => (
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
        </SlideItemlistRight>
      </SlideContainer>
    </>
  );
};
export default SlidePage;
const scroll = keyframes`
  	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-384px * 5))}
`;
const goright = keyframes`
    	0% { transform: translateX(0); }
	100% { transform: translateX(calc(384px * 5))}
`;
const SlideContainer = styled.div`
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  top: 200px;
  width: 1920px;

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
const SlideItem = styled.li`
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
const SlideItemlistRight = styled.ul`
  animation: ${goright} 40s linear infinite;
  display: flex;
  width: calc(384px * 10);
  position: absolute;
  left: -1920px;
`;

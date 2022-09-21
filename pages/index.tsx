import type { NextPage } from "next";
import Head from "next/head";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import CanvasAnimation from "./hook/canvasAnimation";
import Github from "../public/image/Github.png";
import TypeImage from "../public/image/Typescript.png";
import RecoilImage from "../public/image/Typescript.png";
import BootImage from "../public/image/Bootstrap.png";
import CssImage from "../public/image/css.png";
import HtmlImage from "../public/image/html.jpg";
import NextJsImage from "../public/image/nextjs.png";
import ReactImage from "../public/image/React.png";
import QueryImage from "../public/image/react-query.jpg";
import JsImage from "../public/image/js.png";
const Home: NextPage = () => {
  const handleScroll = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Wrap>
        <ChatBox>안녕하세요! 김진건입니다.</ChatBox>
      </Wrap>
      <Layout>
        <CanvasAnimation canvasWidth={1920} canvasHeight={980} />
      </Layout>
      <Position>
        <div className="front">
          <Image
            src={Github}
            alt="github이미지입니다."
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="back">
          <Image
            src={TypeImage}
            alt="얼굴이미지입니다."
            width={100}
            height={100}
          ></Image>
        </div>
      </Position>
    </>
  );
};
export default Home;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
  animation: ${visible ? fadeIn : fadeOut} 5s ease-out;
  transition: visibility 5s ease-out;
`;
const Picture = styled(Image)<{ visible: boolean }>`
  margin: 0;
  ${(props) => modalSettings(props.visible)}
`;
const ImageLocate = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
  height: 90%;
`;
const motion = keyframes`
  	0% {
      margin-top: 0px;
    }
	100% {
    margin-top: 10px;
    }
`;
const Wrap = styled.div`
  position: absolute;
  top: 550px;
  left: 1000px;
  text-align: center;
  margin-top: 20px;
`;
const ChatBox = styled.div`
  position: absolute;
  top: 300px;
  transition: 2s;
  right: 100px;
  top: 0px;
  margin: 0px;
  padding: 0px;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: #fff;
  animation: ${motion} 0.3s linear 0s infinite alternate;
  margin-top: 0;
  color: #000 !important;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;
const Layout = styled.div`
  position: absolute;
  top: 100px;
  margin: 0px;
  padding: 0px;
`;
const Position = styled.div`
  top: 550px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  perspective: 600px;
  .front,
  .back {
    backface-visibility: hidden;
    transition: 1s;
    position: absolute;
  }
  .front {
    transform: rotateY(0deg);
  }
  :hover .front {
    transform: rotateY(180deg);
  }
  .back {
    transform: rotateY(-180deg);
  }
  :hover .back {
    transform: rotateY(0deg);
  }
`;

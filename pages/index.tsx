import type { NextPage } from "next";
import Head from "next/head";
import styled, { keyframes, css } from "styled-components";
import BackgroundImage from "../public/image/background.jpg";
import PatternImage from "../public/image/pattern.png";
import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
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
      <ImageLocate>
        <Picture
          src={BackgroundImage}
          alt="메인배경이미지"
          visible={true}
          width={1920}
          height={980}
        ></Picture>
      </ImageLocate>
      <Wrap>
        <ChatBox>Hello</ChatBox>
      </Wrap>
      <Table
        src={PatternImage}
        alt="배경패턴이미지"
        width={1920}
        height={980}
      />
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
  color: #000;
`;
const Table = styled(Image)`
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 90%;
`;

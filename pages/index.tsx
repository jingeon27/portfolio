import Image from "next/image";
import type { NextPage } from "next";
import styled, { keyframes, css } from "styled-components";
import CanvasAnimation from "./hook/canvasAnimation";
import GithubImage from "../public/image/Github.png";
import SlidePage from "./hook/slide";
import dynamic from "next/dist/shared/lib/dynamic";
const SlideProps = dynamic(() => import("./hook/slide"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <>
      <SlideProps />
      <Wrap>
        <ChatBox>
          <ChatBoxPosition> Github repo 바로가기입니다. </ChatBoxPosition>
        </ChatBox>
      </Wrap>
      <Layout>
        <CanvasAnimation canvasWidth={1920} canvasHeight={980} />
      </Layout>
      <Position>
        <a href="https://github.com/jingeon27/portfolio">
          <Image
            src={GithubImage}
            alt="github 바로가기 링크입니다."
            width={100}
            height={100}
          />
        </a>

        {/* <div className="front">
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
        </div> */}
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
  top: 750px;
  left: 1000px;
  text-align: center;
  margin-top: 20px;
`;
const ChatBoxPosition = styled.div`
  position: absolute;
  left: 10px;
  top: 12px;
`;
const ChatBox = styled.div`
  position: absolute;
  top: 305px;
  transition: 2s;
  right: 100px;
  top: 0px;
  margin: 0px;
  padding: 0px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  animation: ${motion} 0.3s linear 0s infinite alternate;
  margin-top: 0;
  color: #000 !important;
  font-family: "Amiko", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;
const Layout = styled.div`
  position: absolute;
  top: 100px;
  margin: 0px;
  padding: 0px;
`;
// const Position = styled.div`
//   top: 550px;
//   position: absolute;
//   left: 0px;
//   right: 0px;
//   margin: 0 auto;
//   width: 100px;
//   height: 100px;
//   perspective: 600px;
//   .front,
//   .back {
//     backface-visibility: hidden;
//     transition: 1s;
//     position: absolute;
//   }
//   .front {
//     transform: rotateY(0deg);
//   }
//   :hover .front {
//     transform: rotateY(180deg);
//   }
//   .back {
//     transform: rotateY(-180deg);
//   }
//   :hover .back {
//     transform: rotateY(0deg);
//   }
// `;

const Position = styled.div`
  top: 750px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 100px;
  height: 100px;
`;

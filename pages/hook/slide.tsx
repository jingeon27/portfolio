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
  const [count, setCount] = useState<number>(0);
  const [state, setState] = useState<rightImageProps[]>([]);
  const containerRef = useRef<any>();
  const slideRef = useRef<any>([]);

  useEffect(() => {
    let interval: any;

    const setTransition = (value: string) => {
      containerRef.current.style.transition = value;
    };
    const resetTranslate = () => {
      slideRef.current.style.transform = `translate(-${0}px, 0)`;
    };
    const Translate = ({ index }: { index: number }) => {
      slideRef.current.style.transform = `translatex(${(index - 1) * 384}px)`;
    };
    const cloneNode = () => {
      state.unshift(state[4]);
      state.pop();
    };
    const autoplayIterator = () => {
      setCount(count + 1);
      setTransition("all 0.3s linear");
      Translate({ index: count });
      cloneNode();
      if (count > 4) {
        clearInterval(interval);
        setTimeout(() => {
          setCount(0);
          cloneNode();
          setTransition("");
          resetTranslate();
          autoplay({ duration: 2000 });
        }, 300);
      }
    };

    const autoplay = ({ duration }: { duration: number }) => {
      interval = setInterval(autoplayIterator, duration);
    };
  });
  const rightImage: rightImageProps[] = [
    { Image: clangImage, i: 0, Lang: "C lang" },
    { Image: htmlImage, i: 1, Lang: "HTML5" },
    { Image: cssImage, i: 2, Lang: "css3" },
    { Image: jsImage, i: 3, Lang: "javascript" },
    { Image: typeImage, i: 4, Lang: "typescript" },
    { Image: clangImage, i: 5, Lang: "C lang" },
  ];
  setState(rightImage);
  return (
    <>
      <SlideContainer ref={containerRef}>
        <SlideItemList>
          {state.map((user) => (
            <>
              <SlideItem
                ref={(el) => {
                  slideRef.current[user.i] = el;
                }}
              >
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
  top: 150px;
  width: 2304px;
  height: 200px;
  left: -384px;
`;
const SlideItemList = styled.ul`
  display: flex;
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

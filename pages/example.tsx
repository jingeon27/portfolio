import type { NextPage } from "next";
import styled from "styled-components";
import CanvaseAnimation from "../styles/canvasAnmation";
const Example: NextPage = () => {
  return (
    <Main>
      <CanvaseAnimation />
    </Main>
  );
};
export default Example;
const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

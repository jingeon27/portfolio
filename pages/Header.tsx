import Link from "next/link";
import styled from "styled-components";
const Header = () => {
  return (
  <HeadLine>
    <TitleBox>
      <Link href="/"> 
        <Title><span>포트</span>폴리오</Title>
      </Link>
    </TitleBox>
  </HeadLine>);
};
const HeadLine = styled.div`
  position:absolute;
  width: 100%;
  height: 100px;
  /* background-color: blue; */
`
const TitleBox = styled.div`
  position: absolute;
  /* background-color: red; */
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 200px;
  height: 100px;
`
const Title = styled.a`
 position: absolute;
 font-family: 'Gugi', cursive;
 font-weight: 400;
 font-size: 48px;
 text-align: center;
 color: #000000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #000000;
  }
 span {
   color: #dcdf00;
   
 }
`
export default Header;

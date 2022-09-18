/* eslint-disable react/jsx-key */
import Link from "next/link";
import styled from "styled-components";
interface linkListProps {
  num: string;
  page: any;
}
const Header = () => {
  const linkList: linkListProps[] = [
    { num: "1", page: "/" },
    { num: "2", page: "/profile" },
    { num: "3", page: "/aboutme" },
    { num: "4", page: "/skill" },
  ];
  return (
    <>
      <HeadLine>
        <TitleBox>
          <Link href="/">
            <Title>
              <span>포트</span>폴리오
            </Title>
          </Link>
        </TitleBox>
      </HeadLine>
      <MenuFrame>
        {linkList.map((user) => (
          <Link href={user.page}>
            <MenuBox>
              <NumberStyle>{user.num}</NumberStyle>
            </MenuBox>
          </Link>
        ))}
      </MenuFrame>
    </>
  );
};
const HeadLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  /* background-color: blue; */
`;
const TitleBox = styled.div`
  position: absolute;
  /* background-color: red; */
  top: 20px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 200px;
  height: 100px;
`;
const Title = styled.a`
  position: absolute;
  font-family: "Gugi", cursive;
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
`;
const MenuFrame = styled.div`
  width: 60px;
  position: absolute;
  height: 300px;
  top: 0px;
  bottom: 0px;
  margin: auto 0;
  right: 50px;
`;
const MenuBox = styled.a`
  position: relative;
  width: 60px;
  height: 60px;
  border: 4px solid #000;
  margin-bottom: 20px;
  display: flex;
  border-radius: 15px;
`;
const NumberStyle = styled.div`
  position: absolute;
  font-family: "Gugi", cursive;
  font-weight: 400;
  font-size: 35px;
  left: 0px;
  right: 0px;
  top: 2px;
  margin: 0 auto;
  color: #000;
  width: 48px;
  height: 48px;
  text-align: center;
  text-decoration: none;
`;
export default Header;

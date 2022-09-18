/* eslint-disable react/jsx-key */
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { AnyTxtRecord } from "dns";
interface linkListProps {
  num: string;
  path: any;
  func: any;
}
const Header = () => {
  const router = useRouter();
  const main = {
    color: router.pathname === "/" ? "#dcdf00" : "#000",
  };
  const profile = {
    color: router.pathname === "/profile" ? "#dcdf00" : "#000",
  };
  const aboutme = {
    color: router.pathname === "/aboutme" ? "#dcdf00" : "#000",
  };
  const skill = {
    color: router.pathname === "/skill" ? "#dcdf00" : "#000",
  };
  const linkList: linkListProps[] = [
    { num: "1", path: "/", func: "main" },
    { num: "2", path: "/profile", func: "profile" },
    { num: "3", path: "/aboutme", func: "aboutme" },
    { num: "4", path: "/skill", func: "skill" },
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
          <Link href={user.path}>
            {/* <MenuBox>
              <NumberStyle style={main}>{user.num}</NumberStyle>
            </MenuBox> */}
            <ActiveLink href={user.path}>{user.num}</ActiveLink>
          </Link>
        ))}
      </MenuFrame>
    </>
  );
};
const ActiveLink = ({ children, href }: { children: any; href: any }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "#dcdf00" : "#000",
  };
  const boxStyle = {
    border: router.asPath === href ? "4px solid #dcdf00" : "4px solid #000",
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <MenuBox href={href} onClick={handleClick} style={boxStyle}>
      <NumberStyle style={style}> {children}</NumberStyle>
    </MenuBox>
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
  width: 33px;
  height: 33px;
  text-align: center;
  text-decoration: none;
`;
export default Header;

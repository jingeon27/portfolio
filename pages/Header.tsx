/* eslint-disable react/jsx-key */
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
interface linkListProps {
  num: string;
  path: string;
  info: string;
}
const Header = () => {
  const linkList: linkListProps[] = [
    { num: "1", path: "/", info: "메인페이지입니다." },
    { num: "2", path: "/profile", info: "프로필페이지입니다." },
    { num: "3", path: "/aboutme", info: "자기소개페이지입니다." },
    { num: "4", path: "/skill", info: "프로젝트소개페이지입니다." },
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
            <ActiveLink href={user.path} info={user.info}>
              {user.num}
            </ActiveLink>
          </Link>
        ))}
      </MenuFrame>
    </>
  );
};
const ActiveLink = ({
  children,
  href,
  info,
}: {
  children: string;
  href: string;
  info: string;
}) => {
  const router = useRouter();
  const boxStyle = {
    border: router.asPath === href ? "4px solid #dcdf00" : "4px solid #fff",
    color: router.asPath === href ? "#dcdf00" : "#fff",
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <MenuBox href={href} onClick={handleClick} style={boxStyle}>
      <div className="hoverBox">
        <div className="hoverShow" style={{ color: "rgba(0,0,0,0)" }}>
          {info}
        </div>
        <div className="hoverTail" />
      </div>
      <NumberStyle>{children}</NumberStyle>
    </MenuBox>
  );
};
const HeadLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0px;
`;
const TitleBox = styled.div`
  position: absolute;
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
  transition: 0.5s;
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  border-radius: 15px;
  :hover {
    color: #dcdf00 !important;
    border: 4px solid #dcdf00 !important;
  }
  :hover .hoverBox {
    transition: 2s;
    position: absolute;
    right: 100px;
    top: 0px;
    margin: 0px;
    padding: 0px;
    width: 300px;
    height: 60px;

    border-radius: 10px;
    background-color: #fff;
  }
  :hover .hoverBox .hoverShow {
    transition: 2s;
    position: absolute;
    left: 20px;
    width: 300px;
    height: 24px;
    top: 0px;
    bottom: 10px;
    margin: auto 0;
    color: #000 !important;
    font-family: "Gugi", cursive;
    font-weight: 400;
    font-size: 24px;
  }
  :hover .hoverTail {
    transition: 2s;
    position: absolute;
    left: 300px;
    top: 20px;
    border-top: 0px solid;
    border-left: 40px solid #fff;
    border-right: 0px solid;
    border-bottom: 20px solid;
    color: #323232 !important;
  }
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
  width: 48px;
  height: 48px;
  text-align: center;
  text-decoration: none;
`;
export default Header;

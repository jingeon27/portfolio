import type { NextPage } from "next";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dist/shared/lib/dynamic";
import Image from "next/image";
import Proof from "../public/image/proof.jpg";
const ProfileProps = dynamic(() => import("./common/profile"), {
  ssr: false,
});
const profile: NextPage = () => {
  return (
    <>
      <ProfileProps />
      <div>프로필 페이지입니다.</div>
      <ProfileBox>
        <Table>
          <Image src={Proof} alt="증명사진입니다." width={313} height={421} />
        </Table>
      </ProfileBox>
    </>
  );
};
export default profile;
const Table = styled.div`
  position: absolute;
  left: 0px;

  width: 313px;
  height: 421px;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;
`;
const ProfileBox = styled.div`
  position: absolute;
  width: 600px;
  height: 480px;
  background-color: #fff;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border-radius: 10px;
  overflow: hidden;
`;

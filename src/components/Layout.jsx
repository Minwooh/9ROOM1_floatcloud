import styled from "styled-components";
import { Outlet } from "react-router-dom";

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;
`;
const TopBtnBox = styled.span`
  width: 5.3rem;
  display: flex;
  justify-content: space-between;
`;
const BottomSection = styled.section`
  margin-top: 2rem;
  text-align: center;
  width: 100%;
  height: 6rem;
`;

const Layout = () => {
  return (
    <>
      <TopSection>
        <img src="../../images/logo.png" alt="ddngoorm" />
        <TopBtnBox>
          <img
            src="../../images/alarm.png"
            alt="알람버튼이미지"
            height="100%"
          />
          <img
            src="../../images/setting.png"
            alt="설정버튼이미지"
            height="100%"
          />
        </TopBtnBox>
      </TopSection>
      <Outlet />
      <BottomSection>
        <img src="../../images/cloud_logo.png" alt="구름로고" height="100%" />
      </BottomSection>
    </>
  );
};

export default Layout;

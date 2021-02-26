import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  height: 70px;

  i {
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  a {
    margin: 10px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    text-shadow: 4px 4px 4px gray;
  }
`;

//메인페이지
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(240, 195, 49);
`;

const Main = styled.div`
  width: 60%;
  height: 60%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .introduce {
    display: flex;
    justify-content: row;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 40px;
  border: 1px solid red;
`;

export { HeaderWrapper, Nav, MainWrapper, Main, ButtonWrapper };

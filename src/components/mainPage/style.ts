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
    padding: 10px;
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
  background-color: #31f0c4;

  .container {
  }
`;

const Main = styled.div`
  width: 235%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 460px;
  margin-top: 200px;

  .introduce {
    background-color: white;
    margin: 0 200px;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: row;
    box-shadow: 5px 3px 5px #00000029;
    border-radius: 20px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 40px auto;
  width: 200px;
  height: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: center;

`;

export { HeaderWrapper, Nav, MainWrapper, Main, ButtonWrapper };

import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 195, 49);
  overflow: hidden;

  span {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    margin: 20px auto;
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* > i {
      font-size: 25px;
    } */
  }
`;

const MouseWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(74 216 239);
  img {
    width: 600px;
  }

  #circle {
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 80%;
    position: absolute;
    left: 580px;
    margin-right: 90px;
    margin-bottom: 350px;
  }

  #lion-left {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 80%;
    position: absolute;
    top: 320px;
    right: 767px;
  }

  #lion-right {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 80%;
    position: absolute;
    top: 320px;
    right: 650px;
  }
`;

const Circle = styled.div`
  width: 700px;
  height: 625px;
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: 0.9;
  transition: 5s;
  overflow: hidden;

  div {
    width: 80px;
    height: 250px;
    border-radius: 10px;
  }
`;

const ComeBack = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 23px;
    color: black;
  }
`;

export { MainWrapper, MouseWrapper, Circle, ComeBack };

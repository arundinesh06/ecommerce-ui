import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrapper = styled.div`
  height: 600px;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease-in-out;
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const InfoContainer = styled.div`
  height: 100%;
  flex: 1;
  padding: 50px;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

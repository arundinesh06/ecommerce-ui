import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 500px;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: centr center;
  // opacity: 0.8;
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.p`
color:#fff;
background-color:#000;
padding:5px 10px;
margin - bottom: 20px;
border-radius:8px;
font-size:30px;
font-weight:bold;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

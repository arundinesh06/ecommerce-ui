import Styled from "styled-components";
export const Container = Styled.div`
  height:300px;
  background-color:#fcf5f5;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
export const Title = Styled.p`
  font-size:60px;
  margin-bottom:20px;
  margin-top:0;
`;
export const Description = Styled.p`
  font-size:24px;
  font-weight:300;
  magin-bottom:20px;
  margin-top:0;
`;
export const InputContainer = Styled.div`
  width:800px;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:space-between;
  border:1px solid lightgray;
`;

export const Input = Styled.input`
  border:none;
  flex:8;
  padding-left:20px;
`;
export const Button = Styled.button`
  flex-basis:60px;
  border:none;
  background-color:teal;
  color:white;
`;

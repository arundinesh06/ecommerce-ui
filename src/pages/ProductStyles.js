import Styled from "styled-components";
export const Container = Styled.div`

`;

export const Wrapper = Styled.div`
  padding:50px;
  display:flex;
`;

export const ImgContainer = Styled.div`
  flex:1;
`;

export const Image = Styled.img`
  width:100%;
  height:90vh;
  object-fit:cover;
`;

export const InfoContainer = Styled.div`
  flex:1;
  padding:0 50px;
`;

export const Title = Styled.h1`
  font-weight:200;
`;

export const Desc = Styled.p`
  margin:20px 0;
`;

export const Price = Styled.div`
  font-weight:100;
`;

export const FilterContainer = Styled.div`
  width:50%;
  display:flex;
  justify-content:space-between;
  margin:20px 0;
`;

export const Filter = Styled.div`
  display:flex;
  align-items:center;
`;

export const FilterTitle = Styled.span`
  font-size:20px;
  font-weight:200;
`;

export const FilterColor = Styled.div`
  width:20px;
  height:20px;
  border-radius:20px;
  background-color:${(props) => props.color};
  margin:0 5px;
  cursor:pointer;
`;

export const FilterSize = Styled.select`
 margin-left:10px;

`;

export const FilterSizeOption = Styled.option`
 
`;

export const AddContainer = Styled.div`
 display:flex;
 align-items:center;
justify-content:space-between;
  width:50%;
`;

export const AmountContainer = Styled.div`
 display:flex;
 align-items:center;
 font-weight:700;
`;

export const Amount = Styled.span`
 width:30px;
 height:30px;
 border-radius:10px;
 border:1px solid teal;
 display:flex;
 justify-content:center;
 align-items:center;
 margin:0 5px;
`;

export const Button = Styled.button`
 padding:15px;
 border:2px solid teal;
 background-color:white;
 font-weight:500;
 cursor:pointer;
 &:hover{
  background-color:#f8f4f4;
 }
`;

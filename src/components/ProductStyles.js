import Styled from "styled-components";
export const Info = Styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:gray;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,0.2);
transition:all 0.5s ease;
cursor:pointer;
`;
export const Container = Styled.div`
  width:100%;
  height:400px;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  background-color:#f5fbfd;
  position:relative;
  &:hover ${Info}{
    opacity:1;
  }
`;

export const Circle = Styled.div`
width:200px;
height:200px;
border-radius:100%;
background-color:white;
position:absolute;
`;
export const Image = Styled.img`
height:100%;
width: 100%;
object-fit:cover;
z-index:2;
`;

export const Icon = Styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
transition:all 0.5s ease;
cursor:pointer;
&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
}
`;

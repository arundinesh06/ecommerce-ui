import Styled from "styled-components";
export const Container = Styled.div`
  display:flex;
  padding:20px;
`;

export const Left = Styled.div`
  flex:1;
`;

export const Center = Styled.div`
  flex:1;
  padding:20px;
`;

export const Title = Styled.h3`
  margin-bottom:30px;
`;

export const List = Styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`;

export const ListItem = Styled.li`
  width:50%;
  margin-bottom:10px;
`;

export const Right = Styled.div`
  flex:1;
`;

export const ContactItem = Styled.div`
  margin-bottom:10px;
  display:flex;
  align-items:center;
`;

export const Payment = Styled.img`
  width:150px;
`;
export const Logo = Styled.h1`
  flex:1;
`;

export const Desc = Styled.p`
  flex:1;
  margin:20px 0;
`;

export const SocialContainer = Styled.div`
  display:flex;
  justify-content:left;
`;

export const SocialIcon = Styled.div`
  width:40px;
  height:40px;
  border-radius:100%;
  background-color:#${(props) => props.color};
  display:flex;
  justify-content:center;
  align-items:center;
  &:not(:last-child){
    margin-right:15px;
  }
`;

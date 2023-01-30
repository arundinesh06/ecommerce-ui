import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shoppy</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          architecto molestias aperiam quisquam. Pariatur iusto porro ducimus
          nostrum, magnam a.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon style={{ color: "white" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Buy For Him</ListItem>
          <ListItem>Buy For Her</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          contact@buyo.dev
        </ContactItem>
        <Payment src="https://www.pngplay.com/wp-content/uploads/8/Payment-Method-Download-Free-PNG.png" />
      </Right>
    </Container>
  );
};

export default Footer;

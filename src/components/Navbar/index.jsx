import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="assets/fish.png" />
        </Left>
        <Right>
          <Image src="assets/signal-fish.jpg" />
          <Name>Signal Fish</Name>
          <ArrowDropDown />
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: teal;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  margin-right: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span`
  margin: 0px 0px 0 10px;
  font-weight: 500;
  font-size: 16px;
`;

export default Navbar;

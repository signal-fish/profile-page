import styled from "styled-components";
import { useSelector } from "react-redux";

const MenuLink = ({ icon, text }) => {
  const name = useSelector((state) => state.user.name);

  return (
    <Container>
      {icon}
      <Text>{text}</Text>
      <TextName>{text === "Logout" && `(${name})`}</TextName>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 10px);
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 238, 238);
  }
`;

const Text = styled.span`
  margin-left: 10px;
  margin-right: 5px;
`;

const TextName = styled.span``;

export default MenuLink;

import styled from "styled-components";
import data from "../../data";
import MenuLink from "../MenuLink";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { tablet } from "../../responsive";

const LeftBar = ({showSidebar, setShowSidebar}) => {
  return (
    <Container showSidebar={showSidebar}>
      <Wrapper>
        {data.map((item) => {
          const { id, icon, text } = item;
          return <MenuLink key={id} icon={icon} text={text} />;
        })}
        <ArrowWrapper showSidebar={showSidebar}>
          <DoubleArrowIcon onClick={() => setShowSidebar(!showSidebar)} />
        </ArrowWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  height: calc(100% - 50px);
  background: ${(props) => (props.showSidebar ? "teal" : "none")};
  transition: all linear 0.3s;
  transform: ${(props) =>
    props.showSidebar ? "translateX(0)" : "translateX(-90%)"};

  ${tablet({
    position: "static",
    transform: "translateX(0)",
    background: "none",
    width: "300px",
    paddingTop: "20px"
  })}
`;

const Wrapper = styled.div`
height: 100%;
position: relative;
padding-right: 20px;
`;

const ArrowWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transition: all linear 0.3s;

  transform: ${(props) =>
    props.showSidebar
      ? "translateY(-50%) rotate(180deg)"
      : "translateY(-50%) rotate(0deg)"};

  color: darkblue;
  display: flex;
  align-items: center;
  border-radius: 2px;

  ${tablet({
    display: "none"
  })}
`;

export default LeftBar;

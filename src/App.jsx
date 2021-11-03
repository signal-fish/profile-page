import styled from "styled-components";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import { useState } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container>
        <Navbar />
        <Main>
          <LeftBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Update />
        </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.div`
  display: flex;
`;
export default App;

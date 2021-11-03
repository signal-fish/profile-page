import styled from 'styled-components';

const Warning = () => {
  return (
    <Container>
      Deleting account cannot be undone <Bold>Signal Fish</Bold>! You should confirm your
      password to delete your account.
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  background-color: rgb(238, 238, 190);
  border-radius: 10px;
  font-size: 13px;
`;

const Bold = styled.b``

export default Warning

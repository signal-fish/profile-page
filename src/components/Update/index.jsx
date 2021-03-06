import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(update({name, email}))
  }
  return (
    <Container>
      <Wrapper>
        <Title>Update Your Account</Title>
        <UpdateContainer>
          <Form>
            <FormItem>
              <Label>Profile Picture</Label>
              <Profile>
                <Image src="assets/signal-fish.jpg" alt="Signal Fish"></Image>
                <Change>Change</Change>
              </Profile>
            </FormItem>
            <FormItem>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <Label>Password</Label>
              <Input type="password" />
              <UpdateButton disabled={user.pending} onClick={handleUpdate}>
                Update
              </UpdateButton>
              {user.error && (<Error>Something went wrong!</Error>)()}
              {user.pending === false && (
                <Success>Account has been updated!</Success>
              )}
            </FormItem>
          </Form>
        </UpdateContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 400;
`;

const UpdateContainer = styled.div`
  display: flex;
  margin-top: 20px;
  border-top: 1px solid lightgray;
  padding-top: 10px;
`;

const Form = styled.form``;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label``;

const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
`;

const Profile = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Change = styled.span`
  margin-left: 10px;
  font-weight: 500;
  font-size: 13px;
  color: teal;
`;

const UpdateButton = styled.button`
  margin: 25px 0 10px 0;
  border: none;
  padding: 5px 10px;
  background-color: rgb(97, 161, 161);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

const Success = styled.span`
  color: green;
  font-size: 14px;
`;

export default Update;

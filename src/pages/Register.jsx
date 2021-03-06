import React from 'react'
import styled from "styled-components";

const Container = styled.div` 
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/7176441/pexels-photo-7176441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
            center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div` 
        width: 40%;
        padding: 20px;
        background-color: white;
 `;

 const Form = styled.form` 
    display: flex;
    flex-wrap: wrap;
 `;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
 `;
const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
 `;
const Button = styled.button` 
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Register  = () => {
  return (
    <Container><Wrapper> 
        <Title>
            Create an Account
        </Title>
        <Form>
            <Input placeholder= "Name"/>
            <Input placeholder= " Last name"/>
            <Input placeholder= " Username"/>
             <Input placeholder= " Email"/>
             <Input placeholder= "Password"/>
             <Input placeholder= "Confirm password"/>

             <Agreement>This is to verify that you agree to our terms 
                 and conditions. <b> PRIVACY POLICY </b></Agreement>
             <Button>Create</Button>
             

        </Form>

        </Wrapper> </Container>
  )
}

export default Register 
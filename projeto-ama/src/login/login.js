import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #135F51;
    color: white;
    font-family: "Roboto", sans-serif;
`;
const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    background-color: #00876E;
`;
const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 25em;
    height :25em;
    background-color: #135F51;
    border-radius: 5px;
    box-shadow 1px 1px 10px black;
`;
const Button = styled.button`
    margin-top: 10px;
    color: white;
    width: 66%;
    padding: 10px;
    background-color: #CC2936;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    
    ${this}:hover{
         background-color:#DE767F;
        transition:0.8s;
    }
 `;
const Input = styled.input`
    width:'60%';
    margin:'10px 0';
    padding: '10px';
    borderRadius: '5px';
    border: '1px solid green';
`;
const LinkPassword = styled.a`
    margin-top:10px;
    text-decoration:none;
    color: white;
`;
const logoStyle = {
    width: '55%',
    marginBottom: '20px',
};
const loginInput = {
    width: '60%',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
};

function Login() {
    return (
        <Main>
            <SubContainer>
                <LoginContainer>
                    <img style={logoStyle} src={logo} alt=""/>
                    <input style={loginInput} type="text" placeholder={"Email ou nome do usuário"}/>
                    <input style={loginInput} type="password" placeholder={"Senha"}/>
                    <Button>Entrar</Button>
                    <LinkPassword href="#">Esqueceu a senha?</LinkPassword>
                </LoginContainer>
            </SubContainer>
        </Main>
    );
}

export default Login;

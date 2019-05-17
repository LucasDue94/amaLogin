import React from 'react';
import styled from "styled-components";

const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:fixed;
    width:100%;
    height:100%;
    background-color:#135F51;
`;

const SubContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width:80%;
    height:100%;
    background-color:#00876E;
`;

const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:20em;
    height:20em;
    background-color:white;
    border-radius: 5px;
`;

const loginInput = {
    color: 'red',
    width: '50%'
};

function Login() {
    return(
        <Main>
            <SubContainer>
                <LoginContainer>
                    <input className={loginInput} type="text" placeholder={"E-mail ou nome do usuário"}/>
                    <input type="text" placeholder={"Senha"}/>
                </LoginContainer>
            </SubContainer>
        </Main>
    );
}
export default Login;
import React from 'react';
import styled from "styled-components";
import Colors from '../colors.js';
import Fonts from '../fonts.js';
import logo from '../assets/logo.svg';

const MenuBar = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    background-color: ${Colors().darkGreen};
    border-bottom: 4px solid #0D3D34;
`;

const LinkMenu = styled.a`
    border-radius: 5px;
    margin: auto 15px;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-family:${Fonts().roboto.bold};
    
    ${this}:hover{
        background-color: ${Colors().green};
        transition: 1s;
    }
`;

const logoStyle = {
    margin:'10px 100px',
    width: '100px'
};
function ItemMenu(props) {

    return (
        <LinkMenu href="#">{props.text}</LinkMenu>
    );
}

function Menu() {
    return (
        <MenuBar>
            <img style={logoStyle} src={logo} alt=""/>
            <ItemMenu text="Início"/>
            <ItemMenu text="Sobre"/>
            <ItemMenu text="Serviços"/>
            <ItemMenu text="Nossa Equipe"/>
            <ItemMenu text="Contato"/>
            <ItemMenu text="Blog"/>
            <ItemMenu text="Login"/>
        </MenuBar>
    );
}
export default Menu;
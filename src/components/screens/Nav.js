import React from 'react';
import Logo from "../assets/images/moke..png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";
import styled from "styled-components";

export default function Navbar() {
    return (
        <>
        <Nav>
            <Header>
            <Left>
                <h1><Logoimage src={Logo} alt="Logo" /></h1>
            </Left>
            <Right> 
                <List>
                    <Items> <A> Get Signal </A></Items>
                    <Items> <A> Support </A> </Items>
                    <Items> <A> Blog </A> </Items>
                    <Items> <A> Developers </A> </Items>
                    <Items> <A> Carrers </A> </Items>
                    <Items> <A> Donate </A> </Items>
                    <Items> <A> <Twit src={Twitter} alt="Icon" /> </A> </Items>
                    <Items> <A> <Insta src={Instagram} alt="Icon" /> </A> </Items>
                </List>
            </Right>
            </Header>
        </Nav>
        </>
    )
}
const Nav = styled.nav `
     width : 90%;
     margin:0 auto;
`;
const Header = styled.header `
    display: flex;
    justify-content:space-between;
    margin:20px 0;
    font-size:16px;
    font-weight:500;
    align-items:center;
`;
const Left = styled.div `
    margin-left: 80px;
`;
const Login = styled.a `
    padding: 12px 30px;
    border-radius: 6px;
    background: blue;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
const Right = styled.div `
`;
const List = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items:center;
    `;
const Items = styled.li `
    margin-right: 20px;
    cursor:pointer;
`;
const A = styled.a `
`;
const Twit = styled.img `
`;
const Insta = styled.img `
`;
const Logoimage = styled.img `
    cursor:pointer;
`; 
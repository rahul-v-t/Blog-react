import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useParams } from "react-router";       

export default function Single_page() {
    const [blogs,setBlogs] = useState([]);
    const { id } = useParams();
    const [authores, setAuthores] = useState([]);
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
            .then(function (response) {
            setBlogs(response.data.data);
            setAuthores(response.data.data.author);
            console.log(authores)
            })
            .catch(function (error) {
            });
    }, []);

    let blogValues = () =>{
        return (
            <List key={blogs.id}>
                    <Box>
                        <Round>
                            <Img src={authores.image} alt="Image" />
                        </Round>
                        <Title> {blogs.title} </Title>
                        <P> <Span> {authores.name} </Span> on 22 oct 2013</P>
                        <Para> {blogs.description} </Para>
                    </Box>
            </List>
        )
        
    }
    return (
        <>
            <Main>
               <Lists>
                    {blogValues()}
               </Lists>
           </Main>
        </>
    );
}

const Main = styled.section `
    background: #f7f7f7;
    padding-bottom:30px;
    padding-top: 70px;
`;
const Lists = styled.ul `
`;
const List = styled.li `
    margin-bottom: 130px;
`;
const Title = styled.h4 `
    text-align: center;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 20px;
}
`;
const Round = styled.div `
    position: absolute;
    width: 8%;
    top: -58px;
    left: 45%;
`;
const Img = styled.img `
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const Box = styled.div `
    width: 85%;
    margin:100px auto 0 ;
    position : relative;
    padding: 100px;
    cursor: pointer;
`;
const P = styled.p `
    text-align: center;
    color: #7e7e7e;
    font-size: 16px;
    padding-bottom: 30px;
`;
const Span = styled.span `
    color:#3475dc;
`; 
const Para = styled.p `
`;
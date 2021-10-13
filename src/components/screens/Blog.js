import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';

export default function Blog() {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        axios
            .get('https://traveller.talrop.works/api/v1/blog/')
            .then(function (response) {
            setBlogs(response.data.data);
            })
            .catch(function (error) {
            });
    }, []);

    let renderItems = () => {
        return blogs.map((blog) => (
                <List key={blog.id}>
                    <Box>
                        <Round>
                            <Img src={blog.author.image} alt="Image" />
                        </Round>
                        <Title> {blog.title} </Title>
                        <P>A Guest posted by <Span> {blog.author.name} </Span> on 22 oct 2013</P>
                        <Para> {blog.description} </Para>
                    </Box>
                </List>
        ));
    };

    return (
        <>
           <Main>
               <H2>Blog Posts</H2>
               <Lists>
                    {renderItems()}
               </Lists>
           </Main>
        </>
    )
}
const Main = styled.section `
    background: #f7f7f7;
    padding-bottom:30px;
`;
const H2 = styled.h2 `
    text-align:center;
    font-size: 52px;
    font-weight: 600;
    color: #1b1b1b;
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
    position:absolute;
    width:15%;
    top: -58px;
    left: 39%;
`;
const Img = styled.img `
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const Box = styled.div `
    background: #fff;
    width: 50%;
    margin:100px auto 0 ;
    position : relative;
    padding: 100px;
    border: 1px solid #7e7e7e;
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
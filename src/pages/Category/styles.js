import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    margin:50px;

`;

export const Categoria = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:300px;
    min-height:200px;
    padding:10px;
    background:#f5f5f5;
    border-top-left-radius:50px;
    border-bottom-right-radius:50px;
    margin:20px;

`;


export const CategoriaHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:300px;

`;

export const Back = styled(Link)`
    text-decoration:none;

`;

export const CategoriaTitle = styled.span`
    font-family:"Roboto";
    color:#34495e;
    font-weight:900;
    padding:10px;
    border-bottom:1px solid #fff;
    &:hover{
        opacity:0.5;
        cursor: pointer;
    }
`;

export const Books = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:200px;
    min-height:300px;
    padding:10px;
    background:#f5f5f5;
`;


export const BookTitle = styled.span`
    overflow:hidden;
    font-family:"Roboto";
    color:#d35400;
    text-overflow: ellipsis;
    width:200px;
    padding:5px;
    &:hover{
        opacity:0.5;
        cursor: pointer;
    }
`;

export const Button = styled.button`
    text-decoration:none;
    border:none;
    background:#f5f5f5;
    padding:10px;
    &:hover {
        background:#fff;
        border-radius:10px;
        cursor: pointer;
        
    }
`
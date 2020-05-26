import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display:flex;
    background: #3498db;
    justify-content:space-between;
    align-items:center;
    padding:10px;
`;

export const View = styled(Link)`
    display:flex; 
    justify-content:center; 
    align-items:center;
    text-decoration:none;
`;

export const Logo = styled.img`
    background:#fff;
    border-radius:20px;
    padding:5px;
`;

export const Title = styled.span`
    font-family:"Montserrat"; 
    color:#fff; 
    padding-left:10px;
`

export const Button = styled.button`
    padding:5px;
    border-radius:5px;
    font-size:15px;
    font-family:"Montserrat";
    border-color:#3498db; 
    background:#2980b9;
    color:#fff;
    &:hover {
        color: #3498db;
        background:#fff;
        cursor: pointer;
    }
`
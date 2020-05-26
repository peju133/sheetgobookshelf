import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:50px;

`;

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:50px;
`;

export const FieldSet = styled.fieldset`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border:none;

`;

export const Input = styled.input`
    width:300px;
    height:30px;
    margin:5px;
    border:0.5px solid #ecf0f1;
    border-radius:5px;
    padding:5px;
    font-size:13px;
    color:rgba(100,100,100,1);
`;

export const Text = styled.span`
    width:300px;
    height:30px;
    margin:5px;
    border:0.5px solid #ecf0f1;
    border-radius:5px;
    padding:5px;
    font-size:13px;
    color:rgba(100,100,100,1);

`;

export const InputArea = styled.textarea`
    width:300px;
    margin:5px;
    border:0.5px solid #ecf0f1;
    border-radius:5px;
    padding:5px;
    resize:none;

`;

export const Select = styled.select`
    width:300px;
    height:30px;
    margin:5px;
    border:0.5px solid #ecf0f1;
    border-radius:5px;
    padding:5px;
    font-size:13px;
    color:rgba(100,100,100,1);
`;

export const Info = styled.span`
    text-decoration:none;
    font-family:"Roboto";
    color:#d35400;
    font-size:10px;
`;


export const Button = styled.button`
    padding:5px;
    border-radius:5px;
    font-size:15px;
    font-family:"Montserrat";
    border-color:#3498db; 
    background:#2980b9;
    color:#fff;
    margin:10px;
    &:hover {
        color: #3498db;
        background:#fff;
        cursor: pointer;
    }
`
export const BackView = styled.div`
    width:300px;

`;

export const Back = styled(Link)`
    text-decoration:none;

`;

export const BackText = styled.span`
    text-decoration:none;
    font-family:"Montserrat";
    font-size:13px;
    color:rgba(100,100,100,0.5);
    padding:5px;
`;
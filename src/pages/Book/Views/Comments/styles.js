import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  border-top:1px solid #f5f5f5;
  width:100%;
`;

export const InputArea = styled.textarea`
    width:100%;
    height:60px;
    border:0.5px solid #ecf0f1;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    padding:5px;
    resize:none;

`;

export const Form = styled.form`
    display:flex;
    width:100%;
    flex-direction: row;
    margin-top:20px;
`;

export const FormView = styled.div`
    display:flex;
    width:100%;
    flex-direction: column;
    `;

export const Info = styled.span`
    text-decoration:none;
    font-family:"Roboto";
    color:#d35400;
    font-size:10px;
`;

export const Button = styled.button`
    padding:10px;
    height:60px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    font-size:15px;
    font-family:"Montserrat";
    border-color:#3498db; 
    background:#2980b9;
    color:#fff;
    /* margin:10px; */
    &:hover {
        color: #3498db;
        background:#fff;
        cursor: pointer;
        
    }
`
export const Commentaries = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content:flex-start;
  align-items:center;
  margin-top:40px;
`;

export const Comment = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  padding:10px;
  justify-content:center;
  align-items:flex-start;
`;

export const CommentView = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content:space-between;
  align-items:center;
`;

export const CommentUser = styled.span`
  font-family:"Montserrat";
  font-size:10px;
  color:rgba(100,100,100,0.5);
`;

export const CommentBody = styled.span`
  font-family:"Montserrat";
  font-size:14px;
  color:rgba(100,100,100,1);
`;

export const CommentDate = styled.span`
  font-family:"Montserrat";
  font-size:10px;
  color:rgba(100,100,100,0.5);
`;

export const ButtonRemove = styled.button`
    text-decoration:none;
    border:none;
    padding:10px;
    &:hover {
        cursor: pointer;
        
    }
`
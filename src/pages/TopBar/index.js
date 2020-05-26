import React, { useEffect, useState } from 'react';
import { Container, View, Logo, Title, Button } from './styles';
import logo from '../../assets/images/book.png';
import { withRouter } from 'react-router-dom';
import { useApp } from '../../configs/contexts/app';

const TopBar = (props) => {

  const { moveToNewBook } = useApp();
  const { pathname } = props.location;
  return(
    <Container>
        <View to="/Home">
            <Logo src={logo} width={40}/>
            <Title style={{}}>Sheetgo Bookshelf</Title>
        </View>
        {pathname =="/Home" && <Button onClick={()=>moveToNewBook(props.history)}>New Book</Button>}
    </Container>
  );
}

export default withRouter(TopBar);
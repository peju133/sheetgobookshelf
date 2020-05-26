import React, { useEffect, useState } from 'react';
import { Container, Categoria, CategoriaTitle, Books, BookTitle, 
  CategoriaHeader, Button, Back } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import { useApp } from '../../configs/contexts/app';

const Category = (props) => {

  const  { category, selectBook, removeBook, sortArray  } = useApp();
  const [sort, setSort] = useState({sort:true, catId:0});

  const goBook=( book )=>{
    selectBook(book);
    props.history.push('/Book/view');
  }

  const newOrder = ( id )=>setSort({sort:!sort.sort, catId:id});

  return(
    <Container>
      <Categoria>
        <CategoriaHeader>
          <Back to="/Home">
            <FontAwesomeIcon icon={Icon.faArrowLeft}  color="#d35400"/>
          </Back>
          <CategoriaTitle>{category.desc}</CategoriaTitle>
          <Button onClick={()=>newOrder(category.id)}>
            <FontAwesomeIcon icon={Icon.faSort}  color="#3498db"/>
          </Button>
        </CategoriaHeader>
        <Books>
          {category.books && sortArray(category.books, sort.sort, category.id, sort).map(l => <BookTitle key={l.id} onClick={()=>goBook(l)} >{l.title}</BookTitle>)}
      </Books>
      </Categoria>
    </Container>
  );
}

export default Category;
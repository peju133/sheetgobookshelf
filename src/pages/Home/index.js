import React, { useState } from 'react';
import { Container, Categoria, CategoriaTitle, CategoriaHeader, Books, BookTitle, BooksView, Button } from './styles';
import { useApp } from '../../configs/contexts/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'

const Home = ( props ) => {

    const { categories, selectCategory, selectBook, removeBook, sortArray } = useApp();
    const [sort, setSort] = useState({sort:true, catId:0});

    const goCategory=( item )=>{
        selectCategory(item);
        props.history.push('/Category');
    }
    
    const goBook=( book )=>{
        selectBook(book);
        props.history.push('/Book/view');
    }

    const goBookEdit=( book )=>{
        selectBook(book);
        props.history.push('/Book/edit');
    }


    const newOrder = ( id )=>setSort({sort:!sort.sort, catId:id});

  return(
      <Container>
          {categories.map(item =>{
              return(
                <Categoria key={item.id}>
                    <CategoriaHeader>
                        <div/>
                        <CategoriaTitle onClick={()=>goCategory(item)}>{item.desc}</CategoriaTitle>
                        <Button onClick={()=>newOrder(item.id)}>
                            <FontAwesomeIcon icon={Icon.faSort}  color="#3498db"/>
                        </Button>
                    </CategoriaHeader>
                    <Books>
                        {sortArray(item.books, sort.sort, item.id, sort).map(l => 
                        <BooksView key={l.id}>
                            <BookTitle onClick={()=>goBook(l)} >{l.title}</BookTitle>
                            <Button onClick={()=>goBookEdit(l)}>
                                <FontAwesomeIcon icon={Icon.faEdit}  color="#3498db"/>
                            </Button>
                            <Button onClick={()=>removeBook(l.id)}>
                                <FontAwesomeIcon icon={Icon.faTrash}  color="#3498db"/>
                            </Button>
                        </BooksView>)}
                    </Books>
                </Categoria>
              )
          })}
      </Container>
  );
}

export default Home;
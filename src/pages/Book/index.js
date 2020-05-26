import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Form, FieldSet, Input, InputArea, Select, Info, Button, Text, BackView, Back, BackText } from './styles';
import service from '../../service';
import { useApp } from '../../configs/contexts/app';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import Comments from './Views/Comments';

const Book = ({history,match}) => {

  const type = match.params.type;
  const { book, loadCategories } = useApp();
  const [ categories, setCategories ] = useState([])
  const [ editable, setEditable ] = useState(true);
  
  useEffect(() => {
    
    if(type == "view"){
      setEditable(false);
    }else{
      setEditable(true);
    }
   getCategories();
  }, [type])

  const createBook = ( values ) =>{
    const response = service.createBook({
        timestamp : Date.now(),
        ...values,
        deleted:false
      });
        loadCategories();
        alert(response);
        history.push('/Home');
}

  const getCategories = () =>{
    const cat = service.getCategories();
    setCategories(cat);
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
    author: Yup.string().required('Author is Required'),
  });

  return(
      <Container>
      <BackView>
        <Back to="/Home">
          <FontAwesomeIcon icon={Icon.faArrowLeft}  color="#d35400"/>
          <BackText>Home</BackText>
        </Back>
      </BackView>
      <Formik
      initialValues={book}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        createBook(values)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
        <FieldSet disabled={!editable}>
          <Input
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Title"
          />
          <Info>
            {errors.title && touched.title && errors.title}
          </Info>
          <InputArea
            rows={4}
            maxLength={100}
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            placeholder="Description"
          />
          <Info>
            {errors.description && touched.description && errors.description}
          </Info>
          <Input
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.author}
            placeholder="Author"
          />
          <Info>
            {errors.author && touched.author && errors.author}
          </Info>
          {type =="view" && <Text>Created in {moment(book.timestamp).format("DD/MM/YYYY")}</Text>}
          <Select
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
          >
          {categories.map(item=> <option key={item.id} value={item.id ? item.id : ''}>{item.desc}</option>)}
            
          </Select>
          </FieldSet>
          {editable && <Button type="submit">
            {type == "edit"?"Save":"New Book"}
          </Button>}
        </Form>
      )}
    </Formik>
    { !editable && <Comments Book={book}/>}
      </Container>
  );
}

export default Book;
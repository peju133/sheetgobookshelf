import React from 'react';
import { Container, Form, FormView, InputArea, Info, Button,
Commentaries, Comment, CommentUser, CommentBody, CommentView,
CommentDate, ButtonRemove } from './styles';
import { Formik } from 'formik';
import moment from 'moment';
import service from '../../../../service';
import * as Yup from 'yup';
import { useApp } from '../../../../configs/contexts/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'

const Comments =({ Book })=>{

    const { selectBook, loadCategories } = useApp();

    const newComment=( values )=>{
        const response = service.createComments(values);
        if(response.book){
            selectBook(response.book);
            loadCategories();
            alert(response.msg);
        }else{
            alert(response.msg);
        }
    }

    const removeComment=( values )=>{
        const response = service.removeComment(values);
        if(response.book){
            selectBook(response.book);
            loadCategories();
            alert(response.msg);
        }else{
            alert(response.msg);
        }
    }

    const validationSchema = Yup.object().shape({
        body:Yup.string().required("Comments is Required")
    });

    const _renderItem = ( item ) =>{
        if(!item.deleted){

            return(
                 <Comment key={item.id}>
                <CommentView>
                    <CommentUser>Anonimous</CommentUser>
                    <CommentDate>{moment(item.timestamp).format("DD/MM/YYYY")}</CommentDate>
                </CommentView>
                <CommentView>
                    <CommentBody>{item.body}</CommentBody>
                    <ButtonRemove onClick={()=>removeComment(item)}>
                        <FontAwesomeIcon icon={Icon.faTrash}  color="#3498db"/>
                    </ButtonRemove>
                </CommentView>
                </Comment>
            )
        }
    }

    return(
    <Container>
        <Formik
        initialValues={{ parentId:Book.id, author:Book.author, body:""}}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
            newComment(values);
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
        <FormView>
          <InputArea
            rows={4}
            maxLength={200}
            name="body"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
            placeholder="Comments..."
          />
          <Info>
            {errors.body && touched.body && errors.body}
          </Info>
        </FormView>
        <Button type="submit">
        Save
        </Button>
        </Form>
      )}
    </Formik>
    <Commentaries>
        {(Book && Book.comments) && Book.comments.map(_renderItem)}
    </Commentaries>
    </Container>
    )
}

export default Comments;
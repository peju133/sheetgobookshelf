import React from 'react';

class service {

    // Get all categoryies and books and comments
    getAll(){
        const cat = [
            { id:null, desc:"Without Category"},
            { id:1, desc:"Currently Reading"},
            { id:2, desc:"Want to Read"},
            { id:3, desc:"Read"},
        ]
        let books = JSON.parse(localStorage.getItem("@sheetgobookshelf-books"));
        if( books == null){
            books = [];
        }
        cat.forEach(cat => {
            let b = [];
            books.forEach(book=>{
                if(cat.id == book.category && !book.deleted){
                    b.push(book);
                }
            })
           cat.books = b;
        });
        return cat;
    }
    // Get only categories
    getCategories() {
        const cat = [
            { id:null, desc:"Without Category"},
            { id:1, desc:"Currently Reading"},
            { id:2, desc:"Want to Read"},
            { id:3, desc:"Read"},
        ]
        return cat;
    }

    //Create and update book
    createBook(values){
        try {
            //Get all books 
            let books = JSON.parse(localStorage.getItem("@sheetgobookshelf-books"));
                
            // If contains id - Edit
            if(values.id){
                //Remove register with id    
                books =  books.filter( b =>{
                    return b.id != values.id;
                })
                if(values.category == ""){
                    values.category = null;
                }
                books.push(values);
                localStorage.setItem(`@sheetgobookshelf-books`, JSON.stringify(books))
                return "The book has been successfully updated"
    
            }
                let book = {
                    id : books == null ? 1 : books.length + 1,
                    timestamp : Date.now(),
                    title : values.title,
                    description :values.description,
                    author :values.author,
                    category :values.category,
                    deleted:false
                }
            
            if(books == null){
                books = [];
                books.push(book);
                localStorage.setItem(`@sheetgobookshelf-books`, JSON.stringify(books))
                return "Book inserted successfully"
            }else{
                books.push(book);
                localStorage.setItem(`@sheetgobookshelf-books`, JSON.stringify(books))
                return "Book inserted successfully"
            }
        } catch (error) {
            return "Error when inserting the book";
        }
    }
    //remove book 
    removeBook(id){
        try {
            
            let books = JSON.parse(localStorage.getItem("@sheetgobookshelf-books"));
    
            if(books == null){
                return "The book was not found"
            }
            //modify book to deleted 
            books.forEach(b=>{
                if(b.id == id){
                   b.deleted =true
                 }
            })

            localStorage.setItem("@sheetgobookshelf-books", JSON.stringify(books));

        } catch (error) {
            
        }


    }

    //Create comments
    createComments(values){
        try {
            let books = JSON.parse(localStorage.getItem("@sheetgobookshelf-books"));
            var response = null;
            books.forEach( b =>{
                if(b.id == values.parentId){
                    
                    let comment = {
                        id :  b.comments ? b.comments.length+1 : 1,
                        parentId: values.parentId,
                        timestamp : Date.now(),
                        body : values.body,
                        author :values.author,
                        deleted:false
                    }
                    if(b.comments == null){
                        let comments = [];
                        comments.push(comment);
                        b.comments = comments;
                    }else{
                        b.comments.push(comment);
                    }
                    response = {book:b, msg:"comment successfully added"};
                    localStorage.setItem("@sheetgobookshelf-books", JSON.stringify(books));
                    
                }
            });
            return response;
        } catch (error) {
            response = { msg:"It was not possible to add the comment"};
        }
    }

    //remove comments and return the new array without the comment to update
    removeComment(values){
        try {
            let books = JSON.parse(localStorage.getItem("@sheetgobookshelf-books"));
            var response = null;
            //modify comment to deleted 
            books.forEach(b=>{
                if(b.id == values.parentId){
                    b.comments.forEach( c =>{
                        if(c.id == values.id){
                           c.deleted = true;
                       }
                   });
                   response = { book:b, msg:"comment successfully removed"};
                 }
            });

            localStorage.setItem("@sheetgobookshelf-books", JSON.stringify(books));
            return response;

        } catch (error) {
            response = { msg:"It was not possible to remove the comment"};
        }


    }


}

export default new service();
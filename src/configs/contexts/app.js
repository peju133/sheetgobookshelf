import React,{ createContext, useState, useEffect, useContext } from 'react';
import service from '../../service';


const AppContext = createContext({});

export const AppProvider = ({children}) =>{

    const [ categories, setCategories ] = useState([]);
    const [ category, setCategory ] = useState([]);
    const [ book, setBook ] = useState({});

    useEffect(() => {
        async function loadStorageData(){
            loadCategories();

            const catSelect = JSON.parse(localStorage.getItem('@sheetgobookshelf-category'));
            const bookSelect = JSON.parse(localStorage.getItem('@sheetgobookshelf-book'));

            if(catSelect){
                setCategory(catSelect);
            }
            if(bookSelect){
                setBook(bookSelect);
            }
        }
        loadStorageData();
    }, [])

    function loadCategories(){
        setCategories(service.getAll());
    }

    //Select the category to display on the category page
    function selectCategory( cat ){
        setCategory(cat)
        localStorage.setItem('@sheetgobookshelf-category', JSON.stringify(cat));
    }

    //Select the book to display on the book page
    function selectBook( book ){
        setBook(book)
        localStorage.setItem('@sheetgobookshelf-book', JSON.stringify(book));
    }

    //Move to Page to add new Book
    function moveToNewBook( history ){
        localStorage.removeItem('@sheetgobookshelf-book');
        setBook({});
        history.push('/Book/new');
    }

    //Remove book and reload the page home
    function removeBook( id ){
        service.removeBook(id);
        loadCategories();
    }

    const sortArray=(arr, ord ,catId, sort)=>{
        if(ord && catId == sort.catId){
            return arr.sort((a, b) =>(a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1 );
        }
        if(!ord && catId == sort.catId){
            return arr.sort((a, b) =>(a.title.toUpperCase() < b.title.toUpperCase()) ? 1 : -1 );
        }
        return arr.sort((a, b) =>(a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1 );
     
    }

    return(
        <AppContext.Provider value={{categories, 
        category, 
        book, 
        loadCategories, 
        selectCategory, 
        selectBook,
        moveToNewBook,
        removeBook,
        sortArray
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp(){
    const context = useContext(AppContext);
    return context;
};
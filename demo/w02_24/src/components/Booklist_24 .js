import{useState}from'react';
import {books_data} from "./books_data"
import Book_24 from "./Book_24"

const Booklist_24=()=>{
  console.log('books_data',books_data);
  const[books,setBooks]=useState(books_data);
  return(
    <section className="booklist">
      {
        books.map((book)=>{
          const {id ,img,title,author}=book
          return(
            <Book_24
            key={id}
            img={img}
            title={title}
            author={author}
            />
          )
        })
      }
   
    </section>
  )
}

export default Booklist_24;
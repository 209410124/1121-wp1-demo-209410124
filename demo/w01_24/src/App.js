
import './App.css';

import Book_24 from './components/Book_24';

const App=()=> {
  return (
<section className="booklist">
  <Book_24
  key='1'
  img="https://m.media-amazon.com/images/I/816epC1xQDS._SL1500_.jpg" alt="" 
  title="The Dog Encyclopedia for Kids"
  author=" Tammy Gagne"/>
  <Book_24
   key='2'
   img="https://m.media-amazon.com/images/I/81eD8dHXQ2L._SY342_.jpg" alt="" 
   title="Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man #11): From the Creator of Captain Underpants"
   author="作者 Dav Pilkey "/>
  <Book_24
   key='3'
   img="https://m.media-amazon.com/images/I/71S9kMPW89L._SY342_.jpg" alt="" 
   title="Chicken Soup for the Soul: Lessons Learned from My Dog"
   author=" Amy Newmark "/>
</section>
  );
}

const Book=()=>{
  return(
   <article className="book">
    <img src="https://m.media-amazon.com/images/I/816epC1xQDS._SL1500_.jpg" alt="" />
    <h1>The Dog Encyclopedia for Kids</h1>
    <h4>作者 Tammy Gagne </h4>
   </article> 
  )
}

export default App;

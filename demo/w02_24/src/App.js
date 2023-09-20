
import './App.css';
import Booklist_24 from './components/Booklist_24 ';
import Book_24 from './components/Book_24';

const App=()=> {
  return (
<Booklist_24/>
  );
}

const Threebooks=()=>{
  return(
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
     <Book_24
     key='4'
     img="https://m.media-amazon.com/images/I/71yNgTMEcpL._SY466_.jpg" alt="" 
     title="Lessons in Chemistry: A Novel "
     author="  Bonnie Garmus "/>
     <Book_24
     key='5'
     img="https://m.media-amazon.com/images/I/91uo-LOHTcL._SY385_.jpg" alt="" 
     title="Come Hungry: Salads, Meals, and Sweets for People Who Live to Eat"
     author=" Melissa Ben-Ishay "/>
     <Book_24
     key='6'
     img="https://m.media-amazon.com/images/I/91uo-LOHTcL._SY385_.jpg" alt="" 
     title="Come Hungry: Salads, Meals, and Sweets for People Who Live to Eat Hardcover"
     author="  Melissa Ben-Ishay "/>
     
  </section>
    );
  
  }

export default App;

import{useState} from 'react';
import './App.css';
import menu_data from './data';
import  Menu_24 from'./components/Menu_24'
import Category_24 from './components/Category_24';
const App=()=> {
  const[menu,setMenu]=useState(menu_data);
  console.log('menu',menu);
  return (
<section className="menu">
       
        <div className="title">
          <h2>our menu - 209410124</h2>
          <div className="underline"></div>
        </div>   
        <Category_24 />
     <Menu_24 menu={menu} />
      </section>
  );
}



export default App;

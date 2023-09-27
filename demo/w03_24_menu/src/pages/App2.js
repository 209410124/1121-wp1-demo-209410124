import{useState} from 'react';
import './App.css';
import menu_data from './data';
const App=()=> {
  const[menu,setMenu]=useState(menu_data);
  console.log('menu',menu);
  return (
<section className="menu">
       
        <div className="title">
          <h2>our menu - 209410124</h2>
          <div className="underline"></div>
        </div>   
        <div className="btn-container"><button type="button" className="filter-btn" data-id="all">all</button><button type="button" className="filter-btn" data-id="breakfast">breakfast</button><button type="button" className="filter-btn" data-id="lunch">lunch</button><button type="button" className="filter-btn" data-id="dinner">dinner</button><button type="button" className="filter-btn" data-id="dessert">dessert</button><button type="button" className="filter-btn" data-id="shakes">shakes</button></div>    
        <div className="section-center">
         {menu.map((item) => { 
          const{id,title,price,img,desc}=item;
          return (
            <article className="menu-item" key={id}>
            
            <img 
            src={img}
            alt={title}
            className="photo"/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">
               {desc}
              </p>
            </div>
          </article>
          );
         })}

         </div>
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

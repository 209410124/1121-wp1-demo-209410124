import React from 'react';

const Category_24 = (props) => {
  // Log a message or any data you need here
  console.log('Category_24',Category_24);

  return (
    <div className="btn-container">
      <button type="button" className="filter-btn" data-id="all">
        all
      </button>
      <button type="button" className="filter-btn" data-id="breakfast">
        breakfast
      </button>
      <button type="button" className="filter-btn" data-id="lunch">
        lunch
      </button>
      <button type="button" className="filter-btn" data-id="dinner">
        dinner
      </button>
      <button type="button" className="filter-btn" data-id="dessert">
        dessert
      </button>
      <button type="button" className="filter-btn" data-id="shakes">
        shakes
      </button>
    </div>
  );
};

export default Category_24;

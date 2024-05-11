import React, { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);
  const [predatorFilter, setPredatorFilter] = useState(false);
  const [preyFilter, setPreyFilter] = useState(false);
  const [drawingFilter, setDrawingFilter] = useState(false);
  const [paintingFilter, setPaintingFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

  // Add prices state
  const [prices, setPrices] = useState({
    0: '$35',
    1: '$15',
    2: '$7',
    3: '$13',
    4:'$20',
    5:'$10',
    6:'$5',
    7:'$15',
    8:'$7',
    9: '$9',
    10:'$21',
    11:'$23'
  });
  const getImageTitle = (index) => {
    switch (index) {
      case 0:
        return 'Fox';
      case 1:
        return 'Hare';
      case 2:
        return 'Yak';
      case 3:
        return 'Lion';
      case 4:
        return 'Kitten';
      case 5:
        return 'Bunny';
      case 6:
        return 'Eagle';
      case 7:
        return 'Elk';
      case 8:
        return 'Chill Lion';
      case 9:
        return 'Squirell';
      case 10:
        return 'Hyena';
      case 11:
        return 'Hippo';
      default:
        return '';
    }
  };
  const handleDeleteItem = (index) => {
    const selectedItemTitle = getImageTitle(index);
    const updatedCartItems = cartItems.filter((item) => item !== selectedItemTitle);
    setCartItems(updatedCartItems);
  };

  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (index) => {
    setSelected(index);
    const selectedItemTitle = getImageTitle(index);
    setCartItems([...cartItems, selectedItemTitle]);
  };

  const handleItemClick = (index) => {
    setSelected(index);
  };

  const handlePredatorFilterChange = (event) => {
    setPredatorFilter(event.target.checked);
    setSelected(null); // Reset the selected image when changing the filter
  };

  const handlePreyFilterChange = (event) => {
    setPreyFilter(event.target.checked);
    setSelected(null); // Reset the selected image when changing the filter
  };

  const handleDrawingFilterChange = (event) => {
    setDrawingFilter(event.target.checked);
    setSelected(null); // Reset the selected image when changing the filter
  };

  const handlePaintingFilterChange = (event) => {
    setPaintingFilter(event.target.checked);
    setSelected(null); // Reset the selected image when changing the filter
  };

  const handleSortButtonClick = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const applyFilter = (index) => {
    if (!predatorFilter && !preyFilter && !drawingFilter && !paintingFilter) {
      return true; // No filters applied, show all images
    }
    if (predatorFilter && (index === 0 || index === 3 || index === 6 || index === 10 || index === 11 || index === 8)) {
      return true; // Show images with index 0 and 2 (predators)
    }
    if (preyFilter && (index === 1 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9 )) {
      return true; // Show image with index 1 (prey)
    }
    if (drawingFilter && (index === 9 || index === 8 || index === 4 || index === 5 || index === 6|| index === 7)) {
      return true; // Show image with index 2 (drawing)
    }
    if (paintingFilter && (index === 1 || index === 0 || index === 2 || index === 10 || index === 11 || index === 3)) {
      return true; // Show images with index 0 and 1 (paintings)
    }
    return false; // Image doesn't match the selected filters
  };
  const sortedIndices = Object.keys(prices).sort((a, b) => {
    const priceA = parseFloat(prices[a].substring(1)); // Remove the '$' sign and convert to number
    const priceB = parseFloat(prices[b].substring(1));
    if (sortOrder === 'asc') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return (
    <div>
      <header className="header">
        <h1 className="header-text">Welcome to Keyan's Art Shop!</h1>
      </header>
      <div className="cart">
      <h3 >Cart : 
      {cartItems.map((item, index) => ( <p key={index} className='cart-item'>{item},</p> ))} </h3>
      </div>
      <div className="filter">
        <label>
          Predator:
          <input
            type="checkbox"
            checked={predatorFilter}
            onChange={handlePredatorFilterChange}
          />
        </label>
        <label>
          Prey:
          <input
            type="checkbox"
            checked={preyFilter}
            onChange={handlePreyFilterChange}
          />
        </label>
        <br />
        <label>
          Drawing:
          <input
            type="checkbox"
            checked={drawingFilter}
            onChange={handleDrawingFilterChange}
          />
        </label>
        <label>
          Painting:
          <input
            type="checkbox"
            checked={paintingFilter}
            onChange={handlePaintingFilterChange}
          />
        </label>
      </div>
      <button onClick={handleSortButtonClick}>Sort by Price</button>
        <div className="content">
          {selected !== null ? (
            <div>
              {selected === 0 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint1.png`}
                  alt={`Image1`}
                />
                  <h2>Fox</h2>
                  <p>Painting, Predator</p>
                </>
              )}
              {selected === 1 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint2.png`}
                  alt={`Image1`}
                />

                  <h2>Hare</h2>
                  <p>Painting, Prey</p>
                </>
              )}
              {selected === 2 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint3.png`}
                  alt={`Image1`}
                />
                  <h2>Yak</h2>
                  <p>Painting, Prey</p>
                </>
              )}
              {selected === 3 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint4.png`}
                  alt={`Image1`}
                />
                  <h2>Lion</h2>
                  <p>Painting, Predator</p>
                </>
              )}
              {selected === 4 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint5.png`}
                  alt={`Image1`}
                />
                  <h2>Kitten</h2>
                  <p>Drawing, Prey</p>
                </>
              )}
              {selected === 5 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint6.png`}
                  alt={`Image1`}
                />
                  <h2>Bunny</h2>
                  <p>Drawing, Prey</p>
                </>
              )}
              {selected === 6 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint7.png`}
                  alt={`Image1`}
                />
                  <h2>Eagle</h2>
                  <p>Drawing, Predator</p>
                </>
              )}
              {selected === 7 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint8.png`}
                  alt={`Image1`}
                />
                  <h2>Elk</h2>
                  <p>Drawing, Prey</p>
                </>
              )}
              {selected === 8 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint9.png`}
                  alt={`Image1`}
                />
                  <h2>Chill Lion</h2>
                  <p>Drawing, Predator</p>
                </>
              )}
              {selected === 9 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint10.png`}
                  alt={`Image1`}
                />
                  <h2>Squirell</h2>
                  <p>Drawing, Prey</p>
                </>
              )}
              {selected === 10 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint11.png`}
                  alt={`Image1`}
                />
                  <h2>Hyena</h2>
                  <p>Painting, Predator</p>
                </>
              )}
              {selected === 11 && (
                <>
                <img
                  className={`right-image`}
                  src={`paint12.png`}
                  alt={`Image1`}
                />
                  <h2>Hippo</h2>
                  <p>Painting, Predator</p>
                </>
              )}
              <p>Price: {prices[selected]}</p> {/* Display the price */}
            </div>
          ) : (
            <h2 className="select-message">Please select an art piece!</h2>
          )}
        </div>
        <div className="image-container">
          {sortedIndices.map((index) => {
           index = parseInt(index);
           return applyFilter(index) && (
              <div key={index} className="art-item">
                <img
                  className={`sidebar-image ${selected === index ? 'selected' : ''}`}
                  src={`paint${index +1}.png`}
                  alt={`Image ${index +1}`}
                  onClick={() => handleItemClick(index)}
                />
                <p>{prices[index]}</p>
                <button onClick={() => handleAddToCart(index)}>+ Add to cart</button>
                <button onClick={() => handleDeleteItem(index)}>-Delete from cart</button>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
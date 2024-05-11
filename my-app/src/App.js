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
  const getImageProperties = (index) => {
    switch (index) {
      case 0:
        return 'Painting, Predator';
      case 1:
        return 'Painting, Prey';
      case 2:
        return 'Painting, Prey';
      case 3:
        return 'Painting, Predator';
      case 4:
        return 'Drawing, Prey';
      case 5:
        return 'Drawing, Prey';
      case 6:
        return 'Drawing, Predator';
      case 7:
        return 'Drawing, Prey';
      case 8:
        return 'Drawing, Predator';
      case 9:
        return 'Drawing, Prey';
      case 10:
        return 'Painting, Predator';
      case 11:
        return 'Painting, Predator';
      default:
        return '';
    }
  };
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
        return 'Squirrel';
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
    const itemIndex = cartItems.findIndex((item) => item === selectedItemTitle);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
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
    if (predatorFilter && drawingFilter && (index === 8 || index === 6)) {
      return true; // No filters applied, show all images
    }
    if (preyFilter && drawingFilter && (index === 9 || index === 4 || index === 5 || index === 7)) {
      return true; // No filters applied, show all images
    }
    if (predatorFilter && paintingFilter && (index === 11 || index === 10 || index === 0 || index == 3)) {
      return true; // No filters applied, show all images
    }
    if (preyFilter && paintingFilter && (index === 1 || index === 2 )) {
      return true; // No filters applied, show all images
    }
    if (predatorFilter && !paintingFilter && !drawingFilter && (index === 0 || index === 3 || index === 6 || index === 10 || index === 11 || index === 8)) {
      return true; // Show images with index 0 and 2 (predators)
    }
    if (preyFilter && !paintingFilter && !drawingFilter && (index === 1 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9 )) {
      return true; // Show image with index 1 (prey)
    }
    if (drawingFilter && !predatorFilter && !preyFilter && (index === 9 || index === 8 || index === 4 || index === 5 || index === 6|| index === 7)) {
      return true; // Show image with index 2 (drawing)
    }
    if (paintingFilter && !predatorFilter && !preyFilter && (index === 1 || index === 0 || index === 2 || index === 10 || index === 11 || index === 3)) {
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
      <div className='center'>
      <div className='Left'>
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
                <p>{prices[index]}, {getImageTitle(index)}, {getImageProperties(index)}</p>
                <button onClick={() => handleAddToCart(index)}>+ Add to cart</button>
                <button onClick={() => handleDeleteItem(index)}>-Delete from cart</button>
              </div>
            )
          })}
        </div>
        </div>
        <div className="content">
          {selected !== null ? (
            <div>
              <img
                  className={`right-image`}
                  src={`paint${selected +1}.png`}
                  alt={`Image1`}
                />
              <h2>{getImageTitle(selected)}</h2>
              <p>{getImageProperties(selected)}</p>
              <p>Price: {prices[selected]}</p>
            </div>
          ) : (
            <h2 className="select-message">Please select an art piece!</h2>
          )}
        </div>
        </div>
    </div>
  );
}

export default App;
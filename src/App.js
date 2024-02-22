import './App.css';
import MenuItem from './components/MenuItem';
import React from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


export default function App() {

  // Set the size of the array to the number of menu items
  const [order, setOrder] = useState(new Array(menuItems.length).fill(0));

  // Creates pop-up of order when order button is clicked
const orderButton = () => {
  // create overlay in middle of screen
  var overlay = document.querySelector('.overlay');
  if (!overlay.style.display || overlay.style.display === 'none') {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
  // Disable Order button until close button is clicked
  var orderButton = document.querySelector('.order-button');
  orderButton.disabled = true;
  // Disable Clear All button until close button is clicked
  var clearButton = document.querySelector('.clear-button');
  clearButton.disabled = true;
  // Disable all + and - buttons until close button is clicked
  var plusButtons = document.querySelectorAll('.btn-secondary');
  plusButtons.forEach((button) => {
    button.disabled = true;
  });

  // Disable scrolling
  document.body.style.overflow = 'hidden';
}

const startUp_Close = () => {
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  // Enable Order button
  var orderButton = document.querySelector('.order-button');
  orderButton.disabled = false;
  // Enable Clear All button
  var clearButton = document.querySelector('.clear-button');
  clearButton.disabled = false;
  // Enable all + and - buttons
  var plusButtons = document.querySelectorAll('.btn-secondary');
  plusButtons.forEach((button) => {
    button.disabled = false;
  });

  // Enable scrolling
  document.body.style.overflow = 'scroll';
}

  return (
    <div>
      <img className="logo" src="images/shoplogo.png" alt="logo" />
      <div className="row">
        <div className="row flavor-txt-1">
          <h3> The Best Japanese Food This Side of the Colorado River</h3>
        </div>
        <div className="row flavor-txt-2">
          <h3> Our Menu</h3>
        </div>
      </div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */
        // Send in order and setOrder as props to MenuItem
        menuItems.map((item) => (
          <MenuItem id={item.id} title={item.title} description={item.description} price={item.price} imageName={item.imageName} order={order} setOrder={setOrder}/>
        ))
}
      </div>
      {/* Add empty space at bottom */}
      <div className="row">
        <div className="col-12">
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* Bottom bar that is sticky, with two buttons. One orders the items in order, the other clears all of the items from order */}
      <div className="row bottom-bar">
        <div className='col-6'>
          <h3>Total: ${order.reduce((acc, curr, index) => acc + curr * menuItems[index].price, 0).toFixed(2)}</h3>
        </div>
        <div className='col-2'>
          {/* On click, display the html from orderButton */}
          <button className="order-button" onClick={orderButton}>Order</button>
        </div>
        <div className='col-4'>
          <button className="clear-button" onClick={() => setOrder(new Array(menuItems.length).fill(0))}>Clear All</button>
        </div>
      </div>
      <div className="overlay" style={{ display: 'none' }}>
        <div className="order-popup">
          {/* If all items in order are 0, display No items in cart, otherwise Order placed */}
          {order.every((item) => item === 0) ? <h2>No items in cart</h2> : <h2>Order Placed!</h2>}
          {/* Take the value in order and that item's index, and use it to display the number of the  item ordered, and using the index get the title of the item from MenuItems. Only show the item if there are more than 0 items*/}
          {order.map((item, index) => (
            item > 0 && <p>{item} {menuItems[index].title}</p>
          ))}
          {/* Button to close popup */}
          <button onClick={startUp_Close}>Close</button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
const MenuItem = ({ title, description, price }) => {
    return (
        <div className='row item'>
            <div className='col-4'>
                <img src={'images/' + title + '.png'} className='card-img-top' alt={title} />
            </div>
            <div className='col-1'></div>
            <div className='col-7'>
                <div className='row'>
                    <h2>{title}</h2>
                </div>
                <div className='row'>
                    <p>{description}</p>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <p>{'$' + price}</p>
                    </div>
                    <div className='col-4'>
                        <button type='button' className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MenuItem;

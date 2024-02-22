import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
const MenuItem = ({ id, title, description, price, imageName, order, setOrder }) => {
    
    const handleMinusClick = () => {
        if (Array.isArray(order) && order[id - 1] > 0) {
            // copy the order array and subtract 1 from the element at id - 1
            var newOrder = order.slice();
            newOrder[id - 1] -= 1;
            setOrder(newOrder);
        }
    };

    const handlePlusClick = () => {
        if (Array.isArray(order)) {
            // copy the order array and add 1 to the element at id - 1
            var newOrder = order.slice();
            newOrder[id - 1] += 1;
            setOrder(newOrder);
        }
    };

    const getOrder = () => {
        if (Array.isArray(order)) {
            return order[id - 1];
        }
        return 0;
    }

    return (
        <div className='row item'>
            <div className='col-4'>
                <img src={'images/' + imageName} className='card-img-top' alt={title} />
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
                        {/* have a - and a + button with the current total in the middle of them.Add or remove element in order at id - 1 */}
                        <button onClick={handleMinusClick} className='btn btn-secondary'>-</button>
                        <span>{getOrder()}</span>
                        <button onClick={handlePlusClick} className='btn btn-secondary'>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MenuItem;

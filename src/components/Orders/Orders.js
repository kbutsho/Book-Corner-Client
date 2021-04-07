import React from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { bookName } = useParams();
    console.log(bookName);
    return (
        <div>
            <h1>this is order page</h1>
        </div>
    );
};

export default Orders;
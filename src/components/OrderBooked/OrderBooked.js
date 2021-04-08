import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderBooked = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://boiling-tundra-37742.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [loggedInUser.email])

    return (
        <div className="container">
            <h1>Order confirm</h1>
            <h3>Hello! {loggedInUser.name}. You Have  {bookings.length} Booking</h3>
            <h1>Booking info :</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">User</th>
                        <th className="text-center">Order Date</th>
                    </tr>
                </thead>
                {
                    bookings.map(book =>

                        <tbody>
                            <tr>
                                <td className="text-center">{book.name}</td>
                                <td className="text-center">{new Date(book.checkIn).toDateString('dd/MM/yyyy')}</td>
                            </tr>
                        </tbody>
                    )}
            </table>

        </div>
    );
};
export default OrderBooked;
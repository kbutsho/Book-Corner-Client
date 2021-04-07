import React, { useEffect, useState } from 'react';
import './Home.css';
import BooksCollection from '../BooksCollection/BooksCollection';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("https://boiling-tundra-37742.herokuapp.com/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="container">
            <div className="input-group my-5 text-center w-50 mx-auto">
            <input type="text" className="form-control " placeholder="Search Book"/>
            <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
            <div className="row">
                {
                    books.map(book => <BooksCollection book={book}></BooksCollection>)
                }
            </div>
        </div>
    );
};

export default Home;
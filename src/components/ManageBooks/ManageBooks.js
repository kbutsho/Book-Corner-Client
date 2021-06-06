import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageBooks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

const ManageBooks = () => {
    const handelUpdate = () => {
        console.log("Update button click");
    }
    const [books, setBooks] = useState([]);
    useState(() => {
        fetch('https://boiling-tundra-37742.herokuapp.com/getBooks')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    // comment
    const handelDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            fetch(`https://boiling-tundra-37742.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(data => data.json())
                .then(result => {
                    alert("delete Successfully!! Go Homepage And See!!");
                })
        }
    }
    return (
        <div className="container mx-auto">
            <div className="row ">
                <div className="col-md-3 bg-info">
                    <Link className="btn btn-danger nav-link w-75 my-3 mx-auto" to="/admin">
                        <div className="row">
                            <div className="col-2 mt-2"><FontAwesomeIcon className="text-white h5" icon={faPlus} /> </div>
                            <div className="col-10 mt-2 font-weight-bold h6">Add Books</div>
                        </div>
                    </Link>
                    <Link className="btn btn-danger nav-link w-75 my-3 mx-auto" to="#">
                        <div className="row">
                            <div className="col-2 mt-2"><FontAwesomeIcon className="text-white h5" icon={faEdit} /> </div>
                            <div className="col-10 mt-2 font-weight-bold h6">Edit Books</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-9">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className=" w-25" >BookName</th>
                                <th className=" w-25" >AuthorName</th>
                                <th className=" w-25 text-center">Price</th>
                                <th className=" w-25 text-center" >Action</th>
                            </tr>
                        </thead>
                        {
                            books.map(book =>
                                <tbody>
                                    <tr>
                                        <td className="w-25">{book.BookName}</td>
                                        <td className=" w-25">{book.AuthorName}</td>
                                        <td className="w-25 text-center">{book.Price}</td>
                                        <td className="w-25 text-center btn-area"><FontAwesomeIcon onClick={handelUpdate} className="text-info h3 mx-2" icon={faEdit} /> <FontAwesomeIcon onClick={() => handelDelete(book._id)} className="text-danger h3 mx-2" icon={faTrashAlt} /></td>
                                    </tr>
                                </tbody>
                            )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooks;
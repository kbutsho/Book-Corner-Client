import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks} from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();

        imageData.set('key', '3cc3e1d0b3bbbd6f18354e4e805ab433');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        console.log("Data info", data);
        const bookData = {
            BookName: data.BookName,
            AuthorName: data.AuthorName,
            Price: data.Price,
            imageURL: imageURL
        };
        console.log(bookData);
        const url = `http://localhost:3001/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response', res))
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 bg-info">
                    <Link className="btn btn-danger nav-link w-75 my-3 mx-auto" to="/ManageBooks">
                        <div className="row">
                            <div className="col-2 mt-2"><FontAwesomeIcon className="text-white h5" icon={faTasks} /> </div>
                            <div className="col-10 mt-2 font-weight-bold h6">Manage Books</div>
                        </div>
                    </Link>
                    {/* <Link className="btn btn-danger nav-link w-75 my-3 mx-auto" to="/admin">Add Books</Link> */}
                </div>
                <div className="col-md-9 bg-success">
                    <div className="w-75 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-info px-5 py-5 my-5">
                            <div className="row">
                                <div className="col-md-6">

                                    <label htmlFor="BookName" className="mt-3">Book Name</label>
                                    <input id="BookName"  defaultValue="JavaScript" placeholder="Book Name" {...register("BookName", { required: true })} className="form-control" />
                                    {errors.BookName && <span className="text-danger">Book Name is required <br/></span>  } 
                                   
                                    <label htmlFor="Price" className="mt-3">Price</label>
                                    <input id="Price"  defaultValue="100$" placeholder="Price" {...register("Price", { required: true })} className="form-control" />
                                    {errors.Price && <span className="text-danger">Price is required <br/></span>}
                                </div>
                                <div className="col-md-6">

                                    <label htmlFor="AuthorName" className="mt-3">Author Name</label>
                                    <input id="AuthorName"  defaultValue="KB UTSHO" placeholder="Author Name" {...register("AuthorName", { required: true })} className="form-control" />
                                    {errors.AuthorName && <span className="text-danger">Author Name is required <br/></span>}

                                    <label htmlFor="photo" className="mt-3">Add Book Cover Photo</label>
                                    <input id="photo" type="file" onChange={handleImageUpload}  className="form-control" />

                                   <input type="submit" value="Save" className="btn-danger btn-sm  nav-link my-3 ml-auto" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
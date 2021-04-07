import React from 'react';
import { useHistory } from 'react-router';
import './BooksCollection.css';

const BooksCollection = (props) => {

    const history = useHistory();
    const handelClick = (BookName) => {
        const url = `/orders/${BookName}`;
        history.push(url);
    }
    const { imageURL, BookName, AuthorName, Price } = props.book;
    return (

        <div className="col-lg-4 col-md-6 card-area">
            <div className="box p-4">
                <div className="img-area text-center py-4">
                    <img className="" style={{ height: '300px' }} src={imageURL} alt="" />
                </div>
                <h3>{BookName}</h3>
                <p>{AuthorName}</p>
                <div className="row">
                    <div className="col-6">
                        <h3 className="font-weight-bold text-danger">{Price}</h3>
                    </div>
                    <div className="col-6 ">
                        <button  className=" btn w-75 ml-4 btn-success" onClick={() => handelClick(BookName)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCollection;
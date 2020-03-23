import React from "react";

export default function displayResult(props) {
    let books;
    if (props.books && props.books.length > 1) {
        return books = (
            <>
            {props.books.map(book => {
                console.log(book);
                return (
                    <div className='list-item-cont'>
                        <figure>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
                        </figure>
                        <div>
                            <h4>{book.volumeInfo.title}</h4>
                            {book.volumeInfo.authors === undefined ? null : book.volumeInfo.authors.map(author => <p>{author}</p>)}
                            {book.saleInfo.saleability === 'NOT_FOR_SALE' ? null : <p>Price: ${book.saleInfo.retailPrice.amount}</p>}
                            <p>{book.volumeInfo.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
        )
    }
    return (
        <>
            {books ? books : null}
        </>
    );
}
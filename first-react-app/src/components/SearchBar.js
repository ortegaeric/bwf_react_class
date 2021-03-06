import React, { useState, useEffect } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [title, setTitle] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(title);
    }

    return (
        <div>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <div className="form-group">
                    <label style={{ color: 'white'}} htmlFor="title">Title &nbsp;</label>
                    <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit" disabled={ !title }>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
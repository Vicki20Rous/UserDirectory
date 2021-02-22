import React from "react";

function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Search Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="names"
          type="text"
          value = {props.value}
          placeholder="Name"
          id="search"
        />
        {/* Sort button in searchbox */}
        <button className="btn btn-primary" onClick={props.handleFormSubmit}>SearchEmployee</button>
        <button className="btn btn-primary" onClick={props.handleFormSubmit}>Clear</button>  
      </div>
    </form>
  );
}

export default SearchBox;
import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group">
      {props.results.map((results) => (
        <li key={results} className="list-group-item">
          <img alt="profilePicture" src={results} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
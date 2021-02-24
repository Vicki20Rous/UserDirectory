import React from "react";
import Card from "../SearchResults";

function SearchResults(props) {
  return (
    
      <thread>
         <tr>
            <th>
              <img alt= {props.firstName} src= {props.picture.thumbnail} />
            </th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.picture.thumbnail}<td>
            <td>{props.city}</td>
          </tr>
      </thread>
    
  );
}

export default SearchResults;
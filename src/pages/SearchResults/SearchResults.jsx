import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";

export const SearchResults = () => {
    const [searchParams] = useSearchParams();

  // Extract the value of the 'item' query parameter
  const searchValue = searchParams.get('item');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
   
    if (searchValue) {
      fetch('http://localhost:5000/menu/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchValue }),
      })
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        console.log(searchResults)
      })
      .catch(error => console.error('Error:', error));
    }
  }, [searchValue]);

  return (
    <div>
      <h2>Search Results</h2>
      <p>Search query: {searchValue}</p>
      {/* Render the search results */}
    </div>
  );
};


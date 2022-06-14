import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from "./Search.svg";
import MovieCard from './Component/MovieCard';

const API_URL ='http://www.omdbapi.com?apikey=3a08f981'

const App = () => {

    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
    };

    useEffect(()=>{
        searchMovies();
    },[]);

  return (
    <div className='app'>
        <h1>MovieWorld</h1>
        <div className='search'>
            <input
            placeholder='Search movies here'
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}}
            />
            <img
            src={SearchIcon}
            alt="search_icon"
            onClick={()=>{searchMovies(searchText)}}
            />
        </div>

        { movies?.length > 0 ? (
            <div className='container'>
                { movies.map((movie)=> (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        ) : (<div className="empty">
        <h2>No movies found</h2>
      </div>)
      }
    </div>
  )
}

export default App
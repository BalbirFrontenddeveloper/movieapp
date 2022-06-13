import React, { useEffect, useState } from 'react';
import MovieCard from './Component/MovieCard';


const App = () => {
  
  const API_URL ='http://www.omdbapi.com?apikey=3a08f981'
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([])
    
    const movie = {
        "Title": "Undefined",
        "Year": "2006",
        "imdbID": "tt1436480",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg"
    };
    
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
        <h1>MovieLand</h1>
        <div className='search'>
            <input
            placeholder='Search movies here'
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}}
            />
            <input
            type="button"
            onClick={()=>{searchMovies(searchText)}}
            />
        </div>

        { movies?.length > 0 ? (
            <div className='container'>
                { movies.map((movie)=> (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
        ) : <div className="empty">
        <h2>No movies found</h2>
      </div>
      }

    </div>
  )
}

export default App;
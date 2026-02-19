// import { useEffect, useState } from "react";
// import { getMovies } from "../api/tmdb";
// import "./home.css";

// export default function Home(){

//   const [movies,setMovies] = useState([]);

//   useEffect(()=>{
//     getMovies().then(setMovies);
//   },[]);

//   return(
//     <div>

//       <h1 className="title">NetMirror 🎬</h1>

//       <div className="movie-grid">

//         {movies.map(m=>(
//           <img
//             key={m.id}
//             src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
//             alt=""
//           />
//         ))}

//       </div>

//     </div>
//   );
// }
import { useEffect,useState } from "react";
import { getMovies } from "../api/tmdb";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

export default function Home(){

 const [movies,setMovies]=useState([]);

 useEffect(()=>{
   getMovies().then(setMovies);
 },[]);

 return(

   <div style={{background:"black"}}>

     <Sidebar/>
     <Navbar/>

     <HeroBanner movie={movies[0]} />

     <MovieRow title="Popular on NetMirror" movies={movies}/>
     <MovieRow title="Trending Now" movies={movies}/>
     <MovieRow title="Top Picks" movies={movies}/>

   </div>

 );

}


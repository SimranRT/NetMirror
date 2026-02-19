import "./hero.css";

export default function HeroBanner({movie}){

 if(!movie) return null;

 return(

  <div className="hero"
   style={{
    backgroundImage:
    `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
   }}
  >

   <div className="hero-content">

     <h1>{movie.title}</h1>

     <p>{movie.overview}</p>

     <button>▶ Play</button>

   </div>

  </div>

 );

}

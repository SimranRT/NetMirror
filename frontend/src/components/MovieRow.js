import "./row.css";

export default function MovieRow({title,movies}){

 return(

   <div style={{marginLeft:"60px"}}>

     <h2 style={{color:"white",paddingLeft:"20px"}}>{title}</h2>

     <div className="row">

       {movies.map(m=>(
         <img
           key={m.id}
           src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
           alt=""
         />
       ))}

     </div>

   </div>

 );

}

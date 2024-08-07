// import styles from "./ritik.module.css";
// export const SeriesCard=({curElem})=>{
  
//     const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
  
//     const btn_style = {      // Css in object form , because in react CSS apply in object form
//       padding:"1.2rem 2.4rem",
//       border:"none" , 
//       fontSize:"1.6rem" , 
//       backgroundColor:`${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
//       color:"var(--btn-color)" ,
//       fontWeight:"bold",
//       cursor:"pointer",
//       };
//     const ratingClass = rating>=8.5 ? styles.super_hit : styles.average;
  
//       return(
          
        
//              <li className={styles.card}>  
//                <div>
//                  <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//                </div>
//                <div className={styles["card-content"]}>
//                   <h2>Name: {name}</h2>
  
//                  {/* <h3 className="rr">Rating: <span className="super_hit">
//                  <h3 className="rr">Rating: <span className="average">{rating} </span></h3> */}
  
  
//                   {/* conditional styling show just given below*/}
  
//                  {/* <h3>
//                     Rating: <span className={rating>=8.5 ? "super_hit" : "average"}>{rating} </span> 
//                   </h3> */}
  
//                   <h3>
//                             {/* Here we can also use two classes with each other , show in just below code  */}
  
//                             {/* Rating: <span className={`rating timepass ${rating>=8.5 ? "super_hit" : "average"}`}>{rating} </span>   */}
  
//                     Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating} </span>  
  
                    
//                   </h3>
  
  
  
//                  <p> Summary: {description} </p>
         
//                  <p>Genre:{genre}</p>
//                  <p> Caste:{cast} </p>
//                  <a href={watch_url} target="_blank" > 
//                    <button 
//                      style={btn_style}  // here CSS has call 
//                     >
//                           watch Now
//                     </button>
//                   </a>
//                 </div>
//             </li>
           
//       );
//   };

//========================= The above code cane be written as ============================

// ===================== Using Styled components =======================================

import styles from "./ritik.module.css";
import styled from "styled-components";
export const SeriesCard=({curElem})=>{
  
    const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 

    //  const btn_style = {
    //   padding:"1.2rem 2.4rem",
    //   border:"none" , 
    //   fontSize:"1.6rem" , 
    //   backgroundColor:`${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //   color:"var(--btn-color)" ,
    //   fontWeight:"bold",
    //   cursor:"pointer",
    //  };

    // Styled-components using object in just below .
    
    const ButtonStyle = styled.button({
      padding:"1.2rem 2.4rem",
      border:"none" , 
      fontSize:"1.6rem" , 
      backgroundColor:`${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color:"var(--btn-color)" ,
      fontWeight:"bold",
      cursor:"pointer",
    });

    // using styled components we can change the Rating color , we can also change it using inline css .

    const Rating = styled.h3`
     font-size:1.6rem;
     color:#7dcea0;
    //  text-transform:capitalize;
    `;

    const ratingClass = rating>=8.5 ? styles.super_hit : styles.average;
  
      return(
           <li className={styles.card}>  
               <div>
                 <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
               </div>
               <div className={styles["card-content"]}>
                  <h2>Name: {name}</h2>
                  {/* <h3>
                      Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating} </span>  
                  </h3> */}

                  <Rating>
                      Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating} </span>  
                  </Rating>

                 <p className="text-3xl font-bold underline"> Summary: {description} </p>
                 <p>Genre:{genre}</p>
                 <p> Caste:{cast} </p>
                 <a href={watch_url} target="_blank" > 
                   {/* <button style={btn_style}> watch Now </button> */}
                   <ButtonStyle>Watch Now</ButtonStyle>
                  </a>
                </div>
              
            </li>
           
      );
  };
  
  
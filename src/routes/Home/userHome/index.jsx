import { useEffect, useState } from "react";
import styles from "./userHome.css";
import { useQuery } from "@tanstack/react-query";
import MovieItem from "./MovieItem";
import Slider from "react-slick";

const api_key = "25db6ff26e8517fd46c2ee67944fa068";

const UserHome = () => {
  const [error, setError] = useState(null);

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
      );

      const data = await response.json();

      if (data.status_message) {
        setError(data.status_message);
      } else {
        setError(null);
      }

      return data;
    },
    queryKey: ["movies"],
  });

  useEffect(() => {
    console.log({ data, isLoading });
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      <h1>react query</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Slider slidesToShow={3} slidesToScroll={2}>
          {data?.results?.map(
            //? 있으면 해주고 없으면 안해줌
            (movie) => {
              return <MovieItem key={movie.id} {...movie} />;
            }
          )}
        </Slider>
      )}
      {error && <h3>{error}</h3>}
      {/* {!error ? (
        <h1>{isLoading ? "Loading..." : "Data fetched!!"}</h1>
      ) : (
        <div>
          <h1>Error!!</h1>
          <button>{error}</button>
        </div>
      )}
      <button onClick={onFetch}>FETCH</button> */}
    </div>
  );
};

// fetch 펱취 가져오다

export default UserHome;

// const [isLoading, setIsLoading] = useState(true);
// const [error, setError] = useState(null);

// const onFetch = async () => {
//   setIsLoading(true);
//   setError(null);

//   console.log("fetching...");

//   // api 비동기 함수 async function
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
//   );

//   const data = await response.json();

//   console.log(data);
//   if (data.status_message) {
//     setError(data.status_message);
//   }

//   console.log("fetched");

//   setTimeout(() => {
//     setIsLoading(false);
//   }, 3000);
// };

// useEffect(() => {
//   onFetch();
// }, []);

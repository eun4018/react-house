import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //async await vs Fetch
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?maxmum_rating=7.5&sort_by=year`
      )
    ).json();
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    // );
    // const json = await response.json();
    //긴버전
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  //[] 빈배열이면 한번만 실행된다.
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.loader_wheel}></div>
          <div className={styles.loader_text}>Loading...</div>
        </div>
      ) : (
        <div className={styles.movie_container}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.large_cover_image}
              title={movie.title}
              genres={movie.genres}
              runtime={movie.runtime}
              year={movie.year}
              rating={movie.rating}
              language={movie.language}
            />
            //key를 꼭 넣어줘야 한다.
            //일반적인 javascript가 아니라 component 이므로 부르고 싶은대로 하면됨 {이부분은 api와 같아야 함}
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

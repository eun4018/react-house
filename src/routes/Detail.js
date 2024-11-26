import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import mainStyle from "./Home.module.css";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams(); //구조분해 할당
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //async는 함수의 앞에 붙여서 해당 함수가 비동기 함수임을 나타내며, await는 비동기 함수의 실행 결과를 기다리는 키워드
    setLoading((current) => !current);
    setGenres(json.data.movie.genres);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div key={movie.id}>
      {loading ? (
        <div className={styles.movie_detail}>
          <div className={styles.movie_inner}>
            <div className={(mainStyle.loader, styles.loader)}>
              <div className={mainStyle.loader_wheel}></div>
              <div className={(mainStyle.loader_text, styles.loader_text)}>
                Loading...
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.movie_detail}>
          <div className={styles.movie_inner}>
            <Link className={styles.links} to={`${process.env.PUBLIC_URL}`}>
              <span>❌</span>
            </Link>
            <div className={styles.movie_poster}>
              <p className={styles.movie_pos_fill}>
                <img src={movie.large_cover_image} />
              </p>
              <p>
                <img src={movie.medium_cover_image} />
              </p>
            </div>
            <div className={styles.movie_info}>
              <h1>{movie.title}</h1>
              <ul className={styles.movie_sub_info}>
                <li>{movie.year}</li>
                <li>{movie.language}</li>
              </ul>
              <p>
                {movie.description_intro.length > 132
                  ? `${movie.description_intro.slice(0, 235)}...`
                  : `There is no description of the movie.`}
              </p>
              <p className={(styles.sub_text, styles.genres)}>
                genres :
                {genres.map((genres) => (
                  <span>{genres}</span>
                ))}
              </p>
              <p className={styles.sub_text}>
                runtime :<span>{movie.runtime}min</span>
              </p>
              <p className={styles.sub_text}>
                rate :<span>{movie.rating}</span>
              </p>
              <p className={styles.sub_text}>
                likes :<span>{movie.like_count}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

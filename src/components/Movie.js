import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({
  id,
  coverImg,
  title,
  genres,
  runtime,
  year,
  rating,
  language,
}) {
  return (
    <div className={styles.movie_card_inner}>
      <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
        <div className={styles.movie_img}>
          <img src={coverImg} alt={title} />
          <ul className={styles.movie_genre} key={id}>
            {genres.map((g) => (
              <li>{g}</li>
            ))}
          </ul>
        </div>
        <div className={styles.movie_content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.movie_info_inner}>
            <p className={styles.movie_info_tit}>
              year<span>{year}</span>
            </p>
            <div className={styles.movie_info}>
              <p className={styles.movie_info_tit}>
                language<span>{language}</span>
              </p>
              <p className={styles.movie_info_tit}>
                runtime<span>{runtime}</span>
              </p>
              <p className={styles.movie_info_tit}>
                rating<span>{rating}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
};
export default Movie;
//        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>

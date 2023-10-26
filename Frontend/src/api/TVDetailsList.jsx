import TVDetailsItem from "./TVDetailsItem";

const TVDetailsList = (props) => {
  if (
    !props.detailed ||
    !props.detailed.genres ||
    !Array.isArray(props.detailed.genres)
  ) {
    return <div>No genre information available</div>;
  }

  const genreNames = [];
  const genres = props.detailed.genres;

  for (let i = 0; i < genres.length; i++) {
    genreNames.push(genres[i].name);
  }

  const separatedGenreNames = genreNames.join(" ");
  return (
    <ul>
      {
        <TVDetailsItem
          key={props.detailed.id}
          title={props.detailed.title}
          overview={props.detailed.overview}
          voteAverage={props.detailed.vote_average}
          releaseDate={props.detailed.release_date}
          lang={props.detailed.original_language}
          imdb_id={props.detailed.imdb_id}
          id={props.detailed.id}
          homepage={props.detailed.homepage}
          image={props.detailed.poster_path}
          back_img={props.detailed.backdrop_path}
          genre={separatedGenreNames}
        />
      }
    </ul>
  );
};
export default TVDetailsList;

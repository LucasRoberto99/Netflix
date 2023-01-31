import CarousselFilm from "./CarousselFilm";

const Genre = (props) => {
  return (
    <div className="genre">
      <h1>{props.title}</h1>
      <CarousselFilm film={props.film} />
    </div>
  );
};

export default Genre;

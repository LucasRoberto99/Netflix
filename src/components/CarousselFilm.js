const CarousselFilm = (props) => {
  console.log(props.film);
  const filmList = props.film.map((film) => {
    return <img src={film} alt="" />;
  });
  return <div className="filmList example">{filmList}</div>;
};

export default CarousselFilm;

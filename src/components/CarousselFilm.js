const CarousselFilm = (props) => {
  console.log(props);
  const filmList = props.map((film) => {
    return <p>{film}</p>;
  });
  return <div className="filmList">{filmList}</div>;
};

export default CarousselFilm;

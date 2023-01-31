import Genre from "./Genre";

const Content = (props) => {
  const data = props.tab;
  return (
    <main className="content">
      {data.map((list) => {
        return <Genre title={list.category} film={list.images} />;
      })}
    </main>
  );
};

export default Content;

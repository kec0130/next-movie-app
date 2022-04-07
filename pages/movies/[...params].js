import Seo from "../../components/Seo";

export default function Detail({ title, result }) {
  return (
    <div className="container">
      <Seo title={title} />
      <div className="movie-detail">
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
        <span>{result.overview}</span>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .movie-detail h1 {
          text-align: center;
          font-size: 1.5rem;
          margin: 1rem 0 1.5rem;
        }
        .movie-detail img {
          display: block;
          max-width: 50%;
          margin-left: auto;
          margin-right: auto;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie-detail span {
          display: block;
          padding: 24px 20px;
          line-height: 1.4rem;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const [title, id] = params;
  const result = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: {
      title,
      result,
    },
  };
}

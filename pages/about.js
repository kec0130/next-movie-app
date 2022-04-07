import Seo from "../components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

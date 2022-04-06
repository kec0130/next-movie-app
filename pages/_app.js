import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProp }) {
  return (
    <Layout>
      <Component {...pageProp} />
    </Layout>
  );
}

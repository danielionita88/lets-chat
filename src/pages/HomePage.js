import Feed from "../components/Feed/Feed";
import Chat from "../components/Chat/Chat";
import Layout from "../components/Layout/Layout";
import "./HomePage.css";

const HomePage = () => {

  return (
    <Layout>
      <div className="homeContainer">
        <Feed />
        <Chat />
      </div>
    </Layout>
  );
};

export default HomePage;

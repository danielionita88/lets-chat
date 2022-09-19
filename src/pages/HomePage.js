

import Feed from "../components/Feed/Feed";
import Friends from "../components/Chat/Chat";
import Layout from "../components/Layout/Layout";
import "./HomePage.css";

const HomePage = () => {

  return (
    <Layout>
      <div className="homeContainer">
        <Feed />
        <Friends />
      </div>
    </Layout>
  );
};

export default HomePage;

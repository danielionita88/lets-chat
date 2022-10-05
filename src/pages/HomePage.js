import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Feed from "../components/Feed/Feed";
import Chat from "../components/Chat/Chat";
import Layout from "../components/Layout/Layout";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth", {replace: true});
    }
  }, [user, navigate]);

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

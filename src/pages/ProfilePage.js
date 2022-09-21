import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import Layout from "../components/Layout/Layout";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;

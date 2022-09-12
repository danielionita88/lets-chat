import Feed from "../components/Feed/Feed";
import Friends from '../components/Friends/Friends'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homeContainer">
      <Feed />
      <Friends/>
    </div>
  );
};

export default HomePage;

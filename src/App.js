import Layout from "./components/Layout/Layout";
import HomePage from './pages/HomePage'
import ProfilePage from './components/Profile/Profile'
import './App.css'

function App() {
  return <Layout>
    <ProfilePage/>
    {/* <HomePage/> */}
  </Layout>;
}

export default App;

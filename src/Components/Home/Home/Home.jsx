import Banner from "../Banner/Banner";
import HomeGallery from "../Gallery/HomeGallery";
import Newsletter from "../Newsletter/Newsletter";
import PopularToys from "../PopularToys/PopularToys";
import ByCategory from "../Shop/ByCategory/ByCategory";
import './Home.css'
import useTitle from '../../../hooks/useTitle.js'

const Home = () => {

  useTitle('Home');

  return (
    <div>
      <div className="home text-center mt-10 mb-10">
        <h1 className="text-5xl font-bold">Welcome to Borsha&apos;s Dream Land</h1>
        <p className="text-2xl mt-2">Explore And Share The Magic Of Hapiness</p>
      </div>
      <Banner />
      <HomeGallery />
      <ByCategory />
      <PopularToys />
      <Newsletter />
    </div>
  );
};

export default Home;

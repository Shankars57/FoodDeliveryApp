import React , {useState} from 'react'
import './Home.css';
import Menu from '../../components/ExploreMenu/Menu';
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
   const [category, setCategory] = useState("All");
   console.log(category);
   
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home

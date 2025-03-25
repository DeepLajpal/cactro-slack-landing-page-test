import style from './App.module.css'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import Navbar from './Components/Navbar/Navbar'
import UpdateCard from './Components/UpdateCard/UpdateCard.jsx'

function App() {

  return (
    <div className={style["appOuterContainer"]}>
      <div className={style["appInnerContainer"]}>
        <Navbar />
        <UpdateCard />
        <HeroSection />
      </div>
    </div>
  )
}

export default App

import style from './App.module.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className={style["appOuterContainer"]}>
      <div className={style["appInnerContainer"]}>
        <Navbar />
      </div>
    </div>
  )
}

export default App

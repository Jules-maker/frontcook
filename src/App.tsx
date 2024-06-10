// import { useState } from 'react'
// import './assets/css/App.scss';
import './App.scss'
import Header from './components/Front/Header/Header';
import Footer from './components/Front/Footer/Footer';
import SideBar from './components/Front/Sidebar/Sidebar';
import Articles from './components/Front/Articles/Articles';
import Evenements from './components/Front/Evenements/Evenements';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Evenements />
      <SideBar nom="michel" age={22} />
      <SideBar nom="Bernard" age={12} majeur={false} />
      <SideBar nom="Jack" age={22}>
        <button>Click me</button>
      </SideBar>
      <Articles />

      <Footer />
    </>
  )
}

export default App

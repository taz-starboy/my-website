import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";
import './components/style.scss';
import Spotlight from "./components/Spotlight/Spotlight";

function App() {

  return (
    <>
      <div className="main-container">
        <SideBar />
        <Content />

      </div>
      <Spotlight />
    </>
  );
}

export default App

import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout/Layout';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import InputBanner from './components/InputBanner';
import DescriptionBox from './components/DescriptionBox';
import Gallery from './components/Gallery';



function App() {
     return (
          <div className="App">
               <Layout />
               <main>
                    <Intro />
                    <NavBar />
                    <InputBanner />
                    <DescriptionBox />
                    <Gallery />

               </main>
          </div>
     );
}

export default App;


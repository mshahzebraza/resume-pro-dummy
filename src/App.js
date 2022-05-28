import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout/Layout';

function App() {
     return (
          <div className="App">
               <Layout />
               <main>
                    <section className="intro">

                         <h1 className="introTitle">
                              Job Winning Resume
                         </h1>
                         <h3 className="introSubTitle">
                              Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.
                         </h3>
                    </section>
                    <nav className="nav">
                         <ul className="ctgList">
                              <li className="ctg">Category 1</li>
                              <li className="ctg">Category 2</li>
                              <li className="ctg">Category 3</li>
                              <li className="ctg">Category 4</li>
                              <li className="ctg">Category 5</li>
                              <li className="ctg">Category 6</li>
                         </ul>
                         <div className="searchBox">
                              <i className="searchIcon"></i>
                              <input type="text" placeholder='Search' className='searchInput' />
                         </div>
                         <div className="navMenu">

                              <div className="menuIcon">
                              </div>

                         </div>
                    </nav>
                    <div className="inputBanner">
                         <p>Drag and Drop Files here</p>
                         <p>OR</p>
                         <button className='primaryBtn'>Browse Files</button>
                    </div>
                    <div className="description">
                         <p>
                              Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out from the pack by trying different colours, fonts, headline formats and much more.
                         </p>
                    </div>
                    <section className="templateGallery">
                         <div className="template"></div>
                         <div className="template"></div>
                         <div className="template"></div>
                         <div className="template"></div>
                         <div className="template"></div>
                         <div className="template"></div>
                    </section>

               </main>
          </div>
     );
}

export default App;

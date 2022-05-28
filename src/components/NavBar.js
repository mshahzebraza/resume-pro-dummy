import React from 'react'

function NavBar() {
     return <nav className="nav">
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
     </nav>;
}


export default NavBar;
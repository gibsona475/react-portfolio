
import { React, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import AboutMe from './page/AboutMe';


function App() {
  //Hook that helps to set he page value 
  //getter and setter = useState(default value ) 
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const handlePageChange = (page) => {
    console.log('handlePageChange', page);
    //updates the current page to whichevere page is clicked 
    setCurrentPage(page);
  }
  const renderPage = () => {
    console.log('Renderign the component', currentPage);
    //Sswitch case 
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />; 
//All tabs 
      default:
        return <AboutMe />
    }
  }
  return (
    <div className="App">
      <h1>React portfolio</h1>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* render about me by defaukt  */}

      {renderPage()}
    </div>
  );
}

export default App;

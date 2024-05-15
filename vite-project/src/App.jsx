//import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ExitForm from './components/popups/ExitForm/ExitForm';
import NewCard from './components/popups/NewCard/NewCard';
import BrowseCard from './components/popups/BrowseCard/BrowseCard';

function App() {

  return (
    <>

      <div className="wrapper">

      <>{/* pop-up start*/}</>
      
        <ExitForm />

        <NewCard />

        <BrowseCard />
      
      <>{/* pop-up end*/}</>

        <Header />

        <Content />
		
      </div>

    </>
  )
};

export default App;

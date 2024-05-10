//import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ExitForm from './components/Form/ExitForm';
import NewCard from './components/Form/NewCard';
import BrowseCard from './components/Form/BrowseCard';

function App() {

  return (
    <>

      <div class="wrapper">

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

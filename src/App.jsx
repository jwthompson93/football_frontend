import React from 'react';
import './App.css';
import NavBar from './Base/NavBar';
import SiteRouter from './Base/SiteRouter';
import TitleBar from './Base/TitleBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='container container-top'>
          <TitleBar></TitleBar>
          <NavBar></NavBar>
          <SiteRouter></SiteRouter>
        </div>
      </div>
    );
  }
}
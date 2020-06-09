import React from 'react';
import Dinner from './dinner.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dinner dishName='Nihari' sweetName='Kher'/>
      <p>Grab the Deal for just <strong><em>Rs.450 Olny</em></strong>.</p>
      <h1 align='center'><strong><em>Offer valid till 12 a.m</em></strong></h1>
      
      <hr/>

      <Dinner dishName='Biryani' sweetName='Jalebi'/>
      <p>Grab the Deal for just <strong><em>Rs.350 Olny</em></strong>.</p>
      <h1 align='center'><strong><em>Offer valid till 12 a.m</em></strong></h1>
      
      <hr />

      <Dinner dishName='Mutton Karahi' sweetName='Gajjar ka Halwa'/>
      <p>Grab the Deal for just <strong><em>Rs.900 Olny</em></strong>.</p>
      <h1 align='center'><strong><em>Offer valid till 12 a.m</em></strong></h1>
      
      <hr />
      <p align='center'><strong>Are you guys ready??</strong></p>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Card from './component/card';

// function App() {
//   const page = {
//     title:"Page title",
//     paragraph:"paragrap"
//   };
//   return (
//    <div>
//      <h2>{page.title}</h2>
//      <p>{page.paragraph}</p>
//    </div>
//   )
// }

function App(){
  return(
      <div className="app">
          <Card title="Pizza" caloies="56" />
          <Card title="Burger" caloies="69" />
          <Card title="Coke" caloies="500" />
          <Card title="Browne" caloies="180" />
          <Card title="Fried Rice" caloies="90" />
          <Card title="Lassania" caloies="200" />
          <Card title="Pani Puri" caloies="10" />
      </div>
  );
}

export default App;

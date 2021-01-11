import TopBlock from './TopBlock';
import QuoteBlock from './QuoteBlock';
import PopularBlock from './PopularBlock';
import PopularItemsData from './popularItemsData';
import React, {useState} from 'react';
import Menu from './Menu';
import Information from './Information';
import './App.css';


const App = () => {

  const [data, setData] = useState(PopularItemsData);
  console.log(data)
  return (
    <div className="mainWrapper">
      <TopBlock />
      <Information />
      {/* <PopularBlock popularItems={data}/>
      <QuoteBlock /> */}
      <Menu />
    </div>
  );
}

export default App;

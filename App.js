import Header from './Header';
import QuoteBlock from './QuoteBlock';
import PopularBlock from './PopularBlock'
import PopularItemsData from './popularItemsData'
import React, {useState} from 'react';
import Menu from './Menu';
import Information from './Information'


const App = () => {

  const [data, setData] = useState(PopularItemsData);
  console.log(data)
  return (
    <div >
      <Header />
      <Information />
      {/* <PopularBlock popularItems={data}/>
      <QuoteBlock /> */}
      <Menu />
    </div>
  );
}

export default App;

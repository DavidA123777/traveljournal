import React from 'react'
import Navbar from "./components/Navbar";
import Card from './components/Card';
import Data from './data';
const App = () =>{
const data = Data;
const cards = data.map((item) => {
    if (item.id < data.length) {
        return (
            <>
                <Card key={item.id} item={item} />
                <hr className='card__line' />
            </>
        );
    } else {
        return <Card key={item.id} item={item} />;
    }
});

    return(
    <>
    <Navbar />
    {cards}
    </>)
};
export default App;
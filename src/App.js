import React,{useEffect, useState} from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import axios from "axios";


function App() {
  const[items, setItems] = useState([{
    "title": "Nike Blazer Mid Suede for men",
    "price": "249.99 azn.",
    "imageUrl": "/img/sneakers/1.jpg"
   },
   {
    "title": "Nike Air Max 270",
    "price": "279.99 azn.",
    "imageUrl": "/img/sneakers/2.jpg"
   },
   {
    "title": "Nike Blazer Mid Suede for men",
    "price": "149.99 azn.",
    "imageUrl": "/img/sneakers/3.jpg"
   },
   {
    "title": "Puma X Aka Boku Future Rider",
    "price": "159.99 azn.",
    "imageUrl": "/img/sneakers/4.jpg"
   },
   {
    "title": "Nike Kyrie 7 for men",
    "price": "109.99 azn.",
    "imageUrl": "/img/sneakers/5.jpg"
   },
   {
    "title": "Nike LeBron XVIII for men",
    "price": "239.99 azn.",
    "imageUrl": "/img/sneakers/6.jpg"
   },
   {
    "title": "Puma R78 Trek Gri Unisex Sneaker",
    "price": "159.99 azn.",
    "imageUrl": "/img/sneakers/7.jpg"
   },
   {
    "title": "Puma R78 Trek Gri Unisex Sneaker",
    "price": "159.99 azn.",
    "imageUrl": "/img/sneakers/8.jpg"
   },
   {
    "title": "Puma R78 Trek Gri Unisex Sneaker",
    "price": "159.99 azn.",
    "imageUrl": "/img/sneakers/9.jpg"
   }])
// const [count, setCount]= useState(0);
  const [cartOpened, setCartOpened] = useState(false);
//API DATA
const [datas, setDatas] = useState([])

// const onClickCount = () => {

// }
const sneakeersShoes = () => {
  axios.get('https://63d2238006556a0fdd35f1da.mockapi.io/items')
  .then((res) => {
    setDatas(res.data);
    console.log(res.data);
  })
}

  useEffect(() => {
    sneakeersShoes()
  }, [setDatas])
  return (
    <div className="wrapper clear">
      <div><h3>0</h3></div>
     {cartOpened && <Drawer onClose ={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1> All Sneaker</h1>
          <div className="search-block d-flex">
            <img src="/img/icons/search.svg" alt="Search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>


        <div className="d-flex flex-wrap">
          {datas.map((obj, i) => (
            <Card key={i}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl} 
              onfavorite={() => console.log(obj)}
              onClickPlus={() => console.log(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
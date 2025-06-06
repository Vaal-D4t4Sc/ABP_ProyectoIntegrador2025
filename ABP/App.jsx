import './App.css'
import axios from 'axios';
import {useEffect} from 'react'; // hook
import {useState} from 'react'; //el hook useEffect permite ejecutar efectos secundarios en componentes funcionales

//components
import Card from "./components/card";
import Footer from "./components/Footer";

function App() {

    const [products, setProducts] = useState ([]);

    useEffect( ()=>{
      axios.get(`https://dummyjson.com/products`).then((res)=>{setProducts(res.data.products)});
  },[]);


    return (
      <>
          <h1 className="text-center text-5xl font-bold font-sans">
            Proyecto Integrador 2025 </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Evidencia 1 y 2 (en progreso) </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Alumna Pich Valentina</h1>
          
          <h2 className="text-left text-2xl font-bold font-sans"> Recetas sabrosas </h2>
          <ul>
            {products.map((p)=>(
              <likey={p.id}> {p.title},  ${p.price}</li>))}
          </ul>

          
          <Footer />
      </>
  )
}

export default App;

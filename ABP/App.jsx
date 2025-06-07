import './App.css'
import axios from 'axios';
import {useEffect, useState, useRef} from 'react'; // hook



//components
import Stats from "./components/Stats";
import Card from "./components/card";
import Footer from "./components/Footer";

function App() {

    const [products, setProducts] = useState ([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);
    const [page, setPage] = useState(1);
    const [darkMode, setDarkMode] = useState(false);
    /*const [format, setFormat] = useState('');*/

    
    //Referencias
    const containerRef = useRef (null);
    const limit = 30


  useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`).then((res) => {
            setProducts(res.data.products);
        });
    }, [page]);

    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    {/*resultados no distinguen entre Mayusculas o Minusculas, se unifica a minuscula */}

    {/* Total de productos */} {/* constantes para las estadisticas */}
    const totalProducts = filteredProducts.length;
    
    {/* Mayor Costo */} {/* los puntos seguidos son Spread Operator 
    const maxPrice = filteredProducts.length > 0 ? Math.max(...filteredProducts.map((p) => p.prepTimeMinutes)) : 0 ;*/}
    const maxPrice = Math.max(...filteredProducts.map((p) => p.price));
    
    {/* Menor demora */} {/* los puntos seguidos son Spread Operator 
    const minPrice = filteredProducts.length > 0 ? Math.min(...filteredProducts.map((p) => p.prepTimeMinutes)) : 0 ; */}
    const minPrice = Math.min(...filteredProducts.map((p) => p.price));

    
    {/* Promedio de calorias [reveer paso a paso] 
    const avgCalories = 
        filteredProducts.length > 0
        ? (filteredProducts.reduce((sum, p) => sum + p.caloriesPerServing, 0) / filteredProducts.length): 0;
        */}

    const toggleDarkMode = ()=>{
      setDarkMode(!darkMode);
      containerRef.current.classList.toggle("dark-mode");   
    }  

    return (
      <div ref={containerRef}>          
          <button onClick={toggleDarkMode}> Modo {darkMode ? 'Claro' : 'Oscuro'}</button>
          
          <h1 className="text-center text-5xl font-bold font-sans">
            Proyecto Integrador 2025 </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Evidencia 1 y 2 (en progreso) </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Alumna Pich Valentina</h1>
           
          <br>
          </br>  
          
          <br>
          </br>  
          
          <br>
          </br>  
          
          <br>
          </br>  

          <h2 className="text-left text-2xl font-bold font-sans"> Encuentra el producto: </h2>

          {/*<Card/>*/}

          <h3> {search} </h3>



          <br> 
          </br> 

            <button 
            onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"} </button>

 
          <br> 
          </br> 
          <div>


            {/* Renderización condicional */}
            {show && <Stats 
                      total={totalProducts} 
                      max={maxPrice} 
                      min={minPrice} 
                      /* ave={avgCalories} */ />}
            {filteredProducts.length == 0 && <div> Sin resultados coincidentes </div>}
          </div> 

          <br> 
          </br>

          <input 
              type="text" 
              placeholder="Buscar producto" 
              value={search} 
              onChange={(e)=>{setSearch(e.target.value)}}
          />
          
          <br> 
          </br>


          <select>
            <option> Seleccionar Formato</option>
            <option value="json"> JSON </option>
            <option value=""> Otrossssss </option>
   
          </select>


          <ul>
            {filteredProducts.map((p)=>(
              <li key= {p.id}> {p.title}, $ {p.price}</li>))}
          </ul>
          
          <br> 
          </br>

          <button disabled = {page === 1}
                  onClick={()=> {
                      setPage(page - 1);
          }} > Página anterior</button>

          <button onClick={()=> {
                      setPage(page + 1);
          }} > Página siguiente</button>

          <br> 
          </br>

            <button 
            onClick={() => setShow(!show)}>{show ? " Ocultar " : " Mostrar "} </button>


          <Footer />
      </div>
  )
}

export default App;

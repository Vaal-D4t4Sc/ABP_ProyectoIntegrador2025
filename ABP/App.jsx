import './App.css'
import axios from 'axios';
import {useEffect} from 'react'; // hook
import {useState} from 'react'; //el hook useEffect permite ejecutar efectos secundarios en componentes funcionales
import Stats from "./components/Stats";


//components
import Card from "./components/card";
import Footer from "./components/Footer";

function App() {

    const [recipes, setRecipes] = useState ([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);

    useEffect( ()=>{
      axios.get(`https://dummyjson.com/recipes?limit=150`)
        .then((res)=>{setRecipes(res.data.recipes)})
        .catch((error) => console.error("Error fetching recipes:", error));
  },[]);

    const filteredRecipes = recipes.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    //resultados no distinguen entre Mayusculas o Minusculas, se unifica a minuscula

    {/* Total de productos */}
    const totalRecipes = filteredRecipes.length;


    
    
    {/* Mayor demora */} {/* los puntos seguidos son Spread Operator */}
    const maxTime = filteredRecipes.length > 0 ? Math.max(...filteredRecipes.map((p) => p.prepTimeMinutes)) : 0 ;
    
    {/* Menor demora */} {/* los puntos seguidos son Spread Operator */}
    const minTime = filteredRecipes.length > 0 ? Math.min(...filteredRecipes.map((p) => p.prepTimeMinutes)) : 0 ;
    
    {/* Promedio de calorias [reveer paso a paso] */}
    const aveCalories = filteredRecipes.length > 0 
  ? filteredRecipes.reduce((acc, recipe) => acc + recipe.caloriesPerServing, 0) / filteredRecipes.length
  : 0;


    return (
      <>
          <div> 
              <h1>  </h1>    
          </div>

          <h1 className="text-center text-5xl font-bold font-sans">
            Proyecto Integrador 2025 </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Evidencia 1 y 2 (en progreso) </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Alumna Pich Valentina</h1>
          
          <div> 
              <h1 className= "text-3xl">   </h1>    
          </div>

          <h2 className="text-left text-2xl font-bold font-sans"> Recetas sabrosas </h2>

          <Card/>

          <h3> {search} </h3>

          <div>

            <h1 className= "text-3xl"> Estadísticas   </h1>

            {/* Renderización condicional */}
            {show && <Stats total={totalRecipes} max={maxTime} min={minTime} ave={aveCalories} />}
            {filteredRecipes.length == 0 && <div> Sin resultados coincidentes </div>}
          </div> 

          <input 
              type="text" 
              placeholder="Buscar receta" 
              value={search} 
              onChange={(e)=>{setSearch(e.target.value)}}
          />
          
          <div> 
              <h1>  </h1>    
          </div>

          <ul>
            {filteredRecipes.map((p)=>(
              <li key={p.id}> {p.name}, *{p.rating}</li>))}
          </ul>

          <div> 
              <h1>  </h1>    
          </div>

          <button 
            onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"} </button>


          <Footer />
      </>
  )
}

export default App;

import './App.css'
import axios from 'axios';
import {useEffect, useState, useRef} from 'react'; // hook



//components
import Stats from "./components/Stats";
import Stats1 from "./components/Stats1";
import Stats2 from "./components/Stats2";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import SortFilter from "./components/SortFilter";

function App() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);
    const [page, setPage] = useState(1);
    const [darkMode, setDarkMode] = useState(false);
    const [colourblind, setColourBlind] = useState(false);
    const [format, setFormat] = useState('');
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState(''); // 'price' o 'rating'
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'

    
    //Referencias
    const containerRef = useRef (null);
    const limit = 30;
    // Agrega el filtro de categoría a la URL si está seleccionado
    const apiUrl = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${(page - 1) * limit}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`;

/* Aca debo interpolar la URL como variable y agregar otros filtros por categoría*/
  useEffect(() => {
        axios.get(apiUrl).then((res) => {
            setProducts(res.data.products);
        });
    }, [page, category]);

    // Filtro por búsqueda
    let filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    // Ordenamiento
    if (sortBy) {
      filteredProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a[sortBy] - b[sortBy];
        } else {
          return b[sortBy] - a[sortBy];
        }
      });
    }

    /* Total de productos, constantes para las estadisticas */
    const totalProducts = filteredProducts.length;
    
    /*los puntos seguidos son Spread Operator */
    const maxPrice = Math.max(...filteredProducts.map((p) => p.price));
    
    const minPrice = Math.min(...filteredProducts.map((p) => p.price));
    

    /* Promedio de costo [reveer paso a paso] */
    const avgPrice = filteredProducts.length > 0
        ? (filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length): 0;
  

    const toggleDarkMode = ()=>{
      setDarkMode(!darkMode);
      containerRef.current.classList.toggle("dark-mode");   
    }  

    const toggleColourBlind = ()=> {
      setColourBlind (!colourblind);
      containerRef.current.classList.toggle("colour-blind");
    }

    const handleExport = ()=>{
      if (format === "json") {
        const blob = new Blob([JSON.stringify(filteredProducts, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, "productos.json");
      } else if (format === "csv") {
        // You need to implement CSV conversion, e.g., using a library or custom function
        // For now, let's just convert to CSV manually for demonstration
        const csvContent = [
          Object.keys(filteredProducts[0] || {}).join(','), // headers
          ...filteredProducts.map(obj => Object.values(obj).join(','))
        ].join('\n');
        const blob = new Blob([csvContent], {
          type: "text/csv",
        });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, "productos.csv");
      } else if (format === "excel") {
        console.error("Aún no implementado.");
      }
    };

    const triggerDownload = (url, filename)=>{
      const link = document.createElement('a'); //creacion del hipervinculo
      link.href = url;
      link.download = filename;
      document.body.appendChild (link); //agregamos el anchor tag en el DOM
      link.click(); //simulamos click
      document.body.removeChild (link); //eliminamos anchor tag
    };

    // Lista de categorías de ejemplo (puedes obtenerlas dinámicamente si quieres)
    const categories = [
      "",
      "fragrances",
      "beauty",
      "groceries",
      "furniture"
    ];

    return (
      <div ref={containerRef}>          
          <button onClick={toggleDarkMode}> Modo {darkMode ? 'Claro' : 'Oscuro'}</button>
          <button onClick={toggleColourBlind}> Modo {colourblind ? 'Normal' : 'Daltónico'}</button>
          
          <h1 className="text-center text-5xl font-bold font-sans">
            Proyecto Integrador 2025 </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Evidencia 1 y 2 (en progreso) </h1>

          <h1 className="text-center text-5xl font-bold font-sans">
            Alumna Pich Valentina</h1>
           
          <br /> 
          
          <br />   
          
          <br />  
          
          <br /> 

          <h2 className="text-left text-2xl font-bold font-sans"> Encuentra el producto: </h2>

          <h3> {search} </h3>

          <br />

            <button 
            onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"} </button>

 
          <br />

          <div>
            {/* Renderización condicional */}
            {show && <Stats 
                      total={totalProducts} 
                      max={maxPrice} 
                      min={minPrice} 
                      avg={avgPrice} />}
            
            {show && <Stats1 
                      total={totalProducts} 
                      min={minPrice} 
                      max={maxPrice} 
                      avg={avgPrice} />}

             {show && <Stats2 
                      total={totalProducts} 
                      min={minPrice} 
                      max={maxPrice} 
                      avg={avgPrice} />}
          
          {filteredProducts.length == 0 && <div> No hay coincidencias </div>}
          </div> 

          <br />

          {/* Filtros: por categoría, por ordenamiento */}
          <CategoryFilter
            category={category}
            setCategory={value => { setCategory(value); setPage(1); }}
            categories={categories}
          />

          <SortFilter
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <input 
              type="text" 
              placeholder="Buscar producto" 
              value={search} 
              onChange={(e)=>{setSearch(e.target.value)}}
          />
          <br />

          


          <select onChange={(e)=> setFormat(e.target.value)} value={format}>
            <option value=""> Seleccionar formato de descarga </option>
            <option value="json"> JSON </option>
            <option value="csv"> CSV </option>
            <option value="excel"> Excel </option>
   
          </select>
          <button onClick={handleExport}> Exportar archivo</button>

          <ul>
            {filteredProducts.map((p)=>(
              <li key= {p.id}> {p.title}, $ {p.price} | Rating: {p.rating}</li>))}
          </ul>
          <br />

          <small> Estamos en la página {page}</small>
          <br />

          <button disabled = {page === 1}
                  onClick={()=> {
                      setPage(page - 1);
          }} > Página anterior   </button>


{/* este modo de desabled la pagina siguiente no es el óptimo y debemos mejorarlo !! La condicion a veces no funciona correctamente*/}
          <button
                  disabled={products.length < limit}
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Página siguiente
                </button>

    <br />


            <button 
            onClick={() => setShow(!show)}>{show ? " Ocultar " : " Mostrar "} </button>


          <Footer />
      </div>
  )
};

export default App;

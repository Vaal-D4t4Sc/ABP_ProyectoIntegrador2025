function Card() {
  return (
    <section className="text-teal-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          {/* Imagen eliminada, se conserva el div para estructura */}
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-green-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-600 text-lg title-font font-medium mb-3">Ritmo</h2>
              <p className="leading-relaxed text-base">Ejercitar regularmente no solo disminuye el riesgo a infarto, también genera la sensación de bienestar</p>
              <a className="mt-3 text-teal-900 inline-flex items-center" href="#">
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-green-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-600 text-lg title-font font-medium mb-3">Recorta</h2>
              <p className="leading-relaxed text-base">Hacer dieta es diferente a cambiar hábitos. Se empieza por disminuir la porción de alimentos que afectan negativamente al organismo.</p>
              <a className="mt-3 text-teal-900 inline-flex items-center" href="#">
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-green-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-purple-600 text-lg title-font font-medium mb-3">Autocuidado</h2>
              <p className="leading-relaxed text-base">La salud y la alimentación deben corresponder al estilo de vida personal de cada individuo, la consulta con un profesional impide que deje de lado nutrientes esenciales</p>
              <a className="mt-3 text-teal-900 inline-flex items-center" href="#">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;

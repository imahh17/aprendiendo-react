# aprendiendo-react
<h1>Curso de repaso del framework React</h1>
<h2>Monorepo con distintos proyectos</h2>

<h3><strong>TODO: REPASAR FETCH, ASYNC Y PROMESAS
</strong></h3>

<h3>Algunos de los pasos que he seguido para crear cada proyecto: </h3>
<ul>
    <li><code>npm init -y</code> -> Inicializa el proyecto y crea package.json en la raíz.</li>
    <li>Creamos la carpeta Projects y nos posicionamos dentro.</li>
    <li><code>npm create vite@latest</code> -> crea el marco de trabajo Vite, especificamos el nombre del proyecto (XX-project-name), seleccionamos el framework React, seleccionamos el lenguaje base: Javascript + SWC.</li>
    <li>Entramos en la carpeta del proyecto, <code>npm install</code>, <code>npm run dev</code> para lanzar el proyecto.</li>
</ul>
<h3>Algunos de los pasos que he seguido para instalar distintos paquetes utilizados durante el curso: </h3>
</ul>
    <li>Instalar paquete canvas para mostrar confeti, en el proyecto 02 juego 3 en raya: <code>npm install canvas-confetti -E</code></li>
    <li>Instalar Linter -> Standard JS. <code>npm install standard -D</code> en raíz aprendiendo-react. Configuramos VSCode para que el Linter haga el "fix on save".</li>
</ul>

<h3>Cosas que he repasado y aprendido en el curso: </h3>
<h4>Lección 1 - Following Twitter cards: </h4>
<ul>
  <li>React se puede utilizar para ejecutar/renderizar código tanto en cliente (CSR) como en servidor (SSR).</li>
  <ul>
    <li>React utiliza código declarativo (vas declarando qué es lo que quieres que el códido haga), mientras que JS Vanilla es más "código imperativo" (tienes que especificar y "forzar" mucho más lo que quieres hacer).</li>
    <li>Reactividad, asincronía y renderizado selectivo (solo actualiza el elemento/s o componente/s del DOM sobre los que hay un cambio de estado, propiedades...)</li>
  </ul>
  <li>React utilizando JSX:</li>
  <ul>
    <li>JSX es una extensión que traduce el código declarativo desde un lenguaje tipo XML. </li>
    <li>Ejemplo: <code>&lt;Menu&gt;&lt;MenuItem&gt;&lt;/MenuItem&gt;&lt;MenuItem&gt;&lt;/MenuItem&gt;&lt;/Menu&gt;</code>, esto lo traduce en React.createElement...</li>
    <li>SWC herramienta online donde se puede ver cómo lo traduce.</li>
  </ul>
  <li>Vite JS -> Empaquetador de aplicaciones web, con esto podemos hacer el build y lanzar el proyecto. Alternativas: Next.js o Astro.</li>
  <li><strong>IMPORTANTE:</strong> en el return () de un componente, solo se puede renderizar un elemento, este puede contener tantos hijos como quieras.</li>
  <li>useState:</li>
  <ul>
    <li>Función Hook para control de los estados sobre los elementos.</li>
    <li>useState devuelve un array de dos posiciones:  </li>
    <ul>
      <li>[0]-> valor actual del estado.</li>
      <li>[1]-> función que permite actualizar ese estado.</li>
    </ul>
    <li><strong>IMPORTANTE</strong>: Al cambiar el estado de un elemento, este se renderiza en el DOM, si este elemento es un padre, se van a renderizar también los hijos aunque alguno de ellos no cambie.  </li>
  </ul>
  <li><strong>IMPORTANTE: NUNCA</strong> alterar una variable que se recibe por propiedades entre componentes, ni los estados. Si es necesario alterar esos valores, hay que hacer una copia</li>
</ul>

<h3>Lección 2 - Juego Tic Tac Toe en React: </h3>
<ul>
  <li>De nuevo, <strong>IMPORTANTE: NUNCA</strong> alterar una variable que se recibe por propiedades entre componentes, ni los estados. Si es necesario alterar esos valores, hay que hacer una copia</li>
  <li>Spread operator:</li>
  <ul>
    <li>const arrayOriginal = [1,2,3]</li>
    <li>const copiaArray = [...arrayOriginal] <- Esto copia el arrayOriginal en un nuevo array junto todos sus valores y elementos propios del arrayOriginal. También se utiliza con objetos, no solo arrays.</li>
    <li>NO se puede utilizar hooks de React (useState, useEffect, useRef...) dentro de una condición 'if', ni de un loop, ya que pierde la posición. <- MUY mala práctica. SIEMPRE en el cuerpo del componente y si se necesita hacer condición se hace dentro del hook.</li>
    <li>localStorage -> Solo deja guardar un string, si queremos guardar en la memoria los datos de un array, transformamos esos datos en string con <code>JSON.stringify(laVariable)</code> y luego los podemos recuperar con <code>JSON.parse(laVariable)</code>.</li>    
    <li>De nuevo, <strong>IMPORTANTE: NUNCA</strong> alterar una variable que se recibe por propiedades entre componentes, ni los estados. Si es necesario alterar esos valores, hay que hacer una copia</li>
  </ul>
</ul>

<h3>Lección 3 - Mouse Follower con useEffect: </h3>
<ul>
  <li>useEffect.</li>
    <ul>
      <li>Es un hook que queda observando el site y ejecuta el código cada vez que haya algún cambio en un componente/s o elemento/s que le asignemos y este se renderiza de nuevo, lo que implica que también se ejecuta la primera vez que se renderiza el componente (por ej. cuando se recarga la página).</li>
      <li>Es una función al que se le pasa dos parametros:</li>
      <ul>
        <li>useEffect(codeToExecute, listOfDependencies)</li>
        <li>El código a ejecutar cuando se detectan los cambios detonantes.</li>
        <li>Las "dependencias"(array), los cambios a detectar. No es obligatorio, si no se asigna, el código se ejecuta siempre que se renderice el componente, incluída la primera carga. Si solo queremos ejecutarlo en la primera vez: asignamos un array vacío.</li>
      </ul>
      <li>Se puede tener más de un useEffect</li>
    </ul>
  <li>Nos estamos suscribiendo a un Event Listener de pointermove, que detecta el movimiento del punturo, al pulsar en el botón de desactivar el seguimiento, tenemos que quitar esa suscripción del evento para que se detenga.</li>
  <li><strong>MUY UTIL:</strong> Una buena manera de comprobar los eventos activos, es lanzando en JS la línea: getEventListeners(window), y ver qué eventos están suscritos al window, esto puede ayudar a identificar problemas de rendimiento si se están ejecutando eventos cuando no los necesitamos y que se podrían parar.</li>
  <li><strong>MUY UTIL:</strong> Extensión para navegadores <strong>React Tools</strong>, con él podemos inspeccionar en la pestaña de Componentes, los componentes del proyecto y sus propiedades y cambiarlas para hacer pruebas y tests.</li>
</ul>

<h3>Lección 4 - Prueba técnica, llamadas a API: </h3>
<ul>
  <li>Si nos llevamos la lógica de nuestro componente a otro archivo para limpiarlo y este hacía cosas con los estados, nunca debemos mandarle el estado a esa función, el estado siempre se queda en el componente donde se asigna. Luego podemos cambiar el estado con lo que nos devuelva esa función externa</li>
  <li>Muchas veces cuando vemos useEffect dentro de mismos componentes, hay que preguntarnos si realmente no sería mejor meterlos en un Custom Hook y separarlo del componente, e importar solo el hook al mismo. Queda más limpio y mejora rendimiento.</li>
  
  <li>Custom hooks: function useNombreHook</li>
  <li>Diferencia entre una función normal y un custom hook: dentro de una función normal no podemos usar el resto de hooks y en la custom sí.</li>
  <li><strong>Playwright para testear,</strong> a mi me ha fallado.</li>

</ul>

<h3>Lección 5 - Prueba técnica, buscador de películas: </h3>
<ul>
  <li>useRef.</li>
    <ul>
      <li>Es un hook que permite crear una referencia a un elemento, esta referencia es mutable y persiste durante todo el ciclo de vida del componente.</li>
      <li> Muy útil para guardar cualquier valor que quieras mutar y que cada vez que cambia NO vuelve a renderizar el componente.</li>
    </ul>
  <li>Para conseguir los datos de un form con el event onSubmit: Object.fromEntries(new window.FormData(event.target))</li>



  <li>useMemo</li>
    <ul>
      <li>Puede parecer similar a useRef, la diferencia es que useMemo se utiliza para <strong>guardar el resultado de una función costosa de calcular, una función que si se ejecuta muchas veces, nos va a causar problemas de rendimiento</strong>; mientras que useRef se usa para guardar valores de un elemento.</li>
      <li>Por ejemplo, al hacer un sort de las películas por título, como se llama a la función en la que se calcula esto cada vez que hay un onChange del input de texto, cada vez que se escribe una letra se renderiza. Para evitar esto podemos guardar el resultado del sort en el useMemo y que no se renderice más veces hasta que los valores cambien.</li>
    </ul>
  <li>useCallback</li>
    <ul>
      <li>Parecido al useMemo, pero: useMemo se utiliza para memorizar el resultado de una función costosa, mientras que useCallback se utiliza para memorizar la función en sí misma. Ambos son útiles para mejorar el rendimiento de tus aplicaciones.</li>
    </ul>
  <li>En la tarea de hacer que se hagan búsquedas según el usuario va escribiendo, hay un problema: Hay veces que las búsquedas mientras se está buscando son las que se muestran al final y eso es un error muy típico. Ej: al buscar 'Matrix', se acaban visualizando los resultados de 'Mat', porque esos resultados han tardado más en devolverse y han llegado en último lugar y son los últimos en mostrarse en lugar de 'Matrix'.</li> 
  <ul>
    <li><strong>Para evitar esto: Debounce.</strong></li>
  </ul>
</ul>

  

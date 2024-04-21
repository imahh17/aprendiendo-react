# aprendiendo-react
<h1>Curso de repaso del framework React</h1>
<h2>Monorepo con distintos proyectos</h2>

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
    <li>Instalar Linter -> Standard JS. <code>npm install standard -D</code> en raíz aprendiendo-react</li>
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
    <li>useEffect.</li>
    <ul>
      <li>Es un hook que queda observando el site y ejecuta el código cada vez que haya algún cambio en un componente/s o elemento/s que le asignemos y este se renderiza de nuevo, lo que implica que también se ejecuta la primera vez que se renderiza el componente (por ej. cuando se recarga la página).</li>
      <li>Es una función al que se le pasa dos parametros:</li>
      <ul>
        <li>useEffect(codeToExecute, listOfDependencies)</li>
        <li>El código a ejecutar cuando se detectan los cambios detonantes.</li>
        <li>Las "dependencias"(array), los cambios a detectar. No es obligatorio, si no se asigna, el código se ejecuta siempre que se renderice el componente, incluída la primera carga. Si solo queremos ejecutarlo en la primera vez: asignamos un array vacío.</li>
      </ul>
    </ul>
  </ul>
</ul>




  

<h2>Introducción</h2>

Antes de comenzar este proyecto, ya tenía experiencia previa trabajando con React.js, lo que me permitió entender rápidamente los conceptos básicos de Gatsby, ya que está construido sobre éste. Sin embargo, Gatsby introduce nuevas características y flujos de trabajo, como el uso de GraphQL para la gestión de datos y la generación de páginas estáticas.

### Para familiarizarme con Gatsby, dediqué tiempo a:
<ol>
  <li> Leer la documentación oficial: La documentación de Gatsby es muy completa y me ayudó a entender cómo funciona el framework, desde la creación de páginas hasta la consulta de datos con GraphQL. </li>
  <li> Ver tutoriales en YouTube: Los tutoriales prácticos me permitieron ver ejemplos reales de cómo estructurar un proyecto y resolver problemas comunes. </li>
  <li> Resolver dudas con inteligencia artificial: Herramientas como Deepseek me ayudaron a aclarar conceptos y a encontrar soluciones rápidas a problemas específicos. </li> 
</ol>

Con esta preparación, me sentí listo para abordar el proyecto y cumplir con los requisitos planteados.

<h3>Estructura del proyecto y consulta de datos con GraphQL</h3>
<p>El proyecto utiliza archivos JSON para almacenar la información de los posts, los cuales se encuentran en la carpeta content/posts. Para acceder a estos datos, configuré el plugin gatsby-source-filesystem en el archivo gatsby-config.js. Este plugin permite a Gatsby leer los archivos del sistema de archivos y convertirlos en nodos de GraphQL.</p>

<p>Para crear los nodos utilicé la función `onCreateNode`. Esta función se ejecuta cada vez que se crea un nodo en Gatsby, y me permitió extraer el contenido de los archivos JSON.</p>

<p>Con esta configuración, cada archivo JSON en la carpeta content/posts se convierte en un nodo de GraphQL, y su contenido se almacena en el campo postData. Luego, en los componentes o páginas, puedo consultar estos datos utilizando GraphQL.</p>


<h3>Generación de páginas con gatsby-node.js</h3>
<p>Para generar páginas de manera dinámica, utilicé el archivo gatsby-node.js. Este archivo permite crear páginas programáticamente durante el proceso de compilación.</p>

<p>En gatsby-node.js, realicé una consulta GraphQL para obtener todos los archivos JSON y luego usé la función createPage de Gatsby para generar una página para cada post. Cada página se crea utilizando un template (blog-post.js), y se le pasa el slug como contexto para que pueda consultar los datos específicos de cada post.</p>

<h3>Resaltado de sintaxis para fragmentos de código</h3>
<p>Para implementar el resaltado de sintaxis en los fragmentos de código, utilicé la librería Highlight.js. Esta librería es fácil de integrar y ofrece una amplia variedad de temas para personalizar la apariencia del código, importé Highlight.js y un tema CSS en el componente blog-post.js, inicialicé Highlight.js en el hook useEffect para aplicar el resaltado al cargar el componente, y me aseguré que los fragmentos de código estuvieran envueltos en las etiquetas `<pre>` y `<code>` con la clase del lenguaje correspondiente.

<h3>Desafíos y soluciones</h3>
Durante el desarrollo del proyecto, me encontré con algunos desafíos:
<ol>
<li>Configuración inicial de GraphQL:Al principio, no estaba familiarizado con la estructura de consultas GraphQL en Gatsby. Para resolverlo, revisé la documentación oficial y seguí tutoriales prácticos para entender cómo consultar datos desde archivos JSON.</li>
<li> Generación dinámica de páginas:Tuve dificultades para entender cómo usar gatsby-node.js para generar páginas dinámicas. Después de estudiar ejemplos y consultar con Deepseek, logré implementar la lógica necesaria. </li>
<li>Integración de Highlight.js: Al integrar Highlight.js, inicialmente no se aplicaba el resaltado. Descubrí que necesitaba llamar a hljs.highlightAll() dentro de useEffect para asegurarme de que el DOM estuviera listo.</li>
Optimización SEO con React Helmet:
<li>Para hacer la página SEO-friendly, integré React Helmet en los componentes de la página principal (HomePage) y de los posts (BlogPost). Esto me permitió agregar metadatos dinámicos, como títulos y descripciones, para mejorar la visibilidad en motores de búsqueda y redes sociales. Aprendí a usar etiquetas como <title> y <meta> para personalizar la información de cada página. <li>
</ol>


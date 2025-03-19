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
Para implementar el resaltado de sintaxis en los fragmentos de código, utilicé la librería Highlight.js. Esta librería es fácil de integrar y ofrece una amplia variedad de temas para personalizar la apariencia del código.



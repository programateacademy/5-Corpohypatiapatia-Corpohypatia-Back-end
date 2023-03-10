<a name="readme-top"></a>

<br />
<div align="center">
  


  <h1 align="center">CORPOHYPATIA</h1>

  <p align="center">
    Documentación BACKEND
    <br />
    <br />
    <a href="https://5-corpohypatiapatia-corpohypatia-front-end.vercel.app/">Despligue de la aplicación</a>
    <br />
    <a href="https://brayanduarte.vercel.app/">Brayan Duarte</a>
    ·
    <a href="https://github.com/AngelaDiaz20">Angela Diaz</a>
    ·
    <a href="#">Valentina Camacho</a>
    ·
    <a href="#">Ivan Muñoz</a>
    ·
    <a href="#">Jonathan Sánchez</a>
    ·
    <a href="https://github.com/Jlbejarano662">Jazmin Bejarano</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Acerca-del-proyecto">Acerca del proyecto</a></li>
    <li><a href="#Construccion-de-la-aplicacion">Construcción de la aplicación</a></li>
    <li><a href="#Estructura-de-carpetas">Estructura de carpetas</a></li>
  </ol>
</details>

## Acerca del proyecto

Existen prácticas y concepciones que perpetúan condiciones de desventaja educativa, económica y social para las mujeres, la infancia y la adolescencia. En particular en municipios como Bucaramanga esta situación se ha recrudecido con riesgos de desescolarización, consumo de SPA e instrumentalización y explotación sexual y con fines comerciales y delincuenciales de Niños y Niñas. Adicionalmente contextos marcados por la desestructuración familiar, violencias domésticas y comunitaria. Actualmente se adelanta el Proyecto Sent Pensar La vida, estrategia de educación emocional con 250 niñas y niñas y 165 madres y cuidadoras en 5 barrios de la ciudad de Bucaramanga. Este proyecto contiene 4 resultados básicos, 1 sobre levantamiento de línea de base con población diana. 2 Una estrategia con N, 3 Una estrategia con madres y cuidadores y un 4to resultado con instituciones públicas y privadas, entre ellos actores comunitarios. Previamente se realizó una intervención de prevención de consumo de SPA con NN y jóvenes de estos barrios. Se avanzó en lograr articulación interinstitucional para asegurar rutas de atención de casos.

* <h4>Descripción del problema</h4>

  No se cuenta con una herramienta divulgativa y de seguimiento del Proyecto. Esto genera como efecto que no se haya logrado una mayor articulación y presencia en      los 5 barrios del proyecto, en consecuencia, la oferta institucional para responder a los requerimientos de apoyo a NN y sus familias es muy limitada. Del total de población diana del proyecto, solo el 20% de las familias reciben apoyos de programas institucionales cómo familias en acción. De igual forma dentro de las 25 entidades gubernamentales responsables de la garantía de derechos a nivel municipal solo 7 están incidiendo en los barrios con intervenciones directas en beneficio de la población diana.

* <h4>Público objetivo</h4>

  El público administrador sería el equipo técnico del proyecto y estaría
dirigido a la población en general, cómo medio divulgativo e
informativo y que sirva para los fines de seguimiento.

* <h4>Impacto esperadoo</h4>

  Los resultados esperados es poder disponer de una herramienta de
seguimiento y monitoreo a los avances del proyecto.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Construccion de la aplicacion

Esta sección tiene una lista de los principales frameworks/librerias/dependencias que se utilizaron para construir este proyecto.

* <a href="https://nodejs.org/es/">![image](https://user-images.githubusercontent.com/50422794/215834151-4c767188-7bfa-406e-9967-9c07dc4f737f.png)</a>
* <a href="https://jestjs.io/">![image](https://user-images.githubusercontent.com/50422794/224225170-f7d40b73-9d04-4cca-9403-ba8ba0ebb9f8.png)</a>
* <a href="https://testing-library.com/">![image](https://user-images.githubusercontent.com/50422794/224225264-65731555-859b-412f-89df-660d357c92db.png)</a>
* <a href="https://expressjs.com/es/">![image](https://user-images.githubusercontent.com/50422794/224217240-545381c4-9cbe-4e57-a68f-46e957f42e96.png)</a>
* <a href="https://www.mongodb.com/">![image](https://user-images.githubusercontent.com/50422794/224217313-3bc5280e-8bec-469f-b245-c16757261950.png)</a>
* <a href="https://www.npmjs.com/package/bcryptjs">![image](https://user-images.githubusercontent.com/50422794/224215696-3472debe-fcc5-4d5f-9ecb-206a804da505.png)</a>
* <a href="https://www.npmjs.com/package/cors">![image](https://user-images.githubusercontent.com/50422794/224216254-58b34b97-ccbb-46a1-ac12-336786d80cbf.png)</a>
* <a href="https://www.npmjs.com/package/dotenv">![image](https://user-images.githubusercontent.com/50422794/224216603-c62d9a17-1f42-46f9-8fa9-8b02e1be39e9.png)</a>
* <a href="https://www.npmjs.com/package/jsonwebtoken">![image](https://user-images.githubusercontent.com/50422794/224216708-28736fcc-e14b-4266-84b7-66e3f49032ee.png)</a>
* <a href="https://www.npmjs.com/package/multer">![image](https://user-images.githubusercontent.com/50422794/224216810-ed2ba4ca-9343-45f3-b7d9-2875d08bda2a.png)</a>
* <a href="https://www.npmjs.com/package/nodemailer">![image](https://user-images.githubusercontent.com/50422794/224216897-8016b0b3-1696-483c-9eb4-1da51d8773b5.png)</a>
* <a href="https://nodemon.io/">![image](https://user-images.githubusercontent.com/50422794/224217148-bcddc480-243c-4164-8600-acbf8991c010.png)</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Estructura de carpetas

Para la estructura de carpetas se utilizo el patron de diseño MVC lo que significa Modelo(Model) - Vista(View) - Controlador(Controller) (Por obvias razones, la vista no aparece en esta estructura de carpetas, ya que se encuentra en la parte del frontend)

![image](https://user-images.githubusercontent.com/50422794/224220711-c70679b4-041f-45bb-921d-dfd55930a8ad.png)

* Controllers

  Utilizamos la carpeta Controller para hacer de intermediario entre el modelo y la vista. Es el encargado de recibir las solicitudes del usuario, procesarlas y enviar la respuesta correspondiente. En una aplicación Node.js con Express, el controlador se implementó utilizando una serie de rutas que se definen en el archivo app.js.

* DataBases

  Utilizamos la carpeta DataBases para guardar archivos de configuración de bases de datos para tener un mejor control en las variables de entorno

* Libraries

  Utilizamos la carpeta Libraries para incluir módulos y/o paquetes personalizados que utilizamos en varias partes de la aplicación, así como archivos de configuración o utilidad que no encajan en ninguna otra carpeta de la aplicación. Sin embargo, el nombre y uso de esta carpeta puede variar según la preferencia del desarrollador o equipo de desarrollo.

* Middlewares

  Utilizamos la carpetalos Middlewares ya que nos permitieron realizar tareas importantes antes o después de que se procesen las solicitudes de los usuarios. Se pueden definir a nivel de aplicación, enrutador o ruta, según las necesidades específicas de la aplicación.

* Routes

  Utilizamos la carpetalos Routes para separar la definición de las rutas de la lógica de los controladores, y así mantener una mejor organización de la aplicación.

* (Models)Schemas

  Utilizamos la carpetalos para representar la estructura de datos de la aplicación. Ya que esta aplicacion fue hecha con Node.js y Express, el modelo se implemento utlizando una base de datos relacional MONGODB

* App.js

  En este archivo definimos las rutas de la aplicación utilizando el método de enrutamiento de Express.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vHwWMRRlrYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    P.mb-5 La gestión del Talento Humano e interacción con el equipo de trabajo es una de las habilidades y competencias que se adquieren con el propósito de hacer más eficiente y eficaz el trabajo asignado. Dentro del presente contenido, se profundizará en las políticas y normativas del talento humano, como también sobre la coordinación y orientación de la operación con el equipo de trabajo y acciones como la evaluación del desempeño, medición de rendimiento y planes de mejora. Estos aspectos, no solo favorecen el mejoramiento continuo de las áreas de trabajo, sino un aspecto muy importante como el clima laboral, porque se propende por respetar los derechos de los trabajadores y valorar los deberes laborales.

    .row.background-img.mb-5.py-lg-4
      .col-lg-6
      .col-lg-5.backg-white.p-lg-4.m-lg-4.m-md-1.p-0.p-md-3
        SlyderE.m-lg-0.mb-3.p-lg-0.p-4.p-md-2(:datos="datosSlyder")


    p#intro.mb-5 Una vez se logra vincular a una organización (pública o privada), una de las tareas primordiales es conocer a fondo su funcionamiento, la coordinación y responsables de ciertas actividades con las que se puede involucrar laboralmente, directa o transversalmente. Asimismo, la interacción de los equipos de trabajo de los distintos departamentos o áreas con los que cuenta la empresa, contribuye en que la articulación y empalme de las responsabilidades, se desarrolle de forma organizada y óptima con un solo fin: la visión y los objetivos de la empresa. 

    .row.justify-content-center.mb-5.bs.contenedor-intro
      .col-lg-5.contenedor-img
        img(src='@/assets/curso/imagen-intro.png', alt='Imagen decorativa')
      .col-lg-5
        .contenedor-texto.color__borde--contenido.p-4.align-items-center.d-flex
          p
            strong.gran La gestión del talento humano es una de las actividades que en los últimos tiempos se ha venido fortaleciendo en el sector empresarial, 
            | porque se ha logrado establecer que es uno de los motores que permiten el crecimiento y la alta competitividad de la producción en el mercado. Una correcta administración del Talento Humano optimiza el tiempo, la eficacia y la efectividad en el desarrollo de su actividad económica. 


         
    p Mediante el conocimiento y habilidades adquiridas para la gestión del talento humano, se pretende generar procesos autónomos y de trabajo colaborativo permanentes, fortaleciendo el equilibrio de los componentes racionales y emocionales orientados hacia el Desarrollo Humano Integral.

</template>

<script>
import SlyderE from '../components/SlyderE'
export default {
  name: 'Introduccion',
  components: {
    SlyderE,
  },
  data: () => ({
    datosSlyder: [
      {
        icono: require('@/assets/curso/intro-ico1.svg'),
        texto: 'Bienvenidos al componente formativo.',
        resaltado: 'TALENTO HUMANO',
      },
      {
        icono: require('@/assets/curso/intro-ico2.svg'),
        texto:
          'Hoy en día en la administración actual, el Talento Humano ha venido transformando la manera de trabajo de toda organización.',
      },
      {
        icono: require('@/assets/curso/intro-ico3.svg'),
        texto:
          'Por ello la importancia de conocer algunos conceptos y dinámicas que permitirán comprender como es la gestión de esta importante área.',
      },
      {
        icono: require('@/assets/curso/intro-ico4.svg'),
        resaltado: 'Bienvenidos',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.background-img
  background-image: url(../assets/curso/intro-fondo.svg)
  background-repeat: no-repeat


@media (max-width: $bp-max-md)
  .background-img
    background-image: none
  .slyder-b
    border: 10px solid #FFE9CB
</style>

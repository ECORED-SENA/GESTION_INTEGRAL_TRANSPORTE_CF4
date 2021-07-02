<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    p.mb-5 Una vez se logra vincular a una organización (pública o privada), una de las tareas primordiales es conocer a fondo su funcionamiento, la coordinación y responsables de ciertas actividades con las que se puede involucrar laboralmente, directa o transversalmente. Asimismo, la interacción de los equipos de trabajo de los distintos departamentos o áreas con los que cuenta la empresa, contribuye en que la articulación y empalme de las responsabilidades, se desarrolle de forma organizada y óptima con un solo fin: la visión y los objetivos de la empresa. 

    .row.justify-content-center.mb-5
        .col-lg-5.p-md-0
          figure
            img(src='@/assets/curso/imagen-intro.png', alt='Imagen decorativa')
        .col-lg-5.px-md-4.borde-cuadro.p-4
          h4 La gestión del talento humano es una de las actividades que en los últimos tiempos se ha venido fortaleciendo en el sector empresarial, 
          p.mb-0 porque se ha logrado establecer que es uno de los motores que permiten el crecimiento y la alta competitividad de la producción en el mercado. Una correcta administración del Talento Humano optimiza el tiempo, la eficacia y la efectividad en el desarrollo de su actividad económica. 

    p Mediante el conocimiento y habilidades adquiridas para la gestión del talento humano, se pretende generar procesos autónomos y de trabajo colaborativo permanentes, fortaleciendo el equilibrio de los componentes racionales y emocionales orientados hacia el Desarrollo Humano Integral.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

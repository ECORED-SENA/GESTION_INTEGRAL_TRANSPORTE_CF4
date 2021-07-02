<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Indicadores de gestión

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.png", alt="Indicadores de gestión")  

    p.mb-5(data-aos="fade") Los indicadores de gestión son una herramienta que permite la medición cualitativa y cuantitativa del cumplimiento de las metas. Debe ser periódica para validar los procesos y las mejoras que requiere la organización, ya que, sobre ellos, los directivos pueden tomar decisiones en aspectos como presupuestos, compra de equipos, generación de áreas, cargos, ascensos. Lo más relevante para el propósito de establecer esta forma de medir la gestión es evaluar el cumplimiento de la misión, la visión, los objetivos planteados por la organización, valores y planeación anual. 


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada" data-aos="fade-down")
      
      .row.justify-content-center(titulo="Características")
        .col-md-2.col-5.px-lg-5.mb-3
          figure
            img(src='@/assets/curso/descripcion.svg', alt='Características')
        .col-md-9.col-12.mb-4.mb-md-0
          p Para poder formular los indicadores es indispensable reconocer que deben ser: simples o de fácil comprensión, válidos en el tiempo, pertinentes, útiles, participativos de todos los implicados y oportunos; todos estos aspectos contribuyen a que la gestión sea medible de forma integral y que se determine la realidad de la organización.

      div(titulo="Clasificación")
        .row.justify-content-center
          .col-md-2.col-5.px-lg-5.mb-3
            figure
              img(src='@/assets/curso/clasificacion.svg', alt='Clasificación')
          .col-md-9.col-12.mb-4.mb-md-0
            p Existe variedad de tipos o clases de indicadores, e inclusive por cada área que tenga una organización, se pueden establecer indicadores de gestión de acuerdo con sus actividades, también de forma general habrá algunos indicadores que sean generales para todos los departamentos o áreas de la organización. Estos son algunos ejemplos de indicadores: efectividad, eficiencia, calidad, productividad, rentabilidad, liquidez. Para las distintas dependencias puede haber indicadores de administración, gestión del talento humano, operación, comunicación.

      div(titulo="Ejemplos")
        .row.justify-content-center
          .col-md-2.col-5.px-lg-5.mb-3
            figure
              img(src='@/assets/curso/04-game.svg', alt='Ejemplos')
          .col-md-9.col-12.mb-4.mb-md-0
            p A continuación, se clasifican de forma general algunos indicadores y se acompañan de ejemplos para su mejor comprensión:
            ul.lista-ul--color.lista-morada
              li.mb-0 
                i.fas.fa-square
                p.mb-0
                  strong Indicadores internos y externos: 
                  | percepción de los empleados frente a la infraestructura y percepción de los clientes con tiempo de entrega.
              li.mb-0
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores cualitativos y cuantitativos: 
                  | calificación de la calidad del servicio y volumen de despachos mensuales.
              li.mb-0 
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores a largo plazo y corto plazo: 
                  | tiempo de vida de un cliente (fidelidad) e inversión realizada en determinado proyecto.
              li.mb-0 
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores predictivos: 
                  | análisis de presupuesto final con elementos parciales.
              li.mb-0 
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores de eficacia y eficiencia: 
                  | costo de operación de un transporte y cantidad de servicios prestados en el mes.
              li.mb-0 
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores de procesos y resultados: 
                  | medición de recursos empleados en “X” tarea, actividades requeridas, calidad y cantidad de productos vs metas, impactos logrados en clientes y operación.           
              li.mb-0 
                i.fas.fa-square
                p.mb-0 
                  strong Indicadores estratégicos y operativos: 
                  | tiempos empleados en despacho de mercancías desde la realización del pedido, tiempo de espera en terminales, respuesta de subcontratistas de servicio.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Planes de mejoramiento

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema6.png", alt="Planes de mejoramiento")  

    p(data-aos="fade") Una vez establecido el esquema con el cual se presentan los informes de gestión y sus contenidos, existe un proceso complementario denominado “auditoría”, con el cual se realizan unas revisiones periódicas con las que se pretende hacer un seguimiento y control sobre los procesos y sus resultados, con el que seguramente se podrá mejorar la gestión. Entendiendo esto, el resultado de las auditorías (internas o externas) resuelven la implementación de un plan de mejoramiento el cual consiste en fijar unos objetivos, unas actividades y nombrar unos responsables de cada actividad que siempre buscan mejorar el proceso. 
    p(data-aos="fade") Esta revisión debe partir de la implementación de procesos ordenados, es decir un “plan de gestión” previo que tenga la empresa, donde se identifique claramente los procedimientos a seguir en cada una de las áreas, los formatos, los responsables y la gestión de forma general. Todas las personas involucradas en los procesos deben conocer a cabalidad los procedimientos y documentos que evidencian la gestión, de lo contrario se incrementarían los planes de mejora.  
    p(data-aos="fade") En conclusión, los planes de mejora resuelven las inconsistencias que se encuentran en las auditorías, a través de acciones medibles y evidenciables, a las cuales se les hará seguimiento posterior de acuerdo a un cronograma establecido dentro del mismo plan. 

    Separador


    // 6.1
    #t_6_1.titulo-segundo(data-aos="fade-right")
      .h2 6.1. Elementos de un plan de mejoramiento

    p.mb-4(data-aos="fade") Las organizaciones tienen diferentes actividades económicas por tal razón, de acuerdo con los objetivos empresariales, se debe definir los tipos de evaluación que más convienen, las siguientes son las más empleadas:
    
    .row(data-aos="fade-down")
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema6-1-image1.png", alt="Objetivos")
          .text
            p.text-center.text-white.mb-3.h4 
              strong Objetivos
            p.text-center.text-white Es aquello que pretende alcanzar el plan en un tiempo determinado, los objetivos deben tener un verbo en infinitivo al comienzo y una breve referencia de “cómo” se piensa desarrollar.
      .col-lg-4
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema6-1-image2.png", alt="Actividades o acciones")
          .text
            p.text-center.text-white.mb-3.h4 
              strong Actividades o acciones
            p.text-center.text-white De forma concreta se establecen las actividades para mejorar. Todas estas actividades o acciones propuestas deben tener evidencia de su desarrollo: formatos de asistencia a sensibilizaciones, fotografías, informes, videos. 
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema6-1-image3.png", alt="Responsable")
          .text
            p.text-center.text-white.mb-3.h4 
              strong Responsable
            p.text-center.text-white Se relaciona a la persona encargada de validar el cumplimiento de las acciones, recolectar las evidencias y los tiempos.

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema6-1-image4.png", alt="Cronograma")
          .text
            p.text-center.text-white.mb-3.h4
              strong Cronograma
            p.text-center.text-white Establece el tiempo en el cual se desarrollará el plan y presenta los plazos por acciones para su seguimiento y ejecución. 
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema6-1-image5.png", alt="Indicadores")
          .text
            p.text-center.text-white.mb-3.h4
              strong Indicadores
            p.text-center.text-white Como se expuso anteriormente, son los medios que permiten medir de forma objetiva los resultados, dentro del plan de mejora, puede ser el tiempo, cantidad de productos entregables, instalación o implementación de algo. Se pueden representar en avance de porcentaje o con calificaciones.
     

    p.mb-4(data-aos="fade") Para ampliar el conocimiento frente a la formulación y seguimiento de los planes de mejoramiento, se recomienda consultar el siguiente formato en excel, un documento de la de la Universidad pedagógica y Tecnológica de Colombia y un instructivo de la contraloría de Bogotá para el diligenciamiento del formato. 

    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-right")
            figure.mb-5(data-aos="fade")
              img(src="@/assets/curso/imagen6-1.svg", alt="Anexos")
          .col-lg-6(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Formato_plan_de_mejoramiento.xls')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-xls.svg")
              .anexo__texto
                p 
                  strong Anexo. 
                  | Formato plan de mejoramiento

            a.anexo.mb-4(:href="obtenerLink('/downloads/Guia_para_la_formulacion_del_plan_de_mejoramiento.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p 
                  strong Anexo. 
                  | Guía para la formulación del plan de mejoramiento
            
            a.anexo.mb-4(:href="obtenerLink('/downloads/Instructivo_CB-0402F_Plan_mejoramient_formulacion_version_2.0.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p 
                  strong Anexo. 
                  | Instructivo CB-0402F Plan de mejoramiento formulación versión 2.0


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" scoped>
.nav-holder
  color: #FFF
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FF7758
  opacity: 0.7
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease
  border-top-left-radius: 16px
  border-top-right-radius: 16px

.nav-holder:before
  -webkit-transform: translateY(80%)
  -moz-transform: translateY(80%)
  transform: translateY(80%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 80%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 100
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
  p
    margin: 0
    opacity: 0

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 8%
  h4, p
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    transition-delay: 0.2s;

.nav-holder a
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
</style>

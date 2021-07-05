<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Principios y antecedentes de la administración

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.png", alt="Principios y antecedentes de la administración")  

    p(data-aos="fade") En el presente numeral, se mencionan los aspectos más relevantes de la historia o antecedentes, principios y fundamentos de la administración, los cuales deberán ser complementados con el estudio del material propuesto al final del presente documento.
    
    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1. Antecedentes históricos 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade") Las necesidades básicas del ser humano dieron pie a la creación de ciertas actividades que permitieron mejorar la calidad de vida; actividades como recolectar alimentos, adecuar un espacio para descansar y proteger a su familia de los depredadores, cazar animales para alimentarse, protegerse del clima; sumados a aspectos como la necesidad de elegir a un líder o tomar el liderazgo para organizar a las comunidades, también causaron que el ser humano conociera la administración desde el comienzo del establecimiento de la sociedad. Con la evolución y establecimiento de clanes, luego poblaciones y ciudades, nacen aspectos como la democracia y el bien común, por ende, se comienzan a seleccionar líderes eficientes que propendan por ayudar el crecimiento de la economía, de ahí nace la necesidad de intercambiar comercialmente productos, con los cuales, por diferentes razones no pueden producirlos directamente como: insumos, telas, alimentos, metales, entre otros.
    p.mb-4(data-aos="fade") En la era contemporánea, surgen autores como:

    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-right")
            .nav-holder(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/Henry-Fayol.svg", alt="Henry Fayol")
              .text.align-items-center.p-lg-5.p-4
                .row.py-lg-5.py-3
                  .col-1.lista-salmon
                    i.fas.fa-square 
                  .col-10
                    h4 Con sus publicaciones como “Los fundamentos de la teoría administrativa” en 1900 y “Administración industrial y General” de 1930.   
          .col-lg-6(data-aos="fade-left")
            .nav-holder
              img(src="@/assets/curso/Frederick-Taylor.svg", alt="Frederick Taylor")
              .text.align-items-center.p-lg-5.p-4
                .row.py-lg-5.py-3
                  .col-1.lista-salmon
                    i.fas.fa-square 
                  .col-10
                    h4 Con escritos como el ensayo “los Principios de la Administración científica” y “El Management Científico” producidos en el año de 1911.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10.tarjeta-rosa-linea.px-5.py-4
        p.mb-0 Autores que proponen teorías con las cuales se ha fortalecido el esquema de la administración, aspectos como la racionalización de la estructura, funciones organizacionales y organización racional del trabajo operario, incrementan la eficiencia en el logro de las metas u objetivos de la organización, es así que, nace el concepto de la administración científica, la cual se desarrolla con el fin de determinar las causas y los efectos de los problemas que impiden o afectan el desarrollo y logro de las metas, a manera de “investigación o rastreo”.

    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2. Principios y fundamentos

    p.mb-4(data-aos="fade") A continuación, se va a profundizar en los principios y fundamentos de la administración científica propuestos por Frederick Taylor, quien, de acuerdo con varios autores expertos en administración, ha logrado cimentar una buena metodología para lograr con éxito una administración más eficiente.

    LineaTiempoC.color-secundario.mb-5(:datos="datosLineaTiempoC")

    p.mb-4(data-aos="fade") Los fundamentos a que se refieren las bases que direccionan la gestión, se describen a continuación:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-down")
      .row.justify-content-center(titulo="1. Identidad de los intereses de los directivos y los colaboradores")
        .col-md-9.mb-4.mb-md-0
          p Ambos actores tienen un mismo propósito o fin, que es el de lograr un máximo nivel de prosperidad, es decir, alto lucro financiero. La frase común que cita: “Todos trabajamos porque necesitamos dinero” puede expresar de forma sencilla. Debe existir un equilibrio y un análisis muy profundo de lo que el empleador puede otorgar de salario al colaborador siendo justo y sin descartar que el mismo colaborador debe ser consciente de contribuir en el desarrollo de los objetivos con un grado de eficiencia alto y honesto con su rendimiento, el empleador debe apostarle a la capacitación constante para desarrollar el potencial de su equipo de trabajo.
        .col-md-2.col-4.px-lg-4
          figure
            img.px-lg-1(src='@/assets/curso/tema2-2-ico1.svg', alt='1. Identidad de los intereses de los directivos y los colaboradores')

      div.row.justify-content-center(titulo="2. Limitación de la producción")
        .col-md-9.mb-4.mb-md-0
          p Como directivo debe conocer el tiempo justo de la producción, es decir, no puede simplemente considerar el tiempo de trabajo y la capacidad de producción de manera empírica, porque debe haber un equilibrio entre la capacidad, la cantidad y los requerimientos de producción, además, es indispensable establecer el ritmo de trabajo, identificar cómo funcionan y trabajan los colaboradores. En ocasiones hay personas que se toman más tiempo en desarrollar una tarea pero son más precisos, mientras que otros que son más rápidos pueden cometer imprudencias. El empresario debe propender por el uso de técnicas que eviten la pereza en sus colaboradores ya que muchas veces, los oficios repetitivos tienen a ser monótonos.
        .col-md-2.col-4.px-lg-4
          figure
            img.px-lg-1(src='@/assets/curso/tema2-2-ico2.svg', alt='2. Limitación de la producción')

      div.row.justify-content-center(titulo="3. Estudio de las condiciones de trabajo")
        .col-md-9.mb-4.mb-md-0
          p Este aspecto está relacionado no solo a las condiciones de la infraestructura y sus herramientas de trabajo, sino también con el clima organizacional, es importante conocer la percepción de los colaboradores y el uso e implementación de nuevas tecnologías que contribuyan con mejorar el rendimiento y efectividad del resultado. Otro aspecto importante dentro de las condiciones de trabajo es conocer las cargas laborales de las personas y reconocer que deben ser equitativas entre los colaboradores y deben estar distribuidas o divididas para que entre todos contribuyan con el crecimiento de la organización.
        .col-md-2.col-4.px-lg-4
          figure
            img.px-lg-1(src='@/assets/curso/tema2-2-ico3.svg', alt='3. Estudio de las condiciones de trabajo')

      div.row.justify-content-center(titulo="4. Organización científica")
        .col-md-9.mb-4.mb-md-0
          p El objetivo principal de la implementación de la administración científica es el de mantener el mayor potencial de la producción en marcha, con los recursos que cuenta, optimizando la interacción entre todos los componentes del proceso.
        .col-md-2.col-4.px-lg-5
          figure
            img(src='@/assets/curso/tema2-2-ico4.svg', alt='4. Organización científica')


    Separador


    // 2.3
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h2 2.3. Ventajas y desventajas

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        img(src='@/assets/curso/ventajas-deventajas.svg', alt='Ventajas y desventajas')
        p.cuadro-naranja.p-4 Como todos los procesos, metodologías o procedimientos con los cuales se desea llevar a cabo alguna actividad, la administración científica también cuenta con ventajas y desventajas a la hora de su implementación.

    p.mb-4(data-aos="fade") Por tal razón se presentarán las más relevantes:

    .row.justify-content-center.mb-4
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-right")
            .nav-holder2(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/ventajas.svg", alt="Ventajas")
              .text.p-5
                h4.mb-3 Ventajas
                ul.lista-ul--color.lista-morada
                  li
                    i.fas.fa-square
                    p.mb-0 Cada colaborador produce su trabajo con mayor eficiencia.
                  li
                    i.fas.fa-square
                    p.mb-0 Se motiva con una remuneración justa.
                  li
                    i.fas.fa-square
                    p.mb-0 Promueve el desarrollo de los colaboradores con la capacitación continua y posibilidades de ascenso.
                  li
                    i.fas.fa-square
                    p.mb-0 Se logra que el colaborador se especialice en su oficio.
                  li
                    i.fas.fa-square
                    p.mb-0 Se logra definir cuando es trabajo de producción intelectual o manual.
                  li
                    i.fas.fa-square
                    p.mb-0 Se logran los mejores resultados cuando se distribuye el trabajo.       
                  
          .col-lg-6(data-aos="fade-left")
            .nav-holder3
              img(src="@/assets/curso/desventajas.svg", alt="Desventajas")
              .text.p-5
                h4.mb-3 Desventajas
                ul.lista-ul--color.lista-salmon
                  li
                    i.fas.fa-square
                    p.mb-0 La línea de comunicación es descendente, es decir de los directivos a sus colaboradores, sin oportunidad de recibir opinión de los colaboradores.
                  li
                    i.fas.fa-square
                    p.mb-0 Se puede perder la “unidad de mando” que es recibir órdenes de un superior, si se pierde genera conflictos entre los compañeros, porque siempre estará la necesidad de la presencia del líder.
                  li
                    i.fas.fa-square
                    p.mb-0 Se promueve el individualismo queriendo surgir o reflejar mejor eficiencia.
                      

    p.mb-4(data-aos="fade") Para entrar en materia con la temática principal del presente contenido, se continuará con el estudio de la administración específicamente para el talento humano. 

</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC'
export default {
  name: 'Tema2',
  components: {
    LineaTiempoC,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/tema2-2-ico1.svg'),
        texto: '1. El estudio y organización científica del trabajo',
      },
      {
        icono: require('@/assets/curso/tema2-2-ico2.svg'),
        texto: '2. Selección y entrenamiento de los colaboradores',
      },
      {
        icono: require('@/assets/curso/tema2-2-ico3.svg'),
        texto: '3. Acción cooperativa entre directivos y operarios',
      },
      {
        icono: require('@/assets/curso/tema2-2-ico4.svg'),
        texto:
          '4. Responsabilidad y especialización de los superiores en la planificación del trabajo',
      },
    ],
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
  display: inline-block;
  margin: 10px 5px;
  overflow: hidden;
  position: relative;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFBA5B
  opacity: 0.7
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  -webkit-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.8
  bottom: 50px
  -webkit-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 100
  img
    backface-visibility: hidden
    vertical-align: top
  h4, i
    opacity: 0

.nav-holder h3
    margin: 0
    opacity: 1
    margin-top: 25%

.nav-holder:hover
  h4, i
    opacity: 1
    -webkit-transition-delay: 0.2s
    transition-delay: 0.2s

.nav-holder2
  color: #FFF
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #F2EDFF
  opacity: 0.8
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  -webkit-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder2
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
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder2:hover
  .text
    top: 0
  h4, p, i, li, ul
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;

.nav-holder3
  color: #FFF
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder3 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder3:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFCBBF
  opacity: 0.8
  -webkit-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder3:before
  -webkit-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder3:hover:before
  -webkit-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder3
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
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder3:hover
  .text
    top: 0
  h4, p, i, li, ul
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
</style>

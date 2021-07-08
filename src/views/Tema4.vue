<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Evaluación del desempeño

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.png", alt="Evaluación del desempeño")  

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p Una vez se han definido los aspectos anteriores dentro de la administración del talento humano, es fundamental el proceso de la “evaluación”. Así como en la formación académica se realiza una evaluación al final del proceso, en cuanto al conocimiento para validar si se aprende, el producto para determinar si están claros los procesos o el desempeño para verificar el criterio y la toma de decisiones frente a situaciones que se pueden presentar en el ámbito laboral, en las organizaciones también acogen ciertas metodologías para cualificar y calificar el desempeño de sus colaboradores, aunque los aspectos que se evalúan son diferentes.
        .cajon.tarjeta-morada-linea.px-4.py-3.mb-3
          p.mb-0 Mediante la evaluación de desempeño, se espera contribuir con la promoción de los colaboradores, identificar los aspectos en los que se debe proyectar las capacitaciones, validar períodos de prueba y ayudar a sus colaboradores en comprender su estado y necesidad de mejora.  
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/imagen-tema4.svg", alt="Imagen decorativa")  

    Separador


    // 4.1
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h2 4.1.	Tipos de evaluación de desempeño

    p.mb-4 Las organizaciones tienen diferentes actividades económicas por tal razón, de acuerdo con los objetivos empresariales, se debe definir los tipos de evaluación que más convienen, las siguientes son las más empleadas:
        
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Evaluación de la actuación del personal" :icono="require('@/assets/curso/tema4-1-icono1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-1-imagen1.png', alt='Evaluación de la actuación del personal')
          .col-md-6
            h4 Evaluación de la actuación del personal
            p Para definir este tipo de evaluación es necesario establecer un período en el cual se piensa materializar, así se puede determinar el rendimiento de los colaboradores e incluyen aspectos del área técnica como: criterio profesional, relaciones con el cliente, con el equipo de trabajo y con sus dirigentes. Este sistema promueve la comunicación y la confianza entre los directivos y sus colaboradores, lo cual direcciona un crecimiento y retroalimentación mutua, lo cual debe contar con discreción para que haya más sinceridad. Los evaluadores deben hacer esto de forma individual para que haya éxito y se dé continuidad al proceso. Ejemplo: escalas gráficas, check list, informes de supervisores.
          
      .py-4.py-md-5(titulo="Autoevaluación" :icono="require('@/assets/curso/tema4-1-icono2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-1-imagen2.png', alt='Autoevaluación')
          .col-md-6
            h4 Autoevaluación
            p Como su propia palabra lo indica, es la percepción personal de su propio desempeño, es importante este tipo de evaluación, ya que invita a los colaboradores a que observen y reflexionen de forma personal sus características, considerando los parámetros establecidos por el perfil y las funciones que desarrolla. Lo más complejo de este tipo de evaluación es lograr que las personas la diligencien de forma adecuada y sean honestos. Las características de este tipo de evaluación son: debe tener periodicidad, puntos a evaluar, presentación comprensible.

      .py-4.py-md-5(titulo="Evaluaciones 180° y 360°" :icono="require('@/assets/curso/tema4-1-icono3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-1-imagen3.png', alt='Evaluaciones 180° y 360°')
          .col-md-6
            h4 Evaluaciones 180° y 360°
            ul.lista-ul--color.lista-salmon
              li
                i.fas.fa-square
                p.mb-0
                  strong Evaluación 180°:
                  |  por medio de este tipo los directivos evalúan a sus subordinados, quienes conocerán y validarán la percepción de sus directivos, quienes son los responsables de promover y aumentar salarios dentro de la empresa. Deben ser objetivas, aunque sus desventajas son: 
                  | 1. Es unidireccional, es decir los directivos evalúan a sus colaboradores y 2. A veces no hay conocimiento profundo de las actividades de los colaboradores, por lo tanto, puede cometer injusticias.
              li
                i.fas.fa-square
                p.mb-0 
                  strong Evaluación 360°:
                  |  en este caso, se evalúa el desempeño de los colaboradores por parte de los directivos y los compañeros de trabajo, colegas y subordinados, es decir todos con quienes interactúa directamente en la organización. Se observa al individuo desde varios aspectos, lo que da pie a la generación de mucha información para procesar.

      .py-4.py-md-5(titulo="Desempeño por competencias" :icono="require('@/assets/curso/tema4-1-icono4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-1-imagen4.png', alt='Desempeño por competencias')
          .col-md-6
            h4 Desempeño por competencias
            p Este tipo de evaluación se destaca porque realmente se evalúa lo importante y se define de acuerdo con el grupo o área en donde se va a desarrollar. Se pueden crear criterios de evaluación por las distintas habilidades que se requieren evaluar. Aunque es complejo pretender estandarizar a los colaboradores, se promueve la objetividad.

          




    Separador


    // 4.2
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h2 4.2.	Metodología para diseñar evaluaciones

    p.mb-4 Para poder desarrollar el proceso de evaluación es indispensable establecer los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="fade-right")
        .row.align-items-bottom
          .col-lg-6.mb-lg-0.mb-4
            figure
              img(src="@/assets/curso/imagen-tema4-2.svg", alt="Metodología para diseñar evaluaciones")   
          .col-lg-6(data-aos="fade-left")
            ol.lista-ol--cuadro.mb-lg-0
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Establecer pautas de desempeño.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Informar al equipo de trabajo lo que se va a calificar y cualificar.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Determinar el desempeño real de los colaboradores.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Determinar el rendimiento deseado, a dónde se quiere llegar.  
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Socialización de resultados.  
              li.mb-lg-0
                .lista-ol--cuadro__vineta
                  span 6
                | Toma de decisiones.          


</template>

<script>
export default {
  name: 'Tema4',
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

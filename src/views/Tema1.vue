<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Estructura organizacional

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.png", alt="Estructura organizacional")  

    p.mb-5(data-aos="fade") Cuando se llega a apoyar laboralmente a una organización, conocer su historia permite analizar de forma general los logros que se han alcanzado, las vicisitudes y lecciones aprendidas. Esto hace parte de “la mejora continua”, con la que la gestión de la calidad permite enriquecer constantemente el desarrollo de la organización. 

    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1. Dinámica empresarial 

    p.mb-4(data-aos="fade") Para profundizar en este aspecto una vez  se ingrese a la organización, vale la pena que se realice las siguientes preguntas:

    .tarjeta.tarjeta--gris.p-4.mb-5
      h3.text-center.mb-lg-4 Questions
      SlyderA.mb-lg-5.questions
        .row.justify-content-center
          .col-md-3.m-4.mb-md-0
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico1.svg', alt='¿Quién la creó?')
            h4.text-center ¿Quién la creó?
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico2-1.svg', alt='¿Cuándo fue fundada?')
            h4.text-center ¿Cuándo fue fundada?
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico1-1.svg', alt='¿Quién la creó?')
            h4.text-center ¿Quién la creó?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico2.svg', alt='¿Cuándo fue fundada?')
            h4.text-center ¿Cuándo fue fundada?
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico3-1.svg', alt='¿Cuál fue su propósito inicial?')
            h4.text-center ¿Cuál fue su propósito inicial?
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico1-1.svg', alt='¿Cuándo fue fundada?')
            h4.text-center ¿Cuándo fue fundada?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico3.svg', alt='¿Cuál fue su propósito inicial?')
            h4.text-center ¿Cuál fue su propósito inicial?
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico4-1.svg', alt='¿Cómo ha evolucionado en el tiempo?')
            h4.text-center ¿Cómo ha evolucionado en el tiempo?
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico3-1.svg', alt='¿Cuál fue su propósito inicial?')
            h4.text-center ¿Cuál fue su propósito inicial?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico4.svg', alt='¿Cómo ha evolucionado en el tiempo?')
            h4.text-center ¿Cómo ha evolucionado en el tiempo?
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico5-1.svg', alt='¿Qué actividad económica desarrolla?')
            h4.text-center ¿Qué actividad económica desarrolla? 
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico4-1.svg', alt='¿Cómo ha evolucionado en el tiempo?')
            h4.text-center ¿Cómo ha evolucionado en el tiempo?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico5.svg', alt='¿Qué actividad económica desarrolla?')
            h4.text-center ¿Qué actividad económica desarrolla?
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico6-1.svg', alt='¿Qué misión, visión y objetivos tiene?')
            h4.text-center ¿Qué misión, visión y objetivos tiene? 
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico5-1.svg', alt='¿Qué actividad económica desarrolla?')
            h4.text-center ¿Qué actividad económica desarrolla?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico6.svg', alt='¿Qué misión, visión y objetivos tiene? ')
            h4.text-center ¿Qué misión, visión y objetivos tiene? 
          .col-md-3.m-4.py-lg-5.mb-md-0.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico7-1.svg', alt='¿Dónde más opera?')
            h4.text-center ¿Dónde más opera?
        div.row.justify-content-center
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--rosada
            img.mb-4(src='@/assets/curso/tema1-ico6-1.svg', alt='¿Qué misión, visión y objetivos tiene?')
            h4.text-center ¿Qué misión, visión y objetivos tiene?
          .col-md-3.m-4.mb-md-0.py-lg-5.tarjeta.tarjeta--blanca.py-5
            img.mb-4(src='@/assets/curso/tema1-ico7.svg', alt='¿Dónde más opera?')
            h4.text-center ¿Dónde más opera?     
          .col-md-3.m-4.mb-md-0.py-lg-5 



    p(data-aos="fade") Normalmente, las preguntas anteriores tienen sus respuestas en la web de la organización, ya que algunos empresarios y normas de transparencia para entidades estatales, invitan a que se presente esta información de forma clara al público. 
    p.mb-4(data-aos="fade") Para poder identificar la dinámica empresarial es importante iniciar, teniendo claro algunos conceptos, a los cuales se les definirá las características más relevantes:

    .row 
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          
          .row.justify-content-center(titulo="Objetivos estratégicos")
            .col-md-3.col-4.px-lg-4.mb-3
              figure
                img.px-lg-2(src='@/assets/curso/objetivo.svg', alt='Objetivo')
            .col-md-9.col-12.mb-4.mb-md-0
              p Son los que plantean las actividades y los medios con los cuales se pretende desarrollar el fin que dio origen a la creación de la organización; deber ser medibles, claros, factibles y coherentes.          

          div(titulo="Misión")
            .row.justify-content-center
              .col-md-3.col-4.px-lg-4.mb-3
                figure
                  img.px-lg-3(src='@/assets/curso/bandera.svg', alt='Bandera')
              .col-md-9.col-12.mb-4.mb-md-0
                p Se puede reconocer como la “razón de ser”, es decir, la descripciónclara de lo que motivó la creación de la empresa, expresando los objetivos que se cumplen por la organización. Se caracteriza por ser precisa, concreta y por guiar a sus colaboradores en el “cumplimiento de los objetivos”.

          div(titulo="Visión")
            .row.justify-content-center
              .col-md-3.col-5.px-lg-4.mb-3
                figure
                  img.px-lg-2(src='@/assets/curso/vision-2.svg', alt='Visión')
              .col-md-9.col-12.mb-4.mb-md-0
                p Representa la expectativa ideal en un plazo futuro (en tiempo), donde se expone de forma “realista” el crecimiento de la organización, ya sea en la producción, cobertura o alcance, al cual se espera llegar. El objetivo de tener una visión es guiar, motivar e inculcar pertenencia a los colaboradores para que como equipo ayuden a construirla.

          div(titulo="Valores")
            .row.justify-content-center
              .col-md-3.col-5.px-lg-4.mb-3
                figure
                  img.px-lg-2(src='@/assets/curso/valor.svg', alt='Valores')
              .col-md-9.col-12.mb-4.mb-md-0
                p Es la agrupación de principios que precisan la estructura, línea de acción, principios éticos y cultura de una organización, se cultivan, se promueven y lo mejor, deben ser el estandarte de los directivos porque con su ejemplo invitan a sus colaboradores a desarrollarlos.

          div(titulo="Logotipo y eslogan")
            .row.justify-content-center
              .col-md-3.col-5.px-lg-4.mb-3
                figure
                  img(src='@/assets/curso/diseno-de-logo-2.svg', alt='Logotipo y eslogan')
              .col-md-9.col-12.mb-4.mb-md-0
                p Es la identidad visual de fácil reconocimiento y el eslogan es la frase que expresa un mensaje que deja huella o es de fácil recordación para los clientes.

          div(titulo="Manual de identidad o imagen institucional")
            .row.justify-content-center
              .col-md-3.col-4.px-lg-4.mb-3
                figure
                  img.px-lg-3(src='@/assets/curso/manual-2.svg', alt='Manual de identidad o imagen institucional')
              .col-md-9.col-12.mb-4.mb-md-0
                p Es un documento mediante el cual se establecen los lineamientos por los cuales, los colaboradores deben presentar y entregar información referente a la empresa como: formatos, cotizaciones, correspondencia, dotaciones y demás elementos que facilitan la distinción de los colaboradores y sus procesos con las demás organizaciones.

      .col-lg-5(data-aos="fade-left")
        figure.mb-5
          img(src="@/assets/curso/imagen1-1.png", alt="Imagen decorativa")          
  

    p.mb-5(data-aos="fade") Además de lo anterior, es importante reconocer cómo está organizada la estructura de una empresa, la jerarquía de los miembros (cargos) que la conforman, las áreas, sus funciones, roles, cómo se articulan las actividades, las obligaciones jurídicas y presupuestales, entre otros; de esta forma dentro de la gestión quedan claros los alcances y las responsabilidades de las distintas áreas, departamentos o dependencias. Toda esta organización se puede reflejar de manera gráfica en una  estructura denominada:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .row.justify-content-center.tarjeta-rosa-linea.px-5.py-4
          .col-lg-5.mb-4
            p 
              strong Organigrama
            p.mb-0 Gráfico empleado para reflejar la estructura jerárquica de una empresa, su organización y la relación directiva entre los diferentes departamentos
          .col-lg-6
            figure
              img.img-flotante(src="@/assets/curso/organigrama.svg", alt="organigrama")    

    p.mb-5(data-aos="fade")  A continuación, se presenta un esquema ejemplo de un Organigrama:    
          
    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-gradiente.py-lg-3.px-lg-5.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-1
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/diagrama-de-flujo.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h3.mb-1 Organigrama
                  p.mb-0.text-small A continuación, se presenta un esquema ejemplo de 
                  p.text-small un organigrama.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/CF4-ejemplo_de_organigrama.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p El organigrama y la organización de la empresa están dadas por la naturaleza jurídica con la cual ha sido creada, muchas veces ha cambiado a través de los años con el crecimiento de la misma, por causas como la ampliación en el portafolio de nuevos productos, apertura de sucursales, ampliación de la infraestructura, compra de equipo y tecnología, exigencias gubernamentales, entre otras. Para algunos casos la distribución de las distintas áreas dentro de la empresa es regulada por normas, como el Sistema de Gestión Salud y Seguridad en el trabajo 
          strong (SG-SST)
          | , Sistemas de Calidad 
          strong (SGC)
          | , entre otros, para empresas de naturaleza privada, pero para empresas estatales, deben cumplir políticas y normativas de orden público. 
        .cajon.color-morado.p-4.mb-3
          .h3 Como se evidencia con el organigrama ejemplo, la estructura de una organización debe tener jerarquías así sea de tipo vertical, como de tipo horizontal.
        p El cual se deben distribuir o agrupar en áreas o dependencias según sea la naturaleza de los procesos o funciones involucradas; también se pueden evidenciar funciones o roles que serán transversales a algunas o todas las áreas de la organización.  
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/imagen-tema1-2.png", alt="Imagen decorativa")  

    p.mb-4(data-aos="fade") Por lo anterior, es importante tener claridad con los siguientes términos:   

    TabsA.color-acento-contenido.mb-5(data-aos="fade")
      .tarjeta.color-naranja.p-4(titulo="Clima organizacional")
        .row
          .col-xl-8.mb-4
            p Se puede entender como el ambiente laboral que resulta de la continua interacción entre colaboradores dentro de sus entornos laborales, ya sean presenciales o virtuales. Es importante que los directivos, generen estas buenas dinámicas, para propender no solo con el sentido de pertenencia hacia la organización, sino liderazgo, compromiso y bienestar, permitiendo alcanzar las metas con colaboradores dinámicos y satisfechos. 
          .col-xl-4
            figure
              img(src='@/assets/curso/clima-organizacional.svg', alt='Clima organizacional')
      .tarjeta.color-naranja.p-4(titulo="Trabajo colaborativo")
        .row
          .col-xl-8.mb-4
            p Se refiere a la interacción con su equipo de trabajo, a veces creer que “las cosas resultan mejor cuando se trabaja solo”, no permite que se potencialicen las capacidades y habilidades del grupo de trabajo. El propósito debe ser el bien común. Colaborar y trabajar mancomunadamente, permite que haya más eficiencia en los resultados. No olvidar que el trabajo en equipo, debe ser dinámico y descentralizado, con conocimientos y aprendizaje constante, permitiendo que la información no solo sea manejada por una sola persona, sino por varios, para el día que falte un miembro, la organización no se paralice.          
          .col-xl-4
            figure
              img(src='@/assets/curso/trabajo-colaborativo.svg', alt='Trabajo colaborativo')
      .tarjeta.color-naranja.p-4(titulo="Planificación estratégica")
        .row
          .col-xl-8.mb-4
            p Está relacionada con el uso eficiente de los recursos con los que se cuenta para la elaboración del producto final. La optimización de los recursos, económicos, financieros, humanos, materiales, tecnológicos y su interacción de forma adecuada, permite la implementación de estrategias que vuelvan sostenibles a las organizaciones, es decir, si se presentan perdidas, que estas no afecten la operación y puedan considerarse como un mínimo daño colateral. La plantificación permite crear ciclos de retroalimentación que garantice la mejora continua. 
          .col-xl-4
            figure
              img(src='@/assets/curso/planificación-estrategica.svg', alt='Planificación estratégica')
      .tarjeta.color-naranja.p-4(titulo="Administración de los recursos")
        .row
          .col-xl-8.mb-4
            p Se relaciona a la gestión eficiente y eficaz de los recursos. Va de la mano con la planeación estratégica.        
          .col-xl-4
            figure
              img(src='@/assets/curso/admon-de-recursos.svg', alt='Administración de los recursos')          

    p.mb-4(data-aos="fade") Para ampliar las definiciones anteriores y su empleo en el conocimiento del funcionamiento de las empresas se puede remitir al material de apoyo, donde se relacionan de forma más extensa dichos conceptos.

    Separador

    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2. Objetivos organizacionales

    SlyderD.slider-tema1.mb-5(:datos="datosSlyder" data-aos="fade")

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'La organización, empresa, institución o entidad, ha sido creada con un propósito, ya sea desde el punto de vista de los servicios que ofrece o por su naturaleza; esta siempre va encaminada con lo que se desea lograr, es decir una meta. ',
        imagen: require('@/assets/curso/slider1-2-1.png'),
      },
      {
        texto:
          'Los objetivos organizacionales reflejan esas metas, por las cuales se trabaja mancomunadamente con las distintas áreas o departamentos. Es indispensable que se reconozcan estos objetivos para tener claro el norte de la organización. ',
        imagen: require('@/assets/curso/slider1-2-2.png'),
      },
      {
        texto:
          'La estructura de los objetivos por requerimientos de la norma ISO 9001, deben tener un verbo al comienzo en infinitivo (crear, innovar, ofrecer, transportar) y una breve descripción de la metodología como se piensa desarrollar (a través de, mediante, con ayuda de).',
        imagen: require('@/assets/curso/slider1-2-3.png'),
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

<style lang="sass" scoped></style>

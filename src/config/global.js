export default {
  global: {
    componenteFormativo: 'Talento Humano',
    descripcionCurso:
      'La gestión del Talento Humano e interacción con el equipo de trabajo es una de las habilidades y competencias que se adquieren con el propósito de hacer más eficiente y eficaz el trabajo asignado. Dentro del presente contenido, se profundizará en las políticas y normativas del talento humano, como también sobre la coordinación y orientación de la operación con el equipo de trabajo y acciones como la evaluación del desempeño, medición de rendimiento y planes de mejora. Estos aspectos, no solo favorecen el mejoramiento continuo de las áreas de trabajo, sino un aspecto muy importante como el clima laboral, porque se propende por respetar los derechos de los trabajadores y valorar los deberes laborales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Dinámica empresarial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos organizacionales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios y antecedentes de la administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Antecedentes históricos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios y fundamentos ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ventajas y desventajas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elaboración de perfiles y funciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Participantes del transporte',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación del desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de evaluación del desempeño',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Metodología para diseñar evaluaciones',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Planes de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Elementos de un plan de mejoramiento',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bowersox, D., Closs, D. y B Bixby Cooper, M. (2007).   Administración y logística en la cadena de suministros. McGraw Hill.',
    },
    {
      referencia:
        'Chiavenato, I. (2008). Gestión del Talento Humano. Mc Graw Hill.',
    },
    {
      referencia: 'Quiroa, M. (2021). Administración científica. Economipedia.',
      link:
        'https://economipedia.com/definiciones/administracion-cientifica.html',
    },
    {
      referencia:
        'Roncancio, G. (2019). Indicadores de Gestión (KPIs): Tipos y Ejemplos. Pensemos S.A.',
      link:
        'https://gestion.pensemos.com/indicadores-de-gestion-tipos-y-ejemplos ',
    },
    {
      referencia:
        'SERVICIO NACIONAL DE APRENDIZAJE. SENA. (2007). Procedimiento para certificar competencias laborales, versión 3. Bogotá. Dirección del Sistema Nacional de Formación para el trabajo.',
    },
  ],
  glosario: [
    {
      termino: 'Análisis funcional',
      significado:
        'Método mediante el cual se identifica el propósito clave de una subárea de desempeño, como punto de partida para enunciar y correlacionar sus funciones hasta llegar a especificar las contribuciones individuales; este método facilita la elaboración de normas de competencia laboral.',
    },
    {
      termino: 'Área ocupacional',
      significado:
        'Agrupación de funciones laborales relacionadas que, ejecutadas en conjunto, conducen al logro de un objetivo de producción y que requiere un determinado nivel de cualificación para el desempeño laboral.',
    },
    {
      termino: 'Competencia laboral',
      significado:
        '“Capacidad de una persona para desempeñar una función productiva en diferentes contextos y con base en estándares de calidad establecidos por el sector productivo. Requiere la interacción de conocimientos, habilidades y destrezas; verificables y evaluables.” (SENA, 2007, p. 10).',
    },
    {
      termino: 'Demanda del mercado laboral',
      significado:
        'Son los puestos que demandan las empresas y que deben ser cubiertos por trabajadores que se adecuen a los requisitos exigidos por ella. La demanda la constituyen la totalidad de puestos de trabajo vacantes, que son ofrecidos por las empresas a los trabajadores.',
    },
    {
      termino: 'Gestión',
      significado: 'Efectuar acciones eficientes para el logro de objetivos.',
    },
    {
      termino: 'Humano',
      significado: 'Relativo al hombre o propio de él.',
    },
    {
      termino: 'Incoterms',
      significado:
        'Normas que establecen las relaciones comerciales internacionales, obligaciones y derechos de los participantes en la negociación.',
    },
    {
      termino: 'Mercado',
      significado:
        'Lugar donde se efectuaban antiguamente los intercambios de mercancías. (vendedores y compradores). Espacio económico en el que se presenta intercambio de bienes y servicios. Y área geográfica donde se presenta la oferta y la demanda.',
    },
    {
      termino: 'Oferta del mercado laboral',
      significado:
        'Está constituida por la oferta de mano de obra que es reclamada por las empresas en función de sus necesidades productivas. Dicho de otro modo, la oferta laboral se constituye por el conjunto de trabajadores que ofrecen su fuerza de trabajo a cambio de un salario. La oferta laboral está constituida por la oferta de mano de obra que es reclamada por las empresas en función de sus necesidades productivas. Dicho de otro modo, la oferta laboral se constituye por el conjunto de trabajadores que ofrecen su fuerza de trabajo a cambio de un salario.',
    },
    {
      termino: 'Organigrama',
      significado:
        'Gráfico empleado para reflejar la estructura jerárquica de una empresa, su organización y la relación directa entre los diferentes departamentos.',
    },
    {
      termino: 'Planeación',
      significado:
        'Se puede relacionar con la actividad de planear y organizar el proceso del conjunto de las acciones a tomar para obtener o lograr objetivos.',
    },
  ],
  complementario: [
    {
      texto: 'Weigel, J; Wigel, R (2014). El circo de la mariposa. [video].',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=RvhXXTGfoRI',
    },
    {
      texto:
        'García, J; Durán, S; Cardeño, E; Prieto, R; García, E; Paz, A. (2017). Proceso de planificación estratégica.',
      tipo: 'Artículo',
      link: 'https://www.revistaespacios.com/a17v38n52/a17v38n52p16.pdf',
    },
    {
      texto:
        'Pérez, O. (2015). 6 indicadores clave para la gestión de talento humano.',
      tipo: 'Artículo',
      link:
        'https://blog.peoplenext.com.mx/6-indicadores-clave-para-la-gestion-de-talento-humano',
    },
    {
      texto:
        'Pérez, O. (2021). 5 nuevas tendencias para la evaluación de desempeño.',
      tipo: 'Artículo',
      link:
        'https://blog.peoplenext.com.mx/5-nuevas-tendencias-para-la-evaluacion-de-desempe%C3%B1o',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zeidy Lilian Álvarez Álvarez',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del transporte',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export const global = {
  componenteFormativo: 'Acciones de mejora y su seguimiento',
  descripcionCurso:
    'En este material se abordará la etapa del plan de mejora donde se definen las variables sobre las que se implementará dicho plan, que incluirá, el autodiagnóstico previamente desarrollado, las necesidades identificadas, la línea base, la proyección de mejora sobre esta línea base, las actividades a desarrollar, las formaciones/capacitaciones sugeridas, el tiempo de implementación proyectado y las tecnologías planteadas para dar cumplimiento a los objetivos a alcanzar con las empresas. ',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Acciones de mejora y su seguimiento',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo:
            'Correlación entre interpretación de plan de recomendaciones de plataforma SoftWhere, necesidades empresario y plan de mejora',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Actividades del plan de mejora',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo:
            'Acompañamiento e implementación de actividades y formato de seguimiento',
          hash: 't_1_3',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Luis Guillermo Alvarez García',
      cargo: 'Experto temático',
      centro: 'Centro De Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Alejandro Moncada Betancur',
      cargo: 'Experto temático',
      centro: 'Centro De Procesos Industriales y Construcción',
      regional: 'Regional Caldas',
    },
    {
      nombre: 'Leidy Yohana Ortiz Diaz',
      cargo: 'Experta temática',
      centro: 'Centro de la Industria, la Empresa y los Servicios',
      regional: 'Regional Norte de Santander',
    },
    {
      nombre: 'Gimena Santacruz Benítez',
      cargo: 'Experta temática',
      centro: 'Centro de la Industria, la Empresa y los Servicios,',
      regional: 'Regional Huila',
    },
    {
      nombre: 'Sergio Arturo Medina Castillo',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Victor Raúl Cárdenas Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Colombia Productiva. (2019). Diagnóstico de madurez tecnológica de las empresas. Ministerio de Industria y Comercio de Colombia. SoftWhere.',
  },
  {
    referencia:
      'DNP. (2012). Productividad.  Programa de Extensión Tecnológica para Colombia. DNP',
  },
  {
    referencia:
      'DNP, (2012). Rentabilidad. Programa de Extensión Tecnológica para Colombia. DNP',
  },
  {
    referencia:
      'Organización Internacional de Normalización. (2015). Proceso. ',
    link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-3:v1:es',
  },
  {
    referencia: 'Raffino, M. (2020). Áreas funcionales de una empresa.',
    link: 'https://concepto.de/areas-funcionales-de-una-empresa/',
  },
  {
    referencia: 'Roldán, P. (s. f). Tecnología.',
    link:
      'https://economipedia.com/definiciones/tecnologia.html#:~:text=La%20tecnolog%C3%ADa%20es%20el%20conjunto,mejorar%20su%20calidad%20de%20vida',
  },
]

export const glosario = [
  {
    termino: 'Áreas funcionales',
    significado:
      'las áreas funcionales de la empresa son las diversas actividades más importantes de la misma, ya que por ellas se plantean y tratan de alcanzar los objetivos y metas. Generalmente una empresa está formada mínimo por cinco (5) áreas funcionales básicas (dirección, administración, ventas, producción y contabilidad y finanzas), pero puede estar formada por muchas más (investigación, recursos humanos, estrategia, etc.). <br>El número de áreas funcionales en las pequeñas empresas se simplifican y se integran unas dentro de las otras, esto ayuda a tener un mejor desempeño dentro de la empresa. <ul style="margin-left: 20px; margin-top: 20px"> <li style="margin-top: 10px;"> ●	Área de dirección: área imprescindible y considerada la cabeza de la empresa. Lleva el timón de la empresa, establece los objetivos y la dirige hacia ellos. Está relacionada con el resto de áreas funcionales, ya que es la que controla todas las áreas de trabajo de la empresa. </li>  <li style="margin-top: 10px;"> ●	Área de administración: está relacionada con el funcionamiento de la empresa. Es la operación de negocio en sentido general, desde contrataciones y pagos a personal. Por lo general es el emprendedor o empresario quien se encarga de esta área funcional. Está relacionada con otras áreas como recursos humanos. </li> <li style="margin-top: 10px;">●	Área de ventas: orientada al exterior. Aquí se plantean las estrategias que la empresa seguirá en el área del marketing, los mercados donde la empresa opera, los segmentos de mercado, el ciclo de vida de los productos, diseño de nuevos productos para la ganancia de dinero.</li><li style="margin-top: 10px;">  ●	Área de producción: aquí se lleva a cabo la producción de los bienes que la empresa comercializará después en los centros, mercados, tiendas de venta.</li><li style="margin-top: 10px;"> ●	Área de contabilidad y finanzas: reglamentario para todas las empresas, pues es obligatorio que lleven un registro contable. Tendrá en cuenta todos los movimientos de dinero, tanto dentro como fuera de la empresa, que también en algunas veces pueden estar almacenadas en bancos o en una caja fuerte.</li></ul>',
  },
  {
    termino: 'Proceso',
    significado:
      'es una secuencia de pasos con algún tipo de lógica que se enfoca en lograr algún resultado específico, el cual tiene unas entradas, una transformación y unos resultados. ',
  },
  {
    termino: 'Productividad',
    significado:
      'es la relación entre la cantidad de productos obtenida por un sistema productivo y los recursos utilizados para obtener dicha producción.',
  },
  {
    termino: 'Rentabilidad',
    significado:
      'permite comparar el resultado que se ha obtenido con el desarrollo de la actividad de la empresa con las inversiones que hemos realizado para obtener dicho resultado. Obtenemos un resultado al que todavía no hemos restado los intereses, gastos ni impuestos. Se conoce comúnmente como EBITDA.',
  },
  {
    termino: 'Tecnología',
    significado:
      'conjunto de conocimientos y técnicas que se aplican de manera ordenada para alcanzar un determinado objetivo o resolver un problema.',
  },
]

export const complementario = [
  {
    texto:
      'Términos de referencia- Diccionario Práctico Extensionismo tecnológico. 2020',
    tipo: 'Documento',
    descarga: '/downloads/Anexo_2_Formatos_seguimiento.xlsx',
  },
]

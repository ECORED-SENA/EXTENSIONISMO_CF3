<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Acciones de mejora y su seguimiento
    .titulo-segundo#t_1_1.mt-5
      .h4 1.1  Correlación entre interpretación de plan de recomendaciones de plataforma SoftWhere, necesidades empresario y plan de mejora

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-6
        p El proceso consultivo busca la mejora continua de las diferentes áreas organizacionales, frente a sus procesos diarios. Dicha mejora se hace efectiva con los procesos educativos de los miembros de la organización y la validación de dicho plan frente al futuro cambiante que envuelven las decisiones organizacionales.

        p.my-3 El consultor observa el entorno actual y define un plan de mejora basado en un diagnóstico previo, en el cual se define una estrategia de trabajo para la obtención de las mejoras propuestas.

        p El plan de mejora es un elemento estratégico que brinda oportunidades de fortalecimiento corporativo, además, es el paso que brinda las herramientas para priorizar el desarrollo corporativo.


      .col-12.col-md-6
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img1.png', alt='Texto que describa la imagen')      

    .row.mt-5
      .col-12
        .cajon--azul.p-4.mb-lg-0
          p Técnicas como la lluvia o tormenta de ideas, o el grupo nominal, entre otras, buscan facilitar el análisis de las problemáticas definidas de manera estructurada, permitiendo definir actividades clave en pro de la mejora organizacional. Se busca, entonces, revisar las debilidades transversales de la organización, presentadas en el diagnóstico y definir acciones clave para sobrellevarlas. Estas acciones se definen como una lista de actividades para ser realizadas cumpliendo el objetivo clave de la consultoría.
    
    p.mt-5 Dentro del análisis e interpretación se plantea que el autodiagnóstico de SoftWhere se enmarca en seis (6) áreas funcionales, las cuales permiten definir un análisis y unas actividades clave que deben ser priorizadas en el plan.
    .hr-dotted.mt-4    
    
    .row.justify-content-center.align-items-center.mt-3
      .col-12.col-md-6 
        p Para consultar más información acerca del autodiagnóstico, acceder al siguiente material complementario de libre acceso:   
      .col-12.col-md-6  
        a.anexo.mt-3(:href="obtenerLink('downloads/Anexo_2_Formato_seguimiento.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Términos de referencia - Diccionario Práctico de Extensionismo Tecnológico. 2020  
    .hr-dotted.mt-4    

    .h6.text-center.my-5.color-text-1 Áreas funcionales  
    .row.justify-content-center.align-items-center.p-5.bg-1
      .col-12   
        img.img-t.img-a(src='@/assets/ilustraciones/img2.png', alt='') 

        AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Operaciones")

            p Son aquellas actividades que tienen relación directa con las diferentes áreas de la organización que generan un producto o servicio que se ofrece a los clientes. Enmarcan la forma de hacer las cosas en la empresa para lograr tener un producto o servicio que se ofrece al cliente final. 

            p.mt-3 SoftWhere plantea, frente a las operaciones, los ajustes definidos para lograr la alineación de los componentes del modelo de negocio, soportado en sistemas de información definidos para la gestión de los procesos operacionales de la empresa, permitiendo contar con la capacidad para manejar los volúmenes de información requeridos, con la granularidad y calidad requerida o con la necesaria integración de los sistemas que soportan las áreas del negocio.

          div(titulo="Clientes")
            p Es la persona u organización que compra servicios o productos a la empresa. Además, es el principal enfoque de atención de las organizaciones ya que enmarcan el mercado objetivo sobre el que se define el foco de atención de la empresa. Sobre el cliente se determina el plan o estrategias de marketing de la organización.

            p.mt-3 El autodiagnóstico determina el grado de implementación y uso de herramientas tecnológicas que permitan analizar los aspectos más representativos y claves de los clientes y el mercado en general. Aquí se busca revisar cuáles son los aspectos para fortalecer en el modelo de negocio de la empresa y que generen oportunidades de acceso a nuevos mercados, productos y clientes, y defendiendo su posición frente a sus competidores.

          div(titulo="Gestión")
            p La correcta gestión depende, principalmente, de la toma de decisiones de manera correcta y oportuna. El desarrollo tecnológico evidencia la necesidad de las empresas en innovar constantemente, definiendo las metodológicas y técnicas necesarias sobre las que deben enmarcar sus objetivos y, por ende, su modelo de negocio. En este contexto cobra especial relevancia la gestión empresarial de los directivos que define el conjunto de medidas y estrategias que buscan mejorar la competitividad y productividad de la empresa.

            p.mt-3 El diagnóstico determina los ajustes para lograr la alineación e integración sistémica de los procesos del negocio, a través de estrategias y sistemas de información que permitan la correcta gestión de las áreas del negocio con la granularidad y calidad requeridas.

          div(titulo="Gestión tecnológica")
            p Es el conjunto de conocimientos, actividades y herramientas que brindan valor a las organizaciones a través de procesos de transformación digital efectivos y que permitan facilitar la ejecución de tareas que generen mayor competitividad en el entorno.

            p.mt-3 El mercado actual ha permitido una apertura hacia la apropiación tecnológica de las organizaciones, por ello se plantean mecanismos que generan un cambio en la forma de hacer los negocios, una transición a nivel productivo y mejoras sostenibles en los modelos de negocio. Lo anterior enmarca una modernización de las empresas hacia la generación de nuevas estrategias para generar mayor competitividad. 

            p.mt-3 En el entorno actual, la gestión tecnológica se extiende de manera transversal a los procesos y áreas de la empresa, partiendo desde la base de gestión de conocimiento de los miembros de la organización y la digitalización de procesos generales de la estructura de negocio.

            p.mt-3 La gestión tecnológica plantea desde el diagnóstico la debilidad en sistemas de información para una correcta gestión de datos, así como la baja integración de la información que permita la toma de decisiones basada en conocimiento del negocio.

          div(titulo="Estrategia")
            p Es el puente entre las políticas y los objetivos definidos para el cumplimiento de las propuestas de valor enmarcadas en los modelos de negocio.

            p.mt-3 Entonces, se define que la estrategia es el marco para tomar decisiones en el mercado y la estructura operativa del negocio. Las estrategias definen desde las inversiones hacia las prioridades operativas y marketing hasta contrataciones y enfoques de ventas, entre otros aspectos.

            p.mt-3 Frente al diagnóstico, la tecnología se convierte en un activo empresarial estratégico y un aliado para los objetivos comerciales de la organización. La estrategia plantea la gestión efectiva de la información de los clientes que permita conocer sus expectativas, mejorar su satisfacción y, por tanto, asegurar la fidelización y recompra de los productos o servicios.

          div(titulo="Financiera")
            p El área financiera se enmarca en el proceso económico de la organización, determina la viabilidad económica de los modelos de negocio corporativos y su optimización frente a las diferentes variaciones del mercado.

            p.mt-3 La organización plantea desde este concepto, un proceso de entendimiento sobre la rentabilidad y los beneficios que trae consigo el uso de soluciones tecnológicas en la organización y su influencia en la estructura financiera de la empresa.

    .titulo-segundo#t_1_2.mt-5
      .h4 1.2 Actividades del plan de mejora 
    .row.justify-content-center.align-items-center
      .col-12.col-md-7
        p Las actividades presentadas en el plan de mejora son planteadas de acuerdo con las necesidades definidas en el diagnóstico realizado. Estas necesidades determinan una ruta a desarrollar para el logro de los objetivos propuestos en el plan de mejora.

        p.mt-3 Dependiendo del plan de mejora se valida si la empresa se encuentra en un proceso de usabilidad tecnológica (existencia de tecnología, adaptación y uso estratégico de la misma en los procesos internos de la compañía) de acuerdo con su nivel de madurez digital y la evaluación de las áreas funcionales.

        p.mt-3 Es así, como las actividades presentadas en el plan de mejora están orientadas sobre áreas específicas a las cuales se les debe realizar acompañamiento por parte del programa de extensionismo. Además, se deben definir las capacitaciones certificadas en MinTIC y SENA que las empresas realizarán según su nivel de madurez y el plan de mejora definido.
      .col-12.col-md-5
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img3.png', alt='Texto que describa la imagen') 
          .imagen-titulo__titulo
            .h4.m-0.text-white Plan de mejora   

    .row.mt-5
      .col-12
        .cajon--rojo.p-4.mb-lg-0
          p Las actividades definen estratégicamente el foco (área, proceso, personas) y tiempos de trabajo enmarcados en las variables del autodiagnóstico, tales como estrategia, gestión, directivos, relación con clientes, servicios postventa, clientes, operaciones, logística externa, financiera, estructura de costos, flujo de ingresos, compras, gestión de tecnología, colaboradores y sociedad civil.  
    P.mt-5 Las actividades definen las variables sobre las que se implementará el plan de mejora que, en su totalidad, incluirá el autodiagnóstico previamente desarrollado, las necesidades identificadas, la línea base de indicadores seleccionados, la proyección de mejora sobre esta línea base, las actividades a desarrollar, las formaciones/capacitaciones sugeridas, el tiempo de implementación proyectado y las tecnologías planteadas para dar cumplimiento a los objetivos a alcanzar con las empresas.
    .titulo-segundo#t_1_3.mt-5
      .h4 1.3 Acompañamiento e Implementación de actividades y formato de seguimiento 
    p.mt-5 El proceso de acompañamiento en el marco de la consultoría tiene como propósito la supervisión de las actividades planteadas en el plan de mejora, definiendo un marco de control clave en la implementación organizacional.           
    .imagen-titulo--izq.mt-5
      figure
        img(src='@/assets/ilustraciones/img4.png', alt='Texto que describa la imagen')
    p.mt-5 Este proceso se propone para evitar retrasos en tiempos y temáticas que pueden desarticular el plan propuesto inicialmente.

    p.mt-3 Frente a la estrategia se define realizar un seguimiento cronológico del desarrollo de las actividades.

    p.mt-3 El consultor debe dedicar tiempo para supervisar el estado de cada una de las actividades que está desarrollando, prestando especial interés a aquellas que están sufriendo algún retraso.  En el momento en que se detecta cualquier desviación o demora en el proceso hay que analizar las causas para poder efectuar las correcciones oportunas y recuperar el tiempo perdido en el acompañamiento empresarial. 


</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>

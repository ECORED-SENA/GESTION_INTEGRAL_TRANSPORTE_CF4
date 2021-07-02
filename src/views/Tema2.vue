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


</template>

<script>
export default {
  name: 'Tema2',
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

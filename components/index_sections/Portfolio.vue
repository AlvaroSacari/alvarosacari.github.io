<template>
  <v-container id="portfolio" class="py-8">
    <h2 class="display-1 mb-5">
      <v-btn :to="{ name:'index', hash:'#portfolio' }" icon color="primary">
        <v-icon>
          mdi-pound
        </v-icon>
      </v-btn>
      Portafolio
    </h2>

    <v-row>
      <v-col
        v-for="(item,i) in portfolio"
        :key="i"
      >
        <v-card
          max-width="300px"
          class="mx-auto"
          hover
        >
          <v-img
            class="grey lighten-2 hoverimage"
            position="top center"
            :src="item.img"
            :lazy-src="item.img"
            height="200px"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>

          <v-divider />

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text>{{ item.subtitle }}</v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  :disabled="!item.codeUrl"
                  text
                  color="primary"
                  target="_blank"
                  :href="item.codeUrl"
                  v-on="on"
                >
                  <v-icon>
                    mdi-code-tags
                  </v-icon>
                </v-btn>
              </template>
              <span>Ver código</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn
                  icon
                  :disabled="!item.pageUrl"
                  text
                  color="primary"
                  target="_blank"
                  :href="item.pageUrl"
                  v-on="on"
                >
                  <v-icon>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </template>
              <span>Visitar sitio</span>
            </v-tooltip>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      portfolio: [
        {
          img: require('~/assets/images/portfolio/portafolio.png'),
          title: 'Mi Portafolio',
          subtitle: 'Portafolio de proyectos realizados.',
          codeUrl: 'https://github.com/alvarosacari/alvarosacari.github.io/tree/dev',
          pageUrl: 'https://alvarosacari.github.io'
        },
        {
          img: require('~/assets/images/portfolio/brayan_rent_a_car.png'),
          title: 'Brayan Rent a Car',
          subtitle: 'Alquiler de vehículos para empresas y público en general.',
          codeUrl: '',
          pageUrl: 'http://brayanrentacar.pe/'
        },
        {
          img: require('~/assets/images/portfolio/certificapp.png'),
          title: 'Certificapp',
          subtitle: 'Organiza y gestiona tus eventos de educación.',
          codeUrl: '',
          pageUrl: 'https://www.certificapp.com/'
        },
        {
          img: require('~/assets/images/portfolio/colcar.png'),
          title: 'Colcar Rent a Car',
          subtitle: 'Alquiler de vehículos para el sector minero, traslado de personal y turismo.',
          codeUrl: '',
          pageUrl: 'https://www.rentacarcolcar.pe/'
        },
        {
          img: require('~/assets/images/portfolio/credinnova.png'),
          title: 'Credinnova',
          subtitle: 'Software que permite controlar todos los procesos de organizaciones que brindan créditos.',
          codeUrl: '',
          pageUrl: 'https://www.credinnova.com/'
        },
        {
          img: require('~/assets/images/portfolio/dentus.png'),
          title: 'Policlínico Dental Dentus',
          subtitle: 'Institución especialista en la salud bucal y estética dental.',
          codeUrl: '',
          pageUrl: 'https://www.dentus.pe/'
        },
        {
          img: require('~/assets/images/portfolio/dondetacna.png'),
          title: 'Donde Tacna',
          subtitle: 'Primer portal turístico trilingüe y de aplicación Android para Tacna.',
          codeUrl: '',
          pageUrl: 'http://dondetacna.com/'
        },
        {
          img: require('~/assets/images/portfolio/ecos_muellaje.png'),
          title: 'ECOS SpA',
          subtitle: 'Empresa de muellaje y servicios logísticos SpA.',
          codeUrl: '',
          pageUrl: 'https://ecosmuellaje.com/'
        },
        {
          img: require('~/assets/images/portfolio/ega.png'),
          title: 'EGA',
          subtitle: 'EGA | Tax & Legal Advisory | Soluciones que impulsan tu crecimiento.',
          codeUrl: '',
          pageUrl: 'https://ega.com.pe/'
        },
        {
          img: require('~/assets/images/portfolio/engeo.png'),
          title: 'Engeo',
          subtitle: 'Promociones y sorteos de Engeo Syngenta - Colombia.',
          codeUrl: '',
          pageUrl: 'http://www.engeo.co/promociones/2'
        },
        {
          img: require('~/assets/images/portfolio/equinterapia_esperanza.png'),
          title: 'Centro de equinoterapia Esperanza',
          subtitle: 'Terapias para contribuir a mejorar la calidad de vida de las personas.',
          codeUrl: '',
          pageUrl: ''
        },
        {
          img: require('~/assets/images/portfolio/fincamaravilla.png'),
          title: 'Finca Maravilla',
          subtitle: 'Bodega de piscos y vinos de Tacna.',
          codeUrl: '',
          pageUrl: 'http://www.fincamaravilla.com.pe/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

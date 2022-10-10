<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>IDOLI</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.ime"
          :to="link.ruta"
          link
        >
         

          <v-list-item-content>
            <v-list-item-title>{{ link.ime }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        {ime:'Pocetna',ruta:'/'},
        {ime:'Podorasac-Kanjina',ruta:'/podorasackanjina'},
        {ime:'Ovcari-Repovica',ruta:'/ovcarirepovica'},
        {ime:'Grad',ruta:'/grad'},
        {ime:"Orahovica-Klis",ruta:'/orahovicaklis'},
        {ime:'Ostala sela',ruta:'/sela'}
      ],
    }),
  }
</script>
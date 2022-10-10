<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="item in apiData" :key="item.id" cols="4">
          <v-card height="200" @click="showDialog(item)">
            <div>
              <h3>{{ item.ime }}</h3>
              <h1>{{item.nadimak}}</h1>
              <h3>{{item.prezime}}</h3>
              <h3>{{item.godiste}}</h3>
              <h3>{{item.mjesto}}</h3>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <h3>{{ selectedCard.nadimak }}</h3>
        </v-card-title>

        <v-card-text>
          {{ selectedCard.opis_idola }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiData: [],
    selectedCard: {},
    dialog: false,
  }),
  methods: {
    showDialog(item) {
      this.selectedCard = item
      this.dialog = true
    },
    closeDialog() {
      this.selectedCard = {}
      this.dialog = false
    },
    getData() {
      const apiUrl = 'https://my-json-server.typicode.com/HZHBKANJINA/grad/idoli'
      this.axios.get(apiUrl).then(response => {
        this.apiData = response.data
      })
    },
  },
  created() {
    this.getData()
    console.log(this.apiData)
  },
}
</script>

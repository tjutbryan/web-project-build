<template>
  <v-container>
    <v-form>
      <v-text-field
        disabled
        v-model="apiUrl"
        :counter="200"
        label="API URL"
        required
      >
      </v-text-field>
      <v-btn
        class="mr-4"
        @click="getApiData"
      >
        Get
      </v-btn>
      <v-text-field
        v-model="res[res.length-2]"
        :counter="100"
        label="Setup"
        required
      >
      </v-text-field>
      <v-text-field
        v-model="res[res.length-1]"
        :counter="100"
        label="Delivery"
        required
      >
      </v-text-field>
    </v-form>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'JokeAPI',

    data: () => ({
      apiUrl: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart',
      res: []
    }),

    methods: {
      getApiData(){
        axios.get(this.apiUrl)
          .then((response) => {
            this.res.push(response.data.setup)
            this.res.push(response.data.delivery)
          })
      }
    }
  }
</script>

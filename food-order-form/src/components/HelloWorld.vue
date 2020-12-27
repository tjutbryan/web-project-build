<template>
  <v-container fill-height fluid>
    <v-row align="center"
           justify="center">
      <v-col
        md="4"
      >
        <form v-if="!posted">
          <v-text-field
            v-model="name"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="order"
            label="Order"
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            label="Table service?"
          ></v-checkbox>

          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
        <form v-if="posted">
          <h3>Order Details:</h3>
          <v-text-field
            readonly
            v-model="name"
            label="Name"
          ></v-text-field>
          <v-text-field
            readonly
            v-model="order"
            label="Order"
          ></v-text-field>
          <v-checkbox
            readonly
            v-model="checkbox"
            label="Table service?"
          ></v-checkbox>
          <v-btn
            @click="reload"
          >
            Order More?
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'HelloWorld',

    data: () => ({
      name: '',
      order: '',
      checkbox: null,
      posted: false
    }),

    methods: {
      clear(){
        this.name = ''
        this.order = ''
        this.checkbox = null
      },
      submit(){
        this.$toasted.show('Order Received')
        this.posted = true
      },
      reload(){
        location.reload()
      }
    }
  }
</script>

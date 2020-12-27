<template>
  <v-container fill-height fluid>
    <v-row align="center"
           justify="center">
      <v-col
        md="4"
      >
        <form>
          <v-text-field
            v-model="todo"
            label="Create a new todo"
          ></v-text-field>
          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <div v-if="exist">
            <br>
            <ul>
              <li v-for="(todo, index) in todoList">
                {{ todo }}
                <span @click="clearOne(index)" class="remove">x</span>
              </li>
            </ul>
            <v-btn @click="clear">
              Clear All
            </v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      todo: '',
      exist: false,
      todoList: [],
    }),

    methods: {
      clear(){
        this.todoList = []
        this.exist = false
      },
      clearOne(index){
        this.todoList.splice(index, 1)
        if (this.todoList.length === 0) this.exist = false
      },
      submit(){
        if (!this.todo){
          this.$toasted.error('Cannot create empty todo', {
            duration: 500
          })
          return
        }
        this.$toasted.success('Todo Added', {
          duration: 500
        })
        this.todoList.push(this.todo)
        this.todo = ''
        this.exist = true
      },
    }
  }
</script>

<style scoped>
  .remove {
    cursor: pointer;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    padding: 0px 4px;
  }
  .remove:hover{
    background: darkred;
  }
</style>

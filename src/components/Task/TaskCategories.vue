<template>
  <v-layout 
    align-center 
    justify-center 
    row 
    wrap
  >
    <v-flex xs12 class="text-xs-center my-2">
      <h1 class="card__heading">Total Tasks: {{ tasks.length }}</h1>
    </v-flex>
    <v-flex v-for="categoria in categorias" :key="categoria.id" xs12 md4 class="my-2">
      <router-link :to="/task/ + categoria.name + '/?id=' + categoria.id" tag="p">
        <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto text-xs-center"
          width="344"
          height="380"
          style="cursor: pointer"
        >
          <v-icon class="card__logo my-3">library_books</v-icon>
          <div class="card__header">
            <h1 class="card__heading">{{ categoria.name }}</h1>
          </div>
          <div class="card__body">
            <h4>Tasks</h4>
            <p class="card__tasks">{{ filter_task(tasks, categoria.id).length }}</p>
          </div>
        </v-card>
      </v-hover>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categorias: [
        { name: 'Personal', id: 123 },
        { name: 'Bussines', id: 777 },
        { name: 'Other', id: 999 }
      ]
    };
  },
  methods: {
    /**
     * Metodo encargado de hacer la petición al servidor para traer las categorias de las tareas
     */
    async get_categories() {
      try {
        let resp = axios.get('https://53lsdx4cm6.execute-api.us-east-1.amazonaws.com/dev/task-type')
        // this.categorias = resp
      } catch(err) {
        throw new Error(err)
      }
      console.log(this.categorias)
      return this.categorias
    },
    /**
     * Metodo que se encarga de filtrar las tareas por su tipo de categoria y las agrupa en un
     * nuevo arreglo de objetos.
     */
    filter_task(tasks, id) {
      let filTasks = tasks.filter((task) => {
        return task.task_type == id
      })
      return filTasks
    }
  },
  computed: {
     tasks() {
        return this.$store.getters.tasks
     }
  },
  mounted() {
    this.get_categories()
  }
};
</script>

<style scoped>
.card__heading {
  text-align: center;
  font-weight: 200;
  font-size: 3.5rem;
}

.card__body {
  margin: 1.5rem 0;
}

.card__header {
  margin: 1.5rem 0;
}

.card__tasks {
  font-size: 4rem;
  font-weight: 100;
}

.card__logo {
  font-size: 7rem;
}
</style>

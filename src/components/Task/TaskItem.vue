<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12 class="text-xs-center my-2">
      <h1 class="headline">{{ category }}</h1>
      <v-dialog v-model="form" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" @click="create_task">Agregar Tarea</v-btn>
        </template>
        <task-modal @close="form = $event" :task="id"></task-modal>
      </v-dialog>
    </v-flex>
    <v-flex v-for="task in filter_task(tasks, id)" :key="task.task_name" xs12 md8 class="my-2">
      <v-hover>
        <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="pa-3"
            height="120"
            @click.stop="see_task(task)"
            style="cursor: pointer">
            <!-- <v-flex xs10 md10> -->
               <div class="item">
                  <div class="item__title">
                     <h3>{{ task.task_name }}</h3>
                  </div>
                  <div class="item__description">
                     <p>{{ task.task_desc }}</p>
                  </div>
               </div>
            <!-- </v-flex> -->
        </v-card>
      </v-hover>
    </v-flex>
    
    <!-- Modal para eliminar una tarea -->
    <v-dialog v-model="delTask" max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar Tarea</v-card-title>
        <v-card-text>
          ¿Estas seguro que deseas eliminar esta tarea?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat="flat" @click="delTask = false">No</v-btn>
          <v-btn color="blue darken-1" flat="flat" @click="delete_task(task_temp.task_id)">Si</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal para visualizar una tarea -->
    <v-dialog v-model="seeTask" max-width="500">
      <v-card>
        <v-card-title class="headline">{{ task_temp.task_name }}</v-card-title>
        <v-card-text>
          {{ task_temp.task_desc }}
        </v-card-text>
        <v-card-text>
          <p>Fecha inicial: {{ task_temp.start_date }}</p>
          <p>Fecha final: {{ task_temp.finish_date }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-icon large color="red darken-1" @click.stop="show_delete">delete</v-icon>
            <v-icon large color="green darken-3" @click.stop="edit_task">edit</v-icon>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
import TaskModal from './TaskModal'
import { eventBus } from '../../main'

export default {
   components: {
      taskModal: TaskModal
   },
   data() {
      return {
         id: this.$route.query.id,
         category: this.$route.params.name,
         form: false,
         delTask: false,
         seeTask: false,
         task_temp: {
            task_id: 0,
            task_name: '',
            start_date: '',
            has_fdate: false,
            finish_date: '',
            task_type: 0,
            task_desc: ''
         },
         task_new: {
            task_id: Date.now(),
            task_name: ' ',
            start_date: '',
            has_fdate: false,
            finish_date: '',
            task_type: this.$route.query.id,
            task_desc: ' '
         }
         
      };
   },
   methods: {
      create_task() {
         eventBus.$emit('createUser', this.task_new)
      },
      filter_task(tasks, id) {
         let filTasks = tasks.filter(task => {
            return task.task_type == id;
         });
         return filTasks;
      },
      search_task(tasks, task_id) {
         let search_task = tasks.filter(task => {
            return task.task_id == task_id;
         })
      },
      edit_task() {
         eventBus.$emit('editUser', this.task_temp)
         this.seeTask = false
         this.form = true
      },
      see_task(task) {
         this.task_temp = Object.assign({}, task)
         this.seeTask = true
      },
      show_delete() {
         this.seeTask = false
         this.delTask = true
      },
      delete_task(task_id) {
         // console.log(task_id)
         const pos = this.tasks.findIndex((task) => task.task_id === task_id)
         this.tasks.splice(pos, 1)
         this.delTask = false
      }
   },
   computed: {
      tasks() {
         return this.$store.getters.tasks;
      }
   }
};
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ form_title }}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs10>
            <v-text-field 
               v-model="task.task_name"
               label="Task Title"
               :rules="titleRules"
               :counter="40"
               required>
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field 
               v-model="task.task_desc"
               label="Task Description"
               :rules="descriptionRules"
               :counter="80"
               required>
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field
               v-model="task.start_date"
               label="Start Date"
               hint="DD/MM/YYYY"
               prepend-icon="event"
               required>
            </v-text-field>
         </v-flex>
          <v-flex xs8 sm4>
            <v-text-field
               v-model="task.finish_date"
               label="End Date"
               prepend-icon="event"
               :disabled="!task.has_fdate"
               hint="DD/MM/YYYY"
               required>
            </v-text-field>
          </v-flex>
          <v-flex xs4 sm4>
             <v-checkbox
               v-model="task.has_fdate"
               value=false
               label="Has End Date?"
               type="checkbox"
               required>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" flat @click="modalClose">Cerrar</v-btn>
      <v-btn color="blue darken-1" flat @click="addTask" v-if="!action_editar">Guardar</v-btn>
      <v-btn color="blue darken-1" flat @click="editTask(task.task_id)" v-else>Editar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { eventBus } from '../../main'

export default {
   props: ['taskType'],
   data() {
      return {
         task: {},
         form_title: '',
         action_editar: false,
         valid: false,
         taskTitle: '',
         taskDescription: '',
         taskStartDate: '',
         taskEndDate: '',
         hasEndDate: false,
         titleRules: [
            v => !!v || 'Se requiere un titulo para la tarea',
            v => v.length <= 40 || 'El titulo de la tarea debe ser menor de 40 caracteres'
         ],
         descriptionRules: [
            v => !!v || 'Se requiere una descripción para la tarea',
            v => v.length <= 80 || 'La descripción de la tarea debe ser menor de 80 caracteres'
         ]
      }
   },
   methods: {
      modalClose() {
         this.$emit('close', false)
      },
      addTask() {
         this.$store.commit('add_task', this.task)
         this.$emit('close', false)
      },
      editTask(task_id) {
         const pos = this.tasks.findIndex((task) => task.task_id === task_id)
         this.tasks.splice(pos, 1, this.task)
         this.$emit('close', false)
      },
      search_task(tasks, task_id) {
         let search_task = tasks.filter(task => {
            return task.task_id == task_id;
         })
      },
   },
   created() {
      eventBus.$on('editUser', (task) => {
         this.task = task
         this.form_title = 'Editar Tarea'
         this.action_editar = true
      })

      eventBus.$on('createUser', (task) => {
         this.task = task
         this.form_title = 'Crear Tarea'
         this.action_editar = false
      })
   },
   computed: {
      tasks() {
         return this.$store.getters.tasks;
      }
   }
}
</script>

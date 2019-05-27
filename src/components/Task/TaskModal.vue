<template>
   <v-card>
      <v-card-title>
         <span class="headline">{{ form_title }}</span>
      </v-card-title>
      <v-card-text>
         <v-form 
            ref="form"
            v-model="valid">
            <v-flex xs12 md10>
               <v-text-field 
                  v-model="task.task_name"
                  label="Task Title"
                  :rules="titleRules"
                  :counter="40"
                  required>
               </v-text-field>
            </v-flex>
            <v-text-field 
               v-model="task.task_desc"
               label="Task Description"
               :rules="descriptionRules"
               :counter="80"
               required>
            </v-text-field>
            <v-layout wrap>
               <v-flex xs8 sm4>
                  <v-text-field
                     v-model="task.start_date"
                     label="Start Date"
                     hint="DD/MM/YYYY"
                     :rules="dateRules"
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
                     hint="DD/MM/YYYY">
                  </v-text-field>
               </v-flex>
               <v-flex xs4 sm4>
                  <v-checkbox
                     v-model="task.has_fdate"
                     value=false
                     label="Has End Date?"
                     type="checkbox">
                  </v-checkbox>
               </v-flex>
            </v-layout>
         </v-form>
      </v-card-text>
   <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" flat @click="modalClose">Cerrar</v-btn>
      <v-btn 
         color="blue darken-1" 
         flat 
         @click="validateForm" 
         :disabled="!valid"
         v-if="!action_editar">
      Guardar</v-btn>
      <v-btn 
         color="blue darken-1" 
         flat 
         @click="editTask(task.task_id)" 
         :disabled="!valid"
         v-else>
      Editar</v-btn>
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
            v => (v.length <= 40) || 'El titulo de la tarea debe ser menor de 40 caracteres'
         ],
         descriptionRules: [
            v => !!v || 'Se requiere una descripción para la tarea',
            v => (v.length <= 80) || 'La descripción de la tarea debe ser menor de 80 caracteres'
         ],
         dateRules: [
            v => !!v || 'Se requiere una fecha para la tarea',
            v => (v.length === 10) || 'Formato incorrecto',
            v => (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(v)) || 'Formato incorrecto'
         ]
      }
   },
   methods: {
      validateForm() {
         if (this.$refs.form.validate()) {
            this.snackbar = true
            this.addTask()
            this.resetForm()
         }
      },
      resetForm () {
        this.$refs.form.reset()
      },
      modalClose() {
         this.$emit('close', false)
      },
      addTask() {
	 const new_task = Object.assign({}, this.task)

         this.$store.commit('add_task', new_task)
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
         this.resetForm();
      })
   },
   computed: {
      tasks() {
         return this.$store.getters.tasks;
      }
   }
}
</script>

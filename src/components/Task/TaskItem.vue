<template>
   <v-layout align-center justify-center row wrap>
      <v-flex xs12 class="text-xs-center my-2">
         <h1 class="card__heading">{{ category }}</h1>
      </v-flex>
      <v-flex v-for="task in filter_task(tasks, id)" :key="task.task_name" xs12 md8 class="my-2">
         <v-hover>
            <v-card 
               slot-scope="{ hover }" 
               :class="`elevation-${hover ? 12 : 2}`" 
               class="pa-3"
               height="100"
            >
            <div class="item">
               <div class="item__title">
                  <h3>{{ task.task_name }}</h3>
               </div>
               <div class="item__description">
                  <p>{{ task.task_desc }}</p>
               </div>
            </div>
            </v-card>
         </v-hover>
      </v-flex>
   </v-layout>
</template>

<script>
export default {
   data() {
      return {
         id: this.$route.query.id,
         category: this.$route.params.name
      }
   },
   methods: {
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
   }
};
</script>

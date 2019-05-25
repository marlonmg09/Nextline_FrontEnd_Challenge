<template>
   <v-layout align-center justify-center row wrap>
      <v-flex v-for="task in tasks" :key="task" xs12 md8 class="my-2">
         <v-hover>
            <v-card 
               slot-scope="{ hover }" 
               :class="`elevation-${hover ? 12 : 2}`" 
               class="pa-3"
               height="100"
            >
            <div class="item">
               <div class="item__title">
                  <h3>{{ task.title }}</h3>
               </div>
               <div class="item__description">
                  <p>{{ task.description }}</p>
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
      tasks: [
        { title: "Estudiar para examen", description: "Estudiar para el examen de ciencia de datos." },
        { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title: "Lorem ipsum 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi autem reiciendis dolore totam. Magni odio saepe minus similique est recusandae?" },
        { title: "Lorem ipsum 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi autem reiciendis dolore totam. Magni odio saepe minus similique est recusandae?" },
        { title: "Lorem ipsum 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi autem reiciendis dolore totam." }
      ]
    };
  }
};
</script>

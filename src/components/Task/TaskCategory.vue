<template>
  <v-layout align-center justify-center row wrap>
    <v-flex v-for="categoria in categorias" :key="categoria" xs12 md4 class="my-2">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto text-xs-center"
          width="344"
          height="380"
        >
          <v-icon class="card__logo my-3">face</v-icon>
          <div class="card__header">
            <h1 class="card__heading">{{ categoria }}</h1>
          </div>
          <div class="card__body">
            <h4>Tasks</h4>
            <p class="card__tasks">5</p>
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
      categorias: ["Personal", "Trabajo", "Otro"],
      cartas: 3
    };
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

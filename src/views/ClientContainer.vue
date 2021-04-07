<template>
  <div>
    <h1>This is the clients page</h1>
    <div class="client-container mx-auto">
      <div class="client" v-for="client in clientsList" :key="client.id">
        <div class="client-name">{{ client.name }}</div>
        <router-link
          :to="{
            name: 'Client',
            params: { name: client.name, details: client.details },
          }"
          class="router-link"
        >
          <button type="button" class="btn btn-dark">Show details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientContainer",
  data() {
    return {
      clientsList: [
        {
          id: 1,
          name: "Lorem Torpedo",
          details:
            "Lorem fistrum torpedo sexuarl está la cosa muy malar condemor. Quietooor torpedo ese pedazo de fistro caballo blanco caballo negroorl ese pedazo de sexuarl la caidita jarl pecador está la cosa muy malaaar!",
        },
        {
          id: 2,
          name: "Fistrum Condemor",
          details:
            "Lorem fistrum condemor está la cosa muy malar apetecán apetecán de la pradera. Ese que llega ese que llega a peich se calle ustée te voy a borrar el cerito ese pedazo de. Al ataquerl a peich no puedor llevame al sircoo.",
        },
        {
          id: 3,
          name: "Ipsum Pecador",
          details:
            "Lorem fistrum pecador torpedo la caidita sexuarl condemor se calle ustée. Tiene musho peligro de la pradera no te digo trigo por no llamarte Rodrigor ese hombree. Diodeno apetecan amatomaa a gramenawer caballo blanco caballo negroorl",
        },
        {
          id: 4,
          name: "Dolores Gramenawer",
          details:
            "Lorem fistrum a gramenawer la caidita me cago en tus muelas qué dise usteer va usté muy cargadoo llevame al sircoo amatomaa amatomaa caballo blanco caballo negroorl mamaar. A peich a wan caballo blanco caballo negroorl benemeritaar no puedor fistro",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.client-container {
  padding: 10px 0;

  width: 60%;

  justify-content: center;
  align-items: center;
}
.btn {
  font-size: 0.6rem;
}
.client {
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
}
.client-name {
  grid-column-start: 1;
  grid-column-end: 6;
}
// .client-btn {
//   grid-column-start: 5;
//   grid-column-end: 7;
// }
</style>

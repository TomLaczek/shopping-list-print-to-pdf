<template>
  <div class="home">
    <v-container>
      <v-row class="justify-center align-center">
        <h2>Would you wish to create</h2>
      </v-row>
      <v-row class="justify-center align-center">
        <h2>your own..</h2>
      </v-row>
      <v-row class="justify-center align-center mb-2">
        <h2>shopping list?</h2>
      </v-row>
      <v-row class="justify-center align-center mt-2">
        <h1>Make it today!</h1>
      </v-row>
      <v-row class="justify-center align-center mt-2 pt-2">
        <v-btn text outlined rounded large color="primary" @click="go('ShoppingList')">
          <span>Check it out</span>
          <v-icon right>find_in_page</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods:{
    go(destination){
      this.$router.push({name:destination});
    }
  }
};
</script>

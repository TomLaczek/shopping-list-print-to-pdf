<template>
  <v-app>
    <v-app-bar app flat color="white">
      <NavBar/>
    </v-app-bar>
    <v-content>
      <v-container class="mt-5 pt-5">
         <transition name="slide-fade" mode="out-in">
           <router-view/>
         </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
<style>
  /***TRANSITION***/
  .slide-fade-enter{
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active{
    transition: all 0.2s ease;
  }
  .slide-fade-leave-to{
    transform: translateX(-10px);
    opacity: 0;
  }
</style>

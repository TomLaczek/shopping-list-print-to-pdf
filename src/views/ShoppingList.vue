<template>
    <div id="shopping-list">
       <v-container>
            <v-row class="justify-center align-center">
                <h1>Create your own shopping list</h1>
            </v-row>
            <createlist/>
       </v-container>
    </div>
</template>
<script>
import createlist from '../components/CreateList'
export default {
  name: "shopping-list",
  components:{
      createlist,
  },
  data() {
    return {
    }
  }
};
</script>

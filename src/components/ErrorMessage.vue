<template>
  <v-row v-if="errorMessage" justify="center">
    <v-dialog
      v-model="errorMessage"
      persistent
      max-width="290"
    >
      
      <v-card>
        <v-card-title class="text-h5">
          ErrorMessage
        </v-card-title>
        <v-card-text>{{errorMessage}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        
          <v-btn
            color="green darken-1"
            text
            @click="errorMessage = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      dialog:true
    }
  },
  computed:{
    errorMessage:{
      get(){
        const error = this.$store.state.movie.error

        if(error){
          return error
        }
        return error
      },
      set(val){
        this.$store.state.movie.error = val
      }
    },
    
  }
}
</script>
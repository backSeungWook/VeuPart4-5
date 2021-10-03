<template>
  <div>
    <v-text-field
      v-model='title'
      label="영화검색"
      prepend-inner-icon="search"
      @keypress.enter="searchMovies"
    >
      <template v-slot:append>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="primary"
          indeterminate
        >
          
        </v-progress-circular>
      </template>
    </v-text-field>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      
    }
  },
  computed:{
    title:{//양반향 바인딩 시 getter,setter방식으로
      get(){
        
        return this.$store.state.movie.title
      },
      set(title){
        this.$store.commit('movie/updateState',{
          title
        })
      }
    },
    loading(){
      return this.$store.state.movie.loading
    }
  },
  methods:{
    ...mapActions('movie',[
      'searchMovies'
    ])
    /*
    searchMovies(){
      this.$store.dispatch('movie/searchMovies')
    }*/
  }
}
</script>
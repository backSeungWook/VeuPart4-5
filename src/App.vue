<template>
  <v-app>
   <v-container>
     <!-- 검색바 -->
     <search-bar />
      <error-message/>
     <!--영화목록 -->
     <movie-list />
   </v-container>

  </v-app>
</template>

<script>
//@:절대경로 VUE CLI에 이미 지정되어있음
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'
import ErrorMessage from './components/ErrorMessage'

export default {
 components:{
   SearchBar,
   MovieList,
   ErrorMessage
 }
}
</script>

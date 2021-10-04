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
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  components:{
   SearchBar,
   MovieList,
   ErrorMessage
 }
}
</script>
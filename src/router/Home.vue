<template>
  <section class="home">
    <div>
      <h2 @click="toTodoApp">
        MovieSear
      </h2>
      <!--tag : 어떠한 HTML 태그로 -->
      <router-link to="/about" tag="h2"> 
        About
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    toTodoApp(){
      this.$router.push('/movie')//push는 페이지 이동..
    }
  }
}
</script>
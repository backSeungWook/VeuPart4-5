import axios from 'axios'


export default{
  namespaced: true,
  state:() => ({
    title:'',
    loading:false,
    movies:[],
    error:null
  }),
  getters:{},
  mutations:{
    //범용화
    updateState(state,payload){
      Object.keys(payload).forEach(key =>{
        state[key] = payload[key]
      })
    },
    pushIntoMovies(state,movies){
      state.movies.push(...movies)//아이템 단위로 전개해서 
    }
  },
  actions:{
    fetchMovies({state},pageNum){
      /*const  promise =  new Promise((resolve)  => {
      
        const res = axios.get(`https://www.omdbapi.com/?apikey=7ea4c57&s=${state.title}&page=${pageNum}`)
        //reject('Error Mesg')
        
        resolve(res)
        
      })
      return promise.then((res) => {
        
        commit('pushIntoMovies',res.data.Search)
        return res.data
      })
      .catch((error) =>{
        alert(error)
        return error
      })*/
      return new Promise((resolve, reject) => {
        axios
          .get(`https://www.omdbapi.com/?apikey=7ea4c57&s=${state.title}&page=${pageNum}`)
          .then(res => {
            if (res.data.Error) {
              reject('NoData : '+res.data.Error)
            }
            resolve(res)
          })
          .catch(err => {
            reject('Err : '+err.message)
          })
        

      })
    },
    async searchMovies({commit,dispatch}){
      //get(url)      
      commit('updateState',{
        loading:true,
        movies:[]        
      })
 
      try{
        const res = await dispatch('fetchMovies',1)
        const { totalResults } = res.data
        const pageLength = Math.ceil(totalResults / 10 )//ceil 올림수 
        commit('pushIntoMovies',res.data.Search)
        if(pageLength > 1){
          for(let i = 2;i <=pageLength;i+=1){
            if(i>4){//최대 4 페이지 까지
              break;
            }
            const res = await dispatch('fetchMovies',i)
            commit('pushIntoMovies',res.data.Search)
          }
        }
      }catch(error){
        commit('updateState',{error})
      }
      
      commit('updateState',{
        loading:false
      })
        //응답 받을 값 (화살함수로 매개변수: 반환 받을 값)
        /* await 사용 대체
        .then(res => {
          console.log('res',res)
        })*/

    }
  }
}
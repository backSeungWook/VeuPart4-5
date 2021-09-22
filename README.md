# Part4 영화 검색 페이지
CLI 설치  
@:절대경로 VUE CLI에 이미 지정되어있음  
https://cli.vuejs.org/guide/installation.html  
-g 전역으로 설치
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
vue 프로젝트 생성
```
cmd에서 프로젝트 생성할 경로에서
$ vue create 프로젝트 이름
프로젝트 UI 지원
$ vue ui
```
## vuetify
Vue 전용 UI 프레임워크
https://vuetifyjs.com/
### 설치
CLI 로 설치 시
```
vue add vuetify
```
<a href="https://vuetifyjs.com/en/getting-started/installation/#vue-ui-install">vue UI 설치 시</a>
UI통해서 설치 시 : Plugins -> 추가-> vuetify 검색 -> 설치

사용 시
```
<template>
  <v-app>
  //사이에 v-app 템플릿 사용 
  </v-app>
</template>
```
## `Promise`
비동기 처리에 사용되는 객체  
`특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성`을 의미
```js
function a(){
  return newPromise(resolve => {
    setTimeout(function() {
      consol.log('a')
      resolve()//실행을 보장
    },1000)
  })
}
function b(){
  return newPromise(resolve => {
    setTimeout(function() {
      consol.log('b')
      resolve()//실행을 보장
    },1000)
  })
}
function c(){
  return newPromise(resolve => {
    setTimeout(function() {
      consol.log('c')
      resolve()//실행을 보장
    },1000)
  })
}

//a 함수에서 완료 후 b=>C 실행을 보장 해주겠다.
a()
  .then(() => b())
  .then(()=> {
    c()
  })
//es8 버전 에서는 async,await로 위 로직을 대체 할 수 있음.
//async 함수 안에서 await 사용
async function asyncFunc(){
  await a()//a가 실행 후 다음 것 실행
  await b()
  c()
}

//reject
function a1(){
  //Promise reject는 에러가 발생할 때
  //resolve 로직이 마무리 되었을 때 실행
  return new Promise((resolve,reject) =>{
    if(isError)
    {
      reject('Error Mesg')
    }
    setTimout(() => {
      consol.log('a1')
      resolve('data send')
    },1000)
  })
}

a1()
 .then((res) =>{
   consol.log(res)
 })
 //reject로 반환 되면 then실행 안하고 바로 catch
 .catch((error) => {
   alert(error)
 })
 .finally(()=>{

 })
//es8 async
async function asyncF(){
  try{
    const res = await a1()//resolve
  }catch(error){
    alert(error)
  }finally{

  } 
}
asyncF()
```

## axios
Promise based HTTP client  
동기 : 순서대로 실행  
비동기 : 순서대로 실행을 보장 하지 않음.  
```
$ npm i axios 
or
VUE UI : 의존성 -> 메인의존성으로 설치.
```


## masonry vue
https://github.com/shershen08/vue-masonry#readme

검색된 영화 목록을 핀터레스트 스타일의 레이아웃으로 구성하기 위해 사용합니다.
vue-masonry는 Masonry 라이브러리를 Vue.js로 랩핑한 모듈입니다.
```
VUE UI : 의존성 -> 메인의존성
```

# Firebase 호스팅
https://firebase.google.com/

Firebase CLI를 전역으로 설치
firebase명령어를 사용할 수 있습니다.
```
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase deploy
```

# Jest , Vue Test Utils

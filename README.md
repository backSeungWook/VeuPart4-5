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

<br><br>

# Part5. Jest , Vue Test Utils
처음부터 CLI로 설치 시  
Unit Testing > EsLint +Standard config > Lint on save 해제 > Jest > In dedicated config files
https://heropy.blog/2020/05/20/vue-test-with-jest/  
단위(Unit) 테스트란 상태, 메소드, 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인하는 것  
CLI에서 Jest를 직접 실행하기 위해 전역 설치
```
$ npm install -g jest
```
테스트를 위해 프로젝트에 다음 모듈들을 설치
```
$ npm install -D jest @vue/test-utils vue-jest babel-jest babel-core@bridge
```
모듈 | 설명
--|--
jest |	페이스북에서 만든 테스트 프레임워크로 Vue Test Utils에서 권장하는 테스트 러너입니다.
@vue/test-utils	| Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리 입니다.
vue-jest |	Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
babel-jest |	JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
babel-core@bridge |	Babel 6버전과의 호환을 위해 설치합니다. 관련 이슈가 있습니다.

jest.config.js 파일을 생성하고 다음과 같이 Jest 구성 옵션을 추가
```js
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // `@` 같은 경로 별칭을 매핑합니다.
  // E.g. `import SearchBar from '@/components/SearchBar'`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist'
  ],
  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 각 테스트 파일이 실행되기 전,
  // 테스트 프레임워크를 구성하거나 설정하기 위해,
  // 일부 코드 실행 모듈의 경로를 지정합니다.
  // Vuetify UI 프레임워크를 사용하는 경우 필요합니다.
  // https://github.com/vuetifyjs/vuetify/issues/4964
  setupFilesAfterEnv: [
    './jest.setup.js'
  ]
}
```
jest.setup.js 파일을 추가하고 다음과 같이 Vuetify 설정을 추가.    
https://github.com/vuetifyjs/vuetify/issues/4964
```js
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
```
package.json 파일에 eslintConfig에 다음과 같이 Jest 옵션을 추가.
```js
{
  "eslintConfig": {
    "env": {
      "jest": true
    }
  }
}
```
## Vue Test Utils API

https://vue-test-utils.vuejs.org/api/  
mount() : 자식 컴포넌트 까지 랜더링 하여  마운팅  
shallowMount() : 얇게 마운팅 하기 때문에 하위 컴포넌트가 가짜로 랜더링 되어서 마운팅 됨.  
일반적인 단위 테스트에서는 shallowMount를 사용을 권장  
createLocalVue() :  

### wrapper
 - emitted : emit에 대한 설정
    ```js
      wrapper.vm.$emit('foo')
      wrapper.vm.$emit('foo', 123)
      
      // assert event has been emitted
      expect(wrapper.emitted().foo).toBeTruthy()
      // assert event count
      expect(wrapper.emitted().foo.length).toBe(2)\
      // assert event payload
      expect(wrapper.emitted().foo[1]).toEqual([123])
    ```
 - attributes : 해당 DOM 에 관련된 속성
    ```js
    expect(wrapper.attributes('id')).toBe('foo')
    ```
 - exists: 있으면 true를 반환하고 없으면 false를 반환
 - findComponent: find 메소드
 - findAllComponent: findAll 메소드
 - html: html 구조 반환
 - setData:data에 값을 할당  

### Mocking
jest.mock : 모의(가짜) 모듈를 만들 때
jest.fn: 모의(가짜) 함수 만들 때  
  - https://jestjs.io/docs/mock-function-api#mockfngetmockname

```js
import { shallowMount } from '@vue/test-utils'
import TodoTitle from '../TodoTitle'
import axios from 'axios'

//가짜 모듈로 만들기
jest.mock('axios')

describe('TodoTitle C',()=>{
   //가짜 함수 jext.fn()
   let wrapper
  beforeEach(()=>{
    const resData = {
      data:{
        title:"delectus aut autem"
      }
    }
    /*axios.get = jest.fn(()=>{
      return new Promise(resolve =>{
        resolve(resData)
      })
    }) 아래 코드랑 동일*/
    //axios.get = jest.fn().mockResolvedValue(resData)
    //위에는 axios를 가짜 모듈로 안만들고 가짜 함수로만 했을 때

    //axios 가짜 모듈로 만들었을 때
    axios.get.mockResolvedValue(resData)

    wrapper = shallowMount(TodoTitle)
  })
  
  test('가져온 텍스트를 랜더링',()=>{
      expect(wrapper.text()).toBe('delectus aut autem')  
  })

  test('호출여부',()=>{
    //toHaveBeenCalled 호출 여부 
    expect(axios.get).toHaveBeenCalled()
    //toHaveBeenCalledTimes()몇번 호출 되었는지 
    expect(axios.get).toHaveBeenCalledTimes(2)

    //실제 함수 실행 여부도 spyOn()으로 확인 가능
    const spy = jest.spyOn(wrapper.vm,'fetchTodo')
    wrapper.vm.fetchTodo()
    expect(spy).toHaveBeenCalled()
  })
})
```
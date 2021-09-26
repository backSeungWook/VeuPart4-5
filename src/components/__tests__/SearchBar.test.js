import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import store from '@/store'
import SearchBar from '../SearchBar'

//가짜로 Vuex만들 때
//import Vuex from 'vuex'


const localVue = createLocalVue()
localVue.use(Vuetify)
/*가짜로 Vuex만들 때
store/index.js 처럼 구현 하면 됨.
const localVue.use(Vuex)
const store = new Vuex.Store({
  modules:{

  }
})
*/

describe('SearchBar Component', () => {
  let wrapper
  beforeEach(() => {
    // 설정
    //하위 컴포넌트에서의 테스트가 현재 테스트에 영향을 주는 경우
    //shallowMount가 아니라 mount로 (로딩 중 아이콘 확인 같은)
    wrapper = mount(SearchBar, {
      localVue,
      store
      
    })
  })

  test('제목을 입력했을 때 스토어 업데이트', () => {
    // 설정 & 동작
    wrapper.vm.title = 'lion'
    // 확인
    expect(wrapper.vm.title).toBe('lion')
  })

  test('로딩 중 아이콘 확인', async () => {
    // 확인
    expect(wrapper.find('.v-progress-circular').exists()).toBe(false)
    // 설정
    wrapper.vm.$store.commit('movie/updateState', {
      loading: true
    })
    // 동작
    await wrapper.vm.$nextTick()
    // 확인
    expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
  })
})
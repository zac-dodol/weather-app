import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex, VueCookies)

export default new Vuex.Store({
  state: {
    location: {
      locationKey: $cookies.get("locationKey") ? $cookies.get("locationKey") : null,
      locationName: $cookies.get("locationName") ? $cookies.get("locationName") : null,
      latitude: null,
      longitude: null,
      search: false
    },
    user: {
      ipAddress: null
    },
    notification: {
      error: false,
      succ: false,
      msg: "" 
    },
    api: {
      apiKey: "G8JO484eu7AGsERAutseLf78kWsBdrWj",
      lang: "en-en"
    },
    weather: {
      hourData: null,
      fiveDayData: null
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

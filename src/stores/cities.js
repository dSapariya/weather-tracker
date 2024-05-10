
import { defineStore } from 'pinia'
import { cityData } from './data'

export const useCityListStore = defineStore('cityList', {
  persist: true,
  state: () => ({
    cityList: cityData,
    isMetric:true,
  }),
  getters: {
    getSetting() {
      return this.isMetric;
    },
  },
  actions: {
    addCity(item) {
      this.cityList.push(item)
    },
    deleteCity(indexId) {
      this.cityList = this.cityList.filter(item => item.uuid !== indexId);
    },
    changeSetting(val){
      this.isMetric = val
      window.location.reload();
    }
  },
})

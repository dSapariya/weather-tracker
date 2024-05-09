
import { defineStore } from 'pinia'
import { cityData } from './data'

export const useCityListStore = defineStore('cityList', {
  persist: true,
  state: () => ({
    cityList: cityData,
  }),
  actions: {
    addCity(item) {
      this.cityList.push(item)
      console.log('in add City store',this.cityList)
    },
    deleteCity(indexId) {
      this.cityList.splice(indexId, 1)
    },
  },
})

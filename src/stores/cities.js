
import { defineStore } from 'pinia'
import { cityData } from './data'

export const useCityListStore = defineStore('cityList', {
  state: () => ({
    cityList: cityData,
  }),
  actions: {
    addCity(item) {
      this.cityList.push({ item, id: this.id++, completed: false })
    },
  },
})
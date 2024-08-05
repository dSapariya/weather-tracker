import { defineStore } from 'pinia';
import { cityData } from './data';


export const useCityListStore = defineStore('cities', {
  persist: true,
  state: () => ({
   
      cityList: cityData,
      isMetric: true,
  
  }),
  getters: {
    getSetting() {
      return this.isMetric;
    },
    getCities() {
      return this.cityList;
    }
  },
  actions: {
    addCity(item) {
      this.cityList = [item];
    },
    // deleteCity(indexId) {
    //   this.cityList = this.cityList.filter(item => item.uuid !== indexId);
    // },
    // changeSetting(val) {
    //   this.isMetric = val;
    //   window.location.reload();
    // }
    reset() {
      this.cityList = cityData;
      console.log('in rwtse',this.cityList)
      this.isMetric = true; // This resets the store to its initial state
    }
  },
});

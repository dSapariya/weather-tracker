<template>
    <div class="text-center">
      <p v-if="time" class="text-sm">{{ time }}</p>
      <p v-if="day" class="text-sm">{{ day }}</p>
      <p class="text-xl">{{ temp }}</p>
      <p class="text-sm capitalize">{{ condition }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      time: String,
      day: String,
      temp: String,
      condition: String
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  
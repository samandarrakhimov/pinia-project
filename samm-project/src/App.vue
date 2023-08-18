<template>
  <main>
    <!-- header -->
    <header>
      <img :src="logo" alt="logo">
      <h1>Pinia Tasks</h1>
    </header>
    <div class="add-form">
      <addForm/>
    </div>
       <!-- filter

       <nav class="filter">
        <button @click="filter === 'all'"> All tasks</button>
        <button @click="filter === 'favs'"> Favs tasks</button>
       </nav> -->
       <!-- app-info -->
       <div class="mx-auto w-25 mt-3">
        <p class=" text-uppercase fw-bold fs-3">Barcha Kinolar {{ taskStore.totalCount }}</p>
        <p v-if="taskStore.favCount" class=" text-captilaze fw-bold fs-4">Sevimli kino {{ taskStore.favCount }}</p>
      </div>
    <!-- task-list -->
    <div class="task-list" >
      <ul v-for="task in taskStore.tasks" v-if="filter === 'all'"
      >
        <li class="list-group-item d-flex justify-content-between align-items-center">
         <span @click="taskStore.ontoggle(task.id)">{{ task.name }}</span>
         <div class="d-flex align-items-center">
          <button class="btn-cookie btn-sm" @click="taskStore.delete(task.id)">
            <i class="fa-solid fa-trash"
           
            ></i>
          </button>
          <i class="fa-solid fa-star"  :class="{active: task.isFav}"></i>
         </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
// import movieListItem from './components/movieListItem.vue'
import { ref } from 'vue';
import { logo } from './constants';
import { useTaskStore } from './stores/TaskStore.js'
import addForm from './components/add-form.vue';
export default {
components:{
  addForm
},
  setup() {
    
   const taskStore = useTaskStore()
   const filter = ref('all')
   return {taskStore,filter}
  },
  data() {
    return {
      logo
    }
  },
  
}
</script>
<style >
  
</style>
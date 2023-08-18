<template>
    <div>
        <form @submit.prevent = "submitHandler" class="d-flex">
         <input type="text"
          class="form-control" 
          placeholder="i need to..." 
          v-model="newTask">
         <button type="submit" class="btn btn-outline-dark">Qo'shish</button>
       </form>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
export default {
    setup() {
     const taskStore = useTaskStore()
     const newTask = ref('')

     const submitHandler = () =>{
        
        if (newTask.value.length > 0) {
        taskStore.addForm({
            name:newTask.value,
            isFav:false,
            id:Date.now()
            
        })
        
        newTask.value=''
    }  
     }
     
     
    return {submitHandler,newTask}
    
    }
}
</script>
<style>
    
</style>
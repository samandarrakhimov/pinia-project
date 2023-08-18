import axios from "axios";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[{
            name:'milk',
            id:1,
            isFav:true
          
        },JSON.parse(localStorage.getItem('movie')) ],
       
    }),
    getters:{
        favs(){
            return this.tasks.filter(c => c.id)
        },
    favCount(){
        return this.tasks.reduce((p,c) => {
            return c.isFav ? p + 1: p
        },0)
    },
    totalCount(state){
        return state.tasks.length
    }
    },
    actions:{
        addForm(task){
         this.tasks.push(task)
         localStorage.setItem('movie',JSON.stringify(task),"")
        //  localStorage.setItem('move',"")
         
         
        
        },
        delete(id){
         this.tasks = this.tasks.filter(c => {
            return c.id !== id
         })
        },
        ontoggle(id){
            const task = this.tasks.find(c => c.id === id)
            task.isFav = !task.isFav
        }
    },
    mounted() {
        this.getData()
    },
   
    
   
})

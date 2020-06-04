<template>
	<div class="new-task">
        <input class="form-element" v-model="name" @keydown.enter="add" type="text" placeholder="Nova tarefa?">
        <button class="form-element" @click="add">+</button>
	</div>    
</template>

<script>

export default {
        data(){
                return{
                        name: ''
                }
        },
        methods:{
                add(){
                        this.$emit('taskAdded', {name: this.name})
                        this.name = ''
                }
        }
}
	
</script>
<style>
        .new-task{
                margin: 35px;
        }
        .form-element{
                outline: none;
                font-size: 1.5rem;
                border: 1px solid #fff;
                padding: 5px 8px 10px;
                color: #fff;
        }
        input.form-element{
                width: 80%;  
                background: #fff2;
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
        }
        button.form-element{
                border-left: none;
                background: #2196F3;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
        }
        @media screen and (max-width: 330px){
                .form-element{
                          font-size: 1rem;                        
                }
                input.form-element{      
                        width: 90%;                  
                        border-radius: 8px;
                }
                        button.form-element{ 
                        display: flex;  
                        align-items: center;         
                        width: 50%;
                        border-radius: 8px;
                }
        }
</style>
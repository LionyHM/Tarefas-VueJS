<template>
	<div id="app">
		<h1>Tarefas</h1>
		<taskProgress :progress="progress"/>
		<newTask @taskAdded="addTask"/>
		<taskGrid :tasks="tasks"
		@taskDeleted="deleteTask"
		@taskStateChanged="toggleTaskState"/>
		
	</div>
</template>

<script>
	import taskGrid from './components/taskGrid.vue'
	import newTask from './components/newTask.vue'
	import taskProgress from './components/taskProgress.vue'

export default {
	components: {newTask, taskGrid, taskProgress},
	data(){
		return {
			tasks: []		
	}
		},
	watch: {
		tasks:{
			deep: true,
			handler(){
			localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	computed:{
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},	
	methods:{
		addTask(task){
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0

			if(reallyNew){
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i){
			this.tasks.splice(i, 1)
		},
		toggleTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created(){
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}	
}
	
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
	
</style>

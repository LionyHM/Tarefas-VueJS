<template>
	<div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name" :task="task"
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged', i)"></Task>
        </template>
        <p v-else class="no-tasks">Sua vida está tranquila :)</p>
    </div>
</template>

<script>
import Task from './task.vue'
export default {
    components:{Task},
    props:{ tasks: {
        type: Array,
        required: true
    }}

	
}	
</script>
<style>
    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .task-grid .task{
        margin-left: 10px;
        margin-top: 10px;
    }
    .no-task{
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
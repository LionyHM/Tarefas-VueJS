import Vue from 'vue'

export default new Vue({
    methods:{
        addTarefa(tarefa){
            this.$emit('adicionarTarefa', tarefa)
        },
        onTarefa(callback){
            this.$on('adicionarTarefa', callback)
        },
        exibirTarefa(tarefa){
            this.$emit('exibindoTarefa', tarefa)
        },
        onExibirTarefa(callback){
            this.$on('exibindoTarefa', callback)
        },
        emitProgresso(progresso){
            this.$emit('adicionarProgresso', progresso)
        },
        onProgresso(callback){
            this.$on('adicionarProgresso', callback)
        }
        
    }
})
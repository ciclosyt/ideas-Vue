const app = new Vue({
    el: '#app',
    data: {
        idea_txt: '',
        prioridad: '',
        lista_ideas: [
            {'id': 0, 'idea': 'mi primera idea', 'prioridad': 'I'},
            {'id': 1, 'idea': 'mi segunda idea', 'prioridad': 'M'},
            {'id': 2, 'idea': 'mi tercera idea', 'prioridad': 'N'},
        ],
        search_txt: '',

    },

    watch: {

        search_txt: function (val) {
            this.BuscarIdeas(val);
        }
    },

    methods: {
        agregarIdea: function (){
            var idea = {
                'id': this.lista_ideas.length,
                'idea': this.idea_txt,
                'prioridad': this.prioridad
            };

            this.lista_ideas.push(idea);

        },

        BuscarIdeas: function (valor) {
            this.lista_ideas = this.lista_ideas.filter(
                (value) => {
                    return value.idea.toLowerCase().indexOf(
                        valor.toLowerCase()
                    )>=0
                }
            )
        },

        eliminarIdea: function (idea_id) {
            let index = this.lista_ideas.findIndex(e => e.id === idea_id);
            this.lista_ideas.splice(index, 1);
        },

        cargarDatosServidor: function () {
            axios.get('')
        }

    },
})

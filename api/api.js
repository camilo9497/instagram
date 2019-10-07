
const datos = [
    {
        id: 1,
        usuario: 'camilo9497',
        imagenPerfil: require('../assets/yo.jpg'),
        posts: [
        ]
    },
    {
        id: 2,
        usuario: 'eloy123',
        imagenPerfil: require('../assets/papa.jpg'),
        posts: [
            {
                id: 21,
                imagen: require('../assets/papa.jpg'),
                descripcion: 'Todo bien?',
                tipo: 'foto',
                megusta: 5,
                comentarios: [
                    {
                        usuario: 'irene583',
                        contenido: 'Que bien'
                    },
                    {
                        usuario: 'oscaragui',
                        contenido: 'Elegante'
                    }
                ]
            },
            {
                id: 22,
                imagen: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                descripcion: 'El trailer de la pelicula para niños',
                tipo: 'video',
                megusta: 18,
                comentarios: [
                    {
                        usuario: 'mia123',
                        contenido: 'Que bonito'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        usuario: 'albertocd',
        imagenPerfil: require('../assets/señor2.jpg'),
        posts: [
            {
                id: 31,
                imagen: require('../assets/estadio2.jpg'),
                descripcion: 'Que hermoso el estadio del Real Madrid',
                tipo: 'foto',
                megusta: 8,
                comentarios: [
                    {
                        usuario: 'hanna5',
                        contenido: 'Que belleza'
                    },
                    {
                        usuario: 'tomasino',
                        contenido: 'El mejor estadio del mundo'
                    }
                ]
            },

        ]
    },
    {
        id: 4,
        usuario: 'luna452',
        imagenPerfil: require('../assets/señora1.jpg'),
        posts: [
            {
                id: 41,
                imagen: require('../assets/señora1.jpg'),
                descripcion: 'La vida es efimera',
                tipo: 'foto',
                megusta: 28,
                comentarios: [
                    {
                        usuario: 'hanna5',
                        contenido: 'De acuerdo'
                    },
                    {
                        usuario: 'tomasino',
                        contenido: 'si si si'
                    }
                ]
            },

        ]
    },
    {
        id: 5,
        usuario: 'jess1920',
        imagenPerfil: require('../assets/m1.jpg'),
        posts: [
            {
                id: 51,
                imagen: require('../assets/m1.jpg'),
                descripcion: 'que bonito es tener el pelo liso, liso pero no quebradizo',
                tipo: 'foto',
                megusta: 100,
                comentarios: [
                    {
                        usuario: 'hanna5',
                        contenido: 'De acuerdo'
                    },
                    {
                        usuario: 'albertocd',
                        contenido: 'Hola'
                    },
                    {
                        usuario: 'hanna5',
                        contenido: 'Linda'
                    },
                    {
                        usuario: 'tomasino',
                        contenido: 'jajajaja'
                    }
                ]
            },

        ]
    },
]

export default datos
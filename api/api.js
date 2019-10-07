
const datos = [
    {
        id: 1,
        usuario: 'tomaso123',
        imagenPerfil: require('../assets/gato.jpg'),
        posts: [
            {
                id: 11,
                imagen: require('../assets/gato.jpg'),
                descripcion: 'alalalalala',
                tipo: 'foto',
                megusta: 23,
                comentarios: [
                    {
                        usuario: 'algo123',
                        contenido: 'Que bontio gatito'
                    },
                    {
                        usuario: 'tomasino',
                        contenido: 'Muchas gracias'
                    }
                ]
            },
            {
                id: 12,
                imagen: require('../assets/m1.jpg'),
                descripcion: 'QJAJAJAJAJA',
                tipo: 'foto',
                megusta: 15,
                comentarios: [
                    {
                        usuario: '123',
                        contenido: 'Que bontio gatito'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        usuario: 'eloy123',
        imagenPerfil: require('../assets/señor1.jpg'),
        posts: [
            {
                id: 21,
                imagen: require('../assets/señor1.jpg'),
                descripcion: 'hwecklnwcklm  wkcmkljcwdn cwnkwklncw',
                tipo: 'foto',
                megusta: 5,
                comentarios: [
                    {
                        usuario: 'irene583',
                        contenido: 'Que bien'
                    },
                    {
                        usuario: 'oscaragui',
                        contenido: 'Hola'
                    }
                ]
            },
            {
                id: 22,
                imagen: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                descripcion: 'wnwnndn hejeejje jenndjn',
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
                imagen: require('../assets/señor2.jpg'),
                descripcion: 'que bonito es tener el pelo liso, liso pero no quebradiso',
                tipo: 'foto',
                megusta: 8,
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
        id: 4,
        usuario: 'luna452',
        imagenPerfil: require('../assets/señora1.jpg'),
        posts: [
            {
                id: 41,
                imagen: require('../assets/señora1.jpg'),
                descripcion: 'que bonito es tener el pelo liso, liso pero no quebradiso',
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
                descripcion: 'que bonito es tener el pelo liso, liso pero no quebradiso',
                tipo: 'foto',
                megusta: 100,
                comentarios: [
                    {
                        usuario: 'hanna5',
                        contenido: 'De acuerdo'
                    },
                    {
                        usuario: 'tomasino',
                        contenido: 'si si si'
                    },
                    {
                        usuario: 'hanna5',
                        contenido: 'acgfjefo'
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
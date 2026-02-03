import type { BranchConfig, Locale, TreeNode } from "../types/tree";
import { artistImages } from "./artistImages";
const placeholderImage = "/artists/placeholder.png";
const img = (name: string): string => artistImages[name] ?? placeholderImage;
export const branches: BranchConfig[] = [
    {
        id: "mex",
        accent: "#d35400",
        copy: {
            es: { label: "Cantina (México/Colombia)" },
            en: { label: "Cantina (Mexico/Colombia)" },
        },
    },
    {
        id: "pop",
        accent: "#e91e63",
        copy: {
            es: { label: "Pop Anglo" },
            en: { label: "Anglo Pop" },
        },
    },
    {
        id: "urb",
        accent: "#9b59b6",
        copy: {
            es: { label: "Urbano / Perreo triste" },
            en: { label: "Urban / Sad perreo" },
        },
    },
    {
        id: "emo",
        accent: "#2c3e50",
        copy: {
            es: { label: "Emo / Rock" },
            en: { label: "Emo / Rock" },
        },
    },
    {
        id: "salsa",
        accent: "#16a085",
        copy: {
            es: { label: "Salsa llorona" },
            en: { label: "Crying Salsa" },
        },
    },
];
export const treeData: TreeNode = {
    id: "origin",
    variant: "king",
    image: img("Darío Gómez"),
    copy: {
        es: {
            name: "Darío Gómez",
            title: "El Big Bang del Despecho",
            tooltip: "Antes del reguetón, del pop y de la salsa romántica, ya existía un señor en Medellín convirtiendo facturas de bar en himnos. Donde termina la psicología, empieza una canción de Darío.",
            placeholder: "Darío (El Papá)",
        },
        en: {
            name: "Darío Gómez",
            title: "The Big Bang of Heartbreak",
            tooltip: "Before reggaeton, pop and romantic salsa, there was a man in Medellín turning bar receipts into anthems. Where therapy gives up, a Darío song begins.",
            placeholder: "Darío (The Father)",
        },
    },
    children: [
        {
            id: "alci-acosta",
            branch: "mex",
            image: img("Alci Acosta"),
            copy: {
                es: {
                    name: "Alci Acosta",
                    title: "Tío filosófico del guayabo",
                    tooltip: 'Si suena "La copa rota" es porque alguien ya va por la tercera botella.',
                    placeholder: "Alci Acosta",
                },
                en: {
                    name: "Alci Acosta",
                    title: "Philosophical hangover uncle",
                    tooltip: 'If you hear "La copa rota", someone is already on their third bottle.',
                    placeholder: "Alci Acosta",
                },
            },
            children: [{
                    id: "julio-jaramillo",
                    branch: "mex",
                    image: img("Julio Jaramillo"),
                    copy: {
                        es: {
                            name: "Julio Jaramillo",
                            title: "El abuelo de la tusa",
                            tooltip: "Antes de que tus pap\u00E1s nacieran, \u00E9l ya hab\u00EDa escrito el himno oficial para el desamor con pasaporte.",
                            placeholder: "Julio Jaramillo"
                        },
                        en: {
                            name: "Julio Jaramillo",
                            title: "The grandfather of heartbreak",
                            tooltip: "Before your parents were born, he had already written the official anthem for heartbreak with a passport.",
                            placeholder: "Julio Jaramillo"
                        }
                    },
                    children: [
                        {
                            id: "carin-leon",
                            branch: "mex",
                            image: img("Carin Le\u00F3n"),
                            copy: {
                                es: {
                                    name: "Carin Le\u00F3n",
                                    title: "El yerno del despecho",
                                    tooltip: "Si los de antes tomaban con aguardiente, \u00E9l pide un whisky caro para olvidarla.",
                                    placeholder: "Carin Le\u00F3n"
                                },
                                en: {
                                    name: "Carin Le\u00F3n",
                                    title: "Heartbreak's son-in-law",
                                    tooltip: "If the old guard drank cheap liquor, he orders a pricey whisky to forget her.",
                                    placeholder: "Carin Le\u00F3n"
                                }
                            }
                        }
                    ]
                }]
        },
        {
            id: "salsa-lavoe",
            branch: "salsa",
            image: img("Héctor Lavoe"),
            copy: {
                es: {
                    name: "Héctor Lavoe",
                    title: "Profeta del despecho en clave de son",
                    tooltip: "Si Darío es la cantina, Lavoe es la barra de salsa donde uno baila para no llorar.",
                    placeholder: "Héctor Lavoe",
                },
                en: {
                    name: "Héctor Lavoe",
                    title: "Prophet of salsa heartbreak",
                    tooltip: "If Darío is the dive bar, Lavoe is the salsa club where you dance so you don’t cry.",
                    placeholder: "Héctor Lavoe",
                },
            },
            children: [
                {
                    id: "frankie-ruiz",
                    branch: "salsa",
                    image: img("Frankie Ruiz"),
                    copy: {
                        es: {
                            name: "Frankie Ruiz",
                            title: "Apóstol de la salsa erótica triste",
                            tooltip: 'Cuando cantó "Desnúdate mujer" dejó claro que el despecho también suda.',
                            placeholder: "Frankie Ruiz",
                        },
                        en: {
                            name: "Frankie Ruiz",
                            title: "Apostle of sad erotic salsa",
                            tooltip: 'When he sang "Desnúdate mujer" he proved heartbreak can be sweaty too.',
                            placeholder: "Frankie Ruiz",
                        },
                    },
                    children: [
                        {
                            id: "jerry-rivera",
                            branch: "salsa",
                            image: img("Jerry Rivera"),
                            copy: {
                                es: {
                                    name: "Jerry Rivera",
                                    title: "El beb\u00E9 de la salsa",
                                    tooltip: "Cara de ni\u00F1o, voz de se\u00F1or.",
                                    placeholder: "Jerry Rivera"
                                },
                                en: {
                                    name: "Jerry Rivera",
                                    title: "The baby of salsa",
                                    tooltip: "Baby face, grown man's voice.",
                                    placeholder: "Jerry Rivera"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "gilberto-santa-rosa",
                    branch: "salsa",
                    image: img("Gilberto Santa Rosa"),
                    copy: {
                        es: {
                            name: "Gilberto Santa Rosa",
                            title: "Caballero del despecho elegante",
                            tooltip: "Lo que hace Darío con aguardiente, él lo hace con traje y clave.",
                            placeholder: "Gilberto Santa Rosa",
                        },
                        en: {
                            name: "Gilberto Santa Rosa",
                            title: "Gentleman of classy heartbreak",
                            tooltip: "What Darío does with cheap liquor, he does with a suit and clave.",
                            placeholder: "Gilberto Santa Rosa",
                        },
                    },
                    children: [
                        {
                            id: "marc-anthony",
                            branch: "salsa",
                            image: img("Marc Anthony"),
                            copy: {
                                es: {
                                    name: "Marc Anthony",
                                    title: "El rey de la salsa rom\u00E1ntica",
                                    tooltip: "Llorar\u00E1s, y llorar\u00E1s, sin que te pueda consolar.",
                                    placeholder: "Marc Anthony"
                                },
                                en: {
                                    name: "Marc Anthony",
                                    title: "The king of romantic salsa",
                                    tooltip: "You'll cry, and you'll cry, without anyone to console you.",
                                    placeholder: "Marc Anthony"
                                }
                            },
                            children: [
                                {
                                    id: "prince-royce",
                                    branch: "salsa",
                                    image: img("Prince Royce"),
                                    copy: {
                                        es: {
                                            name: "Prince Royce",
                                            title: "Bachata con swag de R&B",
                                            tooltip: "Suaviz\u00F3 la bachata para que se pudiera bailar en discotecas de lujo.",
                                            placeholder: "Prince Royce"
                                        },
                                        en: {
                                            name: "Prince Royce",
                                            title: "Bachata with R&B swag",
                                            tooltip: "He softened bachata so it could be played in fancy nightclubs.",
                                            placeholder: "Prince Royce"
                                        }
                                    }
                                },
                                {
                                    id: "romeo-santos",
                                    branch: "salsa",
                                    image: img("Romeo Santos"),
                                    copy: {
                                        es: {
                                            name: "Romeo Santos",
                                            title: "Poeta de la bachata moderna",
                                            tooltip: "Llev\u00F3 la bachata del patio a estadios, con letras que mezclan despecho y telenovela.",
                                            placeholder: "Romeo Santos"
                                        },
                                        en: {
                                            name: "Romeo Santos",
                                            title: "Poet of modern bachata",
                                            tooltip: "He took bachata from the backyard to stadiums, with lyrics that mix heartbreak and soap opera drama.",
                                            placeholder: "Romeo Santos"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "maelo-ruiz",
                    branch: "salsa",
                    image: img("Maelo Ruiz"),
                    copy: {
                        es: {
                            name: "Maelo Ruiz",
                            title: "Salsa para llorar en bodas",
                            tooltip: "Nadie sabe si se baila o se termina el compromiso cuando suena.",
                            placeholder: "Maelo Ruiz",
                        },
                        en: {
                            name: "Maelo Ruiz",
                            title: "Wedding-cry salsa specialist",
                            tooltip: "No one knows if you should keep dancing or cancel the wedding when he plays.",
                            placeholder: "Maelo Ruiz",
                        },
                    },
                    children: [
                        {
                            id: "victor-manuelle",
                            branch: "salsa",
                            image: img("V\u00EDctor Manuelle"),
                            copy: {
                                es: {
                                    name: "V\u00EDctor Manuelle",
                                    title: "Salsa para ex que vuelven",
                                    tooltip: "Si aparece en la lista, es porque volviste a contestar el mensaje de madrugada.",
                                    placeholder: "V\u00EDctor Manuelle"
                                },
                                en: {
                                    name: "Victor Manuelle",
                                    title: "Salsa for returning exes",
                                    tooltip: "If he\u2019s in your queue, you answered that 2am text again.",
                                    placeholder: "Victor Manuelle"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "grupo-niche",
                    branch: "salsa",
                    image: img("Grupo Niche"),
                    copy: {
                        es: {
                            name: "Grupo Niche",
                            title: "Orgullo caleño con tusa",
                            tooltip: "Inventaron el cardio emocional: subir de escalas mientras el corazón se rompe.",
                            placeholder: "Grupo Niche",
                        },
                        en: {
                            name: "Grupo Niche",
                            title: "Cali pride in heartbreak",
                            tooltip: "They invented emotional cardio: key changes while your heart falls apart.",
                            placeholder: "Grupo Niche",
                        },
                    },
                    children: [
                        {
                            id: "grupo-gale",
                            branch: "salsa",
                            image: img("Grupo Gal\u00E9"),
                            copy: {
                                es: {
                                    name: "Grupo Gal\u00E9",
                                    title: "Salsa pesada con sentimiento",
                                    tooltip: "Si el cuerpo baila pero los ojos lloran, es que Gal\u00E9 est\u00E1 en los controles.",
                                    placeholder: "Grupo Gal\u00E9"
                                },
                                en: {
                                    name: "Grupo Gale",
                                    title: "Heavy salsa with feeling",
                                    tooltip: "If the body dances but the eyes cry, Gal\u00E9 is at the controls.",
                                    placeholder: "Grupo Gale"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "joe-arroyo",
                    branch: "salsa",
                    image: img("Joe Arroyo"),
                    copy: {
                        es: {
                            name: "Joe Arroyo",
                            title: "Despecho con historia patria",
                            tooltip: "Logró que uno aprenda historia bailando y además extrañe a la ex.",
                            placeholder: "Joe Arroyo",
                        },
                        en: {
                            name: "Joe Arroyo",
                            title: "Heartbreak with history lessons",
                            tooltip: "He made people learn history while dancing and still miss their ex.",
                            placeholder: "Joe Arroyo",
                        },
                    }
                }
            ]
        },
        {
            id: "vicente",
            branch: "mex",
            image: img("Vicente Fernández"),
            copy: {
                es: {
                    name: "Vicente Fernández",
                    title: "Patriarca de la cantina",
                    tooltip: "Grítalo con tequila en mano o no se escucha en el palenque.",
                    placeholder: "Vicente Fernández",
                },
                en: {
                    name: "Vicente Fernández",
                    title: "Cantina patriarch",
                    tooltip: "Must be shouted with tequila in hand or the arena won’t hear you.",
                    placeholder: "Vicente Fernández",
                },
            },
            children: [
                {
                    id: "nodal",
                    branch: "mex",
                    image: img("Christian Nodal"),
                    copy: {
                        es: {
                            name: "Christian Nodal",
                            title: "Nieto tatuado del mariachi",
                            tooltip: "Llevó el dolor de la cantina directamente a la cara.",
                            placeholder: "Christian Nodal",
                        },
                        en: {
                            name: "Christian Nodal",
                            title: "Tattooed mariachi grandson",
                            tooltip: "Brought cantina pain straight onto his face.",
                            placeholder: "Christian Nodal",
                        },
                    },
                    children: [
                        {
                            id: "peso-pluma",
                            branch: "mex",
                            image: img("Peso Pluma"),
                            copy: {
                                es: {
                                    name: "Peso Pluma",
                                    title: "Corridos tumbados con tusa",
                                    tooltip: "Lo que antes era serenata ahora es hilo de Twitter y corrido triste.",
                                    placeholder: "Peso Pluma",
                                },
                                en: {
                                    name: "Peso Pluma",
                                    title: "Sad corridos heir",
                                    tooltip: "What used to be serenades is now Twitter threads and sad corridos.",
                                    placeholder: "Peso Pluma",
                                },
                            },
                            children: [
                                {
                                    id: "grupo-frontera",
                                    branch: "mex",
                                    image: img("Grupo Frontera"),
                                    copy: {
                                        es: {
                                            name: "Grupo Frontera",
                                            title: "Cumbia norte\u00F1a para corazones rotos",
                                            tooltip: "Convirtieron un cover en el himno oficial de los que todav\u00EDa no superan a su ex en 2023.",
                                            placeholder: "Grupo Frontera"
                                        },
                                        en: {
                                            name: "Grupo Frontera",
                                            title: "Northern cumbia for broken hearts",
                                            tooltip: "They turned a cover into the official anthem for those who still haven't moved on in 2023.",
                                            placeholder: "Grupo Frontera"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "juanga",
            branch: "mex",
            image: img("Juan Gabriel"),
            copy: {
                es: {
                    name: "Juan Gabriel",
                    title: "Diva inmortal del dolor",
                    tooltip: "Su falsete es la forma más elegante de decir “ya no vuelvas”.",
                    placeholder: "Juan Gabriel",
                },
                en: {
                    name: "Juan Gabriel",
                    title: "Immortal pain diva",
                    tooltip: "His falsetto is the classiest way to say “don’t come back.”",
                    placeholder: "Juan Gabriel",
                },
            },
            children: [
                {
                    id: "paquita",
                    branch: "mex",
                    image: img("Paquita la del Barrio"),
                    copy: {
                        es: {
                            name: "Paquita la del Barrio",
                            title: "La tía que odia a los ex",
                            tooltip: "Mientras Darío llora, Paquita factura pensión emocional de todos los infieles.",
                            placeholder: "Paquita la del Barrio",
                        },
                        en: {
                            name: "Paquita la del Barrio",
                            title: "Auntie who hates exes",
                            tooltip: "While Darío cries, Paquita charges emotional alimony to every cheater.",
                            placeholder: "Paquita la del Barrio",
                        },
                    },
                    children: [
                        {
                            id: "jenny-rivera",
                            branch: "mex",
                            image: img("Jenni Rivera"),
                            copy: {
                                es: {
                                    name: "Jenni Rivera",
                                    title: "Hermana mayor de la tusa banda",
                                    tooltip: "Demostró que se puede llorar, brindar y demandar todo en la misma canción.",
                                    placeholder: "Jenni Rivera",
                                },
                                en: {
                                    name: "Jenni Rivera",
                                    title: "Banda heartbreak big sis",
                                    tooltip: "Proved you can cry, toast and sue all in one song.",
                                    placeholder: "Jenni Rivera",
                                },
                            }
                        }
                    ]
                },
                {
                    id: "ana-gabriel",
                    branch: "mex",
                    image: img("Ana Gabriel"),
                    copy: {
                        es: {
                            name: "Ana Gabriel",
                            title: "Dolor que barre la casa",
                            tooltip: "Plancha prendida, voz ronca y lágrimas en el trapeador.",
                            placeholder: "Ana Gabriel",
                        },
                        en: {
                            name: "Ana Gabriel",
                            title: "Pain while mopping",
                            tooltip: "Iron on, raspy voice, and tears on the mop.",
                            placeholder: "Ana Gabriel",
                        },
                    },
                    children: [
                        {
                            id: "lupita-d-alessio",
                            branch: "mex",
                            image: img("Lupita D'Alessio"),
                            copy: {
                                es: {
                                    name: "Lupita D'Alessio",
                                    title: "Leona del despecho ochentero",
                                    tooltip: "Cantaba advertencias antes de que existieran las cl\u00E1usulas prenupciales.",
                                    placeholder: "Lupita D'Alessio"
                                },
                                en: {
                                    name: "Lupita D'Alessio",
                                    title: "80s heartbreak lioness",
                                    tooltip: "She sang warnings before prenups were mainstream.",
                                    placeholder: "Lupita D'Alessio"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "rocio-durcal",
                    branch: "mex",
                    image: img("Rocío Dúrcal"),
                    copy: {
                        es: {
                            name: "Rocío Dúrcal",
                            title: "Balada con mariachis",
                            tooltip: "La reina española que adoptó el despecho ranchero.",
                            placeholder: "Rocío Dúrcal",
                        },
                        en: {
                            name: "Rocío Dúrcal",
                            title: "Mariachi ballad royalty",
                            tooltip: "The Spanish queen who adopted ranchera heartbreak.",
                            placeholder: "Rocío Dúrcal",
                        },
                    },
                    children: [
                        {
                            id: "shaila-durcal",
                            branch: "mex",
                            image: img("Shaila D\u00FArcal"),
                            copy: {
                                es: {
                                    name: "Shaila D\u00FArcal",
                                    title: "La heredera de la ranchera pop",
                                    tooltip: "La hija que le canta a su mam\u00E1 y al desamor.",
                                    placeholder: "Shaila D\u00FArcal"
                                },
                                en: {
                                    name: "Shaila D\u00FArcal",
                                    title: "The heiress of pop ranchera",
                                    tooltip: "The daughter who sings to her mother and to heartbreak.",
                                    placeholder: "Shaila D\u00FArcal"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: "taylor",
            branch: "pop",
            image: img("Taylor Swift"),
            copy: {
                es: {
                    name: "Taylor Swift",
                    title: "La Darío gringa",
                    tooltip: "Sus ex son su modelo de negocio, igual que las canciones de cantina.",
                    placeholder: "Taylor Swift",
                },
                en: {
                    name: "Taylor Swift",
                    title: "Darío, but make it pop",
                    tooltip: "Her exes are a business model, same spirit as cantina anthems.",
                    placeholder: "Taylor Swift",
                },
            },
            children: [
                {
                    id: "olivia-rodrigo",
                    branch: "pop",
                    image: img("Olivia Rodrigo"),
                    copy: {
                        es: {
                            name: "Olivia Rodrigo",
                            title: "Gen Z que conduce llorando",
                            tooltip: "“Drivers License” es “Nadie es eterno” pero con carnet recién sacado.",
                            placeholder: "Olivia Rodrigo",
                        },
                        en: {
                            name: "Olivia Rodrigo",
                            title: "Gen Z driving and crying",
                            tooltip: '"Drivers License" is "Nadie es eterno" but with a fresh driver’s permit.',
                            placeholder: "Olivia Rodrigo",
                        },
                    },
                    children: [
                        {
                            id: "conan-gray",
                            branch: "pop",
                            image: img("Conan Gray"),
                            copy: {
                                es: {
                                    name: "Conan Gray",
                                    title: "Vecino emo del suburbio",
                                    tooltip: "Si Darío hubiera crecido en un cul-de-sac, sonaría así.",
                                    placeholder: "Conan Gray",
                                },
                                en: {
                                    name: "Conan Gray",
                                    title: "Suburban emo neighbor",
                                    tooltip: "If Darío had grown up in a cul-de-sac, he’d sound like this.",
                                    placeholder: "Conan Gray",
                                },
                            },
                            children: [
                                {
                                    id: "girl-in-red",
                                    branch: "pop",
                                    image: img("girl in red"),
                                    copy: {
                                        es: {
                                            name: "girl in red",
                                            title: "Indie de cuarto con corazón partido",
                                            tooltip: "Si Darío hubiera escrito canciones encerrado en un dormitorio nórdico, sonaría así.",
                                            placeholder: "girl in red",
                                        },
                                        en: {
                                            name: "girl in red",
                                            title: "Bedroom indie with a broken heart",
                                            tooltip: "If Darío had written songs locked in a Scandinavian bedroom, this would be him.",
                                            placeholder: "girl in red",
                                        },
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "sabrina-carpenter",
                    branch: "pop",
                    image: img("Sabrina Carpenter"),
                    copy: {
                        es: {
                            name: "Sabrina Carpenter",
                            title: "Sarcasmo azucarado",
                            tooltip: "Aprendió que el despecho también baila con coreografías.",
                            placeholder: "Sabrina Carpenter",
                        },
                        en: {
                            name: "Sabrina Carpenter",
                            title: "Sugary sarcasm",
                            tooltip: "Learned heartbreak can also dance with choreography.",
                            placeholder: "Sabrina Carpenter",
                        },
                    },
                    children: [
                        {
                            id: "chappell-roan",
                            branch: "pop",
                            image: img("Chappell Roan"),
                            copy: {
                                es: {
                                    name: "Chappell Roan",
                                    title: "Pop de rancho para reinas del drama",
                                    tooltip: "Convierte la tusa en un rodeo queer con brillantina.",
                                    placeholder: "Chappell Roan"
                                },
                                en: {
                                    name: "Chappell Roan",
                                    title: "Ranch pop for drama queens",
                                    tooltip: "Turns heartbreak into a glittery, queer rodeo.",
                                    placeholder: "Chappell Roan"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "adele",
                    branch: "pop",
                    image: img("Adele"),
                    copy: {
                        es: {
                            name: "Adele",
                            title: "Elegancia llorona",
                            tooltip: "Llora como cualquiera, pero con vestido de gala y voz de trueno.",
                            placeholder: "Adele",
                        },
                        en: {
                            name: "Adele",
                            title: "Elegant crier",
                            tooltip: "Cries like anyone, but in evening wear with thunderous vocals.",
                            placeholder: "Adele",
                        },
                    }
                },
                {
                    id: "sam-smith",
                    branch: "pop",
                    image: img("Sam Smith"),
                    copy: {
                        es: {
                            name: "Sam Smith",
                            title: "Balada con falsete",
                            tooltip: "El dolor llega en traje sastre y coros celestiales.",
                            placeholder: "Sam Smith",
                        },
                        en: {
                            name: "Sam Smith",
                            title: "Falsetto balladry",
                            tooltip: "Heartbreak delivered in tailored suits and heavenly choirs.",
                            placeholder: "Sam Smith",
                        },
                    },
                    children: [
                        {
                            id: "lewis-capaldi",
                            branch: "pop",
                            image: img("Lewis Capaldi"),
                            copy: {
                                es: {
                                    name: "Lewis Capaldi",
                                    title: "Heredero del karaoke triste",
                                    tooltip: "Tiene cara de chiste pero voz de persona que ya superó tres Darios.",
                                    placeholder: "Lewis Capaldi",
                                },
                                en: {
                                    name: "Lewis Capaldi",
                                    title: "Sad karaoke heir",
                                    tooltip: "Looks like a joke, sings like someone who survived three Daríos already.",
                                    placeholder: "Lewis Capaldi",
                                },
                            }
                        }
                    ]
                },
                {
                    id: "harry-styles",
                    branch: "pop",
                    image: img("Harry Styles"),
                    copy: {
                        es: {
                            name: "Harry Styles",
                            title: "Ex-boyband en terapia",
                            tooltip: "Tomó el camino largo: de sufrir en One Direction a llorar en falda Gucci.",
                            placeholder: "Harry Styles",
                        },
                        en: {
                            name: "Harry Styles",
                            title: "Boyband graduate in therapy",
                            tooltip: "Took the long route: from suffering in One Direction to crying in a Gucci skirt.",
                            placeholder: "Harry Styles",
                        },
                    }
                },
                {
                    id: "bruno-mars",
                    branch: "pop",
                    image: img("Bruno Mars"),
                    copy: {
                        es: {
                            name: "Bruno Mars",
                            title: "Romántico que se tira al fuego",
                            tooltip: "Prometió tirarse debajo de un tren por amor: típico fan avanzado de Darío pero con coreografía.",
                            placeholder: "Bruno Mars",
                        },
                        en: {
                            name: "Bruno Mars",
                            title: "Romantic willing to jump",
                            tooltip: "He said he’d jump in front of a train for love: an advanced Darío fan, but with choreography.",
                            placeholder: "Bruno Mars",
                        },
                    }
                },
                {
                    id: "lana-del-rey",
                    branch: "pop",
                    image: img("Lana Del Rey"),
                    copy: {
                        es: {
                            name: "Lana Del Rey",
                            title: "Despecho cinematográfico",
                            tooltip: "Hace lo mismo que Darío pero con filtro sepia, cigarro y motel en slow motion.",
                            placeholder: "Lana Del Rey",
                        },
                        en: {
                            name: "Lana Del Rey",
                            title: "Cinematic heartbreak",
                            tooltip: "She does the same as Darío but with sepia filter, cigarette and motel in slow motion.",
                            placeholder: "Lana Del Rey",
                        },
                    }
                },
                {
                    id: "billie-eilish",
                    branch: "pop",
                    image: img("Billie Eilish"),
                    copy: {
                        es: {
                            name: "Billie Eilish",
                            title: "Despecho susurrado",
                            tooltip: "Es la generación que decidió que el despecho se canta en voz bajita con hoodie gigante.",
                            placeholder: "Billie Eilish",
                        },
                        en: {
                            name: "Billie Eilish",
                            title: "Whispered heartbreak",
                            tooltip: "A generation that chose to sing heartbreak in a whisper and an oversized hoodie.",
                            placeholder: "Billie Eilish",
                        },
                    }
                }
            ]
        },
        {
            id: "shakira",
            branch: "urb",
            image: img("Shakira"),
            copy: {
                es: {
                    name: "Shakira",
                    title: "La patrona",
                    tooltip: "Enseñó que el despecho se cura facturando y moviendo la cadera.",
                    placeholder: "Shakira",
                },
                en: {
                    name: "Shakira",
                    title: "The matriarch",
                    tooltip: "She taught us heartbreak is cured by invoicing and dancing.",
                    placeholder: "Shakira",
                },
            },
            children: [
                {
                    id: "karol",
                    branch: "urb",
                    image: img("Karol G"),
                    copy: {
                        es: {
                            name: "Karol G",
                            title: "La Bichota",
                            tooltip: "“Mañana será bonito” es positivismo paisa post-tusa (Post-Darío).",
                            placeholder: "Karol G",
                        },
                        en: {
                            name: "Karol G",
                            title: "La Bichota",
                            tooltip: '"Mañana será bonito" is Antioquian post-breakup positivity (Post-Darío).',
                            placeholder: "Karol G",
                        },
                    },
                    children: [
                        {
                            id: "myke-towers",
                            branch: "urb",
                            image: img("Myke Towers"),
                            copy: {
                                es: {
                                    name: "Myke Towers",
                                    title: "El primo cool que sabe de negocios",
                                    tooltip: "Mientras otros lloran, \u00E9l factura con un flow que parece que nunca ha sufrido.",
                                    placeholder: "Myke Towers"
                                },
                                en: {
                                    name: "Myke Towers",
                                    title: "The cool cousin who knows business",
                                    tooltip: "While others cry, he's making money with a flow that sounds like he's never suffered.",
                                    placeholder: "Myke Towers"
                                }
                            },
                            children: [
                                {
                                    id: "manuel-turizo",
                                    branch: "urb",
                                    image: img("Manuel Turizo"),
                                    copy: {
                                        es: {
                                            name: "Manuel Turizo",
                                            title: "Voz de bar\u00EDtono para el desamor",
                                            tooltip: "Su voz suena a que ya se tom\u00F3 todo el aguardiente de la mesa y a\u00FAn as\u00ED te va a cantar bonito.",
                                            placeholder: "Manuel Turizo"
                                        },
                                        en: {
                                            name: "Manuel Turizo",
                                            title: "Baritone voice for heartbreak",
                                            tooltip: "His voice sounds like he already drank all the liquor on the table and will still sing to you beautifully.",
                                            placeholder: "Manuel Turizo"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "bad-bunny",
                    branch: "urb",
                    image: img("Bad Bunny"),
                    copy: {
                        es: {
                            name: "Bad Bunny",
                            title: "Perreo depresivo",
                            tooltip: "“Amorfoda” es una canción de Darío atrapada en un cuerpo de trap.",
                            placeholder: "Bad Bunny",
                        },
                        en: {
                            name: "Bad Bunny",
                            title: "Depressive perreo",
                            tooltip: '"Amorfoda" is a Darío song trapped inside a trap beat.',
                            placeholder: "Bad Bunny",
                        },
                    },
                    children: [
                        {
                            id: "feid",
                            branch: "urb",
                            image: img("Feid"),
                            copy: {
                                es: {
                                    name: "Feid",
                                    title: "Tusa en hoodie verde",
                                    tooltip: "Si ves luces verdes y estás triste, es homenaje urbano a Darío.",
                                    placeholder: "Feid",
                                },
                                en: {
                                    name: "Feid",
                                    title: "Green hoodie heartbreak",
                                    tooltip: "If you see green lights while sad, it’s urban homage to Darío.",
                                    placeholder: "Feid",
                                },
                            },
                            children: [
                                {
                                    id: "mora",
                                    branch: "urb",
                                    image: img("Mora"),
                                    copy: {
                                        es: {
                                            name: "Mora",
                                            title: "El yerno que perrea con aud\u00EDfonos",
                                            tooltip: "Llora en est\u00E9reo y te mete un beat que te hace olvidar por qu\u00E9 estabas triste.",
                                            placeholder: "Mora"
                                        },
                                        en: {
                                            name: "Mora",
                                            title: "The son-in-law who perreas with headphones",
                                            tooltip: "He cries in stereo and drops a beat that makes you forget why you were sad.",
                                            placeholder: "Mora"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            id: "drake",
                            branch: "urb",
                            image: img("Drake"),
                            copy: {
                                es: {
                                    name: "Drake",
                                    title: "El yerno que sufre en Instagram",
                                    tooltip: "El campe\u00F3n del despecho con indirectas en redes sociales. Si Dar\u00EDo viera sus stories, le dar\u00EDa un par de consejos.",
                                    placeholder: "Drake"
                                },
                                en: {
                                    name: "Drake",
                                    title: "The son-in-law who suffers on Instagram",
                                    tooltip: "The champion of heartbreak with social media subtweets. If Dar\u00EDo saw his stories, he\u2019d give him some advice.",
                                    placeholder: "Drake"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "raul-alexander",
                    branch: "urb",
                    image: img("Rauw Alejandro"),
                    copy: {
                        es: {
                            name: "Rauw Alejandro",
                            title: "Perreo futurista con tusa",
                            tooltip: 'Si Darío hubiera tenido efectos de sintetizador, habría hecho "Todo de ti" después de una tusa.',
                            placeholder: "Rauw Alejandro",
                        },
                        en: {
                            name: "Rauw Alejandro",
                            title: "Futuristic perreo heartbreak",
                            tooltip: 'If Darío had access to synths, he would’ve written "Todo de ti" after a breakup.',
                            placeholder: "Rauw Alejandro",
                        },
                    },
                    children: [
                        {
                            id: "rosalia",
                            branch: "urb",
                            image: img("Rosal\u00EDa"),
                            copy: {
                                es: {
                                    name: "Rosal\u00EDa",
                                    title: "Despecho con la u\u00F1a hecha",
                                    tooltip: "Llora por buler\u00EDas y perrea con autotune. La reina de la tusa experimental.",
                                    placeholder: "Rosal\u00EDa"
                                },
                                en: {
                                    name: "Rosal\u00EDa",
                                    title: "Heartbreak with fresh nails",
                                    tooltip: "Cries in flamenco and grinds with autotune. The queen of experimental heartbreak.",
                                    placeholder: "Rosal\u00EDa"
                                }
                            },
                            children: [
                                {
                                    id: "rels-b",
                                    branch: "urb",
                                    image: img("Rels B"),
                                    copy: {
                                        es: {
                                            name: "Rels B",
                                            title: "El flaco del R&B con coraz\u00F3n roto",
                                            tooltip: "Letras que te hacen extra\u00F1ar a tu ex.",
                                            placeholder: "Rels B"
                                        },
                                        en: {
                                            name: "Rels B",
                                            title: "The skinny guy with a broken R&B heart",
                                            tooltip: "Lyrics that make you miss your ex.",
                                            placeholder: "Rels B"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "ela",
                    branch: "urb",
                    image: img("Ela Taubert"),
                    copy: {
                        es: {
                            name: "Ela Taubert",
                            title: "Pop sad rolo",
                            tooltip: "La nieta bogotana que llora bonito en TikTok.",
                            placeholder: "Ela Taubert",
                        },
                        en: {
                            name: "Ela Taubert",
                            title: "Bogotá sad pop",
                            tooltip: "The Bogotá granddaughter who cries beautifully on TikTok.",
                            placeholder: "Ela Taubert",
                        },
                    },
                    children: [{
                            id: "kenia-os",
                            branch: "urb",
                            image: img("Kenia OS"),
                            copy: {
                                es: {
                                    name: "Kenia OS",
                                    title: "Pop urbano para llorar en close friends",
                                    tooltip: "Si no la ves en el feed, est\u00E1 soltando indirectas con autotune.",
                                    placeholder: "Kenia OS"
                                },
                                en: {
                                    name: "Kenia OS",
                                    title: "Urban pop for crying on close friends",
                                    tooltip: "If she vanishes from your feed, she\u2019s dropping autotuned subtweets.",
                                    placeholder: "Kenia OS"
                                }
                            }
                        }]
                }
            ]
        },
        {
            id: "mcr",
            branch: "emo",
            image: img("My Chemical Romance"),
            copy: {
                es: {
                    name: "My Chemical Romance",
                    title: "Despecho emo",
                    tooltip: '"I\'m Not Okay" es la traducción gringa de "Sobreviviré". Piénsalo.',
                    placeholder: "My Chemical Romance",
                },
                en: {
                    name: "My Chemical Romance",
                    title: "Emo heartbreak",
                    tooltip: '"I\'m Not Okay" is the English translation of "Sobreviviré". Think about it.',
                    placeholder: "My Chemical Romance",
                },
            },
            children: [
                {
                    id: "panda",
                    branch: "emo",
                    image: img("Pxndx"),
                    copy: {
                        es: {
                            name: "Pxndx",
                            title: "Emo con acento regio",
                            tooltip: "Copiaron riffs y también el despecho adolescente.",
                            placeholder: "Pxndx",
                        },
                        en: {
                            name: "Pxndx",
                            title: "Emo with a norteño twist",
                            tooltip: "Borrowed riffs and the teenage heartbreak that came with them.",
                            placeholder: "Pxndx",
                        },
                    },
                    children: [
                        {
                            id: "division-minuscula",
                            branch: "emo",
                            image: img("Divisi\u00F3n Min\u00FAscula"),
                            copy: {
                                es: {
                                    name: "Divisi\u00F3n Min\u00FAscula",
                                    title: "El hermano mayor que s\u00ED sabe de rock",
                                    tooltip: "Mientras Pxndx hac\u00EDa drama, ellos afinaban guitarras y escrib\u00EDan himnos de desamor m\u00E1s sutiles.",
                                    placeholder: "Divisi\u00F3n Min\u00FAscula"
                                },
                                en: {
                                    name: "Divisi\u00F3n Min\u00FAscula",
                                    title: "The older brother who actually knows rock",
                                    tooltip: "While Pxndx was making a scene, they were tuning guitars and writing more subtle heartbreak anthems.",
                                    placeholder: "Divisi\u00F3n Min\u00FAscula"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "the-weeknd",
                    branch: "emo",
                    image: img("The Weeknd"),
                    copy: {
                        es: {
                            name: "The Weeknd",
                            title: "Despecho con luces rojas",
                            tooltip: "Hace lo que haría Darío si en vez de cantina tuviera un after en Las Vegas.",
                            placeholder: "The Weeknd",
                        },
                        en: {
                            name: "The Weeknd",
                            title: "Heartbreak under red lights",
                            tooltip: "Does what Darío would do if he had a Vegas afterparty instead of a cantina.",
                            placeholder: "The Weeknd",
                        },
                    },
                    children: [
                        {
                            id: "joji",
                            branch: "emo",
                            image: img("Joji"),
                            copy: {
                                es: {
                                    name: "Joji",
                                    title: "Desamor lo-fi para memes",
                                    tooltip: "Empez\u00F3 como comediante de YouTube y termin\u00F3 haciendo la banda sonora para corazones rotos con acceso a internet.",
                                    placeholder: "Joji"
                                },
                                en: {
                                    name: "Joji",
                                    title: "Lo-fi heartbreak for memes",
                                    tooltip: "Started as a YouTube comedian and ended up making the soundtrack for broken hearts with internet access.",
                                    placeholder: "Joji"
                                }
                            }
                        }
                    ]
                },
                {
                    id: "radiohead",
                    branch: "emo",
                    image: img("Radiohead"),
                    copy: {
                        es: {
                            name: "Radiohead",
                            title: "Tristeza existencial con guitarra y laptop",
                            tooltip: "Tomaron el despecho, le quitaron el aguardiente y le pusieron ansiedad del siglo XXI.",
                            placeholder: "Radiohead",
                        },
                        en: {
                            name: "Radiohead",
                            title: "Existential sadness with guitars and laptops",
                            tooltip: "They took heartbreak, removed the liquor and added 21st‑century anxiety.",
                            placeholder: "Radiohead",
                        },
                    },
                    children: [
                        {
                            id: "coldplay",
                            branch: "emo",
                            image: img("Coldplay"),
                            copy: {
                                es: {
                                    name: "Coldplay",
                                    title: "Baladas para llorar en estadios",
                                    tooltip: "Hacen lo mismo que Darío, pero con pulseritas LED y fuegos artificiales.",
                                    placeholder: "Coldplay",
                                },
                                en: {
                                    name: "Coldplay",
                                    title: "Stadium-sized crying anthems",
                                    tooltip: "They do what Darío does, but with LED wristbands and fireworks.",
                                    placeholder: "Coldplay",
                                },
                            },
                            children: [
                                {
                                    id: "the-strokes",
                                    branch: "emo",
                                    image: img("The Strokes"),
                                    copy: {
                                        es: {
                                            name: "The Strokes",
                                            title: "Indie rock de cruda emocional",
                                            tooltip: "Suena a guayabo de banda neoyorquina que anoche se creyó inmortal.",
                                            placeholder: "The Strokes",
                                        },
                                        en: {
                                            name: "The Strokes",
                                            title: "Indie rock emotional hangover",
                                            tooltip: "Sounds like a New York band’s hangover after thinking they were immortal last night.",
                                            placeholder: "The Strokes",
                                        },
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "mon-laferte",
                    branch: "emo",
                    image: img("Mon Laferte"),
                    copy: {
                        es: {
                            name: "Mon Laferte",
                            title: "Despecho alternativo",
                            tooltip: "Grita con la misma fuerza que un mariachi borracho a las 3 AM.",
                            placeholder: "Mon Laferte",
                        },
                        en: {
                            name: "Mon Laferte",
                            title: "Alternative heartbreak",
                            tooltip: "Screams with the force of a drunk mariachi at 3 AM.",
                            placeholder: "Mon Laferte",
                        },
                    },
                    children: [
                        {
                            id: "zoe",
                            branch: "emo",
                            image: img("Zoé"),
                            copy: {
                                es: {
                                    name: "Zoé",
                                    title: "Rock espacial con tusa",
                                    tooltip: "Si le quitas las metáforas cósmicas, queda puro despecho en re menor.",
                                    placeholder: "Zoé",
                                },
                                en: {
                                    name: "Zoé",
                                    title: "Space rock, still heartbroken",
                                    tooltip: "Remove the cosmic metaphors and you get pure heartbreak in D minor.",
                                    placeholder: "Zoé",
                                },
                            },
                            children: [
                                {
                                    id: "leon-larregui",
                                    branch: "emo",
                                    image: img("Le\u00F3n Larregui"),
                                    copy: {
                                        es: {
                                            name: "Le\u00F3n Larregui",
                                            title: "El solista psicod\u00E9lico del romance oscuro",
                                            tooltip: "Cuando Zo\u00E9 no es suficiente para el mal de amor.",
                                            placeholder: "Le\u00F3n Larregui"
                                        },
                                        en: {
                                            name: "Le\u00F3n Larregui",
                                            title: "The psychedelic soloist of dark romance",
                                            tooltip: "When Zo\u00E9 is not enough for a broken heart.",
                                            placeholder: "Le\u00F3n Larregui"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "paramore",
                    branch: "emo",
                    image: img("Paramore"),
                    copy: {
                        es: {
                            name: "Paramore",
                            title: "El puente entre el rock y el despecho millenial",
                            tooltip: "Antes de Taylor Swift, ya exist\u00EDa una pelirroja canalizando la tusa en riffs de guitarra.",
                            placeholder: "Paramore"
                        },
                        en: {
                            name: "Paramore",
                            title: "The bridge between rock and millenial heartbreak",
                            tooltip: "Before Taylor Swift, there was a redhead channeling heartbreak into guitar riffs.",
                            placeholder: "Paramore"
                        }
                    },
                    children: [
                        {
                            id: "fall-out-boy",
                            branch: "emo",
                            image: img("Fall Out Boy"),
                            copy: {
                                es: {
                                    name: "Fall Out Boy",
                                    title: "El drama con riffs pegajosos",
                                    tooltip: "Thnks fr th Mmrs.",
                                    placeholder: "Fall Out Boy"
                                },
                                en: {
                                    name: "Fall Out Boy",
                                    title: "Drama with catchy riffs",
                                    tooltip: "Thnks fr th Mmrs.",
                                    placeholder: "Fall Out Boy"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
export const fallbackLocale: Locale = "es";

# Nextline_FrontEnd_Challenge

- Este repositorio contiene instrucciones del ejercicio práctico que complementa la evaluación a la entrevista presencial para la vacante de Front-End Nextline Mayo 2019.
- Para participar deberás hacer `fork` a este repositorio y subir tus avances en tu propio `fork`. Tu estrategia de `versión control` no será evaluado.

## Requisitos y descripción del ejercicio.

### Nota importante:

- La evaluación del ejercicio se llevará a partir de una serie de rúbricas, cada elemento a evaluar contará con una puntuación. Así, los puntos totales corresponderán de acuerdo a los requisitos que hayas cumplido y las tecnologías de tu elección.

### Frameworks/Librería Front-End que se permiten usar:

- **Estos puntos son adicionales a las rúbricas individuales de las acciones CRUD**

| Framework/Library | Points |
|:-----------------:|:------:|
| Angular           | +0     |
| React             | +0     |
| Vue               | +5     |
| Nuxt              | +10    |

### Para crear las interfaces puedes usar lo siguiente:

- **Estos puntos son adicionales a las rúbricas individuales de las acciones CRUD**

| Library/Tools     | Points |
|:-----------------:|:------:|
| Bootstrap         | +0     |
| SemanticUI        | +0     |
| Materialize       | +5     |
| Pure CSS          | +5     |
| Vuetify           | +10    |

### Descripción del ejercicio.

- Admnistrador de tareas (a manera de User-Story): Un usuario puede visualizar un desglose de todas las tareas que él mismo ha creado para, posteriormente, agregar una nueva o abrir (y ver detalles), editar (y modificar campos) y borrar una existente. 
- El ejercicio consiste en crear un CRUD de tasks o tareas sólo para el Front-End, por lo que no necesariamente se solicitará integrar con ninguna API, salvo con una que se proporcionará a continuación (sólo 1 GET, de donde se obtendrán las tareas).

- Las acciones/vistas que debería contener su app son las siguiente:
    - Listar todas las tareas creadas (un formato resumido de las tareas va aquí, sólo con nombre y descripción).
    - Abrir/visualizar los detalles de una tarea.
    - Crear una tarea.
    - Editar una tarea.
    - Borrar una tarea.

#### Schema de una Task/Tarea.
```js
    {
        task_name: String,
        start_date: String, // dd/mm/yyyy
        has_fdate: Boolean,
        finish_date: String, // Optional & dd/mm/yyy
        task_type: Number,
        task_desc: String
    }
```

### Endpoint a usarse:

- Endpoint URL: ``
- Return payload Example: 

```
[
    {
        name: 'Personal',
        id: 123
    },
    {
        name: 'Business',
        id: 777
    },
    {
        name: 'Other',
        id: 999
    }
]
```

### Rúbricas principales del ejercicio.

| Action/Part           | Points | Condition |
|:---------------------:|:------:|:---------:|
| List tasks            | 0 - 10 | Must have |
| View individual task  | 0 - 10 | Must have |
| Create task           | 0 - 10 | Must have |
| Update task           | 0 - 10 | Must have |
| Delete task           | 0 - 10 | Must have |
| Input validation      | 0 - 10 | Optional  |
| API consumed and used | +5     | Optional  |
| Creativity & Style    | 0 - 10 | Custom    |
| Post-mortem           | 0 - 10 | Optional  |

## Ejemplo de cómo calcular tu posible score.

- Has creado la app en Angular, usando Materialize y cumpliste con todas las rúbricas del CRUD, el uso de la API e hiciste correctas las validaciones de los inputs, sin embargo decidiste no hacer el port-mortem y te asignamos un 8 en creatividad y estilo.

| Part                  | Points |
|:---------------------:|:------:|
| Angular               | 0      |
| Materialize           | 5      |
| List tasks            | 10     |
| View individual task  | 10     |
| Create task           | 10     |
| Update task           | 10     |
| Delete task           | 10     |
| Input validation      | 10     |
| API consumed and used | 5      |
| Creativity & Style    | 8      |
| Post-mortem           | 0      |

Puntaje total: 77 de 105 puntos totales adquiribles.

import { Pregunta, Nivel } from '../models/question.model';

export const PREGUNTAS: Record<Nivel, Pregunta[]> = {
tipos: [
      { valor: '42', opciones: ['int', 'long', 'float'], respuesta: 'int' },
      { valor: '3.14', opciones: ['double', 'float', 'int'], respuesta: 'double' },
      { valor: '"Hola"', opciones: ['String', 'char', 'boolean'], respuesta: 'String' },
      { valor: "'A'", opciones: ['char', 'String', 'byte'], respuesta: 'char' },
      { valor: 'false', opciones: ['boolean', 'String', 'char'], respuesta: 'boolean' },
      { valor: 'true', opciones: ['boolean', 'String', 'int'], respuesta: 'boolean' },
      { valor: '127', opciones: ['byte', 'short', 'int'], respuesta: 'byte' },
      { valor: '32000', opciones: ['short', 'int', 'long'], respuesta: 'short' },
      { valor: '100000', opciones: ['int', 'short', 'long'], respuesta: 'int' },
      { valor: '9223372036854775807', opciones: ['long', 'int', 'float'], respuesta: 'long' }
    ],
    constantes: [
  {
    valor: 'final int MAX = 10;',
    opciones: ['const', 'final', 'static'],
    respuesta: 'final'
  },
  {
    valor: '¿Qué palabra clave se usa para declarar una constante en Java?',
    opciones: ['final', 'const', 'immutable'],
    respuesta: 'final'
  },
  {
    valor: 'final String nombre = "Juan"; nombre = "Luis";',
    opciones: ['Error de compilación', 'Funciona correctamente', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: '¿Se puede cambiar el valor de una variable `final`?',
    opciones: ['No', 'Sí', 'Solo una vez'],
    respuesta: 'No'
  },
  {
    valor: 'final int x; x = 5;',
    opciones: ['Correcto si se asigna una sola vez', 'Incorrecto siempre', 'Solo si es static'],
    respuesta: 'Correcto si se asigna una sola vez'
  },
  {
    valor: '¿Dónde se recomienda usar constantes?',
    opciones: ['En valores que no cambian', 'Solo en bucles', 'Nunca'],
    respuesta: 'En valores que no cambian'
  },
  {
    valor: 'final List<String> lista = new ArrayList<>(); lista.add("Java");',
    opciones: ['Compila y funciona', 'Error: lista es final', 'No se puede añadir'],
    respuesta: 'Compila y funciona'
  },
  {
    valor: 'final int A = 10; final int B = 20; int suma = A + B;',
    opciones: ['Compila y suma 30', 'Error por constantes', 'Da null'],
    respuesta: 'Compila y suma 30'
  },
  {
    valor: '¿Qué efecto tiene la palabra clave `final` en métodos?',
    opciones: ['Evita sobreescritura', 'Hace que el método no compile', 'Duplica ejecución'],
    respuesta: 'Evita sobreescritura'
  },
  {
    valor: '¿Qué significa `final` en una clase?',
    opciones: ['No puede heredarse', 'Se ejecuta una vez', 'Es abstracta'],
    respuesta: 'No puede heredarse'
  }
]
,
    tipado: [
  {
    valor: '¿Qué tipo de tipado tiene Java?',
    opciones: ['Estático', 'Dinámico', 'Débil'],
    respuesta: 'Estático'
  },
  {
    valor: 'int numero = "10";',
    opciones: ['Error de compilación', 'Correcto', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'var x = 10;',
    opciones: ['Tipo inferido como int', 'Error de compilación', 'Tipo string'],
    respuesta: 'Tipo inferido como int'
  },
  {
    valor: '¿Cuál es la ventaja del tipado estático?',
    opciones: ['Detecta errores en tiempo de compilación', 'Mayor flexibilidad', 'Mayor uso de memoria'],
    respuesta: 'Detecta errores en tiempo de compilación'
  },
  {
    valor: 'double d = 5;',
    opciones: ['Correcto', 'Error: falta conversión', 'Da null'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Cuál NO es un tipo primitivo en Java?',
    opciones: ['String', 'int', 'boolean'],
    respuesta: 'String'
  },
  {
    valor: 'String nombre = 123;',
    opciones: ['Error de compilación', 'Correcto', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'boolean activo = true;',
    opciones: ['Correcto', 'Error: true no es booleano', 'Falta el tipo'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Qué tipo usarías para un número decimal muy preciso?',
    opciones: ['double', 'float', 'BigDecimal'],
    respuesta: 'BigDecimal'
  },
  {
    valor: '¿Qué ocurre si no especificas tipo y usas `var`?',
    opciones: ['El compilador lo infiere', 'Error siempre', 'Se convierte en String'],
    respuesta: 'El compilador lo infiere'
  }
]
,listas: [
  {
    valor: 'int[] numeros = {1, 2, 3}; ¿Cuál es el tipo?',
    opciones: ['Array de enteros', 'Lista de enteros', 'int'],
    respuesta: 'Array de enteros'
  },
  {
    valor: 'List<String> nombres = new ArrayList<>();',
    opciones: ['Correcto', 'Error de compilación', 'Falta tipo'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Cómo accedes al segundo elemento de un array?',
    opciones: ['array[1]', 'array[2]', 'array.get(1)'],
    respuesta: 'array[1]'
  },
  {
    valor: 'List<String> lista = new ArrayList<>(); lista.add("Java");',
    opciones: ['Agrega "Java"', 'Da error', 'No compila'],
    respuesta: 'Agrega "Java"'
  },
  {
    valor: '¿Qué devuelve `array.length`?',
    opciones: ['Número de elementos', 'Último valor', 'Nada'],
    respuesta: 'Número de elementos'
  },
  {
    valor: '¿Qué interfaz se usa para listas dinámicas?',
    opciones: ['List', 'Array', 'Set'],
    respuesta: 'List'
  },
  {
    valor: 'String[] nombres = new String[3];',
    opciones: ['Array de 3 Strings vacíos', 'Array con valores aleatorios', 'No compila'],
    respuesta: 'Array de 3 Strings vacíos'
  },
  {
    valor: '¿Qué hace `lista.get(0)` en una lista?',
    opciones: ['Devuelve el primer elemento', 'Elimina el primer elemento', 'Agrega uno nuevo'],
    respuesta: 'Devuelve el primer elemento'
  },
  {
    valor: '¿Qué método añade un elemento a una lista?',
    opciones: ['add()', 'push()', 'insert()'],
    respuesta: 'add()'
  },
  {
    valor: '¿Cuál NO es una implementación de List en Java?',
    opciones: ['LinkedList', 'ArrayList', 'HashSet'],
    respuesta: 'HashSet'
  }
]
,
    por_defecto: [
  {
    valor: '¿Cuál es el valor por defecto de un `int` en Java?',
    opciones: ['0', 'null', 'undefined'],
    respuesta: '0'
  },
  {
    valor: '¿Cuál es el valor por defecto de un `boolean`?',
    opciones: ['false', 'true', 'null'],
    respuesta: 'false'
  },
  {
    valor: '¿Qué devuelve una referencia a un objeto no inicializado?',
    opciones: ['null', 'undefined', '0'],
    respuesta: 'null'
  },
  {
    valor: '¿Cuál es el valor por defecto de un `double`?',
    opciones: ['0.0', 'null', 'NaN'],
    respuesta: '0.0'
  },
  {
    valor: '¿Qué valor por defecto tiene una variable `String` no inicializada?',
    opciones: ['null', '"" (cadena vacía)', 'Error de compilación'],
    respuesta: 'null'
  },
  {
    valor: '¿Qué valor tiene un array de boolean al crearlo sin inicializar?',
    opciones: ['false en todas las posiciones', 'null', 'true en todas las posiciones'],
    respuesta: 'false en todas las posiciones'
  },
  {
    valor: '¿Cuál es el valor por defecto de una variable `char`?',
    opciones: ['\u0000', 'null', '‘ ‘ (espacio en blanco)'],
    respuesta: '\u0000'
  },
  {
    valor: '¿Qué ocurre si accedes a una variable de instancia no inicializada?',
    opciones: ['Toma su valor por defecto', 'Da error de compilación', 'Da undefined'],
    respuesta: 'Toma su valor por defecto'
  },
  {
    valor: '¿Los valores por defecto se aplican a variables locales?',
    opciones: ['No, deben inicializarse', 'Sí, como en atributos', 'Solo en arrays'],
    respuesta: 'No, deben inicializarse'
  },
  {
    valor: '¿Qué valor por defecto tiene una variable `long`?',
    opciones: ['0L', 'null', '0.0'],
    respuesta: '0L'
  }
],   prueba: [
  {
    valor: '¿funcopnma?',
    opciones: ['0', 'null', 'undefined'],
    respuesta: '0'
  }
]

  };

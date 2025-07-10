import { Pregunta, Nivel } from '../models/question.model';

export const PREGUNTAS: Record<Nivel, Pregunta[]> = {
tipos: [
  { valor: '42', opciones: ['long', 'float', 'int'], respuesta: 'int' },
  { valor: '3.1416', opciones: ['double', 'float', 'int'], respuesta: 'double' },
  { valor: '"Hola"', opciones: ['String', 'boolean', 'char'], respuesta: 'String' },
  { valor: "'A'", opciones: ['char', 'byte', 'String'], respuesta: 'char' },
  { valor: 'false', opciones: ['boolean', 'String', 'char'], respuesta: 'boolean' },
  { valor: '127', opciones: ['byte', 'short', 'int'], respuesta: 'byte' },
  { valor: '32000', opciones: ['short', 'long', 'int'], respuesta: 'short' },
  { valor: '100000', opciones: ['long', 'float', 'int'], respuesta: 'int' },
  { valor: '9223372036854775807', opciones: ['float', 'int', 'long'], respuesta: 'long' },
  { valor: 'Colección con tamaño fijo', opciones: ['List', 'Array', 'Set'], respuesta: 'Array' },
  { valor: 'Colección sin duplicados', opciones: ['List', 'Map', 'Set'], respuesta: 'Set' },
  { valor: 'Colección clave-valor', opciones: ['Map', 'Array', 'Set'], respuesta: 'Map' },
  { valor: 'Colección ordenada que admite duplicados', opciones: ['Set', 'List', 'Map'], respuesta: 'List' },
  { valor: '3.14f', opciones: ['double', 'float', 'int'], respuesta: 'float' },
  { valor: "'Z'", opciones: ['char', 'String', 'boolean'], respuesta: 'char' },
  { valor: 'true', opciones: ['int', 'boolean', 'String'], respuesta: 'boolean' },
  { valor: '0L', opciones: ['long', 'float', 'int'], respuesta: 'long' },
  { valor: '0.0', opciones: ['float', 'double', 'long'], respuesta: 'double' },
  { valor: 'Colección indexada con elementos duplicados', opciones: ['List', 'Set', 'Map'], respuesta: 'List' },
  { valor: 'Estructura que asocia claves con valores', opciones: ['Map', 'List', 'Array'], respuesta: 'Map' },
  { valor: 'Estructura que almacena referencias, tamaño fijo', opciones: ['Array', 'List', 'Set'], respuesta: 'Array' },
  { valor: 'Colección de elementos únicos, sin orden garantizado', opciones: ['Set', 'List', 'Map'], respuesta: 'Set' },
  { valor: '"Texto plano entre comillas dobles"', opciones: ['String', 'char', 'boolean'], respuesta: 'String' }
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
      },
      {
        valor: 'final double PI = 3.1416;',
        opciones: ['Declara una constante', 'Declara una variable', 'Declara un método'],
        respuesta: 'Declara una constante'
      },
      {
        valor: '¿Qué ventaja tiene usar `final` en variables?',
        opciones: ['Claridad en código', 'Hace más lento el programa', 'Consume más memoria'],
        respuesta: 'Claridad en código'
      },
      {
        valor: 'final var edad = 25;',
        opciones: ['Correcto en Java 10+', 'Incorrecto en Java', 'Solo en interfaces'],
        respuesta: 'Correcto en Java 10+'
      },
      {
        valor: '¿Se puede declarar una constante sin valor inicial?',
        opciones: ['Sí, pero debe asignarse una vez', 'No, nunca', 'Sí, infinitas veces'],
        respuesta: 'Sí, pero debe asignarse una vez'
      },
      {
        valor: 'final int valor;',
        opciones: ['Debe inicializarse en el constructor', 'Puede quedarse sin asignar', 'Es abstracto'],
        respuesta: 'Debe inicializarse en el constructor'
      },
      {
        valor: '¿Cuál es el resultado de redeclarar una constante?',
        opciones: ['Error de compilación', 'Suma su valor', 'Duplica memoria'],
        respuesta: 'Error de compilación'
      },
      {
        valor: 'final static int MAX_USERS = 100;',
        opciones: ['Constante estática', 'Método abstracto', 'Variable local'],
        respuesta: 'Constante estática'
      },
      {
        valor: '¿Para qué sirve `final` en argumentos de método?',
        opciones: ['Impide modificarlo', 'Duplica ejecución', 'Convierte en static'],
        respuesta: 'Impide modificarlo'
      },
      {
        valor: '¿Qué significa inmutabilidad en Java?',
        opciones: ['No puede cambiar su estado', 'Se ejecuta dos veces', 'Es estático siempre'],
        respuesta: 'No puede cambiar su estado'
      },
      {
        valor: 'final String saludo = "Hola"; saludo = "Adiós";',
        opciones: ['Error de compilación', 'Compila y cambia', 'Devuelve null'],
        respuesta: 'Error de compilación'
      }
    ]
    
,
tipado : [
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
  },
  {
    valor: 'int edad = 25.5;',
    opciones: ['Error de compilación', 'Correcto', 'Se convierte en String'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'var saludo = "Hola";',
    opciones: ['Tipo inferido como String', 'Tipo boolean', 'Error de compilación'],
    respuesta: 'Tipo inferido como String'
  },
  {
    valor: 'boolean activo = "true";',
    opciones: ['Error de compilación', 'Correcto', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: '¿Cómo es el tipado de Java?',
    opciones: ['Fuerte y estático', 'Débil y dinámico', 'Solo dinámico'],
    respuesta: 'Fuerte y estático'
  },
  {
    valor: 'int numero = 5 + 3;',
    opciones: ['Correcto', 'Error de compilación', 'Da null'],
    respuesta: 'Correcto'
  },
  {
    valor: 'String texto = "123";',
    opciones: ['Correcto', 'Error de compilación', 'Solo con cast'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Qué significa tipado fuerte?',
    opciones: ['Evita mezclas de tipos incompatibles', 'Permite cualquier tipo', 'Se evalúa en ejecución'],
    respuesta: 'Evita mezclas de tipos incompatibles'
  },
  {
    valor: 'var numero = 3.14;',
    opciones: ['Tipo inferido como double', 'Tipo inferido como int', 'Error de compilación'],
    respuesta: 'Tipo inferido como double'
  },
  {
    valor: '¿Cuál es el objetivo del tipado en Java?',
    opciones: ['Prevenir errores en tiempo de compilación', 'Hacer el código más lento', 'Aumentar consumo de memoria'],
    respuesta: 'Prevenir errores en tiempo de compilación'
  },
  {
    valor: '¿Qué ocurre si asignas un String a un int?',
    opciones: ['Error de compilación', 'Compila sin problema', 'Devuelve null'],
    respuesta: 'Error de compilación'
  }
]

,listas : [
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
  },
  {
    valor: '¿Qué estructura tiene tamaño fijo?',
    opciones: ['Array', 'List', 'Set'],
    respuesta: 'Array'
  },
  {
    valor: '¿Cuál es una ventaja de List?',
    opciones: ['Tamaño dinámico', 'Tamaño fijo', 'Más memoria'],
    respuesta: 'Tamaño dinámico'
  },
  {
    valor: '¿Cómo declaras una lista vacía de enteros?',
    opciones: ['new ArrayList<Integer>()', 'new int[]', 'new Integer'], 
    respuesta: 'new ArrayList<Integer>()'
  },
  {
    valor: '¿Qué hace `lista.size()`?',
    opciones: ['Devuelve el número de elementos', 'Elimina la lista', 'Devuelve el último elemento'],
    respuesta: 'Devuelve el número de elementos'
  },
  {
    valor: 'int[] edades = new int[5]; edades[0] = 20;',
    opciones: ['Correcto', 'Error de compilación', 'No se puede asignar'],
    respuesta: 'Correcto'
  },
  {
    valor: 'List<String> nombres = Arrays.asList("Ana", "Luis");',
    opciones: ['Crea lista fija', 'Error de compilación', 'Array vacío'],
    respuesta: 'Crea lista fija'
  },
  {
    valor: '¿Qué pasa si accedes a un índice fuera de rango en un array?',
    opciones: ['Error en tiempo de ejecución', 'Devuelve null', 'Ignora la operación'],
    respuesta: 'Error en tiempo de ejecución'
  },
  {
    valor: 'lista.remove(0);',
    opciones: ['Elimina el primer elemento', 'Agrega al final', 'Devuelve tamaño'],
    respuesta: 'Elimina el primer elemento'
  },
  {
    valor: '¿Qué método revisa si un elemento está en una lista?',
    opciones: ['contains()', 'get()', 'push()'],
    respuesta: 'contains()'
  },
  {
    valor: '¿Qué estructura NO permite duplicados?',
    opciones: ['Set', 'List', 'Array'],
    respuesta: 'Set'
  }
]

,
por_defecto : [
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
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo de tipo float?',
    opciones: ['0.0f', 'null', 'NaN'],
    respuesta: '0.0f'
  },
  {
    valor: '¿Cuál es el valor por defecto de un atributo de tipo byte?',
    opciones: ['0', 'null', '1'],
    respuesta: '0'
  },
  {
    valor: '¿Qué valor por defecto tiene un array de int?',
    opciones: ['0 en todas las posiciones', 'null', '1 en todas las posiciones'],
    respuesta: '0 en todas las posiciones'
  },
  {
    valor: '¿Qué sucede si intentas usar una variable local sin inicializar?',
    opciones: ['Error de compilación', 'Se llena con 0', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: '¿Dónde se asignan valores por defecto automáticamente?',
    opciones: ['En atributos de instancia', 'En variables locales', 'En parámetros de métodos'],
    respuesta: 'En atributos de instancia'
  },
  {
    valor: '¿Cuál es el valor por defecto de un array de objetos?',
    opciones: ['null en todas las posiciones', '0 en todas las posiciones', 'Cadena vacía'],
    respuesta: 'null en todas las posiciones'
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo short?',
    opciones: ['0', 'null', '0.0'],
    respuesta: '0'
  },
  {
    valor: '¿Cuál es el valor por defecto para referencias de clases?',
    opciones: ['null', '0', '"" (vacío)'],
    respuesta: 'null'
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo boolean en una clase?',
    opciones: ['false', 'true', 'null'],
    respuesta: 'false'
  },
  {
    valor: '¿Cuál es la diferencia entre variables locales y atributos respecto a valores por defecto?',
    opciones: ['Locales requieren inicialización', 'Locales tienen null', 'Locales son siempre 0'],
    respuesta: 'Locales requieren inicialización'
  }
]
,  operadores : [
  {
    valor: '5 + 3',
    opciones: ['Operador aritmético', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a && b',
    opciones: ['Operador aritmético', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'x > y',
    opciones: ['Operador relacional', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'condicion ? valor1 : valor2',
    opciones: ['Operador ternario', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador ternario'
  },
  {
    valor: 'a == b',
    opciones: ['Operador relacional', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'a || b',
    opciones: ['Operador lógico', 'Operador relacional', 'Operador aritmético'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'a * b',
    opciones: ['Operador aritmético', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a != b',
    opciones: ['Operador relacional', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador relacional'
  },
  {
    valor: '++a',
    opciones: ['Incremento', 'Decremento', 'Relacional'],
    respuesta: 'Incremento'
  },
  {
    valor: '--b',
    opciones: ['Decremento', 'Aritmético', 'Lógico'],
    respuesta: 'Decremento'
  },
  {
    valor: 'a += 5;',
    opciones: ['Asignación compuesta', 'Operador lógico', 'Relacional'],
    respuesta: 'Asignación compuesta'
  },
  {
    valor: 'a / b',
    opciones: ['Operador aritmético', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a <= b',
    opciones: ['Operador relacional', 'Operador lógico', 'Aritmético'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'a % b',
    opciones: ['Operador aritmético', 'Operador lógico', 'Operador ternario'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: '!(a > b)',
    opciones: ['Operador lógico', 'Operador aritmético', 'Operador relacional'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'a = b;',
    opciones: ['Asignación', 'Comparación', 'Operador lógico'],
    respuesta: 'Asignación'
  },
  {
    valor: 'Prioridad de operadores',
    opciones: ['Define orden de evaluación', 'Evita errores de compilación', 'Elimina variables'],
    respuesta: 'Define orden de evaluación'
  },
  {
    valor: '¿Qué hace el operador "=="?',
    opciones: ['Compara valores', 'Asigna valor', 'Concatena cadenas'],
    respuesta: 'Compara valores'
  },
  {
    valor: 'a < b ? x : y',
    opciones: ['Operador ternario', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador ternario'
  },
  {
    valor: 'a & b',
    opciones: ['Operador lógico AND bit a bit', 'Operador relacional', 'Operador ternario'],
    respuesta: 'Operador lógico AND bit a bit'
  }
]


  };

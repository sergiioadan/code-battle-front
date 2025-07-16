import { Pregunta, Nivel } from '../models/question.model';

export const PREGUNTAS: Record<Nivel, Pregunta[]> = {
  tipos : [
    { valor: '42', opciones: ['float', 'int', 'long'], respuesta: 'int' },
    { valor: '3.1416', opciones: ['int', 'double', 'float'], respuesta: 'double' },
    { valor: '"Hola"', opciones: ['boolean', 'String', 'char'], respuesta: 'String' },
    { valor: "'A'", opciones: ['String', 'char', 'byte'], respuesta: 'char' },
    { valor: 'false', opciones: ['String', 'char', 'boolean'], respuesta: 'boolean' },
    { valor: '127', opciones: ['short', 'int', 'byte'], respuesta: 'byte' },
    { valor: '32000', opciones: ['long', 'short', 'int'], respuesta: 'short' },
    { valor: '100000', opciones: ['float', 'int', 'long'], respuesta: 'int' },
    { valor: '9223372036854775807', opciones: ['int', 'long', 'float'], respuesta: 'long' },
    { valor: 'Colección con tamaño fijo', opciones: ['Set', 'Array', 'List'], respuesta: 'Array' },
    { valor: 'Colección sin duplicados', opciones: ['Map', 'Set', 'List'], respuesta: 'Set' },
    { valor: 'Colección clave-valor', opciones: ['Set', 'Map', 'Array'], respuesta: 'Map' },
    { valor: 'Colección ordenada que admite duplicados', opciones: ['Map', 'Set', 'List'], respuesta: 'List' },
    { valor: '3.14f', opciones: ['double', 'int', 'float'], respuesta: 'float' },
    { valor: "'Z'", opciones: ['String', 'boolean', 'char'], respuesta: 'char' },
    { valor: 'true', opciones: ['boolean', 'String', 'int'], respuesta: 'boolean' },
    { valor: '0L', opciones: ['int', 'long', 'float'], respuesta: 'long' },
    { valor: '0.0', opciones: ['long', 'double', 'float'], respuesta: 'double' },
    { valor: 'Colección indexada con elementos duplicados', opciones: ['Set', 'List', 'Map'], respuesta: 'List' },
    { valor: 'Estructura que asocia claves con valores', opciones: ['List', 'Array', 'Map'], respuesta: 'Map' },
    { valor: 'Estructura que almacena referencias, tamaño fijo', opciones: ['List', 'Array', 'Set'], respuesta: 'Array' },
    { valor: 'Colección de elementos únicos, sin orden garantizado', opciones: ['List', 'Map', 'Set'], respuesta: 'Set' },
    { valor: '"Texto plano entre comillas dobles"', opciones: ['char', 'boolean', 'String'], respuesta: 'String' }
  ]
  ,
    constantes: [
      {
        valor: 'final int MAX = 10;',
        opciones: ['static', 'final', 'const'],
        respuesta: 'final'
      },
      {
        valor: '¿Qué palabra clave se usa para declarar una constante en Java?',
        opciones: ['immutable', 'const', 'final'],
        respuesta: 'final'
      },
      {
        valor: 'final String nombre = "Juan"; nombre = "Luis";',
        opciones: ['Funciona correctamente', 'Error de compilación', 'Devuelve null'],
        respuesta: 'Error de compilación'
      },
      {
        valor: '¿Se puede cambiar el valor de una variable `final`?',
        opciones: ['Solo una vez', 'Sí', 'No'],
        respuesta: 'No'
      },
      {
        valor: 'final int x; x = 5;',
        opciones: ['Solo si es static', 'Correcto si se asigna una sola vez', 'Incorrecto siempre'],
        respuesta: 'Correcto si se asigna una sola vez'
      },
      {
        valor: '¿Dónde se recomienda usar constantes?',
        opciones: ['Nunca', 'Solo en bucles', 'En valores que no cambian'],
        respuesta: 'En valores que no cambian'
      },
      {
        valor: 'final List<String> lista = new ArrayList<>(); lista.add("Java");',
        opciones: ['Error: lista es final', 'No se puede añadir', 'Compila y funciona'],
        respuesta: 'Compila y funciona'
      },
      {
        valor: 'final int A = 10; final int B = 20; int suma = A + B;',
        opciones: ['Error por constantes', 'Da null', 'Compila y suma 30'],
        respuesta: 'Compila y suma 30'
      },
      {
        valor: '¿Qué efecto tiene la palabra clave `final` en métodos?',
        opciones: ['Duplica ejecución', 'Hace que el método no compile', 'Evita sobreescritura'],
        respuesta: 'Evita sobreescritura'
      },
      {
        valor: '¿Qué significa `final` en una clase?',
        opciones: ['Es abstracta', 'No puede heredarse', 'Se ejecuta una vez'],
        respuesta: 'No puede heredarse'
      },
      {
        valor: 'final double PI = 3.1416;',
        opciones: ['Declara una variable', 'Declara una constante', 'Declara un método'],
        respuesta: 'Declara una constante'
      },
      {
        valor: '¿Qué ventaja tiene usar `final` en variables?',
        opciones: ['Hace más lento el programa', 'Claridad en código', 'Consume más memoria'],
        respuesta: 'Claridad en código'
      },
      {
        valor: 'final var edad = 25;',
        opciones: ['Solo en interfaces', 'Correcto en Java 10+', 'Incorrecto en Java'],
        respuesta: 'Correcto en Java 10+'
      },
      {
        valor: '¿Se puede declarar una constante sin valor inicial?',
        opciones: ['No, nunca', 'Sí, infinitas veces', 'Sí, pero debe asignarse una vez'],
        respuesta: 'Sí, pero debe asignarse una vez'
      },
      {
        valor: 'final int valor;',
        opciones: ['Es abstracto', 'Puede quedarse sin asignar', 'Debe inicializarse en el constructor'],
        respuesta: 'Debe inicializarse en el constructor'
      },
      {
        valor: '¿Cuál es el resultado de redeclarar una constante?',
        opciones: ['Suma su valor', 'Error de compilación', 'Duplica memoria'],
        respuesta: 'Error de compilación'
      },
      {
        valor: 'final static int MAX_USERS = 100;',
        opciones: ['Variable local', 'Constante estática', 'Método abstracto'],
        respuesta: 'Constante estática'
      },
      {
        valor: '¿Para qué sirve `final` en argumentos de método?',
        opciones: ['Duplica ejecución', 'Impide modificarlo', 'Convierte en static'],
        respuesta: 'Impide modificarlo'
      },
      {
        valor: '¿Qué significa inmutabilidad en Java?',
        opciones: ['Se ejecuta dos veces', 'Es estático siempre', 'No puede cambiar su estado'],
        respuesta: 'No puede cambiar su estado'
      },
      {
        valor: 'final String saludo = "Hola"; saludo = "Adiós";',
        opciones: ['Devuelve null', 'Compila y cambia', 'Error de compilación'],
        respuesta: 'Error de compilación'
      }
    ]
    
    
,
tipado : [
  {
    valor: '¿Qué tipo de tipado tiene Java?',
    opciones: ['Débil', 'Estático', 'Dinámico'],
    respuesta: 'Estático'
  },
  {
    valor: 'int numero = "10";',
    opciones: ['Devuelve null', 'Error de compilación', 'Correcto'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'var x = 10;',
    opciones: ['Error de compilación', 'Tipo inferido como int', 'Tipo string'],
    respuesta: 'Tipo inferido como int'
  },
  {
    valor: '¿Cuál es la ventaja del tipado estático?',
    opciones: ['Mayor uso de memoria', 'Detecta errores en tiempo de compilación', 'Mayor flexibilidad'],
    respuesta: 'Detecta errores en tiempo de compilación'
  },
  {
    valor: 'double d = 5;',
    opciones: ['Error: falta conversión', 'Correcto', 'Da null'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Cuál NO es un tipo primitivo en Java?',
    opciones: ['boolean', 'String', 'int'],
    respuesta: 'String'
  },
  {
    valor: 'String nombre = 123;',
    opciones: ['Correcto', 'Devuelve null', 'Error de compilación'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'boolean activo = true;',
    opciones: ['Falta el tipo', 'Correcto', 'Error: true no es booleano'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Qué tipo usarías para un número decimal muy preciso?',
    opciones: ['double', 'BigDecimal', 'float'],
    respuesta: 'BigDecimal'
  },
  {
    valor: '¿Qué ocurre si no especificas tipo y usas `var`?',
    opciones: ['Error siempre', 'El compilador lo infiere', 'Se convierte en String'],
    respuesta: 'El compilador lo infiere'
  },
  {
    valor: 'int edad = 25.5;',
    opciones: ['Correcto', 'Se convierte en String', 'Error de compilación'],
    respuesta: 'Error de compilación'
  },
  {
    valor: 'var saludo = "Hola";',
    opciones: ['Error de compilación', 'Tipo boolean', 'Tipo inferido como String'],
    respuesta: 'Tipo inferido como String'
  },
  {
    valor: 'boolean activo = "true";',
    opciones: ['Correcto', 'Error de compilación', 'Devuelve null'],
    respuesta: 'Error de compilación'
  },
  {
    valor: '¿Cómo es el tipado de Java?',
    opciones: ['Fuerte y estático', 'Solo dinámico', 'Débil y dinámico'],
    respuesta: 'Fuerte y estático'
  },
  {
    valor: 'int numero = 5 + 3;',
    opciones: ['Da null', 'Error de compilación', 'Correcto'],
    respuesta: 'Correcto'
  },
  {
    valor: 'String texto = "123";',
    opciones: ['Solo con cast', 'Correcto', 'Error de compilación'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Qué significa tipado fuerte?',
    opciones: ['Se evalúa en ejecución', 'Evita mezclas de tipos incompatibles', 'Permite cualquier tipo'],
    respuesta: 'Evita mezclas de tipos incompatibles'
  },
  {
    valor: 'var numero = 3.14;',
    opciones: ['Error de compilación', 'Tipo inferido como double', 'Tipo inferido como int'],
    respuesta: 'Tipo inferido como double'
  },
  {
    valor: '¿Cuál es el objetivo del tipado en Java?',
    opciones: ['Aumentar consumo de memoria', 'Prevenir errores en tiempo de compilación', 'Hacer el código más lento'],
    respuesta: 'Prevenir errores en tiempo de compilación'
  },
  {
    valor: '¿Qué ocurre si asignas un String a un int?',
    opciones: ['Compila sin problema', 'Devuelve null', 'Error de compilación'],
    respuesta: 'Error de compilación'
  }
]


,listas : [
  {
    valor: 'int[] numeros = {1, 2, 3}; ¿Cuál es el tipo?',
    opciones: ['Lista de enteros', 'Array de enteros', 'int'],
    respuesta: 'Array de enteros'
  },
  {
    valor: 'List<String> nombres = new ArrayList<>();',
    opciones: ['Error de compilación', 'Correcto', 'Falta tipo'],
    respuesta: 'Correcto'
  },
  {
    valor: '¿Cómo accedes al segundo elemento de un array?',
    opciones: ['array.get(1)', 'array[2]', 'array[1]'],
    respuesta: 'array[1]'
  },
  {
    valor: 'List<String> lista = new ArrayList<>(); lista.add("Java");',
    opciones: ['No compila', 'Agrega "Java"', 'Da error'],
    respuesta: 'Agrega "Java"'
  },
  {
    valor: '¿Qué devuelve `array.length`?',
    opciones: ['Nada', 'Número de elementos', 'Último valor'],
    respuesta: 'Número de elementos'
  },
  {
    valor: '¿Qué interfaz se usa para listas dinámicas?',
    opciones: ['Set', 'List', 'Array'],
    respuesta: 'List'
  },
  {
    valor: 'String[] nombres = new String[3];',
    opciones: ['No compila', 'Array con valores aleatorios', 'Array de 3 Strings vacíos'],
    respuesta: 'Array de 3 Strings vacíos'
  },
  {
    valor: '¿Qué hace `lista.get(0)` en una lista?',
    opciones: ['Agrega uno nuevo', 'Elimina el primer elemento', 'Devuelve el primer elemento'],
    respuesta: 'Devuelve el primer elemento'
  },
  {
    valor: '¿Qué método añade un elemento a una lista?',
    opciones: ['push()', 'insert()', 'add()'],
    respuesta: 'add()'
  },
  {
    valor: '¿Cuál NO es una implementación de List en Java?',
    opciones: ['LinkedList', 'HashSet', 'ArrayList'],
    respuesta: 'HashSet'
  },
  {
    valor: '¿Qué estructura tiene tamaño fijo?',
    opciones: ['List', 'Set', 'Array'],
    respuesta: 'Array'
  },
  {
    valor: '¿Cuál es una ventaja de List?',
    opciones: ['Más memoria', 'Tamaño dinámico', 'Tamaño fijo'],
    respuesta: 'Tamaño dinámico'
  },
  {
    valor: '¿Cómo declaras una lista vacía de enteros?',
    opciones: ['new Integer', 'new int[]', 'new ArrayList<Integer>()'], 
    respuesta: 'new ArrayList<Integer>()'
  },
  {
    valor: '¿Qué hace `lista.size()`?',
    opciones: ['Elimina la lista', 'Devuelve el último elemento', 'Devuelve el número de elementos'],
    respuesta: 'Devuelve el número de elementos'
  },
  {
    valor: 'int[] edades = new int[5]; edades[0] = 20;',
    opciones: ['Error de compilación', 'No se puede asignar', 'Correcto'],
    respuesta: 'Correcto'
  },
  {
    valor: 'List<String> nombres = Arrays.asList("Ana", "Luis");',
    opciones: ['Array vacío', 'Crea lista fija', 'Error de compilación'],
    respuesta: 'Crea lista fija'
  },
  {
    valor: '¿Qué pasa si accedes a un índice fuera de rango en un array?',
    opciones: ['Devuelve null', 'Error en tiempo de ejecución', 'Ignora la operación'],
    respuesta: 'Error en tiempo de ejecución'
  },
  {
    valor: 'lista.remove(0);',
    opciones: ['Agrega al final', 'Devuelve tamaño', 'Elimina el primer elemento'],
    respuesta: 'Elimina el primer elemento'
  },
  {
    valor: '¿Qué método revisa si un elemento está en una lista?',
    opciones: ['push()', 'contains()', 'get()'],
    respuesta: 'contains()'
  },
  {
    valor: '¿Qué estructura NO permite duplicados?',
    opciones: ['List', 'Array', 'Set'],
    respuesta: 'Set'
  }
]


,
por_defecto :[
  {
    valor: '¿Cuál es el valor por defecto de un `int` en Java?',
    opciones: ['null', '0', 'undefined'],
    respuesta: '0'
  },
  {
    valor: '¿Cuál es el valor por defecto de un `boolean`?',
    opciones: ['true', 'null', 'false'],
    respuesta: 'false'
  },
  {
    valor: '¿Qué devuelve una referencia a un objeto no inicializado?',
    opciones: ['0', 'null', 'undefined'],
    respuesta: 'null'
  },
  {
    valor: '¿Cuál es el valor por defecto de un `double`?',
    opciones: ['NaN', 'null', '0.0'],
    respuesta: '0.0'
  },
  {
    valor: '¿Qué valor por defecto tiene una variable `String` no inicializada?',
    opciones: ['Error de compilación', '"" (cadena vacía)', 'null'],
    respuesta: 'null'
  },
  {
    valor: '¿Qué valor tiene un array de boolean al crearlo sin inicializar?',
    opciones: ['true en todas las posiciones', 'false en todas las posiciones', 'null'],
    respuesta: 'false en todas las posiciones'
  },
  {
    valor: '¿Cuál es el valor por defecto de una variable `char`?',
    opciones: ['‘ ‘ (espacio en blanco)', '\u0000', 'null'],
    respuesta: '\u0000'
  },
  {
    valor: '¿Qué ocurre si accedes a una variable de instancia no inicializada?',
    opciones: ['Da error de compilación', 'Toma su valor por defecto', 'Da undefined'],
    respuesta: 'Toma su valor por defecto'
  },
  {
    valor: '¿Los valores por defecto se aplican a variables locales?',
    opciones: ['Solo en arrays', 'Sí, como en atributos', 'No, deben inicializarse'],
    respuesta: 'No, deben inicializarse'
  },
  {
    valor: '¿Qué valor por defecto tiene una variable `long`?',
    opciones: ['null', '0.0', '0L'],
    respuesta: '0L'
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo de tipo float?',
    opciones: ['null', 'NaN', '0.0f'],
    respuesta: '0.0f'
  },
  {
    valor: '¿Cuál es el valor por defecto de un atributo de tipo byte?',
    opciones: ['1', 'null', '0'],
    respuesta: '0'
  },
  {
    valor: '¿Qué valor por defecto tiene un array de int?',
    opciones: ['null', '0 en todas las posiciones', '1 en todas las posiciones'],
    respuesta: '0 en todas las posiciones'
  },
  {
    valor: '¿Qué sucede si intentas usar una variable local sin inicializar?',
    opciones: ['Devuelve null', 'Error de compilación', 'Se llena con 0'],
    respuesta: 'Error de compilación'
  },
  {
    valor: '¿Dónde se asignan valores por defecto automáticamente?',
    opciones: ['En variables locales', 'En atributos de instancia', 'En parámetros de métodos'],
    respuesta: 'En atributos de instancia'
  },
  {
    valor: '¿Cuál es el valor por defecto de un array de objetos?',
    opciones: ['Cadena vacía', '0 en todas las posiciones', 'null en todas las posiciones'],
    respuesta: 'null en todas las posiciones'
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo short?',
    opciones: ['null', '0.0', '0'],
    respuesta: '0'
  },
  {
    valor: '¿Cuál es el valor por defecto para referencias de clases?',
    opciones: ['"" (vacío)', '0', 'null'],
    respuesta: 'null'
  },
  {
    valor: '¿Qué valor por defecto tiene un atributo boolean en una clase?',
    opciones: ['true', 'null', 'false'],
    respuesta: 'false'
  },
  {
    valor: '¿Cuál es la diferencia entre variables locales y atributos respecto a valores por defecto?',
    opciones: ['Locales son siempre 0', 'Locales requieren inicialización', 'Locales tienen null'],
    respuesta: 'Locales requieren inicialización'
  }
]

,  operadores : [
  {
    valor: '5 + 3',
    opciones: ['Operador lógico', 'Operador aritmético', 'Operador relacional'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a && b',
    opciones: ['Operador relacional', 'Operador aritmético', 'Operador lógico'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'x > y',
    opciones: ['Operador aritmético', 'Operador relacional', 'Operador lógico'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'condicion ? valor1 : valor2',
    opciones: ['Operador lógico', 'Operador relacional', 'Operador ternario'],
    respuesta: 'Operador ternario'
  },
  {
    valor: 'a == b',
    opciones: ['Operador lógico', 'Operador relacional', 'Operador aritmético'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'a || b',
    opciones: ['Operador lógico', 'Operador aritmético', 'Operador relacional'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'a * b',
    opciones: ['Operador relacional', 'Operador aritmético', 'Operador lógico'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a != b',
    opciones: ['Operador lógico', 'Operador aritmético', 'Operador relacional'],
    respuesta: 'Operador relacional'
  },
  {
    valor: '++a',
    opciones: ['Relacional', 'Incremento', 'Decremento'],
    respuesta: 'Incremento'
  },
  {
    valor: '--b',
    opciones: ['Lógico', 'Decremento', 'Aritmético'],
    respuesta: 'Decremento'
  },
  {
    valor: 'a += 5;',
    opciones: ['Relacional', 'Asignación compuesta', 'Operador lógico'],
    respuesta: 'Asignación compuesta'
  },
  {
    valor: 'a / b',
    opciones: ['Operador lógico', 'Operador aritmético', 'Operador relacional'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: 'a <= b',
    opciones: ['Aritmético', 'Operador lógico', 'Operador relacional'],
    respuesta: 'Operador relacional'
  },
  {
    valor: 'a % b',
    opciones: ['Operador ternario', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador aritmético'
  },
  {
    valor: '!(a > b)',
    opciones: ['Operador relacional', 'Operador lógico', 'Operador aritmético'],
    respuesta: 'Operador lógico'
  },
  {
    valor: 'a = b;',
    opciones: ['Operador lógico', 'Comparación', 'Asignación'],
    respuesta: 'Asignación'
  },
  {
    valor: 'Prioridad de operadores',
    opciones: ['Elimina variables', 'Evita errores de compilación', 'Define orden de evaluación'],
    respuesta: 'Define orden de evaluación'
  },
  {
    valor: '¿Qué hace el operador "=="?',
    opciones: ['Concatena cadenas', 'Compara valores', 'Asigna valor'],
    respuesta: 'Compara valores'
  },
  {
    valor: 'a < b ? x : y',
    opciones: ['Operador aritmético', 'Operador ternario', 'Operador lógico'],
    respuesta: 'Operador ternario'
  },
  {
    valor: 'a & b',
    opciones: ['Operador relacional', 'Operador lógico AND bit a bit', 'Operador ternario'],
    respuesta: 'Operador lógico AND bit a bit'
  }
],
condicionales : [
  {
    valor: '¿Qué permite hacer una estructura condicional?',
    opciones: ['Repetir código varias veces', 'Tomar decisiones en el código', 'Declarar variables'],
    respuesta: 'Tomar decisiones en el código'
  },
  {
    valor: '¿Qué palabra clave inicia una condición en Java?',
    opciones: ['else', 'switch', 'if'],
    respuesta: 'if'
  },
  {
    valor: '¿Qué palabra se usa para indicar el camino alternativo si la condición no se cumple?',
    opciones: ['else', 'if', 'for'],
    respuesta: 'else'
  },
  {
    valor: 'if (edad >= 18) { ... } else { ... }',
    opciones: ['Estructura condicional', 'Bucle infinito', 'Método abstracto'],
    respuesta: 'Estructura condicional'
  },
  {
    valor: '¿Qué hace else if en Java?',
    opciones: ['Permite múltiples condiciones', 'Declara variables', 'Termina el programa'],
    respuesta: 'Permite múltiples condiciones'
  },
  {
    valor: '¿Qué evalúa un if?',
    opciones: ['Una condición booleana', 'Un método', 'Un bucle'],
    respuesta: 'Una condición booleana'
  },
  {
    valor: 'if (cuentaActiva && edad >= 18) { ... }',
    opciones: ['Ejecuta si ambas condiciones son verdaderas', 'Se ejecuta siempre', 'Genera error'],
    respuesta: 'Ejecuta si ambas condiciones son verdaderas'
  },
  {
    valor: 'else if se usa para...',
    opciones: ['Evitar errores', 'Agregar condiciones adicionales', 'Cerrar el programa'],
    respuesta: 'Agregar condiciones adicionales'
  },
  {
    valor: 'En Java, if siempre requiere:',
    opciones: ['Una condición booleana', 'Un bucle for', 'Un constructor'],
    respuesta: 'Una condición booleana'
  },
  {
    valor: 'if / else permite:',
    opciones: ['Decidir entre dos caminos', 'Crear arrays', 'Inicializar variables'],
    respuesta: 'Decidir entre dos caminos'
  },
  {
    valor: '¿Cuál es la forma básica de un if?',
    opciones: ['if { condición }', 'if (condición) { bloque }', 'if condición then'],
    respuesta: 'if (condición) { bloque }'
  },
  {
    valor: 'else if permite:',
    opciones: ['Más de dos opciones', 'Repetir código', 'Salir del programa'],
    respuesta: 'Más de dos opciones'
  },
  {
    valor: 'En if / else el flujo de control es...',
    opciones: ['Secuencial', 'Basado en condiciones', 'Siempre repetitivo'],
    respuesta: 'Basado en condiciones'
  },
  {
    valor: 'Un if anidado es...',
    opciones: ['Un bucle infinito', 'Un if dentro de otro if', 'Una variable final'],
    respuesta: 'Un if dentro de otro if'
  },
  {
    valor: 'else if es útil cuando...',
    opciones: ['Hay más de dos condiciones', 'Solo hay una opción', 'No hay condiciones'],
    respuesta: 'Hay más de dos condiciones'
  },
  {
    valor: 'if / else es...',
    opciones: ['Un bucle', 'Un tipo de dato', 'Una estructura de control'],
    respuesta: 'Una estructura de control'
  },
  {
    valor: '¿Qué tipo de valor devuelve la condición en if?',
    opciones: ['int', 'boolean', 'String'],
    respuesta: 'boolean'
  },
  {
    valor: 'if (activo) { ... } else { ... }',
    opciones: ['Evalúa la variable activo', 'Crea un objeto', 'Llama a un método'],
    respuesta: 'Evalúa la variable activo'
  },
  {
    valor: '¿Para qué sirve else?',
    opciones: ['Ejecutar si if es falso', 'Definir variables', 'Importar clases'],
    respuesta: 'Ejecutar si if es falso'
  },
  {
    valor: 'if / else if / else permite:',
    opciones: ['Múltiples caminos', 'Solo un camino', 'Sin condiciones'],
    respuesta: 'Múltiples caminos'
  }
],
bucles : [
  {
    valor: '¿Qué es un bucle?',
    opciones: ['Repetir un bloque de código', 'Declarar variables', 'Eliminar clases'],
    respuesta: 'Repetir un bloque de código'
  },
  {
    valor: '¿Qué hace el bucle for?',
    opciones: ['Repite con inicio, condición y aumento', 'Detiene el programa', 'Declara métodos'],
    respuesta: 'Repite con inicio, condición y aumento'
  },
  {
    valor: 'for (int i=0; i<5; i++)',
    opciones: ['Bucle for', 'Condicional', 'Clase abstracta'],
    respuesta: 'Bucle for'
  },
  {
    valor: '¿Qué evalúa el while?',
    opciones: ['Condición antes de ejecutar', 'Condición después de ejecutar', 'Nada'],
    respuesta: 'Condición antes de ejecutar'
  },
  {
    valor: '¿Qué evalúa do-while?',
    opciones: ['Condición antes de ejecutar', 'Nunca evalúa condición', 'Condición después de ejecutar'],
    respuesta: 'Condición después de ejecutar'
  },
  {
    valor: 'while (condición) { ... }',
    opciones: ['Bucle que puede no ejecutarse', 'Siempre se ejecuta', 'Cierra el programa'],
    respuesta: 'Bucle que puede no ejecutarse'
  },
  {
    valor: 'do { ... } while (condición);',
    opciones: ['Evalúa antes de entrar', 'Se ejecuta al menos una vez', 'No se ejecuta nunca'],
    respuesta: 'Se ejecuta al menos una vez'
  },
  {
    valor: '¿Qué es un bucle infinito?',
    opciones: ['Termina siempre', 'Nunca se detiene', 'Solo if else'],
    respuesta: 'Nunca se detiene'
  },
  {
    valor: '¿Cómo evitar bucle infinito en while?',
    opciones: ['Usar break', 'No usar condiciones', 'Declarar final'],
    respuesta: 'Usar break'
  },
  {
    valor: '¿Qué es for-each?',
    opciones: ['Recorre colecciones sin índice', 'Solo para enteros', 'Declara clases'],
    respuesta: 'Recorre colecciones sin índice'
  },
  {
    valor: '¿Para qué sirve el contador en for?',
    opciones: ['Condición booleana', 'Controlar iteraciones', 'Declarar variables'],
    respuesta: 'Controlar iteraciones'
  },
  {
    valor: 'while se usa cuando...',
    opciones: ['Sabemos el límite', 'No sabemos cuántas veces', 'Declaramos métodos'],
    respuesta: 'No sabemos cuántas veces'
  },
  {
    valor: 'for es como...',
    opciones: ['Lavadora', 'Ascensor', 'Puerta'],
    respuesta: 'Ascensor'
  },
  {
    valor: 'while es como...',
    opciones: ['Lavadora', 'Ascensor', 'Puerta giratoria'],
    respuesta: 'Lavadora'
  },
  {
    valor: 'for-each es ideal para...',
    opciones: ['Índices exactos', 'Recorrer arrays', 'Operadores ternarios'],
    respuesta: 'Recorrer arrays'
  },
  {
    valor: '¿Qué significa break?',
    opciones: ['Termina el bucle', 'Empieza bucle', 'Declara variable'],
    respuesta: 'Termina el bucle'
  },
  {
    valor: 'for (int i=0; i<10; i++)',
    opciones: ['Inicio-condición-incremento', 'Condición-booleana', 'Declaración-final'],
    respuesta: 'Inicio-condición-incremento'
  },
  {
    valor: 'while (true) { ... }',
    opciones: ['Bucle infinito', 'Condicional único', 'Clase abstracta'],
    respuesta: 'Bucle infinito'
  },
  {
    valor: 'do-while garantiza...',
    opciones: ['Que no se ejecute nunca', 'Al menos una ejecución', 'Solo condiciones falsas'],
    respuesta: 'Al menos una ejecución'
  },
  {
    valor: 'for-each se usa para...',
    opciones: ['Declarar variables', 'Recorrer colecciones', 'Definir clases'],
    respuesta: 'Recorrer colecciones'
  }
],
metodos : [
  {
    valor: '¿Qué es un método en Java?',
    opciones: ['Una estructura de control', 'Un bloque de código reutilizable', 'Un tipo de dato'],
    respuesta: 'Un bloque de código reutilizable'
  },
  {
    valor: '¿Para qué sirve un método?',
    opciones: ['Organizar y reutilizar código', 'Compilar clases', 'Crear bucles infinitos'],
    respuesta: 'Organizar y reutilizar código'
  },
  {
    valor: '¿Qué indica el modificador static?',
    opciones: ['Pertenece a la clase', 'Siempre es privado', 'Se ejecuta en bucle'],
    respuesta: 'Pertenece a la clase'
  },
  {
    valor: 'public void saludar() { ... }',
    opciones: ['Método sin retorno', 'Bucle infinito', 'Variable local'],
    respuesta: 'Método sin retorno'
  },
  {
    valor: '¿Qué significa el tipo de retorno void?',
    opciones: ['Devuelve un valor', 'No devuelve nada', 'Es privado'],
    respuesta: 'No devuelve nada'
  },
  {
    valor: '¿Qué son los parámetros de un método?',
    opciones: ['Variables locales', 'Valores que recibe', 'Clases abstractas'],
    respuesta: 'Valores que recibe'
  },
  {
    valor: '¿Cómo se llama a un método en Java?',
    opciones: ['Usando su nombre y paréntesis', 'Declarando un bucle', 'Creando una clase'],
    respuesta: 'Usando su nombre y paréntesis'
  },
  {
    valor: 'int sumar(int a, int b) { return a + b; }',
    opciones: ['Método sin retorno', 'Método con parámetros y retorno', 'Variable global'],
    respuesta: 'Método con parámetros y retorno'
  },
  {
    valor: '¿Qué es un argumento?',
    opciones: ['El valor pasado al llamar al método', 'El nombre del método', 'El modificador de acceso'],
    respuesta: 'El valor pasado al llamar al método'
  },
  {
    valor: 'private void limpiar() { ... }',
    opciones: ['Método privado', 'Variable estática', 'Clase abstracta'],
    respuesta: 'Método privado'
  },
  {
    valor: '¿Qué hace return en un método?',
    opciones: ['Detiene el programa', 'Devuelve un valor', 'Inicia un bucle'],
    respuesta: 'Devuelve un valor'
  },
  {
    valor: 'public static void main(String[] args)',
    opciones: ['Método principal', 'Bucle while', 'Clase abstracta'],
    respuesta: 'Método principal'
  },
  {
    valor: '¿Qué significa tener parámetros?',
    opciones: ['No devuelve nada', 'Recibe valores al ser llamado', 'Es siempre estático'],
    respuesta: 'Recibe valores al ser llamado'
  },
  {
    valor: 'Método con return:',
    opciones: ['Devuelve un valor', 'Es siempre privado', 'Es un bucle infinito'],
    respuesta: 'Devuelve un valor'
  },
  {
    valor: 'Método con void:',
    opciones: ['No devuelve nada', 'Siempre devuelve int', 'Es abstracto'],
    respuesta: 'No devuelve nada'
  },
  {
    valor: '¿Qué es buena práctica al nombrar métodos?',
    opciones: ['Usar nombres claros y descriptivos', 'Usar solo letras mayúsculas', 'Evitar nombres largos'],
    respuesta: 'Usar nombres claros y descriptivos'
  },
  {
    valor: '¿Qué es un método con propósito único?',
    opciones: ['Hace muchas tareas', 'Solo tiene una responsabilidad', 'Es siempre estático'],
    respuesta: 'Solo tiene una responsabilidad'
  },
  {
    valor: '¿Qué es un modificador de acceso?',
    opciones: ['Define visibilidad', 'Declara arrays', 'Crea bucles'],
    respuesta: 'Define visibilidad'
  },
  {
    valor: 'public int getEdad() { return edad; }',
    opciones: ['Devuelve un valor', 'No devuelve nada', 'Es abstracto'],
    respuesta: 'Devuelve un valor'
  },
  {
    valor: '¿Para qué sirve un método en Java?',
    opciones: ['Reutilizar código', 'Crear variables locales', 'Compilar sin errores'],
    respuesta: 'Reutilizar código'
  }
]




  };

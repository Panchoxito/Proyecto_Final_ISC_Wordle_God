var db = new Dexie("WordleDB");
db.version(1).stores({
  partida: "id, palabraSecreta, longitudPalabra, intentoActual, filaActiva, intentos, modo"
});
var usadasFacil = [];
var usadasIntermedio = [];
var usadasDios = [];
var pista = "";


var palabrasFacil = [
        { palabra: "plaza", pista: "Lugar público en una ciudad" },
        { palabra: "silla", pista: "Objeto para sentarse" },
        { palabra: "campo", pista: "Lugar abierto, normalmente rural" },
        { palabra: "perro", pista: "Animal doméstico muy leal" },
        { palabra: "raton", pista: "Roedor pequeño, también usado en computadoras" },
        { palabra: "cielo", pista: "Espacio azul sobre nosotros" },
        { palabra: "sol", pista: "Estrella que ilumina la Tierra" },
        { palabra: "luna", pista: "Satélite natural de la Tierra" },
        { palabra: "flor", pista: "Parte colorida de una planta" },
        { palabra: "pez", pista: "Animal que vive en el agua" },
        { palabra: "pan", pista: "Alimento básico hecho con harina" },
        { palabra: "leche", pista: "Líquido blanco producido por vacas" },
        { palabra: "pato", pista: "Ave que nada y hace cuac" },
        { palabra: "tren", pista: "Medio de transporte sobre rieles" },
        { palabra: "mano", pista: "Parte del cuerpo con cinco dedos" },
        { palabra: "gato", pista: "Animal doméstico que maúlla" },
        { palabra: "niño", pista: "Persona de corta edad" },
        { palabra: "carro", pista: "Vehículo con cuatro ruedas" },
        { palabra: "puerta", pista: "Elemento que se abre y cierra para entrar" },
        { palabra: "mesa", pista: "Superficie para comer o trabajar" },
        { palabra: "vaso", pista: "Recipiente para bebidas frías" },
        { palabra: "lago", pista: "Cuerpo de agua rodeado de tierra" },
        { palabra: "rio", pista: "Corriente natural de agua" },
        { palabra: "taza", pista: "Recipiente para tomar líquidos calientes" },
        { palabra: "huevo", pista: "Producto de gallina" },
        { palabra: "cama", pista: "Lugar donde se duerme" },
        { palabra: "piso", pista: "Superficie sobre la que se camina" },
        { palabra: "pared", pista: "Superficie vertical que delimita espacios" },
        { palabra: "libro", pista: "Objeto con páginas que se puede leer" },
        { palabra: "hoja", pista: "Parte verde de una planta" },
        { palabra: "copa", pista: "Vaso con pie para bebidas" },
        { palabra: "tela", pista: "Material usado para hacer ropa" },
        { palabra: "lápiz", pista: "Se usa para escribir y borrar" },
        { palabra: "tiza", pista: "Se usa para escribir en pizarras" },
        { palabra: "pila", pista: "Fuente de energía portátil" },
        { palabra: "foco", pista: "Emite luz artificial" },
        { palabra: "llave", pista: "Sirve para abrir cerraduras" },
        { palabra: "duro", pista: "Contrario a blando" },
        { palabra: "blusa", pista: "Prenda femenina para el torso" },
        { palabra: "calor", pista: "Sensación térmica alta" },
        { palabra: "frío", pista: "Sensación térmica baja" },
        { palabra: "día", pista: "Periodo con luz solar" },
        { palabra: "nube", pista: "Masa de vapor en el cielo" },
        { palabra: "rosa", pista: "Tipo de flor y color" },
        { palabra: "verde", pista: "Color de la hierba" },
        { palabra: "azul", pista: "Color del cielo despejado" },
        { palabra: "rojo", pista: "Color de una manzana madura" },
        { palabra: "tren", pista: "Vehículo largo sobre rieles" },
        { palabra: "luz", pista: "Hace visibles los objetos" },
        { palabra: "caja", pista: "Contenedor con tapa" },
        { palabra: "lobo", pista: "Animal salvaje parecido a un perro" },
        { palabra: "oso", pista: "Animal grande y peludo" },
        { palabra: "puma", pista: "Felino ágil y veloz" },
        { palabra: "rata", pista: "Roedor que vive en ciudades" },
        { palabra: "coco", pista: "Fruto tropical con agua" },
        { palabra: "lima", pista: "Fruta verde y ácida" },
        { palabra: "moto", pista: "Vehículo de dos ruedas" },
        { palabra: "bote", pista: "Embarcación pequeña" },
        { palabra: "sapo", pista: "Amfibio que salta" },
        { palabra: "rana", pista: "Animal que croa" },
        { palabra: "vida", pista: "Estado de estar vivo" },
        { palabra: "amor", pista: "Sentimiento de afecto fuerte" },
        { palabra: "codo", pista: "Parte del brazo que se dobla" },
        { palabra: "pie", pista: "Parte inferior del cuerpo" },
        { palabra: "ojo", pista: "Órgano de la vista" },
        { palabra: "cara", pista: "Parte frontal de la cabeza" },
        { palabra: "pelo", pista: "Cubre la cabeza" },
        { palabra: "ceja", pista: "Vello sobre el ojo" },
        { palabra: "barba", pista: "Vello facial en los hombres" },
        { palabra: "dado", pista: "Cubo con números para juegos" },
        { palabra: "lodo", pista: "Mezcla de tierra y agua" },
        { palabra: "palo", pista: "Trozo largo de madera" },
        { palabra: "vela", pista: "Se enciende para dar luz" },
        { palabra: "arpa", pista: "Instrumento musical de cuerdas" },
        { palabra: "bajo", pista: "Contrario de alto" },
        { palabra: "alto", pista: "Contrario de bajo" },
        { palabra: "vino", pista: "Bebida alcohólica de uvas" },
        { palabra: "dama", pista: "Mujer elegante o juego de mesa" },
        { palabra: "rey", pista: "Monarca masculino" },
        { palabra: "rey", pista: "Figura de ajedrez importante" },
        { palabra: "mesa", pista: "Objeto para comer o trabajar" },
        { palabra: "hilo", pista: "Se usa para coser" },
        { palabra: "lana", pista: "Fibra que proviene de ovejas" },
        { palabra: "papa", pista: "Tubo comestible que crece bajo tierra" },
        { palabra: "lata", pista: "Contenedor metálico para bebidas o comida" },
        { palabra: "yema", pista: "Parte amarilla del huevo" },
        { palabra: "cima", pista: "Parte más alta de una montaña" },
        { palabra: "roca", pista: "Piedra muy grande" },
        { palabra: "nido", pista: "Donde viven los pájaros" },
        { palabra: "pico", pista: "Parte dura delantera de un ave" },
        { palabra: "cola", pista: "Extremidad trasera de animales" },
        { palabra: "boca", pista: "Parte para comer y hablar" },
        { palabra: "diente", pista: "Sirve para masticar" },
        { palabra: "brazo", pista: "Extremidad superior del cuerpo" },
        { palabra: "uñas", pista: "Cubren las puntas de los dedos" },
        { palabra: "cuna", pista: "Cama para bebés" },
        { palabra: "reja", pista: "Barrotes que protegen ventanas" },
        { palabra: "pico", pista: "Parte afilada del ave" }
      ];
      
  
      var palabrasIntermedio = [

        { palabra: "caminar", pista: "Moverse a pie" },
      
        { palabra: "pantano", pista: "Terreno húmedo con agua estancada" },
      
        { palabra: "botella", pista: "Recipiente para líquidos" },
      
        { palabra: "ventana", pista: "Abertura para mirar al exterior" },
      
        { palabra: "zapatos", pista: "Prenda para los pies" },
      
        { palabra: "abrigos", pista: "Prendas gruesas para el frío" },
      
        { palabra: "amables", pista: "Personas con buen trato" },
      
        { palabra: "apuntar", pista: "Señalar o dirigir algo" },
      
        { palabra: "aviones", pista: "Medios de transporte aéreo" },
      
        { palabra: "brazada", pista: "Movimiento al nadar" },
      
        { palabra: "caballo", pista: "Animal usado para montar" },
      
        { palabra: "cadenas", pista: "Conjunto de eslabones" },
      
        { palabra: "camarón", pista: "Pequeño crustáceo marino" },
      
        { palabra: "cantaré", pista: "Acción futura de cantar" },
      
        { palabra: "cartero", pista: "Persona que reparte cartas" },
      
        { palabra: "cerrado", pista: "No está abierto" },
      
        { palabra: "chismes", pista: "Rumores o cuentos" },
      
        { palabra: "clasear", pista: "Asignar una categoría" },
      
        { palabra: "colores", pista: "Percepción visual como rojo, azul..." },
      
        { palabra: "cometas", pista: "Juguetes que vuelan con el viento" },
      
        { palabra: "coserán", pista: "Unir con hilo en futuro" },
      
        { palabra: "creador", pista: "Quien crea algo" },
      
        { palabra: "cubiertos", pista: "Tenedores, cuchillos y cucharas" },
      
        { palabra: "cuevano", pista: "Cesto grande para cargar cosas" },
      
        { palabra: "curioso", pista: "Que desea saber cosas" },
      
        { palabra: "dedicar", pista: "Ofrecer tiempo o esfuerzo a algo" },
      
        { palabra: "desfile", pista: "Marcha organizada en público" },
      
        { palabra: "dibujar", pista: "Trazar imágenes con lápiz o tinta" },
      
        { palabra: "diseñar", pista: "Crear un plan visual" },
      
        { palabra: "docente", pista: "Persona que enseña" },
      
        { palabra: "dulzura", pista: "Sabor o carácter agradable" },
      
        { palabra: "esferas", pista: "Figuras redondas como pelotas" },
      
        { palabra: "estudio", pista: "Acción de aprender" },
      
        { palabra: "fantasma", pista: "Espíritu imaginario o de cuentos" },
      
        { palabra: "felices", pista: "Personas que sienten alegría" },
      
        { palabra: "fiestas", pista: "Celebraciones con alegría" },
      
        { palabra: "galería", pista: "Lugar de exposición de arte" },
      
        { palabra: "gaviota", pista: "Ave marina" },
      
        { palabra: "gigante", pista: "Muy grande" },
      
        { palabra: "guitarra", pista: "Instrumento musical de cuerdas" },
      
        { palabra: "héroe", pista: "Persona admirada por su valentía" },
      
        { palabra: "hogares", pista: "Casas donde se vive" },
      
        { palabra: "hornear", pista: "Cocinar en horno" },
      
        { palabra: "igualar", pista: "Hacer que dos cosas sean iguales" },
      
        { palabra: "invitar", pista: "Pedir a alguien que asista" },
      
        { palabra: "juguete", pista: "Objeto para jugar" },
      
        { palabra: "ladrón", pista: "Persona que roba" },
      
        { palabra: "lavarse", pista: "Limpiarse con agua y jabón" },
      
        { palabra: "lectura", pista: "Acción de leer" },
      
        { palabra: "limones", pista: "Frutas amarillas y ácidas" },
      
        { palabra: "lluvias", pista: "Caída de agua desde el cielo" },
      
        { palabra: "maletas", pista: "Equipaje para viajes" },
      
        { palabra: "mantas", pista: "Cobijas para cubrirse" },
      
        { palabra: "marinos", pista: "Relacionados con el mar" },
      
        { palabra: "mentira", pista: "Falsedad intencional" },
      
        { palabra: "meseros", pista: "Personas que atienden en restaurantes" },
      
        { palabra: "militar", pista: "Relacionado con el ejército" },
      
        { palabra: "mirador", pista: "Lugar alto para observar" },
      
        { palabra: "montaña", pista: "Elevación natural del terreno" },
      
        { palabra: "morenas", pista: "De piel o cabello oscuro" },
      
        { palabra: "naranja", pista: "Fruta o color" },
      
        { palabra: "narrar", pista: "Contar una historia" },
      
        { palabra: "nevará", pista: "Caerá nieve en el futuro" },
      
        { palabra: "niñera", pista: "Persona que cuida niños" },
      
        { palabra: "nombres", pista: "Identificadores personales" },
      
        { palabra: "observar", pista: "Mirar con atención" },
      
        { palabra: "palmera", pista: "Árbol tropical" },
      
        { palabra: "paredes", pista: "Estructuras verticales en un edificio" },
      
        { palabra: "pastel", pista: "Postre dulce y esponjoso" },
      
        { palabra: "patinar", pista: "Deslizarse con patines" },
      
        { palabra: "pelotas", pista: "Esferas usadas para jugar" },
      
        { palabra: "pescar", pista: "Capturar peces" },
      
        { palabra: "pintura", pista: "Obra hecha con colores" },
      
        { palabra: "pizarra", pista: "Superficie donde se escribe con tiza" },
      
        { palabra: "planear", pista: "Organizar con anticipación" },
      
        { palabra: "plumas", pista: "Cubren a las aves" },
      
        { palabra: "prestar", pista: "Dar algo temporalmente" },
      
        { palabra: "probar", pista: "Intentar o degustar" },
      
        { palabra: "querida", pista: "Persona amada" },
      
        { palabra: "rayados", pista: "Con líneas" },
      
        { palabra: "recoger", pista: "Levantar algo del suelo" },
      
        { palabra: "regalos", pista: "Obsequios" },
      
        { palabra: "remar", pista: "Mover una barca con remos" },
      
        { palabra: "repollo", pista: "Verdura de hojas verdes" },
      
        { palabra: "rescate", pista: "Acción de salvar a alguien" },
      
        { palabra: "retocar", pista: "Hacer ajustes o mejoras" },
      
        { palabra: "rompecabezas", pista: "Juego de piezas para armar" },
      
        { palabra: "saludar", pista: "Dar la bienvenida" },
      
        { palabra: "semilla", pista: "De ahí nace una planta" },
      
        { palabra: "siembra", pista: "Acción de plantar" },
      
        { palabra: "sirenas", pista: "Criaturas mitológicas o alarmas" },
      
        { palabra: "surtido", pista: "Variado" },
      
        { palabra: "tejedas", pista: "Hechas con hilo entrelazado" },
      
        { palabra: "temblor", pista: "Movimiento de la tierra" },
      
        { palabra: "tiendas", pista: "Lugares para comprar cosas" },
      
        { palabra: "tijeras", pista: "Herramienta para cortar" },
      
        { palabra: "tocaré", pista: "Acción futura de tocar" },
      
        { palabra: "tomates", pista: "Frutas rojas usadas en ensaladas" },
      
        { palabra: "trabajo", pista: "Actividad laboral" },
      
        { palabra: "travesía", pista: "Viaje largo o difícil" },
      
        { palabra: "verdura", pista: "Alimento vegetal comestible" },
      
        { palabra: "volando", pista: "En el aire" },
      
        { palabra: "zapatero", pista: "Oficio de quien repara calzado" }
      
      ];
  
      var palabrasDios = [
        { palabra: "aerobics", pista: "Ejercicio físico con música" },
        { palabra: "alquimia", pista: "Antigua práctica precursora de la química" },
        { palabra: "ambición", pista: "Deseo intenso de lograr algo" },
        { palabra: "analista", pista: "Persona que examina algo con detalle" },
        { palabra: "anémona", pista: "Animal marino con tentáculos" },
        { palabra: "antílope", pista: "Animal veloz con cuernos" },
        { palabra: "apetitos", pista: "Deseos de comer" },
        { palabra: "arrogante", pista: "Altanero o soberbio" },
        { palabra: "astral", pista: "Relacionado con las estrellas" },
        { palabra: "autónomo", pista: "Que trabaja por su cuenta" },
        { palabra: "azulejos", pista: "Baldosas decorativas" },
        { palabra: "baluarte", pista: "Fortaleza defensiva" },
        { palabra: "biblioteca", pista: "Lugar donde hay libros" },
        { palabra: "bizarro", pista: "Valiente o extravagante" },
        { palabra: "cabriola", pista: "Salto acrobático" },
        { palabra: "calabaza", pista: "Fruto naranja de otoño" },
        { palabra: "caligramas", pista: "Poemas con forma visual" },
        { palabra: "carismas", pista: "Atractivos personales" },
        { palabra: "catacumba", pista: "Antiguo cementerio subterráneo" },
        { palabra: "ceniceros", pista: "Recipientes para ceniza" },
        { palabra: "chistera", pista: "Sombrero de copa" },
        { palabra: "claridad", pista: "Falta de oscuridad o confusión" },
        { palabra: "coliseos", pista: "Antiguas arenas de espectáculos" },
        { palabra: "conjugar", pista: "Variar un verbo por tiempo" },
        { palabra: "cruceros", pista: "Barcos grandes de turismo" },
        { palabra: "cuervos", pista: "Aves negras, símbolo de misterio" },
        { palabra: "cúpulas", pista: "Techos redondeados de iglesias" },
        { palabra: "decretos", pista: "Mandatos oficiales" },
        { palabra: "derroche", pista: "Gasto excesivo" },
        { palabra: "desenlace", pista: "Final de una historia" },
        { palabra: "dificil", pista: "No fácil de hacer o lograr" },
        { palabra: "diplomas", pista: "Certificados de estudio" },
        { palabra: "dragones", pista: "Criaturas míticas con alas" },
        { palabra: "druidas", pista: "Sacerdotes celtas antiguos" },
        { palabra: "ecoletal", pista: "Relativo a ecosistemas letales" },
        { palabra: "eclipse", pista: "Ocultamiento de un astro" },
        { palabra: "efusivos", pista: "Que expresan emociones con intensidad" },
        { palabra: "elíptico", pista: "De forma ovalada" },
        { palabra: "embustes", pista: "Mentiras o engaños" },
        { palabra: "emisoras", pista: "Estaciones de radio" },
        { palabra: "enclaves", pista: "Territorios rodeados por otro" },
        { palabra: "epítetos", pista: "Adjetivos innecesarios en lenguaje" },
        { palabra: "escalera", pista: "Sirve para subir niveles" },
        { palabra: "esmaltes", pista: "Sustancia brillante para uñas o pintura" },
        { palabra: "estambre", pista: "Parte de flor o lana para tejer" },
        { palabra: "estímulo", pista: "Impulso para actuar" },
        { palabra: "fabulosa", pista: "Muy buena o increíble" },
        { palabra: "fanfarria", pista: "Alarde ruidoso y festivo" },
        { palabra: "fantasía", pista: "Imaginación sin límites" },
        { palabra: "festín", pista: "Comida abundante y especial" },
        { palabra: "firmamento", pista: "Cielo, especialmente el estrellado" },
        { palabra: "fogonazo", pista: "Luz súbita y breve" },
        { palabra: "forastero", pista: "Extranjero o visitante" },
        { palabra: "fragmento", pista: "Parte de algo roto" },
        { palabra: "frontera", pista: "Límite entre territorios" },
        { palabra: "furtivos", pista: "Que actúan en secreto" },
        { palabra: "galaxias", pista: "Conjuntos de estrellas" },
        { palabra: "gaviotas", pista: "Aves marinas blancas" },
        { palabra: "gigantes", pista: "Personas muy altas" },
        { palabra: "gladiolo", pista: "Tipo de flor de jardín" },
        { palabra: "globoide", pista: "De forma esférica" },
        { palabra: "grifones", pista: "Criaturas mitológicas mitad águila" },
        { palabra: "horizont", pista: "Línea donde se une cielo y tierra" },
        { palabra: "hospicio", pista: "Asilo o institución benéfica" },
        { palabra: "huracanes", pista: "Tormentas violentas" },
        { palabra: "ilustrar", pista: "Acompañar con dibujos" },
        { palabra: "ingenios", pista: "Máquinas o ideas creativas" },
        { palabra: "insignia", pista: "Emblema distintivo" },
        { palabra: "intriga", pista: "Suspenso en una historia" },
        { palabra: "invocación", pista: "Llamado espiritual" },
        { palabra: "jadeante", pista: "Respirando con dificultad" },
        { palabra: "jerarquía", pista: "Orden de importancia" },
        { palabra: "juglares", pista: "Artistas ambulantes medievales" },
        { palabra: "laberinto", pista: "Red de caminos confusos" },
        { palabra: "lienzo", pista: "Tela para pintar" },
        { palabra: "linterna", pista: "Dispositivo que da luz portátil" },
        { palabra: "literato", pista: "Persona instruida en letras" },
        { palabra: "magnates", pista: "Personas poderosas y ricas" },
        { palabra: "mandrake", pista: "Planta asociada a magia" },
        { palabra: "manuscritos", pista: "Textos escritos a mano" },
        { palabra: "mazmorras", pista: "Celdas subterráneas" },
        { palabra: "melodías", pista: "Conjuntos de notas musicales" },
        { palabra: "metáfora", pista: "Comparación literaria indirecta" },
        { palabra: "milagros", pista: "Eventos extraordinarios" },
        { palabra: "minarete", pista: "Torre musulmana para el rezo" },
        { palabra: "mitología", pista: "Conjunto de mitos" },
        { palabra: "murciélag", pista: "Mamífero volador nocturno" },
        { palabra: "náufrago", pista: "Persona que sobrevive a un naufragio" },
        { palabra: "nebulosa", pista: "Nube de gas en el espacio" },
        { palabra: "nómadas", pista: "Personas sin residencia fija" },
        { palabra: "novedosa", pista: "Muy nueva o innovadora" },
        { palabra: "ocultista", pista: "Estudia fenómenos misteriosos" },
        { palabra: "oráculo", pista: "Fuente de sabiduría profética" },
        { palabra: "orquesta", pista: "Grupo musical sinfónico" },
        { palabra: "panteón", pista: "Lugar de descanso de difuntos" },
        { palabra: "paradoja", pista: "Contradicción aparente con lógica" },
        { palabra: "pavimento", pista: "Superficie dura de calles" },
        { palabra: "penumbra", pista: "Luz tenue" },
        { palabra: "pergamino", pista: "Papel antiguo de escritura" },
        { palabra: "pirámide", pista: "Estructura de base cuadrada" },
        { palabra: "preludio", pista: "Introducción musical o literaria" },
        { palabra: "proeza", pista: "Hazaña admirable" },
        { palabra: "realeza", pista: "Familia de monarcas" }
      ];
  
var modoGlobal = "";
var palabraSecreta = "";
var longitudPalabra = 0;
var intentoActual = "";
var intentosMaximos = 5;
var filaActiva = 0;
var grid = [];

function obtenerPalabra(modo) {
    var lista, usadas;
  
    if (modo === "facil") {
      lista = palabrasFacil;
      usadas = usadasFacil;
    } else if (modo === "intermedio") {
      lista = palabrasIntermedio;
      usadas = usadasIntermedio;
    } else {
      lista = palabrasDios;
      usadas = usadasDios;
    }
  
    // Filtra palabras aún no usadas
    var disponibles = lista.filter(p => !usadas.includes(p.palabra));
  
    // Si ya se usaron todas, reseteamos
    if (disponibles.length === 0) {
      usadas.length = 0; // vaciamos el array
      disponibles = lista;
    }
  
    var seleccion = disponibles[Math.floor(Math.random() * disponibles.length)];
    usadas.push(seleccion.palabra); // registrar como usada
  
    return seleccion;
  }
  
  

  async function iniciarJuego(modo) {
    modoGlobal = modo;
    var estado = await db.partida.get(1);
  
    if (estado && estado.modo === modo) {
        palabraSecreta = estado.palabraSecreta;
        longitudPalabra = estado.longitudPalabra;
        intentoActual = estado.intentoActual;
        filaActiva = 0;
        pista = estado.pista || "";
      } else {
        var seleccion = obtenerPalabra(modo);
        palabraSecreta = seleccion.palabra;
        pista = seleccion.pista;
        longitudPalabra = palabraSecreta.length;
        intentoActual = "";
        filaActiva = 0;
      }
  
    grid = [];
var juegoDiv = document.getElementById("juego");
juegoDiv.innerHTML = `<div id="pista" class="fw-bold text-primary mb-2"></div>`;


  
    for (var i = 0; i < intentosMaximos; i++) {
      var fila = document.createElement("div");
      fila.className = "fila";
      var celdas = [];
  
      for (var j = 0; j < longitudPalabra; j++) {
        var celda = document.createElement("div");
        celda.className = "cuadro";
        fila.appendChild(celda);
        celdas.push(celda);
      }
  
      grid.push(celdas);
      juegoDiv.appendChild(fila);
    }
  
    if (estado && estado.intentos) {
      for (var i = 0; i < estado.intentos.length; i++) {
        intentoActual = estado.intentos[i].join("");
        verificarIntento(true);
      }
      intentoActual = estado.intentoActual;
    }
  
    document.removeEventListener("keydown", manejarTecla);
    document.addEventListener("keydown", manejarTecla);
  }
  

function manejarTecla(e) {
  if (filaActiva >= intentosMaximos) return;

  var letra = e.key.toLowerCase();

  if (/^[a-z]$/.test(letra) && intentoActual.length < longitudPalabra) {
    grid[filaActiva][intentoActual.length].textContent = letra.toUpperCase();
    intentoActual += letra;
  }

  if (e.key === "Backspace" && intentoActual.length > 0) {
    intentoActual = intentoActual.slice(0, -1);
    grid[filaActiva][intentoActual.length].textContent = "";
  }

  if (e.key === "Enter" && intentoActual.length === longitudPalabra) {
    verificarIntento(false);
  }
}

function verificarIntento(esCarga) {
  var letrasUsadas = palabraSecreta.split("");
  var letrasEntrada = intentoActual.split("");
  var marcadas = [];

  for (var i = 0; i < longitudPalabra; i++) {
    grid[filaActiva][i].textContent = letrasEntrada[i].toUpperCase();

    if (letrasEntrada[i] === palabraSecreta[i]) {
      grid[filaActiva][i].classList.add("letra-correcta");
      letrasUsadas[i] = null;
      marcadas[i] = true;
    }
  }

  for (var i = 0; i < longitudPalabra; i++) {
    if (marcadas[i]) continue;
    var letra = letrasEntrada[i];
    var pos = letrasUsadas.indexOf(letra);
    if (pos !== -1) {
      grid[filaActiva][i].classList.add("letra-medio");
      letrasUsadas[pos] = null;
    } else {
      grid[filaActiva][i].classList.add("letra-incorrecta");
    }
  }

  if (!esCarga) {
    if (intentoActual === palabraSecreta) {
      mostrarModal("¡Felicidades! Adivinaste la palabra.");
      document.removeEventListener("keydown", manejarTecla);
      db.partida.delete(1);
      return;
    }

    filaActiva++;
    intentoActual = "";
    // Mostrar pista después del tercer intento fallido
if (filaActiva === 3 && !esCarga) {
    var divPista = document.getElementById("pista");
    divPista.textContent = "💡 Pista: " + pista;
  }
  

    if (filaActiva >= intentosMaximos) {
      mostrarModal("Perdiste. La palabra era: <strong>" + palabraSecreta.toUpperCase() + "</strong>");
      document.removeEventListener("keydown", manejarTecla);
      db.partida.delete(1);
    } else {
      guardarEstadoDexie();
    }
  } else {
    filaActiva++;
  }
}

function guardarEstadoDexie() {
    var intentos = [];
    for (var i = 0; i < filaActiva; i++) {
      var fila = [];
      for (var j = 0; j < longitudPalabra; j++) {
        fila.push(grid[i][j].textContent.toLowerCase());
      }
      intentos.push(fila);
    }
  
    db.partida.put({
        id: 1,
        palabraSecreta: palabraSecreta,
        longitudPalabra: longitudPalabra,
        intentoActual: intentoActual,
        filaActiva: filaActiva,
        intentos: intentos,
        modo: modoGlobal,
        pista: pista
      });
      
  }
  

function mostrarModal(mensaje) {
  var modalBody = document.getElementById("mensajeFinal");
  modalBody.innerHTML = mensaje;
  var modal = new bootstrap.Modal(document.getElementById("finJuegoModal"));
  modal.show();
}

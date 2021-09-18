[🏡 Inicio](../../index.html)

# Tema 1: Introducción a la Arquitectura y Organización de las Redes de Ordenadores

## Índice

- [Conceptos iniciales](#Punto1)
  
  - Elementos básicos de una red de comunicaciones
  
  - Clasificación de las redes de comunicaciones

- [Estrategias de Conmutación](#Punto2)
  
  - Conmutación de circuitos
  
  - Conmutación de mensajes
  
  - Conmutación de paquetes
  
  - Conmutación de circuitos virtuales
  
  - Ganancia por multiplexación estadística
  
  - Discusión y comparativa de esquemas

- [Arquitectura por niveles: OSI vs. TCP/IP](#Punto3)

- [Aspectos de diseño de Internet](#Punto4)

- [Organización y estructura de Internet](#Punto5)

## Conceptos iniciales <a name="Punto1"><a>

> Una red es una colección *interconectada* de dispositivos *autónomos*. 

Es interconectada porque existen enlaces de comunicaciones y caminos entre los diferentes dispositivos, de tal forma que es posible el intercambio de mensajes entre ellos. Los dispositivos son autónomos porque cada dispositivo ejecuta su propio software y la única forma de coordinarse con otros nodos es mediante el intercambio de mensajes.

### Elementos básicos de una red de comunicaciones

Una red de comunicaciones consta de diferentes elementos que se diferencian fundamentalmente por las funciones que realizan, pueden ser tanto hardware como software.

- **Sistemas finales**: También conocidos como *hosts*, los sistemas finales son los dispositivos que ejecutan aplicaciones de usuario y se conectan a la red para poder acceder a servicios o datos disponibles en cualquier dispositivo conectado a la red.

- **Enlaces de comunicación**: Son los medios físicos que conectan uno o varios dispositivos que pueden ser tanto sistemas finales como dispositivos internos de la red.
  Algunas características distintivas de un enlace de comunicaciones son la velocidad de transmisión (bits por segundo) y el retardo (segundos). El retardo se define como el tiempo que tarda un bit en atravesar el enlace de comunicación.

Hay dos tipos de medios de transmisión:

- **Cableados**: También conocidos como medios guiados, son aquellos en los que el flujo de bits se transmite a través de un cable, bien sea en forma de señal eléctrica o en forma de impulsos luminosos.

- **Inalámbricos**: Son aquellos en los que el flujo de bits se transmite en forma de onda electromagnética que se propaga a través del espacio libre (p.ej: IEEE 802.11a/b/g).

En general, los medios cableados son más fiables y tolerantes a interferencias, por lo que suelen conseguir mejores tasas de transferencia, y menores tasas de error. Sin embargo, los enlaces inlámbricos pueden ser muy útiles en determinadas situaciones.

- Los **dispositivos de conmutación** son aquellos elementos de la red que se encargan de interconectar enlaces de comunicaciones para facilitar el intercambio de datos entre dispositivos de la red.

Los dispositivos de conmutación suelen disponer de mútliples interfaces o puertos, de tal forma que cuando llegan datos por uno de esos puertos, lo retransmiten por la interfaz o puerto que corresponda para que esos datos sean dirigidos al destino. Los dispositivos de conmutación son la respuesta natural a la necesidad de interconectar segmentos de red para conseguir expandir el alcance de una red.

- Los **protocolos** son las reglas y convenciones que se siguen en la conversación entre el software que se ejecuta en dos dispositivos que intercambian información.

Cuando dos dispositivos, que pueden ser equipos finales o de conmutación, intercambian datos, se implementa una comunicación entre un programa software que se ejecuta en un dispositivo y otro programa software que se ejecuta en el otro dispositivo. Para que este intercambio sea eficaz, es necesario seguir ciertas actuaciones, la definición de cómo se hace ese intercambio es lo que se conoce como <u>protocolo</u>. Los protocolos se diseñan de tal forma que, si ambos programas implementan correctamente el protocolo, la transferencia de información es posible.

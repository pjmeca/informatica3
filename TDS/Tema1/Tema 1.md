[🏡 Inicio](../../index.html)

# Tema 1: Algunos principios básicos de diseño orientado a objetos

## Índice

- Modelado del software con UML
  
  - [Presentación de UML](#Punto1)
  - [Modelado Estructural: Diagramas de Clases](#Punto2)
  - [Modelado del Comportamiento: Diagramas de Interacción](#Punto3)

- Patrones GRASPS y otros principios básicos orientados a objetos
  
  - [Experto, Creador y Controlador](#Punto4)
  
  - [Principio de Separación Modelo-Vista](#Punto5)
  
  - [Técnicas básicas orientadas a objetos](#Punto6)

- Proceso de desarrollo de software
  
  - [Métodos y técnicas de creación de software](#Punto7)
  
  - [Desarrollo dirigido por el dominio](#Punto8)

## Modelo

> Un modelo es una **representación de la realidad** que es obtenido por medio de un proceso de [*abstracción*](#NotaAbstracción) con el propósito de ayudar a comprender y razonar sobre esa realidad. Un modelo es expresado en un ***lenguaje***.

> <a name="NotaAbstracción">**Abstracción**: </a> Se ignoran los detalles y nos centramos en las características esenciales que nos interesan.

Un modelo de software es una descripción abstracta de algún aspecto de los sistemas software, por ejemplo: los requistos, su estructura, el comportamiento, los datos, etc.

<img src="https://modeling-languages.com/wp-content/uploads/2014/04/historyModelingLanguages.jpg" title="" alt="" data-align="center">

## UML <a name="Punto1"></a>

A mediados de los años noventa existían muchos métodos de análisis y diseño orientado a objectos, sin embargo, solían ser los mismos conceptos expresados con notaciones diferentes, lo cual provocaba una gran confusión. En 1994, Grady Booch, James Rumbaugh e Ivar Jacobson deciden unificar las notaciones de sus métodos, dando así lugar al *Unified Modeling Language* (UML).

<img title="" src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/11037302/image/10d1410f3b490a776792ef51ed0603d2" alt="" width="640" data-align="center">

Posteriormente, el lenguaje fue sometido a un proceso de estandarización promovido por el OMG (*Object Management Group*), una organización sin fines de lucro que cuida y promueve el uso de tecnología orientada a objetos mediante guías y especificaciones.

Las ventajas de UML son:

    ✅ Eliminar confusión.

    ✅ Proporcionar estabilidad al mercado.

    ✅ Reunir los puntos fuertes de cada método.

    ✅ Añadir mejoras. 

> **UML** es un lenguaje para visualizar, especificar, construir y documentar los ***modelos*** de un sistema software desde una perspectiva orientada a objetos.

<img title="" src="assets/ejemplo_diagrama_clase.png" alt="" data-align="inline" width="247"><img title="" src="assets/ejemplo_diagrama_secuencia.png" alt="diagrama_secuencia" width="324" data-align="inline">

*A la izquierda: ejemplo de diagrama de clase UML. A la derecha: ejemplo de diagrama de secuencia UML.*

Los modelos UML son útiles para <u>documentar</u> decisiones de diseño e implementación, para facilitar la <u>comunicación</u> y los <u>razonamientos</u> gracias a su fácil visualización. Incluso pueden servir para la generación de código utilizando ciertas herramientas, pasando de ser modelos para documentar a ser modelos para generar el código.

### Modelo vs. Diagrama

Un **modelo UML** es una <u>especificación</u> de un aspecto del sistema de interés para un grupo de usuarios o desarrolladores.

Un **diagrama UML** <u>representa</u> una parte de la información del modelo en forma gráfica o textual. En el diagrama de clases, por ejemplo, no aparecen todas las clases, atributos, métodos y asociaciones, sino solo aquellas que se consideran relevantes para el propósito.

![](assets/ejemplo_diagrama_clase.png)

### Uso del modelado UML

> *Of the 14 million or so software professionals around the world, many
> know of the existence of the UML yet only a modest percent use (about
> 7%) the UML on a daily basis*. (Grady Booch, 2002)

Un [estudio reciente](http://oro.open.ac.uk/35805/8/UMLinpractice8.pdf) reveló que un 30% de profesionales usa UML, aunque lo hacen muy poco a lo largo de un desarrollo.

En palabras de Grady Booch:

> *The UML should be used to reason about alternatives. Put up some
> diagrams. Throw some use cases against it. Throw away those diagrams
> then write some code against you best decision.
> When we began with the UML, we never intended it to become a
> programming language. We never got the notation for collaborations right.
> Component and deployment diagrams needed more maturing. The UML
> metamodel became grossly bloated, because of the drive to model driven
> development. I think that complexity was an unnecessary mistake.
> Seriously, you need about 20% of the UML to do 80% of the kind of design
> you might want to do in a project – agile or not – but use the UML with a very
> light touch: use the notation to reason about a system, to communicate your
> intent to others…and then throw away most of your diagrams.*

Es decir, solo debemos usar diagramas para aquellas cosas sobre las que no se puede razonar sobre el código.

### Modelos UML más usados

- ~~Diagramas de casos de uso para requisitos.~~ (En desuso)

- Modelo de clases del dominio: **Diagramas de clases**

- Máquinas de estado: **Diagramas de estado**

- Diagramas de interacción (principalmente para la documentación)

- Diagramas de actividades (workflows de procesos de negocio, herramientas BPMN)

## Modelado estructural: diagrama de clases <a name="Punto2"></a>

En un modelado estructural se describen los tipos de objetos de un sistema y las relaciones que existen entre ellos.

- Clases, interfaces, relaciones de dependencia, realización, generalización y asociación.

> Un diagrama de clases es una representación gráfica de un modelo estructural.

Exiten diferentes usos para un diagrama de clases: para un modelo <u>conceptual</u>, para un modelo de clases del <u>diseño</u> o de la <u>implementación</u>.

Ejemplos de diagramas de clases:

![](assets/ejemplo_diagrama_clases1.png)

![](assets/ejemplo_diagrama_clases2.png)

### Clase

Para representar a una clase dibujaremos un rectángulo con 3 divisiones horizontales. En la primera pondremos el nombre de la clase, el la segunda división pondremos sus atributos, por último, en la tercera pondremos sus operaciones. Además, aquellas clases o métodos que sean abstractos irán en cursiva, mientras que las variables y los métodos de clase irán subrayados.

<img title="" src="assets/ejemplo_clase_1.png" alt="" width="188"><img title="" src="assets/ejemplo_clase_2.png" alt="" width="177"><img title="" src="assets/ejemplo_clase_3.png" alt="" width="182">

### Atributos

Para representar a los atributos de una clase, debemos seguir la siguiente notación:

**`[visibilidad] nombre [:tipo] ['['multiplicidad']']`**

Pudiendo ser la visibilidad:

- pública (+) --> Pueden verlo todas las clases

- protegida (#) --> Pueden verlo todas las clases de ese paquete y las clases hijas de la clase a la que pertenece el atributo.

- a nivel de paquete (~) --> Pueden verlo todas las clases de ese paquete

- privada (-) --> Solo puede verlo la clase a la que pertenece el atributo.

### Operaciones

Para representar a las operaciones de una clase, debemos seguir la siguiente notación:

**`[visibilidad] nombre ['('lista_parámetros_')'][:tipo_retorno]`**

Pudiendo representarse la visibilidad de la misma forma que con los atributos. Los parámetros que conforman la lista de parámetros irán separados por comas.

### Ejemplos de Atributos y Operaciones

#### Ejemplo 1:

```mermaid
classDiagram
    direction DT
    class Coche{
        +km: int
        -matricula
        #126;precio
        +acelerar() int 
    }

    class abstractVehículo{
        <<abstract>>
        #pi: float = 3.14
    }

    Coche --> abstractVehículo
    Moto --> abstractVehículo
```

**Nota:** Al ser Coche y Moto hijas de vehículo, ambas flechas pueden combinarse en una sola, es decir, sale una flecha de cada una de las clases, y se unifican todas en una sola que llega a Vehículo.

#### Ejemplo 2:

Código:

```java
public class Canguro implements Saltador{
    public int id;
    private String nombre;

    public Canguro (String n){
        nombre = n;
    }

    public void saltar(){
        System.out.println("SALTO");
    }
}


public interface Saltador{
    public void saltar();
}
```

Diagrama:

```mermaid
classDiagram
    direction LR
    class Saltador{
        <<interface>>
        +saltar()
    }

    class Canguro {
        +id: int
        -nombre: String
        +Canguro()
        +saltar()
    }

    Saltador <.. Canguro
```

### Relaciones

![](assets/relaciones_ejemplo1.png)

- **Dependencia**: En este tipo de relaciones, un cambio en la especificación de un elemento afecta a otro elemento. <u>No</u> se utiliza en los diagramas de clases para relacionar objetos del dominio.

```mermaid
classDiagram
    direction LR
    class PlanDeCurso{
        +añadir(c: Curso)
        +eliminar(c: Curso)    
    }

    PlanDeCurso --> Curso
```

- **Generalización**: Se corresponde con las relaciones *"Es un tipo de..."*. En el caso de un modelo de diseño o implementación, denota una relación de *<u>herencia</u>*.

```mermaid
classDiagram
    CuentaAhorro --|> Cuenta
    CuentaCorriente --|> Cuenta

    TextWindow --|> Window
    BoxDialog --|> Window
```

**Nota**: Igual que se ha visto antes, dos o más relaciones con un mismo destino pueden juntarse en una sola línea.

- **Asociación**: Es una relación estructural que especifica que los objetos de un tipo están conectados con los de otro tipo. Este tipo de relación es el que se vió en el [MER](https://es.wikipedia.org/wiki/Modelo_entidad-relación) durante la asignatura del segundo curso: Bases de Datos.
  En la asociación encontramos la <u>multiplicidad</u>, que consiste en representar la cantidad de veces que una entidad puede repetirse en una relación. Se representa `mínimo..máximo`.

```mermaid
classDiagram
    direction LR
    class Empleado{
        -nif
        -salario
    }

    class Empresa{
        -nombre
        -cif
    }

    Empleado "1..*" -- "1" Empresa
```

    Las asociaciones son **bidireccionales**, pero es posible restringir la navegación de     una asociación a una sola dirección añadiendo una <u>flecha</u>, de esta manera se     determina si una clase de un extremo de la asociación tiene *conocimiento* de la clase     del otro extremo.
    La asociación se utiliza en diagramas de diseño e implementación.

```java
class Pedido{...
    private ArrayList<ItemPedido> items;
    private Date fecha;
    private boolean esCompleto;
}

class ItemPedido{...
    private Producto producto;
    private int cantidad;
...}

class Producto{...
    private Money precio;
    private String descripcion;
}
```

```mermaid
classDiagram
    direction LR
    class Pedido{
        -fecha: Date
        -esCompleto: boolean
    }

    class ItemPedido{
        -cantidad: int
    }


    class Producto{
        -precio: Money
        -descripcion: String
    }

    Pedido "1" --> "1..*" ItemPedido : contiene
    ItemPedido "*" --> "1" Producto : describe
```

- **Agregación**: Es un caso especial de la asociación que expresa la relación <u>parte-de</u>: *un objeto es parte de otro objeto (agregado)*

```mermaid
classDiagram
    direction LR
    Documento o-- Capitulo : consta de
    TPV o-- LectorCódigo : meteDinero
    TPV o-- Cajón : lee códigos
```

- **Composición**: Es un tipo especial de agregación.
  
  - Una parte pertenece a un único agragado (<u>exclusividad</u>)
  
  - Si se elimina un agregado, se eliminan todas sus partes (<u>dependencia</u>)
  
  Una parte se puede añadir/eliminar en cualquier instante.

<img title="" src="assets/ejemplo_agregado.png" alt="" data-align="center" width="586">

- **Realización**: Especifica que una clase implementa una interfaz.

> Una <u>interfaz</u> es una colección de operaciones que especifican los servicios de una clase o componente. Una interfaz permite separar la especificación de la implementación.

```mermaid
classDiagram
    direction LR
    class ICollection{
        <<interface>>
        +add()
        +remove()
        +contains()    
    }

    ICollection <|-- List
    
```

        Las interfaces también pueden representarse haciendo uso de la notación 

        *<u>lollipop</u>*:

<img title="" src="assets/ejemplo_interfaz_lollipop.png" alt="" data-align="center" width="363">

## Modelado del comportamiento: Diagramas de Interacción <a name="Punto3"></a>

- Los<u> diagramas de interacción</u> describen cómo los objetos colaboran entre sí para realizar cierta actividad (lo veremos en TDS):
  
  - Diagramas de <mark>Secuencia</mark> y Diagramas de Colaboración o <mark>Comunicación</mark>

- Máquinas de estado (las veremos en PDS):
  
  - Diagramas de estado
  
  - Diagramas de actividades

#### Diagramas de Interacción: Definiciones

- **Interacción**: Se dice del comportamiento que comprende un conjunto de mensajes intercambiados entre un conjunto de <u>líneas de vida</u> (o a través de un <u>enlace</u>) para lograr un propósito.

- **Mensaje**: Consiste en una especificación de una particular comunicación entre líneas de vida de una interacción que transmite información, con la expectativa de desencadenar una actividad.

- **Línea de vida**: Son el objeto y la línea de tiempo que marca su existencia (diagramas de secuencia) o enlace (diagramas de comunicación).

<img title="" src="assets/clases_e_instancias_UML.png" alt="" width="451" data-align="center">

- Un **enlace** es una instancia de una asociación. Es un camino por el cual se envía un mensaje.

<img title="" src="assets/ejemplo_enlace.png" alt="" data-align="center" width="513">

El siguiente diagrama de clases:

```mermaid
classDiagram
    Cliente <-- Cuenta
    Cuenta o-- Tarjeta
    Cuenta o-- Transacción
    Reintegro --o Transacción
    Ingreso --o Transacción
```

Podría dar lugar al siguiente diagrama de objetos:

```mermaid
classDiagram
    class Cuenta{
        <<:Cuenta>>
        id = 3333444
        saldo = 1000000
    }

    class Cliente{
        <<:Cliente>>
        dni = 12345678
        nombre = JJGM
    }

    class Tarjeta{
        <<:Tarjeta>>
        Fecha: 09/2011
    }

    class Reintegro{
        <<:Reintegro>>
        cantidad = 100
    }

    class Integro{
        <<:Integro>>
        cantidad = 200
    }

    Cliente <-- Cuenta
    Tarjeta --* Cuenta
    Reintegro --* Cuenta
    Integro --* Cuenta
```

### Diagramas de Secuencia

Están formados por:

- Líneas de vida

- Focos de control o activación

- Mensajes: a instancias o de creación

- Mensaje self

- Información de control: condiciones y marcas de iteración

- Indicar el objeto devuelto por el mensaje: return (añadirlos solo cuando ayuden a clarificar la interacción)

<img title="" src="assets/ejemplo_diagramas_secuencia.png" alt="" width="547" data-align="center">

#### Tipos de mensajes

- Simple: metodo(arg). Ej: `preparar()`, `addPedido(p)`

- Creación de objetos: `<<create>>`

- Destrucción de objetos: `<<destroy>>`

- Asignación: v:=método(arg). Ej: `hayStock := eliminar()`

Además, en UML 2.0 se incorporan los siguientes mensajes en diagramas de comunicación:

- Condición: [condicion] metodo(arg). Ej: `[premium] saludo()`

- Iteración: * metodo(arg), [1..n] metodo(arg). Ej: `*enviarPedido()`

La numeración puede ser jerárquica, secuencial, o ninguna.

```mermaid
sequenceDiagram
    activate GUIPedido
    GUIPedido ->> ControladorPedidos : preparar()
    activate ControladorPedidos
    ControladorPedidos ->> Pedido : preparar()
    activate Pedido
    Pedido ->> LineaPedido : *preparar()
    activate LineaPedido
    LineaPedido ->> Item : hayStock:=check()
    activate Item
    deactivate Item
    LineaPedido ->> Item : [hayStock] eliminar()
    activate Item
    Item ->> Item : pedir:=checkPedir()
    activate Item
    deactivate Item
    Item ->> ItemPedido : [pedir]<<create>>
    Item -->> LineaPedido : 
    deactivate Item
    LineaPedido ->> ItemEntregado : [hayStock]<<create>>
    deactivate LineaPedido
    deactivate Pedido
    deactivate ControladorPedidos
    deactivate GUIPedido
```

#### Foco de control o activación

El foco de control es un rectángulo que representa el tiempo durante el que un objeto está activo ejecutando una acción:

```mermaid
sequenceDiagram
    activate Objeto
    Objeto ->> Objeto : mensaje
    deactivate Objeto
```

### Diagrama de Colaboración o Comunicación

<img title="" src="assets/ejemplo_diagrama_colaboracion.png" alt="" data-align="center" width="588">

```mermaid
stateDiagram
    direction LR
    G : GUIPedido
    C : ControladorPedidos
    P : Pedido
    LP : LineaPedido
    I : Item
    IP : ItemPedido
    IE : ItemEntregado

    G --> C : 1. preparar()
    C --> P : 2. preparar()
    P --> LP : 3. *preparar()
    note right of P
        4. hayStock=check()
        5. [hayStock] eliminar()
    end note
    LP --> I : 6. pedir=checkPedir()
    I --> I
    I --> IP : 7. [pedir] '<<'create'>>'
    LP --> IE : 8. [hayStock] '<<'create'>>'
```

<img src="assets/mermaid_statediagram1_prerendered.png" title="" alt="" data-align="center">

#### Diagrama de Secuencia vs. Diagrama de Colaboración

<u>Sencuencia</u>:

<img title="" src="assets/secuencia_vs_control-Diagrama_Secuencia.png" alt="" data-align="center" width="521">

**Nota**: El `<<destroy>>` no lo representaremos dada su inexistencia en Java.

<u>Colaboración</u>:

<img title="" src="assets/secuencia_vs_control-Diagrama_Control.png" alt="" data-align="center" width="525">

Utilizaremos el diagrama de secuencia cuando nos interese que se vea de forma sencilla el orden de los mensajes. Si lo que deseamos es ver de forma clara los objetos que participan en la interacción y los mensajes que se envían, entonces interesa usar el diagrama de colaboración.

El punto negativo de los diagramas de secuencia es su longitud, mientras que en los de colaboración es la posible dificultad a la hora de encontrar un mensaje por su numeración.

### Operadores de Control (<span style="color:red">NO</span> recomendado)

En los diagramas de secuencia se pueden usar operadores de control para agrupar trozos de la secuencia:

- Ejecución opcional (opt): El cuerpo se ejecuta si se cumple una condición.

- Ejecución condicional (alt): El cuerpo se divide en varias regiones, cada una con una condición asociada. Se ejecuta el cuerpo de la región cuya condición se satisface.

- Ejecución paralela (par): El cuerpo se divide en varias regiones. Cada región representa una computación paralela. Se ejecuta de forma paralela el cuerpo de cada región.

- Ejecución iterativa (loop): El cuerpo se ejecuta mientras se cumple una condición.

- Ejecución referencia (ref): El cuerpo hace referencia a otra interacción.

<img title="" src="assets/ejemplo_operadores_control.png" alt="" data-align="center" width="572">

<span style="color: red">No se recomienda</span> usarlos porque estaríamos *programando* con UML.

### Numeración secuencial

En los diagramas de comunicación, el uso de la numeración secuencial puede provocar confusión, ya que pueden interpretarse de maneras distintas.

Por ejemplo, el siguiente diagrama:

<img title="" src="assets/problema_numeracion_secuencial.png" alt="" data-align="center" width="490">

Podría tener las siguientes interpretaciones como diagrama de secuencia:

<img title="" src="assets/problema_numeracion_secuencial-posibilidad_1_2.png" alt="" data-align="center" width="492">

<img title="" src="assets/problema_numeracion_secuencial-posibilidad_3.png" alt="" width="490" data-align="center">

**Nota**: Hay un error en esta última imagen, lo correcto es indicar que el flujo de ejecución de m2() abarca también a m3() y m4().

### Numeración jerárquica

La solución es usar una numeración jerárquica:

![](assets/problema_numeracion_secuencial-numeracion_jerarquica.png)

En la numeración jerárquica agrupan en subgrupos los mensajes: 1, 1.1, 1.2, 2, 2.1, 3...

## Patrones GRASP <a name="Punto4"></a>

Los patrones GRASP describen los principios básicos de asignación de responsabilidades a clases. Distribuir responsabilidades es la parte más difícil del diseño orientado a objetos, es por ello que esta fase es la que consume la mayor parte del tiempo.

Existen los siguientes patrones GRASP:

- <u>Experto, Creador, Controlador</u>

- Bajo Acoplamiento y Alta Cohesión

- Polimorfismo y Proteger variación

### Responsabilidades y Métodos

> Una responsabilidad se implementa mediante uno o más métodos y puede asignarse a varias clases según la granularidad (tamaño).

Cuando se crea una clase, esa clase tiene un contrato u obligación, que puede dividirse en dos categorías:

- Conocer
  
  - Datos encapsulados privados.
  
  - Existencia de objetos conectados.
  
  - Datos derivados o calculados.

- Hacer
  
  - Algo él mismo, como crear un objeto o realizar un cálculo.
  
  - Iniciar una acción en otros objetos.
  
  - Controlar y coordinar actividades en otros objetos.

Los <u>diagramas de interacción</u> muestran elecciones en la asignación de responsabilidades.

<img title="" src="assets/ejemplo_responsabilidades-de-una-clase.png" alt="" data-align="center" width="935">

### Experto

Es el patrón más importante de todos, ya que ayuda a decidir en qué clase debemos colocar cada método.

> ¿Cómo se asignan responsabilidades?
> 
> > *Se debe asignar una responsabilidad a la clase que tiene la información necesaria para cumplimentarla.*

El objetivo es distribuir las responsabilidades de forma homogénea, evitando crear clases *dios* (es decir, una clase que reuna todos los métodos).

Los beneficios de seguir el patrón experto son: la conservación de la encapsulación ([bajo acoplamiento](#bajoAcoplamiento)), y una [alta cohesión](#altaCohesión) (clases más ligeras).

#### Ejemplo 1

Dado el siguiente diagrama de clases, ¿quién es el responsable de conocer el total de una venta?

```mermaid
classDiagram
    direction LR
    class Venta{
        -fecha
        -nota
    }

    class LineaVenta{
        -cantidad
    }

    class Producto{
        -descripcion
        -precio
        -codigo
    }

    Venta "1..1" -- "1..*" LineaVenta : contiene
    LineaVenta "1" -- "0..*" Producto : descrita por
```

- [ ] Venta

- [ ] LineaVenta

- [ ] Producto

Lo intuitivo tal vez sería programar:

```java
public double getTotal(){
    double total = 0.0;
    for(LineaVenta lv : lineasVenta){
        double cant = lv.getCantidad();
        Producto pr = lv.getProducto();
        total += cant*pr.getPrecio();       
    }
    return total;
}
```

Pero entonces estaríamos violando el patrón experto, representado con un diagrama de secuencia veríamos esto:

```mermaid
sequenceDiagram
    activate GUIRealizarCompra
    GUIRealizarCompra ->> Venta : 1. getTotal()
    activate Venta
    Venta ->> LineaVenta : 2. getCantidad()
    activate LineaVenta
    Venta ->> LineaVenta : 3. getProducto()
    Venta ->> Producto : 4. getPrecio()
    activate Producto
    deactivate Producto
    deactivate LineaVenta
    deactivate Venta
    deactivate GUIRealizarCompra
```

Para no violar el experto, buscamos el siguiente diagrama:

```mermaid
sequenceDiagram
    activate GUIRealizarCompra
    GUIRealizarCompra ->> Venta : getTotal()
    activate Venta
    Venta ->> LineaVenta : *st = getSubtotal()
    activate LineaVenta
    LineaVenta ->> producto: pr=  getPrecio()
    deactivate LineaVenta
    deactivate Venta
    deactivate GUIRealizarCompra
```

Lo cual se corresponde con el siguiente código, que <u>**no**</u> viola el patrón experto:

```java
class Venta {..

    public double getTotal() {
        double total = 0.0;
        for (LineaVenta lv : lineasVenta)
            total = total + lv.getSubtotal());
        return total;
    }
}

class LineaVenta{..
    private int cantidad;
    private Producto producto;

    public double getSubtotal()
        return cantidad*producto.getPrecio();
}
```

#### Ejemplo 2

¿Quién es el responsable de conocer todos los mensajes recibidos entre dos fechas?

```mermaid
classDiagram
    direction LR
    LectorCorreo *-- Buzon
    Buzon *-- Carpeta
    Carpeta *-- Mensaje
```

- [ ] LectorCorreo

- [ ] Buzon

- [ ] Carpeta

- [ ] Mensaje

Violando el experto, haríamos esto:

```
para cada mensaje m en cada carpeta c
    si f en rango [f1,f2]
        añadir al conjunto s
return s
```

Que se corresponde con:

```mermaid
sequenceDiagram
    activate main
    participant main
    participant l as LectorCorreo
    main ->> l : getMensajes(f1,f2)
    activate l
    l ->> Buzon : c = getCarpetas()
    activate Buzon
    deactivate Buzon
    l ->> Carpeta : *m = getmensajes()
    activate Carpeta
    deactivate Carpeta
    l ->> Mensaje : *f = getFecha()
    activate Mensaje
    deactivate Mensaje
    l ->> Set : [f en rango] add()
    activate Set
    deactivate Set
    deactivate l
    deactivate main
```

Sin violar el experto haríamos:

```mermaid
sequenceDiagram
    activate main
    participant main
    participant l as LectorCorreo
    main ->> l : getMensajes(f1,f2)
    activate l
    l ->> Buzon : m = getMensajes(f1,f2)
    activate Buzon
    Buzon ->> Carpeta : *m = getmensajes()
    activate Carpeta
    Carpeta ->> Mensaje : *entreFechas(f1,f2)
    activate Mensaje
    deactivate Mensaje
    deactivate Carpeta
    deactivate Buzon
    deactivate l
    deactivate main
```

#### Ejemplo 3

¿Quién es el responsable de conocer el número de proyectos de cierto tipo realizados en una universidad en un rango de fechas?

```mermaid
classDiagram
    direction LR
    class ControladorProyectos{
        numProyectos()
    }
    class Universidad{
        +getGrupos()
    }
    class CatalogoUniversidades{
        +getUniversidad()
    }
    class GrupoInvestigacion{
        +getproyectos()
    }
    class Proyecto{
        +getFecha()
        +getTipo()
    }

    ControladorProyectos --> Universidad : 
    ControladorProyectos --> CatalogoUniversidades : 
    Universidad "0..*" --* CatalogoUniversidades : 
    GrupoInvestigacion "1..*" --* Universidad : 
    Proyecto "0..*" --* GrupoInvestigacion 
```

Con violación del experto haríamos:

```java
public class ControladorProyectos {...
    public int numProyectos(int id, int tipo, Date f1, Date f2) {
        int totalProyectos = 0;
        Universidad uni = CatalogoUniversidades.getUniversidad(id);
        Collection<Grupo> grupos = uni.getGrupos();
        for (Grupo grupo: grupos) {
            Collection<Proyecto> proyectos = grupo.getProyectos();
            for (Proyecto proyecto : proyectos){
                fechaProyecto = proyecto.getFecha();
                if((fechaProyecto.before(f2)) &&(fechaProyecto.after(f1))
                      && (tipo == proyecto.getTipo()))
                    totalProyectos= totalProyectos + 1;
                }
        }
        return totalProyectos;
    }
}
```

Lo que daría lugar al siguiente diagrama de colaboración:

<img title="" src="assets/violacion_experto_ejemplo3.png" alt="" data-align="center" width="534">

Que en diagrama de secuencia sería:

```mermaid
sequenceDiagram
    participant g as GUIResponsable
    participant cp as ControladorProyectos
    participant cu as ControladorUniversidades
    participant u as Universidad
    participant gi as GrupoInvestigacion
    participant p as Proyecto
    
    activate g
    g ->> cp : 1. numProyectos()
    activate cp
    cp ->> cu : 2. getUniversidad()
    activate cu
    deactivate cu
    cp ->> u : 3. getGrupos()
    activate u
    deactivate u
    cp ->> gi : 4. getProyectos()
    activate gi
    deactivate gi
    cp ->> p : 5. getFecha()
    activate p
    cp ->> p : 6. getTipo()
    deactivate p
    deactivate cp
    deactivate g
```

Sin violar el experto:

```java
public class ControladorProyectos {...
    public int numProyectos(int id, int tipo, Date f1, Date f2){
        Universidad uni = CatalogoUniversidades.getUniversidad(id);
        return uni.numProyectos(tipo, f1, f2);
    }
}
public class Universidad {...
    private Collection<GrupoInvestigacion> grupos;
    public int numProyectos(int tipo, Date f1, Date f2) {
        int total = 0;
        for (Grupo grupo: grupos)
            total = total + grupo.numProyectos(tipo, f1, f2);
        return total;
    }
}
public class GrupoInvestigacion {...
    private List<Proyecto> proyectos;
    public int numProyectos(int tipo, Date f1, Date f2) {
        int total = 0;
        for (Proyecto proyecto : proyectos){
            if ((proyecto.esTipo(tipo)) &&
                   (proyecto.estaEntre(f1, f2)))
                total = total + 1;
        }
        return total;
    }
}
public class Proyecto {...
    private Date fecha;
    private int tipo;
    public boolean esTipo(int tipo) {
        return (this.tipo == tipo);
    }
    public boolean estaEntre(Date f1, Date f2) {
        return ((fecha.after(f1)) && (fecha.before(f2)));
    }
}
```

Cuyo diagrama de colaboración es:

<img title="" src="assets/sin-violacion_experto_ejemplo3.png" alt="" data-align="center" width="623">

Que en diagrama de secuencia sería:

```mermaid
sequenceDiagram
    participant g as GUIResponsable
    participant cp as ControladorProyectos
    participant cu as ControladorUniversidades
    participant u as Universidad
    participant gi as GrupoInvestigacion
    participant p as Proyecto
    
    
    g ->> cp : 1. numProyectos()
    activate g
    activate cp
    cp ->> cu : 2. getUniversidad()
    activate cu
    deactivate cu
    cp ->> u : 3. numProyectos()
    activate u
    u ->> gi : 4. numProyectos()
    activate gi
    gi ->> p : 5. estaEntre()
    activate p
    gi ->> p : 6. esTipo()
    deactivate p
    deactivate gi
    deactivate u
    deactivate cp
    deactivate g
```

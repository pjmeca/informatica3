[🏡 Inicio](../../index.html)

# Tema 1: Arquitectura de un multiprocesador-en-un-chip (CMP)

## 

## Índice

1. [Aspectos tecnológicos: Leyes de Moore y de Dennard](#Punto1)
2. [Clasificación de Flynn. Principales figuras de mérito](#Punto2)
3. [Aspectos paralelos: Leyes de Amdahl y Gustafson](#Punto3)
4. [De sistemas empotrados a supercomputadores](#Punto4)

## 

## Aspectos tecnológicos: Leyes de Moore y de Dennard <a name="Punto1"></a>

### Arquitectura de computadores

La arquitectura de un computador está compuesta por:

- ISA (Instruction Set Architecture)
  
  - Conjunto de instrucciones que pueden ser ejecutadas por el procesador.
  
  - Ejemplos: x86, ARM, RISC-V

- Microarquitectura
  
  - Cómo se implementan las instrucciones del ISA

- Diseño tecnológico del sistema, es decir, el hardware

### Un resumen de la evolución de las microarquitecturas

- Monociclo: Simple, pero eficiente

- Multiciclo

- Segmentación
  
  - Permite la ejecución **solapada** de varias instrucciones
  
  - Deben realizarse **detenciones** debido a los riesgos y **dependencias**.

- Explotando el ILP
  
  - Superescalares, Superpipelinning...
  
  - MultiThreading, Vectorización...

- **CMPs** (multiprocesadores en un chip)

- GPUs, DSPs, TPUs, XPUs (aceleradores)

- Supercomputadores

### Transistores y Cables

Denominamos **tamaño característico** (*Feature size*) al tamaño mínimo del transistor en la dimensión *X* o *Y* (aunque habitualmente son la misma ya que suelen ser cuadrados). En el año 1971 este tamaño era de 10 micras, en el año 2019 ya se había reducido a tan solo **10 nanómetros**.

El tamaño del transistor escala linealmente, es decir, el retardo en los cables no mejora con el tamaño característico. La densidad de integración escala cuadráticamente.

**Densidad de Integración** <a name="#NotaDensidadDeIntegración"></a>: Número de componentes electrónicos implantados por unidad de superficie en un circuito integrado, sea cual sea su tamaño.

### Tendencias en tecnología

> Diapositivas 6 y 7. No se vieron en clase.

### La ley de Moore (1965)

Se trata de una ley empírica formulada por el cofundador de Intel, Gordon E. Moore.

<img title="" src="http://dis.um.es/~lopezquesada/documentos/IES_1415/LMSGI/curso/css/css14/imagenes/gordonmoorebn.jpg" alt="Moore" width="142" data-align="center">

> La industria podrá poner el doble de transistores en un chip cada 18-24 meses.

Esta *ley* se cumplió durante los años 1955-2005 gracias a la ley de Dennard: 

> A medida que los transistores se hacen más pequeños, la densidad de potencia consumida por el circuito se mantiene constante.

Es importante destacar que en parte esta ley se *hizo cumplir*, ya que en realidad los transistores podrían haber reducido su tamaño con menos de 18 meses de diferencia, pero esto interesaba a Intel de cara a sus inversores.

### La ley de Dennard (1974)

La ley de Dennard (*Dennard scaling*), también conocida como *MOSFET scaling*, fue propuesta en un artículo de 1974 escrito por Robert H. Dennard junto a otros autores.

<img title="Robert H. Dennard" src="https://www.src.org/image/robert-dennard.png" alt="" data-align="center" width="164">

> Conforme los transistores van escalando, es decir, haciéndose más pequelos, la densidad de potencia que consumen permanece constante.

Siendo la densidad de potencia:

$\frac{potencia}{área}\frac W {cm^2}$

Ejemplo:

Si suponemos una reducción lineal en el tamaño de los transistores en un factor de 2x, habrá una reducción en el área ocupada por cada transistor igual de 4x. Por lo tanto, podré poner 4x más transistores.

La ley de Dennard predice que la potencia disipada por cada transistor disminuye también en un factor de 4x (gracias a que disminuye el voltaje y la corriente). Es decir, el chip consume lo mismo mientras sea del mismo tamaño.

# [🔙](../README.md) Estructura de los Elementos 🏗️

## 1. Márgenes y Separación entre Componentes
Para mantener una separación adecuada entre los distintos elementos de la página, se han definido márgenes y rellenos específicos:

- **Reset CSS**: Se eliminan los márgenes y el padding por defecto para todos los elementos utilizando las reglas:

```css

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

```

- **Márgenes entre secciones**: Se añaden márgenes superiores e inferiores para separar secciones del contenido:

```css

  section {
    margin-bottom: 40px;
  }

```

## 2. Interlineado y Espaciado de Texto
El interlineado se ha definido para asegurar una buena legibilidad, especialmente en párrafos extensos.

- **Interlineado estñandar**: Se utiliza una altura de línea de ```1.5``` en la mayoría de los textos:
 
```css

  body {
    line-height: 1.5;
  }

```

- **Espaciado entre títulos y párrafos**: se agregan un margen inferior a los títulos para separar visualmente los bloques de texto:

```css

  h1, h2, h3 {
    margin-bottom: 20px;
  }

```

## 3. Ancho Máximo del Contenido
Para evitar que las líneas de texto sean demasiado largas, lo cual dificulta la lectura, se ha establecido un ancho máximo para los contenedores de texto:

```css

  .content {
    max-width: 1200px;
    margin: 0 auto;
  }

```

## 4. Disposición de Componentes
Los elementos clave como los contenedores principales, secciones, y componentes individuales están organizados mediante flexbox para garantizar una distribución balanceada:

```css

  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

```

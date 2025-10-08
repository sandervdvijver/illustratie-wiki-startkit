# HTML 101

De structuur van het HTML-bestand dat je net hebt gemaakt met de Wikipedia converter tool is een ideale introductie in hoe HTML in elkaar zit.
Open je `index.html` in je code editor en lees mee.

## De basisstructuur

Bekijk de eerste regels:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pickling</title>
  </head>
  <body>
    […]
  </body>
</html>
```

**Wat je hier ziet:**

- `<!DOCTYPE html>` - Vertelt de browser: dit is een HTML5 document
- `<html>` - Het root element, omvat alles
- `<head>` - Metadata (niet zichtbaar op de pagina zelf)
- `<title>` - De paginatitel
- `<strongody>` - Alles wat je ziet op de pagina staat hier

## Semantische structuur: article, header, section

Scroll door je `index.html`. Je ziet dat het hele artikel ingepakt is in een `<article>` tag:

```html
<article>
  <header>
    <h1>Pickling</h1>
    <p><small>From Wikipedia, the free encyclopedia</small></p>
  </header>
  <section id="introduction">
    <!-- introductie tekst -->
  </section>
  <section id="history">
    <!-- geschiedenis sectie -->
  </section>
  <!-- meer sections... -->
</article>
```

**Wat betekent dit?**

- `<article>` - Een zelfstandig stuk content (een artikel, blogpost, etc.)
- `<header>` - De kop van je artikel (titel + subtitel)
- `<section>` - Een thematische groep content, meestal met een eigen heading

Dit zijn **semantische tags** - ze geven betekenis aan de structuur, niet alleen opmaak.

## ID's voor navigatie

Kijk naar de `id` attributen in je sections:

```html
<section id="introduction">
  <section id="history">
    <section id="in-world-cuisines"></section>
  </section>
</section>
```

Deze `id`'s zijn:

- **Uniek** - elke id komt maar 1x voor op de pagina
- **Nuttig voor CSS** - je kan specifieke secties stylen
- **Nuttig voor navigatie** - je kan linken naar `#introduction` bijvoorbeeld

💡 **Later:** Je kan deze id's gebruiken om een inhoudsopgave te maken die naar verschillende delen van je pagina linkt.

## Hoofdingen en paragrafen

Zoek in je `index.html` naar de verschillende hoofding niveaus. Elk Wikipedia artikel heeft een vergelijkbare structuur:

```html
<h1>Jouw artikel titel</h1>
<!-- Hoofdtitel -->
<h2>Eerste sectie</h2>
<!-- Hoofdsectie -->
<h3>Subsectie A</h3>
<!-- Subsectie -->
<h3>Subsectie B</h3>
<!-- Subsectie -->
<h2>Tweede sectie</h2>
<!-- Hoofdsectie -->
<h3>Nog een subsectie</h3>
<!-- Subsectie -->
<h4>Sub-subsectie</h4>
<!-- Sub-subsectie -->
```

## Paragrafen en tekststijlen

Zoek in je bestand naar een `<p>` tag. Dit element duidt op een **paragraaf** of **alinea** tekst.
Binnen die paragrafen vind je `<strong>` en `<em>` tags, deze worden gebruikt om

```html
<p>
  <strong>Onderwerp</strong> is een beschrijving met
  <a href="...">links</a> naar gerelateerde termen. De tekst kan ook
  <em>cursieve</em> woorden bevatten...
</p>
```

**Wat je hier ziet:**

- `<p>` - Paragraaf, de standaard manier om tekst te groeperen
- `<strong>` - Bold (vet gedrukte tekst)
- `<em>` - Italic (schuine tekst)

## Links

Elke link in je document ziet er zo uit:

```html
<a href="https://en.wikipedia.org/wiki/Food_preservation">preserving</a>
```

**Anatomie van een link:**

- `<a>` - Anchor tag, maakt een klikbare link
- `href="..."` - Het attribuut dat aangeeft **waar** de link naartoe gaat
- De tekst tussen `<a>` en `</a>` is wat zichtbaar en klikbaar is

## Divs als containers

Je ziet overal `<div>` tags in je document:

```html
<div>Further information: <a href="...">South Asian pickles</a></div>
```

Een `<div>` is een **generieke container** zonder semantische betekenis. Het is een element dat je gebruikt om dingen te groeperen in functie van verdere CSS opmaak.

**Wanneer gebruik je een div?**

- Als er geen passende semantische tag is (`<section>`, `<article>`, `<header>`, etc.)
- Voor styling doeleinden (we komen hier later op terug bij CSS)
- Als wrapper om meerdere elementen te groeperen

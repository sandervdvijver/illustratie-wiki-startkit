# Sticky Illustration

⚠️ **Proof of Concept** - Dit is een experimentele feature die nog niet volledig robust is. Gebruik op eigen risico en verwacht mogelijke problemen met geneste secties en complexe layouts.

Een **sticky illustration** is een afbeelding die vast blijft staan terwijl je scrollt, en die automatisch van inhoud verandert afhankelijk van welke sectie je leest.

Dit is perfect voor geïllustreerde wiki's: terwijl de lezer door verschillende secties scrollt (bijvoorbeeld "Geschiedenis", "Cultuur", "Moderne tijd"), kan de illustratie aan de zijkant automatisch wisselen naar een passende afbeelding.

## Hoe werkt het?

Je gebruikt twee elementen:

1. **Een sticky afbeelding** - deze blijft vast staan tijdens het scrollen
2. **Sections met data attributen** - elke sectie krijgt een `data-illustration` attribuut dat verwijst naar de bijbehorende afbeelding

## Stap 1: Voorbereiding

### Maak je afbeeldingen klaar

Plaats je illustraties in de `media/` folder:

```
media/
├── intro.jpg
├── geschiedenis.jpg
├── cultuur.jpg
└── moderne-tijd.jpg
```

### Link het JavaScript bestand

Voeg onderaan je `<body>` toe:

```html
<script src="js/sunny-helpers/sticky-illustration.js"></script>
</body>
</html>
```

## Stap 2: HTML opzet

### Voeg de sticky afbeelding toe

Plaats een afbeelding met de class `sticky-illustration` waar je wilt dat deze verschijnt:

```html
<img src="media/intro.jpg" class="sticky-illustration" alt="Illustratie" />
```

### Voeg data-illustration toe aan je sections

Voeg aan elke sectie een `data-illustration` attribuut toe met het pad naar de juiste afbeelding:

```html
<section id="introduction" data-illustration="media/intro.jpg">
  <h2>Introductie</h2>
  <p>Tekst over de introductie...</p>
</section>

<section id="geschiedenis" data-illustration="media/geschiedenis.jpg">
  <h2>Geschiedenis</h2>
  <p>Tekst over de geschiedenis...</p>
</section>

<section id="cultuur" data-illustration="media/cultuur.jpg">
  <h2>Cultuur</h2>
  <p>Tekst over cultuur...</p>
</section>
```

## Stap 3: CSS voor sticky positioning

Maak de afbeelding daadwerkelijk "sticky" met CSS:

```css
.sticky-illustration {
  position: sticky;
  top: 2rem;
  width: 400px;
  height: auto;
  border-radius: 8px;
}
```

### Voorbeeld layout met grid

Een praktische manier om tekst en afbeelding naast elkaar te plaatsen:

```css
body {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

article {
  /* Tekst neemt de linker kolom */
  grid-column: 1;
}

.sticky-illustration {
  /* Afbeelding in de rechter kolom */
  grid-column: 2;
  position: sticky;
  top: 2rem;
  height: fit-content;
}
```

## Volledig voorbeeld

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mijn Geïllustreerde Wiki</title>
    <style>
      body {
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .sticky-illustration {
        position: sticky;
        top: 2rem;
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <article>
      <header>
        <h1>Mijn Artikel</h1>
      </header>

      <section id="introduction" data-illustration="media/intro.jpg">
        <h2>Introductie</h2>
        <p>Lorem ipsum...</p>
      </section>

      <section id="geschiedenis" data-illustration="media/geschiedenis.jpg">
        <h2>Geschiedenis</h2>
        <p>Lorem ipsum...</p>
      </section>

      <section id="cultuur" data-illustration="media/cultuur.jpg">
        <h2>Cultuur</h2>
        <p>Lorem ipsum...</p>
      </section>
    </article>

    <img src="media/intro.jpg" class="sticky-illustration" alt="Illustratie" />

    <script src="js/sunny-helpers/sticky-illustration.js"></script>
  </body>
</html>
```

## Hoe het werkt (technisch)

Het script gebruikt de **Intersection Observer API**:

1. Het script zoekt naar alle `<section>` elementen met een `data-illustration` attribuut
2. Het observeert wanneer deze secties een trigger lijn passeren (standaard 100px van de top)
3. Wanneer meerdere secties in beeld zijn, kiest het de sectie die het hoogst op de pagina staat
4. De `src` van de sticky afbeelding wordt automatisch aangepast

### Aanpassen van de trigger positie

Je kan de trigger positie aanpassen met het `data-illustration-offset` attribuut op de afbeelding zelf:

```html
<!-- Trigger op 80px van de top (bijvoorbeeld voor sticky headers) -->
<img
  src="media/intro.jpg"
  class="sticky-illustration"
  data-illustration-offset="80"
  alt="Illustratie"
/>
```

```html
<!-- Trigger op 200px van de top (later wisselen) -->
<img
  src="media/intro.jpg"
  class="sticky-illustration"
  data-illustration-offset="200"
  alt="Illustratie"
/>
```

Als je geen `data-illustration-offset` opgeeft, is de standaard waarde **100px**.

## Tips

- **Gebruik consistente afmetingen** voor je illustraties zodat de layout niet springt
- **Optimaliseer je afbeeldingen** - te grote bestanden zorgen voor hapering tijdens het wisselen
- **Test op verschillende schermformaten** - sticky positioning werkt anders op mobiel
- **Niet elke sectie hoeft een afbeelding** - sections zonder `data-illustration` worden gewoon overgeslagen

# CSS 101

CSS bepaalt hoe HTML er in je browser uit ziet. Afmetingen, plaatsing, spacing, typografische details, kleur, animatie, … Het is een uitgebreide taal met veel verschillende termen, maar basiskennis ervan is erg belangrijk in je zelfredzaamheid als digitaal ontwerper.

## Een stylesheet

CSS schrijf je doorgaans in een apart bestand (_stylesheet_) waar je naar verwijst in je HTML bestand.
Dit bestand maakten we al aan in `css/style.css`.

Om dit aan je `index.html` te linken, voeg je in de `<head>` bovenaan het volgende toe:

```html
<link rel="stylesheet" href="css/style.css" />
```

## Hoe schrijf je CSS?

In essentie bepaal je in CSS de `waarde` voor een `eigenschap` van een bepaald `ding`. In code ziet dit er uit als volgt:

```css
ding {
  eigenschap: waarde;
}
```

**Voorbeeld:**

```css
body {
  color: blue;
  font-size: 12px;
}
```

- `h1` = **selector** (wat wil je stylen?)
- `color` = **property** (welke eigenschap?)
- `darkblue` = **value** (wat is de waarde?)

## Wat je kan aanspreken: selectors

### Elementen

```css
p {
  color: #333;
}

a {
  color: blue;
}
```

Past toe op **alle** `<p>` en `<a>` elementen.

### Classes (herbruikbaar)

HTML:

```html
<section class="highlighted">
  <p>Deze sectie is highlighted.</p>
</section>
```

CSS (let op de `.` voor de naam):

```css
.highlighted {
  background-color: yellow;
  padding: 20px;
}
```

### IDs (uniek)

Je sections hebben al IDs! Probeer dit:

```css
#introduction {
  background-color: #f5f5f5;
  border-left: 4px solid blue;
  padding-left: 20px;
}
```

De `#` voor de naam betekent "selecteer het element met dit ID."

## Veelgebruikte properties

### Tekst

```css
body {
  color: #333; /* Tekstkleur */
  font-size: 16px; /* Grootte */
  font-family: Georgia, serif; /* Lettertype */
  line-height: 1.6; /* Regelafstand */
}
```

### Kleuren

```css
.example {
  color: red; /* Naam */
  color: #ff0000; /* Hex (meest gebruikt) */
  color: rgb(255, 0, 0); /* RGB */
}
```

### Ruimte

**Margin** = ruimte _rondom_ (buiten)
**Padding** = ruimte _binnen_

```css
section {
  margin: 20px; /* Rondom */
  padding: 10px; /* Binnen */
}

/* Of per kant: */
section {
  margin-top: 30px;
  padding-left: 20px;
}
```

💡 **Visualiseer:** Inspecteer een element in Developer Tools (Cmd+Option+I) en bekijk het "box model".

### Achtergrond en borders

```css
section {
  background-color: white;
  border: 2px solid black; /* Dikte, stijl, kleur */
  border-radius: 8px; /* Ronde hoeken */
}
```

### Width en centreren

```css
article {
  max-width: 800px; /* Nooit breder dan 800px */
  margin: 0 auto; /* Centreer horizontaal */
  padding: 20px;
}
```

## Block vs. Inline

**Block** elementen (nemen volledige breedte):

- `<div>`, `<p>`, `<section>`, `<h1>`, etc.

**Inline** elementen (nemen alleen benodigde ruimte) en volgen de _baseline_ van het document:

- `<a>`, `<em>`, `<strong>`, `<small>`, etc.

Je kan dit veranderen:

```css
li {
  display: inline-block; /* Naast elkaar, maar met width/height */
  margin-right: 10px;
}
```

## Variabelen - herbruikbare waarden

Bovenaan je stylesheet:

```css
:root {
  --primary-color: #2c3e50;
  --text-color: #333;
  --spacing: 20px;
}
```

Gebruik ze met `var()`:

```css
body {
  color: var(--text-color);
}

h1 {
  color: var(--primary-color);
  margin-bottom: var(--spacing);
}
```

**Voordeel:** Verander de variabele, en alles update automatisch!

## Flexbox - dingen naast elkaar

```css
.container {
  display: flex;
  gap: 20px; /* Ruimte tussen items */
  justify-content: space-between; /* Verdeling */
  align-items: center; /* Verticaal centreren */
}
```

Child elementen staan nu naast elkaar in plaats van onder elkaar.

💡 **Probeer:** Maak je Gallery items naast elkaar staan:

```css
#gallery ul {
  display: flex;
  gap: 15px;
  list-style: none;
}
```

## Grid - rijen en kolommen

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 gelijke kolommen */
  gap: 20px;
}
```

`fr` = "fraction" (breukdeel van beschikbare ruimte)

**Responsive grid:**

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

Dit maakt automatisch zoveel mogelijk kolommen van minimaal 200px!

## Emmet shortcuts

VS Code heeft Emmet ingebouwd. Type en druk **Tab**:

```
m20    →  margin: 20px;
p10    →  padding: 10px;
fz16   →  font-size: 16px;
tac    →  text-align: center;
df     →  display: flex;
```

## Een goed startpunt

Voeg dit toe aan je `style.css` als basis:

```css
:root {
  --text-color: #333;
  --accent-color: #2c3e50;
  --spacing: 20px;
}

body {
  font-family: Georgia, serif;
  color: var(--text-color);
  line-height: 1.6;
  background-color: #f9f9f9;
}

article {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing);
  background-color: white;
}

h1,
h2,
h3 {
  color: var(--accent-color);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em;
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

💡 **Experimenteer:** Verander de variabelen en kijk wat er gebeurt!

## Developer Tools = je beste vriend

1. Rechtsklik op een element → "Inspecteer"
2. Experiment met CSS in het Styles paneel
3. Kopieer werkende CSS naar je bestand

**Tip:** Vink properties aan/uit om te zien wat ze doen!

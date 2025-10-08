# Overzicht

## Projectstructuur

Organiseer je bestanden als volgt:

```
illustratie-wiki-startkit/
├── index.html
├── style.css
├── css/
│   ├── sunny-tools.css
│   └── style.css
├── js/
│   ├── sunny-tools.js
│   └── scripts.js
└── media/
    ├── illustratie1.png
    ├── illustratie2.png
    ├── animatie.gif
    └── video.mp4
```

- `index.html` is de hoofdpagina (standaard naam voor homepages)
- `media/` map voor alle afbeeldingen, video’s en gifs
- `fonts/` map voor alle lettertypes
- Gebruik kleine letters en geen spaties in bestandsnamen

## Workflow: aanpassen → opslaan → automatisch herladen

### VS Code met Live Server

1. Open je projectmap in VS Code (`File` → `Open Folder`)
2. Rechtsklik op `index.html` → `Open with Live Server`
3. Je browser opent automatisch op `http://127.0.0.1:5500`
4. **Pas code aan** in VS Code en **sla op** (`Cmd + S`)
5. De browser refresht **automatisch** - geen handmatige refresh nodig!

### Sublime Text met Browser Refresh

1. Open je HTML bestand in Sublime Text
2. **Pas code aan** en **sla op** (`Cmd + S`)
3. Druk `Cmd + Shift + R` om de browser te refreshen

💡 **Tip:** Plaats je editor en browser naast elkaar om wijzigingen direct te zien

## Developer tools gebruiken

### HTML inspecteren

1. Rechtsklik op element in browser → `Inspecteer`
2. Zie de HTML structuur en welke CSS erop toegepast is
3. Hover over elementen om hun afmetingen te zien

### CSS live aanpassen

1. Open Developer Tools (`Cmd + Option + I`)
2. Selecteer een element
3. Pas CSS properties aan in het rechter paneel
4. Experimenteer zonder je bestanden aan te passen
5. Kopieer werkende CSS terug naar je `style.css`

### Console bekijken

- Zie foutmeldingen als iets niet werkt
- Check of je CSS bestand correct geladen is
- Bij fouten: kijk naar het rode uitroepteken

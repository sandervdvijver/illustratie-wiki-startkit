# Illustratie Wiki startkit

Deze startkit zet jullie op weg om aan de slag te gaan in de module **wiki.illustratie.school**. Ze bevat de structuur, bestanden, how to’s en enkele tools om de sprong in het diepe van coderen voor het web iet of wat aangenamer te maken.

# Voorbereidend werk

Werken voor het web vereist een nogal specifieke aanpak met enkele voorbereidende stappen. Hieronder vind je een opsomming van wat je nodig hebt om aan de slag te kunnen gaan in deze module.

## 1. Download een code editor

Voor het bewerken van HTML, CSS en JavaScript bestanden heb je een code editor nodig. In principe kan je met **Texteditor** of **Notepad** aan de slag, maar je komt een eind verder met een echte code editor. De meest gebruikte van het moment is **Visual Studio Code** van Microsoft. Deze is gratis, heeft veel uitbreidingsmogelijkheden, en werkt op alle besturingssystemen:

**Visual Studio Code installeren**

1. Download: https://code.visualstudio.com/
2. Installeer en open VS Code
3. **Eerste keer openen:** Sla de pop-ups over en wijs alle AI en Sign in suggesties af

Je installeert vervolgens nog één extensie om je leven iets eenvoudiger te maken: **Live Server**.

**Live Server extensie installeren:**

1. Klik op het `Extensions` icoon in de zijbalk (of `Cmd + Shift + X`)
2. Zoek naar `Live Server` van **Ritwick Dey** en installeer

Live Server herlaadt je browser automatisch bij elke wijziging - ideaal voor webontwikkeling.

**Prettier extensie installeren en activeren**

1. Zoek in het Extensions venster naar `Prettier` en installeer
2. Open je settings met `Ctrl + ,` (Windows) of `Cmd + ,`(Mac)
3. Zoek naar 'format on save' en activeer de checkbox
4. Selecteer als 'default formatter' `Prettier`

Deze extensie zet je code netjes wanneer je je bestand bewaart.

## 2. Download de startkit en zet hem klaar

1. Download deze `illustratie-wiki-startkit` via de groene `Code` knop → `Download ZIP`
2. Pak het ZIP bestand uit op een vaste locatie op je computer
3. Hernoem de map naar je gekozen Wikipedia artikel met je naam erachter (bv. `romelu-lukaku`)
4. Open de map in VS Code: `File` → `Open Folder`
5. **Belangrijk:** Bewaar je werk regelmatig
   - Gebruik cloud opslag (Dropbox, Google Drive, iCloud)
   - Of maak handmatige back-ups naar een externe schijf

## 3. Converteer je wikipedia artikel naar minimale HTML

In de `tools/` map vind je een tool om Wikipedia artikels om te zetten naar een propere, minimale en semantisch opgemaakte HTML file.

**Hoe te gebruiken:**

1. Open de `wiki-to-html-tool.html` file in je browser
2. Volg de instructies op deze pagina
3. Kopieer de resulterende html en plak deze in de lege `index.html` file in de projectmap
4. Open vervolgens deze `index.html` in je browser. Zie hier je startpunt!

# Case studies

Ik voegde wat case studies toe:

- de [straight-edge pagina](https://raw.githack.com/sandervdvijver/illustratie-wiki-startkit/main/voorbeelden/straight-edge.html) is een soort moodboard van wat kan.
- de kolommen-en-flex pagina is een deep dive in dingen in kolommen zetten. Bezoek die via [volgende link](https://raw.githack.com/sandervdvijver/illustratie-wiki-startkit/main/voorbeelden/kolommen-en-flex.html).
- de full-width overgangen check je via [deze link](https://raw.githack.com/sandervdvijver/illustratie-wiki-startkit/main/voorbeelden/full-width-overgangen.html). Vooral interessant als je full-bleed beelden wil gebruiken die waarvan de achtergrondkleuren doorlopen in je vormgeving.

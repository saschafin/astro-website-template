# 🚀 Astro Website-Template

Ein **DSGVO-konformer Website-Baukasten** für Dienstleister und Unternehmen. Einfach Platzhalter ersetzen und loslegen - keine Programmierkenntnisse erforderlich!

## ✨ Features

- ✅ **Responsive Design** (Mobile-First)
- ✅ **DSGVO-konformer Cookie-Banner** (Opt-in für Analytics)
- ✅ **Google Analytics** (optional, nur nach Zustimmung)
- ✅ **Impressum-Vorlage** (rechtssicher vorbereitet)
- ✅ **Datenschutzerklärung-Vorlage** (DSGVO-konform)
- ✅ **Automatisches Deployment** via GitHub Actions
- ✅ **SEO-Grundlagen** (Meta-Tags, Description)
- ✅ **Schnelle Ladezeiten** (Astro = minimales JavaScript)

---

## 📋 Schnellstart

### 1. Template verwenden

Klicke oben auf **"Use this template"** → **"Create a new repository"**

### 2. Lokal klonen

```bash
git clone https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
cd DEIN-REPO-NAME
```

### 3. Dependencies installieren

```bash
npm install
```

### 4. Entwicklungsserver starten

```bash
npm run dev
```

Öffne `http://localhost:4321` im Browser.

### 5. Platzhalter ersetzen

Ersetze alle `[PLATZHALTER]` in folgenden Dateien:

| Datei | Inhalt |
|-------|--------|
| `src/pages/index.astro` | Startseite |
| `src/pages/impressum.astro` | Impressum |
| `src/pages/datenschutz.astro` | Datenschutzerklärung |
| `src/components/Header.astro` | Navigation |
| `src/components/Footer.astro` | Fußzeile |

Eine vollständige Liste findest du in **[PLATZHALTER.md](PLATZHALTER.md)**

### 6. Bilder hinzufügen

Lade deine Bilder in `public/images/` hoch:

| Bild | Verwendung |
|------|------------|
| `hero-bg.jpg` | Hintergrundbild Hero-Bereich |
| `portrait.jpg` | Profilbild "Über mich" |
| `service-1.jpg` | Leistung 1 |
| `service-2.jpg` | Leistung 2 |
| `service-3.jpg` | Leistung 3 |
| `logo-symbol.png` | Logo (optional) |

### 7. Favicon hinzufügen

Ersetze die Dateien in `public/favicon/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

---

## 🚀 Deployment

### GitHub Secrets einrichten

1. Gehe zu **Settings** → **Secrets and variables** → **Actions**
2. Füge folgende Secrets hinzu:

| Secret | Wert |
|--------|------|
| `SERVER_IP` | IP-Adresse deines Servers |
| `SERVER_USER` | `root` (oder dein SSH-User) |
| `SERVER_SSH_KEY` | Dein privater SSH-Schlüssel |

### SSH-Key generieren (falls nicht vorhanden)

```bash
ssh-keygen -t ed25519 -C "github-deploy"
```

- **Privater Key** (`~/.ssh/id_ed25519`) → als `SERVER_SSH_KEY` Secret
- **Öffentlicher Key** (`~/.ssh/id_ed25519.pub`) → auf Server in `~/.ssh/authorized_keys`

### Deployment auslösen

Bei jedem `git push` zu `main` wird automatisch:
1. Website gebaut
2. Auf deinen Server hochgeladen

---

## 📁 Projektstruktur

```
├── src/
│   ├── components/          # Wiederverwendbare Bausteine
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/             # Seitenvorlagen
│   │   ├── BaseLayout.astro
│   │   └── LegalLayout.astro
│   ├── pages/               # Seiten (URL-Struktur)
│   │   ├── index.astro      # → /
│   │   ├── impressum.astro  # → /impressum
│   │   └── datenschutz.astro # → /datenschutz
│   └── styles/
│       └── global.css       # Globale Styles
├── public/
│   ├── images/              # Deine Bilder
│   └── favicon/             # Favicon-Dateien
├── .github/workflows/
│   └── deploy.yml           # Automatisches Deployment
└── package.json
```

---

## 🎨 Anpassungen

### Farben ändern

Bearbeite `src/styles/global.css`:

```css
:root {
    --primary: #10b981;      /* Hauptfarbe (grün) */
    --primary-dark: #059669; /* Dunkler Farbton */
    --primary-light: #d1fae5; /* Heller Farbton */
}
```

### Google Analytics aktivieren

In `src/layouts/BaseLayout.astro` die Zeile ändern:

```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Deine Google Analytics ID
```

---

## ⚠️ Rechtliche Hinweise

**Dieses Template enthält Muster für Impressum und Datenschutzerklärung. Diese sind KEINE Rechtsberatung!**

- ✅ Lass deine rechtlichen Texte von einem Anwalt prüfen
- ✅ Passe alle Platzhalter an deine tatsächlichen Daten an
- ✅ Prüfe regelmäßig auf Aktualität

---

## 🆘 Support

Bei Fragen oder Problemen:
- 📧 E-Mail: [EMAIL]
- 🌐 Website: [WEBSITE]

---

## 📄 Lizenz

MIT License - Frei verwendbar für private und kommerzielle Projekte.

---

*Erstellt mit ❤️ von Sascha Finsterwalder | [wissenhandeln.com](https://wissenhandeln.com)*

# 🚀 Server-Setup Anleitung für Kunden

> **Für Claude / Claude Browser / Terminal**
> 
> Diese Anleitung führt dich Schritt für Schritt durch das Einrichten eines neuen Servers für deine Website.

---

## 📋 Voraussetzungen

- [ ] VPS bei einem Anbieter (Contabo, IONOS, Hetzner, etc.)
- [ ] Server-IP-Adresse
- [ ] Root-Passwort
- [ ] SSH-Zugang (Port 22)

---

## 🔧 Schritt 1: Mit Server verbinden

```bash
ssh root@DEINE_SERVER_IP
```

Bei der ersten Verbindung wirst du gefragt, ob du dem Server vertrauen möchtest. Tippe `yes` und drücke Enter.

Gib dann dein Root-Passwort ein.

---

## 🔄 Schritt 2: System aktualisieren

```bash
apt update && apt upgrade -y
```

Warte bis alle Updates installiert sind (kann einige Minuten dauern).

---

## 🌐 Schritt 3: Nginx Webserver installieren

```bash
apt install -y nginx
```

### Nginx starten und aktivieren:

```bash
systemctl start nginx
systemctl enable nginx
systemctl status nginx
```

Du solltest `active (running)` sehen.

---

## 🔒 Schritt 4: SSL-Tools installieren (Let's Encrypt)

```bash
apt install -y certbot python3-certbot-nginx
```

---

## 🛡️ Schritt 5: Firewall einrichten

```bash
apt install -y ufw
```

### Regeln setzen:

```bash
# SSH erlauben (WICHTIG - sonst sperrst du dich aus!)
ufw allow OpenSSH

# Nginx (HTTP + HTTPS) erlauben
ufw allow 'Nginx Full'

# Firewall aktivieren
ufw --force enable

# Status prüfen
ufw status
```

Du solltest sehen:
```
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
```

---

## 📁 Schritt 6: Web-Verzeichnis einrichten

```bash
# Verzeichnis erstellen (falls nicht vorhanden)
mkdir -p /var/www/html

# Berechtigungen setzen
chown -R www-data:www-data /var/www/html

# Test-Seite erstellen
echo '<h1>Server erfolgreich eingerichtet!</h1>' > /var/www/html/index.html
```

### Testen:

Öffne im Browser: `http://DEINE_SERVER_IP`

Du solltest "Server erfolgreich eingerichtet!" sehen.

---

## 🔑 Schritt 7: SSH-Key für GitHub Actions erstellen

Dieser Key ermöglicht automatisches Deployment von GitHub.

```bash
# Key generieren (ohne Passwort)
ssh-keygen -t ed25519 -f /root/.ssh/github_deploy -N '' -C 'github-actions-deploy'

# Public Key zu authorized_keys hinzufügen
cat /root/.ssh/github_deploy.pub >> /root/.ssh/authorized_keys

# Private Key anzeigen (für GitHub Secret)
echo "=== DIESEN KEY ALS GITHUB SECRET SPEICHERN ==="
cat /root/.ssh/github_deploy
echo "=============================================="
```

**WICHTIG:** Kopiere den Private Key (alles von `-----BEGIN` bis `-----END`) und speichere ihn sicher!

---

## ⚙️ Schritt 8: GitHub Secrets einrichten

Gehe zu deinem GitHub Repository:

1. **Settings** → **Secrets and variables** → **Actions**
2. Klicke **New repository secret**
3. Füge diese Secrets hinzu:

| Name | Wert |
|------|------|
| `SERVER_IP` | Deine Server-IP (z.B. `123.456.78.90`) |
| `SERVER_USER` | `root` |
| `SERVER_SSH_KEY` | Der Private Key aus Schritt 7 |

---

## 🌍 Schritt 9: Domain verbinden (optional)

### DNS-Einstellungen bei deinem Domain-Anbieter:

| Typ | Name | Wert | TTL |
|-----|------|------|-----|
| A | @ | DEINE_SERVER_IP | 3600 |
| A | www | DEINE_SERVER_IP | 3600 |

Warte 5-30 Minuten bis die DNS-Änderungen aktiv sind.

### Testen:

```bash
# Von deinem lokalen Computer:
nslookup deinedomain.de
```

---

## 🔐 Schritt 10: SSL-Zertifikat aktivieren

**Erst nachdem die Domain auf den Server zeigt!**

```bash
certbot --nginx -d deinedomain.de -d www.deinedomain.de
```

Folge den Anweisungen:
1. E-Mail-Adresse eingeben
2. Nutzungsbedingungen akzeptieren (A)
3. Redirect von HTTP zu HTTPS wählen (2)

### Automatische Erneuerung testen:

```bash
certbot renew --dry-run
```

---

## ✅ Schritt 11: Deployment testen

1. Gehe zu deinem GitHub Repository
2. Mache eine kleine Änderung (z.B. in README.md)
3. Pushe zu `main`
4. Gehe zu **Actions** und schaue ob der Workflow läuft
5. Nach erfolgreicher Ausführung: Website im Browser prüfen

---

## 🎉 Fertig!

Dein Server ist jetzt bereit für automatisches Deployment!

Bei jedem Push zu `main` wird deine Website automatisch aktualisiert.

---

## 📚 Nützliche Befehle

### Nginx

```bash
# Status prüfen
systemctl status nginx

# Neustarten
systemctl restart nginx

# Konfiguration testen
nginx -t

# Logs anzeigen
tail -f /var/log/nginx/error.log
```

### Firewall

```bash
# Status
ufw status

# Regel hinzufügen
ufw allow PORT

# Regel entfernen
ufw delete allow PORT
```

### SSL

```bash
# Zertifikat erneuern
certbot renew

# Zertifikate auflisten
certbot certificates
```

### Server

```bash
# Neustart
reboot

# Speicherplatz prüfen
df -h

# RAM prüfen
free -h
```

---

## ❓ Problemlösungen

### "Permission denied" bei SSH

```bash
# Auf dem Server: SSH-Key Berechtigungen prüfen
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Website zeigt alte Version

```bash
# Nginx neustarten
systemctl restart nginx

# Browser-Cache leeren (Strg+Shift+R)
```

### SSL-Zertifikat abgelaufen

```bash
certbot renew --force-renewal
systemctl restart nginx
```

---

## 🆘 Support

Bei Fragen: [DEINE_EMAIL]

---

*Anleitung erstellt von saVis Ultra | Stand: Februar 2026*

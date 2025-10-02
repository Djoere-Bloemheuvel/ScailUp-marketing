# Google Calendar OAuth2 Setup

Deze instructies helpen je om Google Calendar integratie in te stellen voor je meeting scheduler.

## 🎯 Stap 1: Google Cloud Console Project

1. Ga naar [Google Cloud Console](https://console.cloud.google.com/)
2. Maak een nieuw project aan of selecteer een bestaand project
3. Noteer je Project ID

## 🔑 Stap 2: Google Calendar API Inschakelen

1. Ga naar **APIs & Services** > **Library**
2. Zoek naar "Google Calendar API"
3. Klik op **Enable**

## 🛡️ Stap 3: OAuth 2.0 Credentials Maken

1. Ga naar **APIs & Services** > **Credentials**
2. Klik op **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Configureer OAuth consent screen (indien nodig):
   - Application type: **External**
   - App name: **Buildrs Meeting Scheduler**
   - User support email: **admin@buildrs.ai**
   - Developer contact email: **admin@buildrs.ai**
   - Scopes: Add `https://www.googleapis.com/auth/calendar.readonly` en `https://www.googleapis.com/auth/calendar.events`

4. Maak OAuth client ID:
   - Application type: **Web application**
   - Name: **Buildrs Meeting Scheduler**
   - Authorized redirect URIs: 
     - `http://localhost:4327/api/auth/google-callback` (development)
     - `https://yourdomain.com/api/auth/google-callback` (production)

5. Download de credentials JSON of kopieer Client ID en Client Secret

## 🔧 Stap 4: Environment Variables Instellen

Open je `.env` bestand en vervang de placeholder waarden:

```env
# Google Calendar OAuth2 Configuration
GOOGLE_CLIENT_ID=your_actual_client_id_from_google_cloud
GOOGLE_CLIENT_SECRET=your_actual_client_secret_from_google_cloud
```

**Voorbeeld:**
```env
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

## 🚀 Stap 5: Autorisatie Flow Starten

1. Start je development server: `npm run dev`
2. Ga naar: `http://localhost:4327/api/auth/google-auth`
3. Log in met je Google account
4. Geef permissies voor Calendar toegang
5. Je wordt geredirect naar de meeting pagina met success melding

## 🧪 Stap 6: Testen

Test of de Google Calendar integratie werkt:

```bash
curl "http://localhost:4327/api/meetings/google-availability?startDate=2025-10-01&endDate=2025-10-01"
```

Je zou echte availability slots moeten zien op basis van je Google Calendar.

## 📋 Features van de Google Calendar Integratie

✅ **Real-time calendar data** - Echte busy/free tijden van je Google Calendar  
✅ **Working hours configuratie** - Instelbare werktijden (standaard: Ma-Vr 09:00-17:00)  
✅ **Timezone support** - Europe/Amsterdam timezone  
✅ **30-minute slots** - Automatische 30-minuten tijdsloten  
✅ **Event creation** - Automatisch calendar events aanmaken bij booking  
✅ **Email notifications** - Automatische reminders via Google Calendar  

## 🔒 Security Notes

- Client Secret moet altijd veilig bewaard worden
- Tokens worden tijdelijk opgeslagen (in productie: gebruik database encryption)
- Refresh tokens vervallen na 6 maanden inactiviteit
- Alleen readonly + events permissions zijn nodig

## 🚨 Troubleshooting

**"redirect_uri_mismatch" error:**
- Controleer of de redirect URI exact matcht in Google Cloud Console
- Let op http vs https en poorten

**"access_denied" error:**
- Controleer OAuth consent screen configuratie
- Zorg dat je account toegang heeft tot de app

**"insufficient_scope" error:**
- Voeg Calendar scopes toe aan OAuth consent screen
- Hernieuw autorisatie flow

## 🔄 Van HubSpot naar Google Calendar

Na setup kun je de meeting scheduler switchen naar Google Calendar:

1. Verander `HUBSPOT_API_MODE=direct` naar `GOOGLE_CALENDAR_MODE=enabled` in `.env`
2. Update de frontend om `/api/meetings/google-availability` te gebruiken
3. Test de volledige booking flow

De integratie behoudt je custom UI maar gebruikt nu echte Google Calendar data!
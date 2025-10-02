# Meeting Scheduler + n8n Webhook Setup

## Overview
De meeting scheduler gebruikt nu een **hybride approach**:

🔍 **HubSpot** - Alleen voor availability checking (READ permissions)
🚀 **n8n Webhook** - Voor alle booking logic en processing
✅ **Elegant separation** - Simple, flexible, powerful

## Architecture

```
Website Form → HubSpot (availability) → n8n Webhook (booking) → HubSpot/Email/Calendar
```

## Setup Steps

### 1. HubSpot Setup (Simplified)

**Veel minder scopes nodig!**

1. **Private App scopes (READ only):**
   - ✅ `crm.objects.contacts.read`
   - ✅ `scheduler.meetings.meeting-link.read`
   - ❌ ~~`contacts.write`~~ (n8n doet dit)
   - ❌ ~~`meetings.write`~~ (n8n doet dit)

2. **Add to .env:**
```bash
HUBSPOT_API_KEY=your_read_only_token
```

### 2. n8n Webhook Setup

**Create n8n workflow:**

1. **Webhook Trigger Node:**
   - Method: `POST`
   - Path: `/webhook/meeting-booking`
   - Response: `Respond to Webhook`

2. **Expected Payload:**
```json
{
  "type": "meeting_booking_request",
  "timestamp": "2025-09-30T10:50:00.000Z",
  "source": "buildrs-website",
  "meeting": {
    "startTime": "2025-10-01T14:00:00.000Z",
    "endTime": "2025-10-01T14:30:00.000Z",
    "duration": 30,
    "timezone": "Europe/Amsterdam"
  },
  "contact": {
    "email": "contact@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "company": "Example Corp",
    "phone": "+31612345678"
  },
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "referrer": "https://buildrs.ai/",
    "ip": "192.168.1.1"
  }
}
```

### 3. n8n Workflow Logic

**Suggested workflow:**

1. **Webhook Trigger** - Receive booking request
2. **HubSpot Contact Node** - Create/update contact in HubSpot
3. **HubSpot Meeting Node** - Create meeting in HubSpot calendar
4. **Email Node** - Send confirmation email to contact
5. **Slack/Teams Node** - Notify team of new booking
6. **Google Calendar Node** - Add to personal calendar
7. **Response Node** - Send success response

### 4. Environment Configuration

```bash
# HubSpot (Availability only)
HUBSPOT_API_MODE=direct
HUBSPOT_API_KEY=your_read_only_token

# n8n Webhook (Booking processing)
N8N_MEETING_WEBHOOK_URL=https://your-n8n.example.com/webhook/meeting-booking
```

## n8n Workflow Benefits

✅ **Visual workflow** - Easy to modify booking logic
✅ **Multiple integrations** - HubSpot + Email + Calendar + Slack
✅ **Error handling** - Retry logic, fallbacks
✅ **Custom business rules** - Validation, routing, notifications
✅ **Audit trail** - Full logging of booking process
✅ **A/B testing** - Easy to test different flows
✅ **Webhooks** - Can notify other systems

## Example n8n Nodes

**Basic workflow:**
```
Webhook → HubSpot Contact → HubSpot Meeting → Email → Response
```

**Advanced workflow:**
```
Webhook → Validate → HubSpot Contact → Check Conflicts → 
HubSpot Meeting → Google Calendar → Email Confirmation → 
Slack Notification → CRM Update → Response
```

## Error Handling

**Website fallback:**
- If n8n webhook fails → Show "processing manually" message
- User always gets immediate feedback
- No broken booking experience

**n8n error handling:**
- Retry failed API calls
- Send admin notifications on errors
- Log all booking attempts
- Graceful degradation

## Testing

**Test the webhook:**
```bash
curl -X POST https://your-n8n.example.com/webhook/meeting-booking \
  -H "Content-Type: application/json" \
  -d '{
    "type": "meeting_booking_request",
    "meeting": {
      "startTime": "2025-10-01T14:00:00.000Z",
      "endTime": "2025-10-01T14:30:00.000Z"
    },
    "contact": {
      "email": "test@example.com",
      "firstName": "Test",
      "lastName": "User"
    }
  }'
```

**Test full flow:**
1. Visit `/meeting` page
2. Select date/time
3. Fill contact form
4. Check n8n execution log
5. Verify HubSpot meeting created
6. Check email received

## Deployment

**Production URLs:**
```bash
N8N_MEETING_WEBHOOK_URL=https://buildrs-automation.n8n.cloud/webhook/meeting-booking
```

**Security:**
- Use HTTPS only
- Add webhook authentication if needed
- Rate limiting on n8n webhook
- Input validation in n8n

## Next Steps

1. **Create n8n account** (if needed)
2. **Import workflow template** (we can provide)
3. **Configure HubSpot nodes** with your credentials
4. **Set webhook URL** in environment
5. **Test end-to-end flow**
6. **Add custom business logic** as needed

This approach gives you **maximum flexibility** while keeping the frontend simple! 🚀
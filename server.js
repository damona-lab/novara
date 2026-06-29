const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/consultation', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  console.log('Consultation request:', { name, email, phone, service, message });
  res.json({ success: true, message: 'Consultation request received!' });
});

app.post('/api/appointment', (req, res) => {
  const { firstName, lastName, email, phone, meetingType, purpose, date, notes } = req.body;
  console.log('Appointment request:', { firstName, lastName, email, phone, meetingType, purpose, date, notes });
  res.json({ success: true, message: 'Appointment request received!' });
});

app.post('/api/quote', (req, res) => {
  const { name, company, email, phone, services, budget, deadline, description, source } = req.body;
  console.log('Quote request:', { name, company, email, phone, services, budget, deadline, description, source });
  res.json({ success: true, message: 'Quote request received!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact message:', { name, email, message });
  res.json({ success: true, message: 'Message sent!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
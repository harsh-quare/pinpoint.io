# pinpoint.io  

Real-time location tracking app built with **Node.js, Express, Socket.IO, and Leaflet.js**.  
This project allows multiple users to share their live location on a map and see others' positions update in real-time.  

---

## Features  
- Real-time geolocation tracking using **HTML5 Geolocation API**  
- Real-time updates with **WebSockets (Socket.IO)**  
- Interactive map with **Leaflet.js** + OpenStreetMap tiles  
- Auto-handling of user join/disconnect with dynamic markers  

---

## Project Structure  
<pre>
pinpoint.io/
│── app.js # Express + Socket.IO server
│── package.json # Dependencies and scripts
│── views/index.ejs # Main frontend page
│── public/
│ ├── css/style.css # Styles
│ └── js/script.js # Client-side logic
│── steps.yaml # Implementation breakdown
│── .gitignore
</pre>
---

## Setup & Installation  

### 1. Clone the repo  
```bash
git clone https://github.com/harsh-quare/pinpoint.io.git
cd pinpoint.io
```

### 2. Install dependencies 
```bash
npm install
```

### 3. Run the server  
```bash
node app.js
```

Server will start on http://localhost:3000

## Demo
- Open http://localhost:3000 in two browser tabs/devices.
- Allow location access.
- You’ll see live location markers update in real-time.

## Future Scope – Productized Use Cases

This project is designed as a foundation for real-world applications. With incremental development, pinpoint.io can evolve into:

- **Fleet & Logistics Tracking**  
  Track delivery vans, cabs, or service agents in real-time. Admin dashboards with live monitoring, historical trip data, and performance analytics.  

- **Live Trip Sharing (Consumer Use Case)**  
  Allow users to share their journey link (like Uber/Ola). Friends or family can follow progress securely, with auto-expiring links for privacy.  

- **Group/Team Location Sharing**  
  For treks, marathons, or events — multiple users can join a “room” and see each other’s positions on a shared map in real-time.  

- **Privacy-First Location Sharing**  
  Add end-to-end encryption for location streams, temporary session-based sharing, and granular control over visibility.  


## Contribution
- Fork this repo
- Create a new branch (feature-xyz)
- Commit your changes
- Submit a Pull Request

## License
MIT License. Free to use and modify.

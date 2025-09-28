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
pinpoint.io/
│── app.js # Express + Socket.IO server
│── package.json # Dependencies and scripts
│── views/index.ejs # Main frontend page
│── public/
│ ├── css/style.css # Styles
│ └── js/script.js # Client-side logic
│── steps.yaml # Implementation breakdown
│── .gitignore

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

## Contribution
- Fork this repo
- Create a new branch (feature-xyz)
- Commit your changes
- Submit a Pull Request

## License
MIT License. Free to use and modify.

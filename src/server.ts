import app from "./app.js";

// Port 3000 or whatever port is defined in .env
const PORT = process.env.PORT || 3000;

// Initializing the server
app.listen(PORT, () => {
    console.log(`🔌 Server running at http://localhost:${PORT}`)
});
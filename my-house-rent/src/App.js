import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const houses = [
  { id: 1, name: "Luxury Villa", location: "Vijayawada", details: "3 BHK, Garden, AC" },
  { id: 2, name: "City Apartment", location: "Guntur", details: "2 BHK, Near Bus Stand" },
];

function Home({ searchTerm, setSearchTerm }) {
  const filtered = houses.filter(h => h.location.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
      <input type="text" placeholder="Search location..." onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filtered.map(h => (
          <li key={h.id}>
            <Link to={`/house/${h.id}`}>{h.name} - {h.location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HouseDetails() {
  // ఇక్కడ URL నుండి ID తీసుకుని సంబంధిత ఇంటిని చూపాలి
  return <h2>House Details Page</h2>;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
    </Router>
  );
}
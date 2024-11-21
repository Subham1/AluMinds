import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy Data
const data = [
  { name: 'Point 1', elongation: 5, conductivity: 3, uts: 8 },
  { name: 'Point 2', elongation: 7, conductivity: 5, uts: 6 },
  { name: 'Point 3', elongation: 6, conductivity: 4, uts: 7 },
  { name: 'Point 4', elongation: 8, conductivity: 6, uts: 9 },
  { name: 'Point 5', elongation: 5, conductivity: 7, uts: 8 },
  { name: 'Point 6', elongation: 9, conductivity: 6, uts: 7 },
  { name: 'Point 7', elongation: 10, conductivity: 5, uts: 6 },
  { name: 'Point 8', elongation: 7, conductivity: 4, uts: 7 },
  { name: 'Point 9', elongation: 6, conductivity: 6, uts: 8 },
  { name: 'Point 10', elongation: 8, conductivity: 7, uts: 9 },
];

const LineGraphs = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Three columns
        gap: '20px', // Space between cards
        padding: '20px',
      }}
    >
      {/* Elongation Graph */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          height: '230px', // Compact height for the card
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} style={{marginLeft:"-25px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="elongation" stroke="#4caf50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Conductivity Graph */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          height: '230px', // Compact height for the card
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} style={{marginLeft:"-25px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="conductivity" stroke="#3f51b5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tensile Strength Graph */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          height: '230px', // Compact height for the card
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} style={{marginLeft:"-25px"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uts" stroke="#ff5722" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraphs;

import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const RatingChart = ({ ratings }) => {
    if (!ratings || ratings.length === 0)
        return null;
    const sortRating = [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));


    return (
      <div className="bg-blue-50 shadow-xl p-6 rounded-2xl w-full">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Service Ratings Overview ⭐
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={sortRating}
            layout="vertical"
            margin={{ top: 5, right: 40, left: 10, bottom: 30 }}
          >
            <XAxis type="number" tick={{ fill: "#627382" }} />

            <YAxis
              type="category"
              dataKey="name"
              width={70}
              tick={{ fill: "#627382", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{ fill: "#f9f9f9" }} />
            <Legend />
            <Bar
              dataKey="count"
              fill="#f97316"
              radius={[5, 0, 5, 0]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default RatingChart;
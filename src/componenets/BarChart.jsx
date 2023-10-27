import React from 'react';

function generatePriceBars(averagePrice, totalRooms, minPrice, maxPrice) {
  const barCount = maxPrice - minPrice + 1;
  const bars = [];

  for (let price = minPrice; price <= maxPrice; price++) {
    const roomCount = price === averagePrice ? totalRooms : 0;
    const barHeight = (roomCount / totalRooms) * 100;

    bars.push(
      <div
        key={price}
        className="absolute w-[2%] bg-slate-900 bottom-3 z-[-1]"
        style={{
          left: `${((price - minPrice) / barCount) * 100}%`,
          height: `${barHeight}%`,
        }}
      />
    );
  }

  return bars;
}

export default function BarChart({ averagePrice, totalRooms, minPrice, maxPrice }) {
  return (
    <>
      {generatePriceBars(averagePrice, totalRooms, minPrice, maxPrice)}
    </>
  );
}

"use client";

import { useState } from "react";

export default function RangeSlider() {
  const min = 0;
  const max = 10000;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5000);

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      {/* Slider */}
      <div className="relative h-[50px]">

        {/* Gray track */}
        <div
          className="
            absolute
            top-1/2
            left-0
            right-0
            h-[3px]
            -translate-y-1/2
            bg-[#333333]
          "
        />

        {/* Green active track */}
        <div
          className="
            absolute
            top-1/2
            h-[3px]
            -translate-y-1/2
            bg-primary
          "
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* Minimum slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value < maxValue) {
              setMinValue(value);
            }
          }}
          className="range-slider"
        />

        {/* Maximum slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value > minValue) {
              setMaxValue(value);
            }
          }}
          className="range-slider"
        />

        {/* Minimum label */}
        <span
          className="absolute top-[32px] -translate-x-1/2 text-white text-[18px]"
          style={{ left: `${minPercent}%` }}
        >
          ${minValue}
        </span>

        {/* Maximum label */}
        <span
          className="absolute top-[32px] -translate-x-1/2 text-white text-[18px]"
          style={{ left: `${maxPercent}%` }}
        >
          ${maxValue}
        </span>
      </div>
    </div>
  );
}
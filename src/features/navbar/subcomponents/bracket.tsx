import React from "react";

export const Bracket = ({
  direction = "left", // 'left' или 'right'
  height = "100%", // любая CSS‑высота: '20rem', '100%', '200px'…
  width = "20px", // ширина скобки
  stroke = "currentColor", // цвет линии
  strokeWidth = 2, // толщина линии
  className = "",
}) => {
  const viewWidth = 50;
  const viewHeight = 100;

  // Для левой скобки стартовая точка справа, управляющая — слева.
  // Для правой — наоборот.
  const startX = direction === "left" ? viewWidth * 0.9 : viewWidth * 0.1;
  const ctrlX = direction === "left" ? viewWidth * 0.2 : viewWidth * 0.8;

  // M = moveTo, C = cubic Bézier curve
  const pathD = `
    M ${startX},0
    C ${ctrlX},0 ${ctrlX},${viewHeight} ${startX},${viewHeight}
  `;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      preserveAspectRatio="none"
    >
      <path
        d={pathD.trim()}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

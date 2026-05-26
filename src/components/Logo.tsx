import React from 'react';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return React.createElement(
    "div",
    { className: `flex items-center gap-3 select-none ${className}`, id: "company-logo" },
    React.createElement(
      "svg",
      { viewBox: "0 0 540 220", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-full w-auto" },
      React.createElement("path", {
        d: "M36 124 L64 124 L165 52 L266 124 L294 124 L165 31 Z",
        fill: "#0F4C81",
      }),
      React.createElement("path", {
        d: "M102 124 L126 124 L165 96 L204 124 L228 124 L165 79 Z",
        fill: "#D4A373",
      }),
      React.createElement("path", {
        d: "M136 124 L164 124 L265 52 L366 124 L394 124 L265 31 Z",
        transform: "translate(5, -22)",
        fill: "#083E6E",
      }),
      React.createElement("path", {
        d: "M202 124 L226 124 L265 96 L304 124 L328 124 L265 79 Z",
        transform: "translate(5, -22)",
        fill: "#D4A373",
      }),
      React.createElement("path", {
        d: "M236 124 L264 124 L365 52 L466 124 L494 124 L365 31 Z",
        fill: "#0F4C81",
      }),
      React.createElement("path", {
        d: "M302 124 L326 124 L365 96 L404 124 L428 124 L365 79 Z",
        fill: "#D4A373",
      }),
      React.createElement("rect", {
        x: "258",
        y: "102",
        width: "10",
        height: "10",
        fill: "#D4A373",
        rx: "1",
      }),
      React.createElement("rect", {
        x: "271",
        y: "102",
        width: "10",
        height: "10",
        fill: "#D4A373",
        rx: "1",
      }),
      React.createElement("rect", {
        x: "258",
        y: "115",
        width: "10",
        height: "10",
        fill: "#D4A373",
        rx: "1",
      }),
      React.createElement("rect", {
        x: "271",
        y: "115",
        width: "10",
        height: "10",
        fill: "#D4A373",
        rx: "1",
      }),
      React.createElement("rect", {
        x: "36",
        y: "121",
        width: "458",
        height: "6",
        fill: "#0F4C81",
        rx: "2",
      }),
      React.createElement(
        "text",
        {
          x: "270",
          y: "185",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: "800",
          fontSize: "36",
          letterSpacing: "2.5",
          fill: "#0F4C81",
          textAnchor: "middle",
        },
        "THE REAL ESTATES"
      )
    )
  );
}

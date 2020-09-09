import * as d3 from "d3";

import "./main.css";
import data from "./data.csv";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 600)
  .attr("height", 500);

const g = svg.append("g").attr("transform", `translate(10, 10)`);

const barHeight = 50;

g.selectAll("rect")
  .data(data)
  .join((enter) => enter.append("rect"))
  .attr("class", "bar")
  .attr("height", barHeight)
  .attr("width", (d) => d.value * 7)
  .attr("y", (_, i) => i * (barHeight + 5))
  .attr("x", 60);

g.selectAll("text")
  .data(data)
  .join((enter) => enter.append("text"))
  .attr("height", barHeight)
  .text((d) => `${d.title}:`)
  .attr("y", (_, i) => i * (barHeight + 5) + barHeight / 2 + 3);

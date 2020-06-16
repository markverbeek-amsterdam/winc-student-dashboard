const victoryTheme = {
  area: {
    style: {
      data: {
        fill: "#212121",
      },
      labels: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 13,
        letterSpacing: "normal",
        padding: 8,
        fill: "#666666",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 550,
    padding: 50,
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: "#ccc",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      axisLabel: {
        textAnchor: "middle",
        fontFamily: "Roboto, sans-serif",
        fontSize: 6,
        letterSpacing: "normal",
        padding: 50,
        fill: "#ccc",
        stroke: "transparent",
        strokeWidth: 0,
      },
      grid: {
        fill: "none",
        stroke: "none",
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "#ccc",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      tickLabels: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 7,
        letterSpacing: "normal",
        padding: 4,
        margin: 50,
        fill: "#666",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 450,
    padding: 150,
  },
  bar: {
    style: {
      data: {
        padding: 0,
        strokeWidth: 0,
      },
      labels: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 9,
        letterSpacing: "normal",
        padding: 4,
        fill: "#666666",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
    width: 350,
    height: 350,
    padding: 4,
  },
  chart: {
    width: 800,
    height: 300,
    padding: 50,
  },
  group: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    width: 350,
    height: 350,
    padding: 50,
  },
  legend: {
    colorScale: [
      "#F4511E",
      "#FFF59D",
      "#DCE775",
      "#8BC34A",
      "#00796B",
      "#006064",
    ],
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 13,
        letterSpacing: "normal",
        padding: 8,
        fill: "#666666",
        stroke: "transparent",
        strokeWidth: 0,
      },
      title: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 13,
        letterSpacing: "normal",
        padding: 5,
        fill: "#666666",
        stroke: "transparent",
        strokeWidth: 0,
      },
    },
  },
};

export default victoryTheme;

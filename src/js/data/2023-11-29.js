dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Generation Terrorists", key: "GT" },
      { name: "Gold Against The Soul", key: "GATS" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Slash n Burn",
    img: "NcHbmjf.jpg",
    opts: {
      series: [ "GT"]
    }
  },
  {
    name: "Natwest, Barclays, Midlands, Lloyds",
    img: "NcHbmjf.jpg",
    opts: {
      series: [ "GT"]
    }
  },
  {
    name: "Born To End",
    img: "NcHbmjf.jpg",
    opts: {
      series: [ "GT"]
    }
  },
  {
    name: "Motorcycle Emptiness",
    img: "NcHbmjf.jpg",
    opts: {
      series: [ "GT"]
    }
  },
  {
    name: "Sleepflower",
    img: "YrVV6Y6.jpg",
    opts: {
      series: [ "Gold"]
    }
  }
];

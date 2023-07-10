var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["New Book Last Day", "Book Issued", "New Member", "Not Returned"],
    // Information about the dataset
    datasets: [
      {
        label: "Book",
        backgroundColor: "lightblue",
        borderColor: "royalblue",
        data: [40, 70, 120, 150],
      },
    ],
  },

  // Configuration options
  options: {
    layout: {
      padding: 10,
    },
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Book Reports",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Precipitation in mm",
          },
        },
      ],
      //   xAxes: [
      //     {
      //       scaleLabel: {
      //         display: true,
      //         labelString: "Month of the Year",
      //       },
      //     },
      //   ],
    },
  },
});

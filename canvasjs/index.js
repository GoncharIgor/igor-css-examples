window.onload = function () {
    const chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "Fruits sales",
            fontSize: 32,
        },
        theme: "light2",
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", "pie", "bar" etc.
                type: "column",
                name: "First Quarter",
                showInLegend: true,
                dataPoints: [
                    { label: "banana", y: 58 },
                    { label: "orange", y: 69 },
                    { label: "apple", y: 80 },
                    { label: "mango", y: 74 },
                    { label: "grape", y: 64 },
                    { label: "passionfruit", y: 24 },
                    { label: "cherry", y: 34 }
                ]
            },
            {
                type: "column",
                name: "Second Quarter",
                showInLegend: true,
                dataPoints: [
                    { label: "banana", y: 63 },
                    { label: "orange", y: 73 },
                    { label: "apple", y: 88 },
                    { label: "mango", y: 77 },
                    { label: "grape", y: 60 },
                    { label: "passionfruit", y: 74 },
                    { label: "cherry", y: 48 }
                ]
            }
        ],
        // Set axisY properties here
        axisY:{
            prefix: "$",
            suffix: "K",
            lineThickness: 2, // the vertical gray line on the left
        },
    });

    chart.render();
}

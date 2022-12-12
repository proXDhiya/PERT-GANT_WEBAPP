anychart.onDocumentReady(() => {
    // data
    var data = [
        {id: "1", duration: 1, name: "Task A"},
        {id: "2", duration: 4, name: "Task B"},
        {id: "3", duration: 3, name: "Task C"},
        {id: "4", duration: 1, name: "Task D"},
        {id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
        {id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
    ];

    // create a PERT chart
    chart = anychart.pert();

    // set chart data
    chart.data(data, "asTable");

    // set the title of the chart
    chart.title("PERT Chart");

    // set the container id for the chart
    chart.container("pertDiagram");

    // initiate drawing the chart
    chart.draw();
});

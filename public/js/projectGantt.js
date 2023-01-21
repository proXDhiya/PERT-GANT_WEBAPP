anychart.onDocumentReady(() => {
    // Data for gantt chart
    var data = [
        {id: "1", name: "Task A", start: "2019-01-01", end: "2019-01-02"},
        {id: "2", name: "Task B", start: "2019-01-02", end: "2019-01-06"},
        {id: "3", name: "Task C", start: "2019-01-03", end: "2019-01-05"},
        {id: "4", name: "Task D", start: "2019-01-04", end: "2019-01-05"},
        {id: "5", name: "Task AD", start: "2019-01-05", end: "2019-01-06", dependsOn: ["1", "4"]},
        {id: "6", name: "Task BC", start: "2019-01-06", end: "2019-01-07", dependsOn: ["2", "3"]}
    ];

    // tree data
    var treeData = anychart.data.tree(data, "asTable");

    // create a gantt chart
    chart = anychart.ganttProject();

    // set chart data
    chart.data(treeData);

    // set the title of the chart
    chart.title("Gantt Chart");

    // set the container id for the chart
    chart.container("ganttDiagram");

    // initiate drawing the chart
    chart.draw();
});

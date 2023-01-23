anychart.onDocumentReady(() => {
    // Data for gantt chart
    var data = JSON.parse(document.querySelector('.table__save').value);

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

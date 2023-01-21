anychart.onDocumentReady(() => {
    // data
    var data = JSON.parse(document.querySelector('.table__save').value);

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

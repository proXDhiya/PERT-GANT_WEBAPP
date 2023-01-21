// whene the html table is updated, this function is called
// to update the project table

const table = document.querySelector('.table__table');
const TableSaveTag = document.querySelector('.table__save');
const TableData = [];

table.addEventListener('change', (e) => {
    // Delete all the data in the TableData object
    TableData.splice(0, TableData.length);

    for (let i = 1; i <= 50; i++) {
        const row = {};

        // add data from the table to row object
        row.id = table.children[0].children[i].children[0].innerHTML.split(' ')[4].split('=')[1].split('"')[1]
        row.name = table.children[0].children[i].children[1].firstChild.value;
        row.duration = table.children[0].children[i].children[2].firstChild.value;

        // get the dependencies
        const temp = table.children[0].children[i].children[4].firstChild.value.split(',');

        if(!(temp.length == 1 && temp[0] == '')) {
            row.dependsOn = [];
            for (let j = 0; j < temp.length; j++) {
                if(parseInt(temp[j]) >= 1 && parseInt(temp[j]) <= 50 && parseInt(temp[j]) != i)
                    row.dependsOn.push(temp[j]);
                else if (temp[j] != '' || parseInt(temp[j]) == i)
                    console.error(`Invalid dependency: ${temp[j]} in row ${i}`);
            }
        }
        
        // add row to data object
        if (row.name != '' && row.duration != '')
            TableData.push(row);
    }

    // save the data in TableSaveTag
    TableSaveTag.value = JSON.stringify(TableData);
});

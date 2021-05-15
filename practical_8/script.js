function task_1(text){
    var task = document.getElementById("task_1");
    task.innerHTML += `<i><b><u>${text}</u></b></i>`;
}
function task_2(num1, num2){
    var task = document.getElementById("task_2");
    task.innerHTML += `<p>${num1} + ${num2} = ${num1 + num2}</p>`;
}
function task_3(text, font){
    var task = document.getElementById("task_3");
    task.innerHTML += `<p style="font-size: ${font}px;">${text}, ფონტის ზომა - ${font}</p>`;
}
function task_4(width){
    var task = document.getElementById("task_4");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="width: ${width}px;">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_5(height){
    var task = document.getElementById("task_5");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="height: ${height}px;">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_6(width, height){
    var task = document.getElementById("task_6");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="width: ${width}px; height: ${height}px;">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_7(width, height, bg){
    var task = document.getElementById("task_7");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="width: ${width}px; height: ${height}px; background-color: ${bg};">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_8(width, height, borderWidth){
    var task = document.getElementById("task_8");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="width: ${width}px; height: ${height}px; border-width: ${borderWidth}px;">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_9(width, height, bg, borderWidth){
    var task = document.getElementById("task_9");
    task.innerHTML += `
        <style>
            table, td {
                border: 1px solid black;
            }
        </style>
        <table style="width: ${width}px; height: ${height}px; background-color: ${bg}; border-width: ${borderWidth}px;">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `;
}
function task_11(){
    var task = document.getElementById("task_11");
    for (i = 1; i <= 10; i++){
        task.innerHTML += `<p>${i}</p>`;
    }
}
function task_12(n){
    var task = document.getElementById("task_12");
    for (i = 1; i < n; i++){
        task.innerHTML += `<p>${i}</p>`;
    }
}
function task_13(m, n){
    var task = document.getElementById("task_13");
    for (i = m; i < n; i++){
        task.innerHTML += `<p>${i}</p>`;
    }
}
function task_14(m, n){
    var task = document.getElementById("task_14");
    if (m < n){
        for (i = m; i < n; i++){
            task.innerHTML += `<p>${i}</p>`;
        }
    }
    else {
        for (i = n; i < m; i++){
            task.innerHTML += `<p>${i}</p>`;
        }
    }   
}
function task_15_16(rows, cols){
    var task = document.getElementById("task_15_16");
    var table = document.createElement("table");
    var cellCount = 1; 
    for (i = 0; i < rows; i++){
        var row = document.createElement("tr");
        for (j = 0; j < cols; j++){
            var col = document.createElement("td");
            var text = document.createTextNode(`${cellCount}`); 
            col.appendChild(text);
            row.appendChild(col);
            cellCount++;
        }
        table.appendChild(row);
    }
    task.appendChild(table);  
}
function task_17(rows, cols, width, height, bg, borderWidth){
    var task = document.getElementById("task_17");
    var table = document.createElement("table");
    table.style.width = width + "px";
    table.style.height = height + "px";
    table.style.bg = bg;
    table.style.borderWidth = borderWidth + "px";

    var cellCount = 1; 
    for (i = 0; i < rows; i++){
        var row = document.createElement("tr");
        for (j = 0; j < cols; j++){
            var col = document.createElement("td");
            var text = document.createTextNode(`${cellCount}`); 
            col.appendChild(text);
            row.appendChild(col);
            cellCount++;
        }
        table.appendChild(row);
    }
    task.appendChild(table);  
}
function task_18(array, x){
    var task = document.getElementById("task_18");
    var countLess = 0;
    var countGreater = 0;

    for (i = 0; i < array.length; i++){
        if (array[i] < x){
            countLess++;
        }
        else {
            countGreater++;
        }
    }
    task.innerHTML += `
        <p>ნაკლები - ${countLess}, მეტი - ${countGreater}</p>
    `;
}
function task_20(tableData) {
    var task = document.getElementById("task_20");
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var countRow = 0;
    var countCol = 0;

    tableData.forEach(rowData => {
      var row = document.createElement('tr');
  
      rowData.forEach(cellData => {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(countRow + countCol));
        row.appendChild(cell);
        countCol++;
      });
  
      tableBody.appendChild(row);
      countRow++;
    });
  
    table.appendChild(tableBody);
    task.appendChild(table);
}



document.addEventListener("DOMContentLoaded", function(event) { 
    task_1("დავალება_1");
    task_2(666, 999);
    task_3("მესამე დავალების ტექსტი", 30);
    task_4(200);
    task_5(200);
    task_6(200, 200);
    task_7(200, 200, "yellow");
    task_8(200, 200, "5");
    task_9(200, 200, "red", "3");
    task_11();
    task_12(12);
    task_13(14, 18);
    task_14(20, 11);
    task_15_16(15, 11);
    task_17(12, 13, 200, 200, "red", "3");

    task_18([1, 12, 34, 51, 6, 7, 8, 9, 22, 112], 30);
    task_20([
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
    ]);
});


  

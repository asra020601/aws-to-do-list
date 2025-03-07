// Add your API endpoint here
var API_ENDPOINT = "https://9v1md4q5w0.execute-api.us-east-1.amazonaws.com/prod/";

// AJAX POST request to save student data
document.getElementById("savedata").onclick = function(){
    var inputData = {
        "task": $('#task').val(),
        "description": $('#description').val(),
        "priority": $('#priority').val(),
        "duedate": $('#duedate').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("dataSaved").innerHTML = "Data Saved!";
        },
        error: function () {
            alert("Error saving  data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getData").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#Table tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#Table").append("<tr> \
                    <td>" + data['task'] + "</td> \
                    <td>" + data['description'] + "</td> \
                    <td>" + data['priority'] + "</td> \
                    <td>" + data['duedate'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
}

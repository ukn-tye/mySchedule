// The date of current day
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
//Time block rows
for (var i = 0; i < 9; i++) {

    var tBody = $("#table-body");
    var tRow = document.createElement('tr');
    tRow.classList.add('row' + [i]);

    for (var j = 0; j < 3; j++) {

        var tableData = document.createElement('td');
        tBody.append(tableData);
        tableData.classList.add('td' + [j]);
    } 
    tBody.append(tRow);
}

// Button icon
var saveBtn = $('.td2');
for (var s = 0; s < saveBtn.length; s++) {
    saveBtn[s].textContent = '☑️';
}

// Hours
for (var h = 0; h < 9; h++) {
    var column1 = $('.td0');
    var hours = [
        '9am',
        '10am',
        '11am',
        '12am',
        '1am',
        '2am',
        '3am',
        '4am',
        '5am',
    ];
    column1[h].textContent = hours[h];
}

// New textarea
var addTextArea = document.getElementsByClassName('td1');
$(document).click(function (event) {
    var onClick = event.target;
    if (onClick.classList.contains('td1')) {
        var words = document.createElement('input');
        onClick.append(words);
        words.classList.add('form-control');
    } else {
        return;
    }
});

//tried to make the local storage work but...
var inputText = document.getElementsByClassName("form-control");
$(".td1").on("dblclick", function () {

  var allEvents = JSON.parse(localStorage.getItem("eventObject"));
  if (allEvents === null) {
    allEvents = [];
    console.log(allEvents);

  } else {

    allEvents = JSON.parse(localStorage.getItem("eventObject")).events;
  }

  console.log(allEvents);
  $(".td2").on("click", function () {

    for (var a = 0; a < inputText.length; a++) {
      var newEvent = inputText[a].value;
    }

    console.log(allEvents);
    allEvents.push(newEvent);
    console.log(allEvents);
    
    var eventObject = {

      events: allEvents,
    };

    localStorage.setItem("eventObject", JSON.stringify(eventObject));
  });
});

console.log(window);

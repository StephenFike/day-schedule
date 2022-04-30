// current date and time display
var currentDate = document.getElementById('currentDay')
setInterval(() => {
    currentDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);

// save button functionality
$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.description').val().trim();
    var currentTime = $(this).parent().attr('id');

    localStorage.setItem(currentTime, text);
});

// time block color changes
function hourColor(){
    var current = moment().hour();
    $('.description').each(function () {
        var currentTime = parseInt($(this).parent().attr('id'));

        if(currentTime < current){
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        } else if ( currentTime === current){
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}

// local storage display
$("#09 .description").text(localStorage.getItem("09"));
$("#10 .description").text(localStorage.getItem("10"));
$("#11 .description").text(localStorage.getItem("11"));
$("#12 .description").text(localStorage.getItem("12"));
$("#13 .description").text(localStorage.getItem("13"));
$("#14 .description").text(localStorage.getItem("14"));
$("#15 .description").text(localStorage.getItem("15"));
$("#16 .description").text(localStorage.getItem("16"));
$("#17 .description").text(localStorage.getItem("17"));

hourColor();
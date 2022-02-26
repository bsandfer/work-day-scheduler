$(document).ready(function () {
    $('.saveBtn').on('click', function (){
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')

        localStorage.setItem(time, value)

        $('.notification').addClass('show')

        setTimeout(function () {
            $('.notification').removeClass('show')
        }, 5000)

    })

    function hourUpdater() {
        var currentHour = moment().hours()

        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1])

            if (blockHour < currentHour) {
                $(this).addClass('past')
            } else if (blockHour === currentHour) {
              $(this).removeClass('past')
              $(this).addClass('present')
            } else {
              $(this).removeClass('past')
              $(this).removeClass('present')
              $(this).addClass('future')    
            }
        })
    } 

    hourUpdater()

    var interval = setInterval(hourUpdater, 1500)

    $('#hour9 .description').val(localStorage.getItem('hour9'))
    $('#hour10 .description').val(localStorage.getItem('hour10'))
    $('#hour11 .description').val(localStorage.getItem('hour11'))
    $('#hour12 .description').val(localStorage.getItem('hour12'))
    $('#hour13 .description').val(localStorage.getItem('hour13'))
    $('#hour14 .description').val(localStorage.getItem('hour14'))
    $('#hour15 .description').val(localStorage.getItem('hour15'))
    $('#hour16 .description').val(localStorage.getItem('hour16'))
    $('#hour17 .description').val(localStorage.getItem('hour17'))
    
    // show time 
    $('#currentDay').text(moment().format('dddd,MMMM Do'))
})



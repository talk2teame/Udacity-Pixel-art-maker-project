// Select color input
let color;
// Select size input
let height, width;

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
// Your code goes here!
    $('tr').remove();

    for (let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr onClick="clickHandler()"></tr>');
    }
    
    for (let x = 0; x < width; x++) {
        $('tr').append('<td onClick="clickHandler()"></td>');
    }

    var count = 1;
    $('td').each(function(){
        $(this).attr('id', 'cell' + count);
        count+=1;
    })
}

$("#sizePicker").submit(function(e){
    e.preventDefault();
     height = $('#inputHeight').val()
     width = $('#inputWidth').val()

    makeGrid(height, width);   
});

function clickHandler(){
    $(document).on('click', "tr td", function (params) {
        color = $('#colorPicker').val();
        $(this).css('background-color', color)
    })
}




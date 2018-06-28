// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(e){
    e.preventDefault();
    const height = $('#inputHeight').val()
    const width = $('#inputWidth').val()

    makeGrid(height, width)
     
});


function makeGrid(height, width) {

// Your code goes here!
    $('tr').remove();

    for (let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    }
    
    for (let x = 0; x < width; x++) {

        $('tr').append('<td id=" "></td>');
        $('tr').append(`<td id="+ "></td>`);

    }
}


function colorCell(){
    console.log(arguments.values)
}


$('#colorPicker').change(function(){
  var colorPicked =  $(this).val()

  console.log(colorPicked, 'hahahah')
})









// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(e){
    e.preventDefault();
    const height = $('#inputHeight').val()
    const width = $('#inputWidth').val()

    makeGrid(height, width)
     
});





function clickHandler(){
    var that = $(this);

    $(this).on("click", function (event) {
        let clickedItem = event.target.id
        let checker = clickedItem.slice(0,4)
        if(checker === 'cell'){
            console.log(clickedItem, 'hey hey from the other side');

            // console.log(event.target.id, 'hey man target')
            // $(this).css('background-color', '#ff0000');

            let color = $('#colorPicker').val();
            $('td').css('background-color','color');
        }
    });
    // console.log(clickedBtnID, 'hahaha it worked!!!')
}


	//Add color to the cell clicked
	// $('td').click(function() {
	// 	let color = $('#colorPicker').val();
	// 	$('td').css('background-color','color');
    // });
    

function makeGrid(height, width) {
// Your code goes here!
    $('tr').remove();

    for (let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
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



// $('#colorPicker').change(function(){
//   var colorPicked =  $(this).val()
//   console.log(colorPicked, 'hahahah')
// })







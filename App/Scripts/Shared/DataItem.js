var ConfirmModal = new ConfirmationModal('Are you sure you want to delete this Data Item?', function(id){
    $.post('api/dataItems/deleteRow/' + id, function(req, res){
        console.log(res);        
    });
    location.reload();
});

var NewDataItemModal = new CreateDataItemModal('NewItemModal');   

$(document).on('click', '.deleteRow', function(){       
    var id = $(this).context.id;    
    ConfirmModal.show(id);
});

$('#addButton').on('click', function(){
    NewDataItemModal.show();
});

$(document).on('click', '.dataItemButton', function(){    
    var state = $(this).hasClass('On');
    if (state || state === 'true'){
        $(this).addClass('Off');
        $(this).removeClass('On');
        $(this).html('Off');
    }
    else{
        $(this).addClass('On');
        $(this).removeClass('Off');
        $(this).html('On');
    }

    $.post('api/dataItems/' + this.id, { value: state }, function(req, res){
        console.log(res);
    });
});
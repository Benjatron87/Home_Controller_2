class CreateDataItemModal{
    
    constructor(id) {    
        this.type = $('#' + id).data('val');
        this.id = document.getElementById(id);
        var self = this;
        
        // Set up events
        $('#NewItemModal').keydown(function(event){            
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                event.preventDefault();
                var saveObj = {
                    title: $('#Title').val(),
                    units: $('#Units').val()
                }                
                self.validate(saveObj);
            }
            else if(keycode == '27'){
                event.preventDefault();                
                self.hide();
            }
        });
        
        $('#saveButton').on('click', function(){ 
            var saveObj = {
                title: $('#Title').val(),
                units: $('#Units').val(),
                pin: parseInt($('#PinNumber').val())
            }
            self.validate(saveObj);
        });
        
        $(document).on('click', '.closeModal', function(){
            self.hide();
        });
    }

    show(){
        this.id.style.display = "block";
        $('#Title').focus();
    }

    hide(){
        console.log('in function')
        this.id.style.display = "none";
        $('#Title').val('');
        $('#Units').val('');
        $('#UnitsValidation').hide();
        $('#TitleValidation').hide();
    }

    validate(saveObj){          
        var valid = true;

        if(saveObj.title == ""){
            $('#TitleValidation').show();
            valid = false;
        }
        else if(saveObj.title != ""){
            $('#TitleValidation').hide();
        }
        if (saveObj.title.length > 45){
            $('#TitleValidation').html('Value Too Long').show();
            valid = false;
        }
        else {
            $('#TitleValidation').hide().html('Required');
        }        
        if(saveObj.pin == "" && this.type == 'switch'){
            $('#PinValidation').show();
            valid = false;
        }
        else if(saveObj.title != ""){
            $('#PinValidation').hide();
        }
        if(saveObj.units == "" && this.type == 'text'){
            $('#UnitsValidation').show();
            valid = false;
        }
        else if(saveObj.units != ""){
            $('#UnitsValidation').hide();
        }
        if(valid){
            saveObj.type = this.type;
            location.reload();
            this.save(saveObj);                
        }        
    }

    save(saveObj){
        $.post('api/saveDataItem', { dataItem: saveObj }, function(req, res){
            console.log(res);
        });
    }
}

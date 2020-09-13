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
                units: $('#Units').val()
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
        if(saveObj.title == ""){
            $('#TitleValidation').show();
        }
        else if(saveObj.title != ""){
            $('#TitleValidation').hide();
        }
        if(saveObj.units == "" && this.type == 'text'){
            $('#UnitsValidation').show();
        }
        else if(saveObj.units != ""){
            $('#UnitsValidation').hide();
        }
        if(saveObj.title != "" && (saveObj.units != "" || this.type !== 'text')){
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

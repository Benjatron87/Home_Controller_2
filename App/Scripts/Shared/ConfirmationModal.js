class ConfirmationModal {
    constructor(msg, continueFn){
        this.modal = document.getElementById('ConfirmationModal');
        this.modalMsg = $('#ConfirmationModalMsg');
        this.msg = msg;
        if(continueFn instanceof Function){
            this.continueFn = continueFn;
        }
        else{
            this.continueFn = this.hide;
        }
        this.modalMsg.append(this.msg);
        this.id;
        var self = this;

        // Set up events
        $('#continueButton').on('click', function(){
            self.continue();
        })
        $('#cancelButton').on('click', function(){
            self.hide();
        })
        $(document).on('click', '.closeConfirmation', function(){
            self.hide();
        });
    }

    continue(){
        this.continueFn(this.id);
    }

    show(id){        
        this.modal.style.display = "block";
        this.id = id;
    }

    hide(){
        this.modal.style.display = "none";
    }
}
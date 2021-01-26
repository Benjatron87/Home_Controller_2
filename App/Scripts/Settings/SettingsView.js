class SettingsView {
    constructor(){
        var self = this;;
        $.get('/currentUser', function(req, res){
            self.setUserData(req.currentUser);
        });
    }

    setUserData(data){
        $('#FirstName').val(data.firstName);
        $('#LastName').val(data.lastName);
        $('#UserName').val(data.userName);
    }
}
class HomeView {
    constructor(){
        var self = this;;
        $.get('/currentUser', function(req, res){
            var firstName = req.currentUser.firstName;
            self.setFirstName(firstName);
        });
    }

    setFirstName(firstName){
        $('#FirstName').text(firstName);
    }
}
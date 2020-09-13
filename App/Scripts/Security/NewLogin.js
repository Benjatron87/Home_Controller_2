$('#SubmitNewLogin').on('click', function(e){
    e.preventDefault();

    var loginForm = {
        username: $('#Username').val(),
        firstName: $('#FirstName').val(),
        lastName: $('#LastName').val(),
        password: $('#Password').val(),
        confirmPassword: $('#ConfirmPassword').val()
    }

    $.post('/CreateNewLogin', loginForm, function(req, res){        
        if(req.errMsg){
            $('#ErrMsg').text(req.errMsg);
        }
        else{
            window.location.replace('/NewAccountSuccess');
        }
    })
});
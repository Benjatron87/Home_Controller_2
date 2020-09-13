$('#SubmitLogin').on('click', function(e){
    e.preventDefault();

    var loginForm = {
        username: $('#Username').val(),
        password: $('#Password').val()
    }

    $.post('/Login', loginForm, function(req, res){        
        if(req.errMsg){
            $('#ErrMsg').text(req.errMsg);
        }
        else{
            window.location.replace('/Home'); 
        }
    })
});
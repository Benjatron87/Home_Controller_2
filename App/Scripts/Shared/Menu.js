$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if($('body').width() < 800 && $('#sidebar').hasClass('active')){
            $('#content').toggleClass('hidden');
        }
        else{
            $('#content').removeClass('hidden');
        }        
        $(this).toggleClass('active');
    });  
    
    $('#Logout').click(function(){
        $.post('/Logout');
    });

    $.get('/currentUser', function(req,res){
        console.log(req);
        $('.user-name').append(req.userName);
    });
});
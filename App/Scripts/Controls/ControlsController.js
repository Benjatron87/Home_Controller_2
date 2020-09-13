fetchData = function(){
    $.get('/api/dataItems/switches', function(req, res){
        console.log(req)
        ControlsView.setData(req.body);
    });  
    setTimeout(fetchData, 1000);
}
 
fetchData();


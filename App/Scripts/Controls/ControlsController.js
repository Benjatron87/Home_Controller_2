fetchData = function(){
    $.get('/api/dataItems/switches', function(req, res){
        ControlsView.setData(req.data);
    });  
    setTimeout(fetchData, 1000);
}
 
fetchData();


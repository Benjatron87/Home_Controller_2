fetchData = function(){
    $.get('/api/dataItems/switches', function(req, res){
        console.log(req)
        ControlsView.setData(req);
    });  
    setTimeout(fetchData, 10000);
}
 
fetchData();


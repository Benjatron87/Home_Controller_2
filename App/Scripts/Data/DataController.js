fetchData = function(){
    $.get('/api/dataItems/values', function(req, res){
        DataView.setData(req.data);
    });  
    setTimeout(fetchData, 15000);
} 
fetchData();
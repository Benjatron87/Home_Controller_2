var DataView = {
    setData: function(data){
        if($("#dataItemList"))
                $("#dataItemList").remove();
        if(data && data.length > 0){
            $("#dataItemContainer").append(`<ul id="dataItemList"></ul>`);
        
            data.forEach(x => {            
                this.creatDataItem(x);
            });
        }        
    },

    creatDataItem: function(val){        
        var title = val.title.length > 12 ? val.title.slice(0,12).trim() + '... ' : val.title;
        
        $("#dataItemList").append(`
            <li class="dataItem hover">
                <a class="dataItemTitle">
                    (${val.pin}) ${title}
                </a>
                <span id="${val.id}" class="deleteRow">&times;</span>
                <a class="dataItemVal">
                    ${val.value} ${val.unit}
                </a>               
            </li>`
        );        
    }
}
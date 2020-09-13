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
        $("#dataItemList").append(`
            <li class="dataItem hover">
                <a class="dataItemTitle">
                (${val.id})${val.title}:
                </a>
                <span id="${val.id}" class="deleteRow">&times;</span>
                <a class="dataItemVal">
                    ${val.value} ${val.unit}
                </a>               
            </li>`
        );        
    }
}
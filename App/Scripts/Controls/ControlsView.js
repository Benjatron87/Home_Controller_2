var ControlsView = {

    setData: function(data){
        if(data && data.length > 0){
            if($("#dataItemList"))
                $("#dataItemList").remove();
                
            $("#dataItemContainer").append(`<ul id="dataItemList"></ul>`);
        
            data.forEach(x => {                
                this.creatDataItem(x);
            });
        }        
    },

    creatDataItem: function(val){      
        var state = val.value == 'On' ? 'On' : 'Off';

        $("#dataItemList").append(`
            <li class="dataItem hover">
                <a class="dataItemTitle">
                    (${val.pin}) ${val.title}:
                </a>
                <span id="${val.id}" class="deleteRow">&times;</span>
                <button id="${val.id}" class="dataItemButton ${state} hover">
                    ${state}
                </button>               
            </li>`
        );        
    }
}
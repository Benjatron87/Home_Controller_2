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
        var title = val.title.length > 12 ? val.title.slice(0,12).trim() + '... ' : val.title;

        $("#dataItemList").append(`
            <li class="dataItem hover">
                <a class="dataItemTitle">
                    (${val.pin}) ${title}
                </a>
                <span id="${val.id}" class="deleteRow">&times;</span>
                <button id="${val.id}" class="dataItemButton ${state} hover">
                    ${state}
                </button>               
            </li>`
        );        
    }
}
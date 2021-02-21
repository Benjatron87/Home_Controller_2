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
        var updated = moment(val.updatedAt).format("DD MMM hh:mm a") ;

        $("#dataItemList").append(`
            <div class="dataItem">
                <li>                
                    <a class="dataItemTitle">
                        (${val.pin}) ${title}                    
                    </a>
                    <span id="${val.id}" class="deleteRow">&times;</span>
                    <a class="dataItemVal">
                        ${val.value} ${val.unit}
                    </a>                 
                </li>
                <li>
                    <div class="updatedAt">Updated At: ${updated}</div>
                </li>
            </div>`

            
        );        
    }
}
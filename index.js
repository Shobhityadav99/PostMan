let parametersBox=document.getElementById("parametersBox");
parametersBox.style.display="none";

let addParamCount=0;

function getElementfromString(string){
    let div=document.createElement('div');
    div.innerHTML=string;
    return div.firstElementChild;
}

let paramsRadio=document.getElementById("paramsRadio");
paramsRadio.addEventListener('click',()=>{
    document.getElementById("requestJsonBox").style.display="none";
    document.getElementById("parametersBox").style.display="block";
})
let jsonRadio=document.getElementById("jsonRadio");
jsonRadio.addEventListener('click',()=>{
    document.getElementById("requestJsonBox").style.display="block";
    document.getElementById("parametersBox").style.display="none";
});

let addParam=document.getElementById("addParam");
addParam.addEventListener('click',()=>{
    let params=document.getElementById("params");
    let string=`<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addParamCount+2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addParamCount+2}" placeholder="Enter Parameter ${addParamCount+2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addParamCount+2}" placeholder="Enter Parameter ${addParamCount+2} Value">
                    </div>
                    <button class="btn btn-primary deleteParam">-</button>
                </div>`;
        addParamCount++;
    let paramElement=getElementfromString(string);
    params.appendChild(paramElement);
    let deleteParam=document.getElementsByClassName("deleteParam");
    for(item of deleteParam){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
    }
})
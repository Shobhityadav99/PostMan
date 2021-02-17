let parametersBox=document.getElementById("parametersBox");
parametersBox.style.display="none";

let addParamCount=0;

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
    let string=`<div class="form-row">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addParamCount+2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addParamCount+2}" placeholder="Enter Parameter 1 Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addParamCount+2}" placeholder="Enter Parameter 1 Value">
                    </div>
                    <button id="addParam" class="btn btn-primary">-</button>
                </div>`;
        addParamCount++;
})
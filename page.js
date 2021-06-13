//xml http request

var globalobject={};
var pagenumbercount=0;

//create an ml http instance(obj)
var request = new XMLHttpRequest();
//initiate a new connection
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
//sending request  to server
request.send();
//if server responded successfully,we need to retrive the data
request.onload = function()
{
   


    var data = JSON.parse(this.response);
    globalobject=data;

    pagenation(0);
}

function nextcount(){
    if(pagenumbercount<9)
    {
        var inccount=pagenumbercount+1;
        pagenation(inccount);
    }

}
function precount(){

        if(pagenumbercount<=9 && pagenumbercount>0)
        {
            var inccount=pagenumbercount-1;
            pagenation(inccount);
        }
    
    }
    
function pagenation(pagenumber){
    
    pagenumbercount=pagenumber;
    

    if(document.getElementById("tableId")!=null)
    {  
        var removeTab = document.getElementById('tableId');
var parentEl = removeTab.parentElement;
parentEl.removeChild(removeTab);
    }

    var table=document.createElement('table');
table.setAttribute('class','table table-striped table-bordered table-hover table-responsive-lg table-responsive-xl');


table.setAttribute("id", "tableId");

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
//row
var tr=document.createElement('tr');

var th1=createtrth('th','id');
var th2=createtrth('th','name');
var th3=createtrth('th','email')
tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');



table.append(thead,tbody);

pagenumber=pagenumber+1;
    var limit=pagenumber*10;
    var startcount=limit-10;
    for(var i=startcount;i<limit;i++){
        var res = globalobject[i];
        console.log(res);

        var tbodytr=document.createElement('tr');
        var td1=createtrth('td',res.id);
        var td2=createtrth('td',res.name);
        var td3=createtrth('td',res.email);
        tbodytr.append(td1,td2,td3);
        tbody.append(tbodytr);
    }

    document.body.append(table); 
}
function createtrth(elementname , value=""){
    var td=document.createElement(elementname);
    
    td.innerHTML=value;
    return td;
    }
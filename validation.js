
 var currentRow=null;
 function onFormSubmit(){
    var namecont=document.myform.idname.value;
    var salaryCont =document.myform.yourSalary.value;
   var emailHolder= document.myform.youremail.value;
    const regxNameValidator=/^([a-zA-Z ]){2,30}$/;
    // var regxEmailValidator=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regxEmailValidator =/^[a-z0-9](\.?[a-z0-9_-]){0,}@([a-z0-9-]{3,})+\.([a-z]{1,6}\.)?[a-z]{2,6}$/g;
         console.log("regex",regxEmailValidator)
        if(namecont !==null && !regxNameValidator.test(namecont))
    {
       document.getElementById("fname").innerHTML="must be greater then 5 and less then 20 characters."; 
       document.myform.idname.focus();
       return false;
    }
     if(emailHolder !==null && !regxEmailValidator.test(emailHolder))
     {
        document.getElementById("emails").innerHTML="Enter Valid Email Address."; 
        document.myform.youremail.focus();
        return false; 
     }
     if(salaryCont<5000 || salaryCont>150000)
     {
        document.getElementById("sp_address").innerHTML="Enter Value between 5000 and 150000";
        return false;
     }
    if(namecont=="")
    {
     document.getElementById("fname").innerHTML="please fill this filed";
     document.myform.idname.focus();
     return false;
    }
    
    if(isNaN(salaryCont))
    {
        document.getElementById("sp_address").innerHTML="should be number";
        return false;
    }
    
    
     else if(emailHolder=="")
     {
         document.getElementById("emails").innerHTML="please write Email";
         document.myform.youremail.focus();
         return false;
     }
     else if( salaryCont==""){
       
         document.getElementById("sp_address").innerHTML="please fill your salary";
         document.myform.yourSalary.focus();
         return false;
     }
     else if(document.myform.enterCity.value=="-1"){
        document.getElementById("spanCity").innerHTML="please fill your City";
        document.myform.enterCity.focus();
        return false;
    }
     var formData= readFormData();
    if(currentRow==null)
    {
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    
   
    
     resetForm();

     
    //  document.forms['myform'].reset();

 }
 function readFormData()
 {
    
     var formData={};
     
     formData["idname"]=document.getElementById("idname").value;
    
     formData["youremail"]=document.getElementById("youremail").value;
     formData["yourSalary"]=document.getElementById("yourSalary").value;
     formData["enterCity"]=document.getElementById("enterCity").value;
     return formData;

 }
 function insertNewRecord(data)
 {
     var table= document.getElementById("deatilsTable").getElementsByTagName('tbody')[0];
     var newRow= table.insertRow(table.length);
     var cell1= newRow.insertCell(0);
     cell1.innerHTML=data.idname;
     var cell2=newRow.insertCell(1);
     cell2.innerHTML=data.youremail;
     var cell3= newRow.insertCell(2);
     cell3.innerHTML=data.yourSalary;
     var cell4=newRow.insertCell(3);
     cell4.innerHTML=data.enterCity;
     var cell5=newRow.insertCell(4);
     cell5.innerHTML='<a style="color:white;cursor:pointer;display:inline-block; width:40%; text-align:center;background-color:rgb(20, 220, 87);padding:2px; border-radious:4px;" onClick="onEdit(this)">Edit</a> <a style="color:white;cursor:pointer;background-color:rgb(235, 10, 10);padding:2px;display:inline-block;width:40%;text-align:center; border-radious:4px;" onClick="onDelete(this)">Delete</a>';
 }
 function resetForm()
 {
     document.getElementById("idname").value="";
     document.getElementById("youremail").value="";
     document.getElementById("yourSalary").value="";
     document.getElementById("enterCity").value="-1";
     document.getElementById('fname').innerHTML="";
     document.getElementById("sp_address").innerHTML="";
     document.getElementById("emails").innerHTML="";
     document.getElementById("spanCity").innerHTML="";
     currentRow=null;
 }
     
 function onEdit(td){
     currentRow=td.parentElement.parentElement;
     document.getElementById("idname").value= currentRow.cells[0].innerHTML;
     document.getElementById("youremail").value=currentRow.cells[1].innerHTML;
     document.getElementById("yourSalary").value=currentRow.cells[2].innerHTML;
     document.getElementById("enterCity").value=currentRow.cells[3].innerHTML;

 }
 function updateRecord(formData)
 {
     currentRow.cells[0].innerHTML=formData.idname;
     currentRow.cells[1].innerHTML=formData.youremail;
     currentRow.cells[2].innerHTML=formData.yourSalary;
     currentRow.cells[3].innerHTML=formData.enterCity;
 }
 function onDelete(td){
     delRow=td.parentElement.parentElement;
     document.getElementById("deatilsTable").deleteRow(delRow.rowIndex);
     alert("DO YOU WANT TO DELETE PERMENANTLY?");

 }


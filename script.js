//your JS code here. If required.
let select1=document.querySelectorAll("option");
let select2=document.querySelector("select");
let select3=document.querySelector("input");


select3.addEventListener("click",remove_color);
function remove_color(){
var selectedText = select2.options[select2.selectedIndex].text;
	
	if(selectedText==="Black")
{
select2.innerHTML="<option>Red</option> <option>Green</option> <option>White</option>";
}
if(selectedText==="Red"){
select2.innerHTML="<option>Green</option> <option>White</option> <option>Black</option> ";
}
if(selectedText==="White"){
	select2.innerHTML="<option>Red</option> <option>Green</option> <option>Black</option> ";}
if(selectedText==="Green"){
select2.innerHTML="<option>Red</option> <option>White</option> <option>Black</option> ";
}}
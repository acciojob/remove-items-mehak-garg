//your JS code here. If required.
let select1=document.querySelectorAll("option");
let select2=document.querySelector("select");
let select3=document.querySelector("input");
select3.addEventListener("click",remove_color);
var selectedText = select2.options[select2.selectedIndex].text;
function remove_color(){
	if(selectedText==="black")
{
select2.innerHTML="<option>Red</option> <option>Green</option> <option>White</option>";
}
if(selectedText==="red"){
select2.innerHTML="<option>Green</option> <option>White</option> <option>Black</option> ";
}
if(selectedText==="white"){
	select2.innerHTML="<option>Red</option> <option>Green</option> <option>Black</option> ";}
if(selectedText==="green"){
select2.innerHTML="<option>Red</option> <option>White</option> <option>Black</option> ";
}}
//your JS code here. If required.
let select1=document.querySelectorAll("option");
let select2=document.querySelector("select");
let select3=document.querySelector("input");
select3.addEventListener("click",)
select1[0].addEventListener("click",remove_red);
select1[1].addEventListener("click",remove_green);
select1[2].addEventListener("click",remove_white);
select1[3].addEventListener("click",remove_black);

function remove_black(){
select2.innerHTML="<option>Red</option> <option>Green</option> <option>White</option>";
}
function remove_red(){
select2.innerHTML="<option>Green</option> <option>White</option> <option>Black</option> ";
}
function remove_white(){
	select2.innerHTML="<option>Red</option> <option>Green</option> <option>Black</option> ";}
function remove_green(){
select2.innerHTML="<option>Red</option> <option>White</option> <option>Black</option> ";
}
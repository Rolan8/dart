
let show = document.querySelectorAll('#tog');
let hidden = document.getElementsByClassName('statshide');
let stats =document.getElementsByClassName('statsee');

function check(event) {
 if (event.target == show[0]){
	hidden[0].classList.toggle('disp');
	stats[0].classList.toggle('mofon');
}

if (event.target == show[1]){
	hidden[1].classList.toggle('disp');
	stats[1].classList.toggle('mofon');
}

if (event.target == show[2]){
	hidden[2].classList.toggle('disp');
	stats[2].classList.toggle('mofon');
}

if (event.target == show[3]){
	hidden[3].classList.toggle('disp');
	stats[3].classList.toggle('mofon');
}

if (event.target == show[4]){
	hidden[4].classList.toggle('disp');
	stats[4].classList.toggle('mofon');
}
}

for(let i = 0; i < show.length; i++){
	show[i].onclick = check;
}

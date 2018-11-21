const secondHand = document.getElementsByClassName("second-hand")[0];
const minuteHand = document.getElementsByClassName("min-hand")[0];
const hourHand = document.getElementsByClassName("hour-hand")[0];

function setDate() {
	const now = new Date();
	
	const seconds = now.getSeconds();
	const secondsDeg = (seconds / 60) * 360 + 90;
	if(secondsDeg == 90){
		secondHand.style.transition = `none`;
		secondHand.style.transform = `rotate(${secondsDeg}deg)`;
	}
	else{
		secondHand.style.transition = `all 0.5s`;
		secondHand.style.transform = `rotate(${secondsDeg}deg)`;
	}
	
	const minutes = now.getMinutes();
	const minutesDeg = (minutes / 60) * 360 + 90;
	if(minutesDeg == 90){
		minuteHand.style.transition = `none`;
		minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
	}
	else {
		minuteHand.style.transition = `all 0.5s`;
		minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
	}
	
	const hours = now.getHours();
	const hoursDeg = (hours / 12) * 360 + 90;
	if(minutesDeg == 90){
		hourHand.style.transition = `none`;
		hourHand.style.transform = `rotate(${hoursDeg}deg)`;
	}
	else {
		hourHand.style.transition = `all 0.5s`;
		hourHand.style.transform = `rotate(${hoursDeg}deg)`;
	}
}
setInterval(setDate,1000);
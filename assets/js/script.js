let daysList = [
				'first day', 
				'second day', 
				'third day', 
				'fourth day', 
				'fifth day', 
				'sixth day', 
				'seventh day', 
				'eighth day', 
				'ninth day', 
				'tenth day',
				'eleventh day', 
				'twelfth day'
				];

let giftsList = [
				'a partridge in a pear tree',
    			'two turtle doves',
    			'three french hens',
    			'four calling birds',
    			'five golden rings',
    			'six geese a-laying',
    			'seven swans a-swimming',
    			'eight maids a-milking',
    			'nine ladies dancing',
    			'ten lords a-leaping',
    			'eleven pipers piping',
    			'twelve drummers drumming'
    			];

let currentDay = 0;
console.log(currentDay);

// console.log(daysList[0]);
// console.log(giftsList[0]);

document.querySelector('#day' + currentDay).textContent = daysList[0];
document.querySelector('#gift' + currentDay).textContent = giftsList[0];

function showNextDay() {

	if (currentDay === 10)
		document.querySelector('#button').disabled = true;
	

	currentDay = currentDay + 1;
	// console.log(currentDay);
	document.querySelector('#stanza' + currentDay).style.display = 'block';

	document.querySelector('#day' + currentDay).textContent = daysList[currentDay];

	let gifts = '';

	for (let i = currentDay; i >= 0; i--) {
		// console.log(giftsList[i]);
		if (i === 1) 
			gifts = gifts + giftsList[i] + ', and ';
		else
			gifts = gifts + giftsList[i] + ' ';
	}

	document.querySelector('#gift' + currentDay).textContent = gifts;
}
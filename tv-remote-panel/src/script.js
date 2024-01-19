const powerButton = document.getElementById('power');
const menuButton = document.getElementById('menu');
const volUpButton = document.getElementById('vol-up');
const volDownButton = document.getElementById('vol-down');
const volMute = document.getElementById('mute');
const goBack = document.getElementById('retreat');
const goUp = document.getElementById('up');
const goDown = document.getElementById('down');
const goLeft = document.getElementById('left');
const goRight = document.getElementById('right');
const confirmSelection = document.getElementById('confirmation');

const sendCommand = command => {
	fetch('https://www.cn/terrible', {
		method: 'post',
		mode: 'cors',
		body: JSON.stringify(command),
		headers: {
		  'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error('Request Error',error);
	});
}

const power = () => {
	console.log('power');
	sendCommand('power');
};

const menu = () => {
	console.log('menu');
	sendCommand('menu');
};

const mute = () => {
	console.log('mute');
	sendCommand('mute');
};

const volUp = () => {
	console.log('vol-up');
	sendCommand('vol-up');
};

const volDown = () => {
	console.log('vol-down');
	sendCommand('vol-down');
};

const retreat = () => {
	console.log('retreat');
	sendCommand('retreat');
};

const confirmation = () => {
	console.log('confirmation');
	sendCommand('confirmation');
};

const up = () => {
	console.log('up');
	sendCommand('up');
};

const down = () => {
	console.log('down');
	sendCommand('down');
};

const left = () => {
	console.log('left');
	sendCommand('left');
};

const right = () => {
	console.log('right');
	sendCommand('right');
};

powerButton.addEventListener('click', power);
menuButton.addEventListener('click', menu);
volUpButton.addEventListener('click', volUp);
volDownButton.addEventListener('click', volDown);
volMute.addEventListener('click',mute);
goBack.addEventListener('click',retreat);
goUp.addEventListener('click',up);
goDown.addEventListener('click',down);
goLeft.addEventListener('click',left);
goRight.addEventListener('click',right);
confirmSelection.addEventListener('click',confirmation);

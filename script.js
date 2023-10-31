/* 
Developed by d3v-anaxa;
2022-07-31[SUN] 
*/

console.log(`Welcome to the number-system-conversion-website!`,);
console.log(`This website can only evaluate Integers.`);



let out2, out8, out10, out16, radix;

function checkRadix (){
	let binary = document.querySelector('#binary');
	let decimal = document.querySelector('#decimal');
	let octal = document.querySelector('#octal');
	let hexadecimal = document.querySelector('#hexadecimal');
	radix = binary.checked === true ? binary.value : decimal.checked === true ? decimal.value : octal.checked === true ? octal.value : hexadecimal.checked === true ? hexadecimal.value : "Invalid Radix";
}

function getInput (){
	checkRadix();
	let inp = document.querySelector('#input').value;
	let i = parseInt(inp, radix);
	
	out2 = i.toString(2);
	out8 = i.toString(8);
	out10 = i.toString(10);
	out16 = i.toString(16);
	
	if ((radix = 2 && String(inp).length == out2.length)||(radix = 8 && String(inp).length == out8.length)||(radix = 10 && String(inp).length == out10.length)||(radix = 16 && String(inp).length == out16.length)) {
		document.querySelector('#error').textContent = "";
		displayOutput();
	} else {
		document.querySelector('#error').textContent = 'INVALID INPUT';
        setTimeout(
		() => {
            document.querySelector('#error').textContent = "";
        }, 2000);
		displayClear()
	}
}

function displayOutput (){
	document.querySelector('#out2').textContent = out2;
	document.querySelector('#out8').textContent = out8;
	document.querySelector('#out10').textContent = out10;
	document.querySelector('#out16').textContent = out16;
}

function displayClear () {
	document.querySelector('#out2').textContent = " ";
	document.querySelector('#out8').textContent = " ";
	document.querySelector('#out10').textContent = " ";
	document.querySelector('#out16').textContent = " ";	
}

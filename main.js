// multiplication tables

let number = Number(prompt("multiplication of "));
let range =  Number(prompt("enter range"));

for(let i=1; i<=range; i++){
     let result = i*number;
	 
	 document.write(`${i}*${number} = ${result} <br>`);
}
// naam: Lene Ackermans

// hint: if( ! /^\d+$/.test(ingave) )


window.addEventListener("load", handleLoad);

function handleLoad () {
	let button_start_rekenen = document.getElementById("button_start_rekenen");
	button_start_rekenen.addEventListener("click",handleClick );
	let input = document.getElementById("input_aantal");
}


function handleClick () {
	let input = document.getElementById("input_aantal").value;
	let output = document.getElementById("vermenigvuldigingen");
	while (output.firstChild) {
		output.firstChild.remove();
	}
	if( ! /^\d+$/.test(input) )
	{
		let paragraph = document.createElement("p");
		let node = document.createTextNode("MISSE INGAVE VOOR AANTAL");
		paragraph.appendChild(node);
		output.appendChild(paragraph);
	}
	else
		{
			for(let i = 0; i < input; i++)
			{
				let getal1 = parseInt(10*Math.random());
				let getal2 = parseInt(10*Math.random());
				let product = document.createTextNode(getal1 + " * " + getal2 + " = ");
				let hr = document.createElement("hr");
				let div = document.createElement("div");
				let productPara = document.createElement("p");
				productPara.appendChild(product);
				let inputbox = document.createElement("input");
				inputbox.setAttribute("type", "text");
				inputbox.addEventListener("keyup", handleKeyupInput);
				div.appendChild(productPara);
				div.appendChild(inputbox);
				hr.appendChild(div);
				output.appendChild(hr);
			}
		}
}

function handleKeyupInput(event){
	if( ! /^\d+$/.test(event.target.value) )
	{
		event.target.style.color = "red";
	}

}


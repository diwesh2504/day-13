function calc(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		
		 
		function getValue() 
		{ 
			let x = document.getElementById("result").value 
			let y = eval(x) 
			document.getElementById("result").value = y 
		} 
		
		
		function clear() 
		{ 
			document.getElementById("result").value = "" 
		} 
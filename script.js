let radiusInput = document.getElementById("radius")
let valumeInput = document.getElementById("volume")
let h3 = document.querySelector("h3")

function volume_sphere(e) {
	e.preventDefault()
		let radius = radiusInput.value
	
		let calVolume = (4/3) * (Math.PI * radius**3)
	
		h3.innerText = calVolume.toFixed(4)
		volume.textContent = calVolume.toFixed(4)
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

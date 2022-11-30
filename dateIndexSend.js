const imputBuscar = document.querySelector('.input-buscar')
const imputButton = document.querySelector('.input-botton')
const contendBody = document.querySelector('.contend-body')
const cuenta = document.querySelector('.contend-body__cuenta')
const admit = document.querySelector('.contend-body__admit')
const seguroPension = document.querySelector('.contend-body__seguroPension')
const reductionTotalPension = document.querySelector('.contend-body__reductionTotalPension')
const contendHeadNombre = document.querySelector('.contend-head__nombre')

const contendBodyRetencion = document.querySelector('.contend-body__retencion')
const contendBodyOnpAfp = document.querySelector('.contend-body__onpAfp')
const contendBodySalud = document.querySelector('.contend-body__salud')

function hideTable(){
	cuenta.classList.add('inactive')
	admit.classList.add('inactive')
	seguroPension.classList.add('inactive')
	reductionTotalPension.classList.add('inactive')
}

imputButton.addEventListener('click', sendNombre)
function sendNombre(){
	contendHeadNombre.innerText = imputBuscar.value

	let arraycomplete = CalculosEstadisticos.inpuestos(imputBuscar.value)
	let year = arraycomplete[3]
	let compania = arraycomplete[4]
	let salario = arraycomplete[5]
	let impuesto = arraycomplete[0]
	let onpAfp = arraycomplete[2]
	let seguroSalud = arraycomplete[1]


	if(onpAfp[0].length == 1){
		for(i= 0; i<year.length; i++){
			editTable()
			addData(year[i])
			addData(compania[i])
			addData(salario[i])
			addData(impuesto[i])
			addOnpArray(onpAfp[i])
			addData(seguroSalud[i])
		}
	}
	else{
		for(i= 0; i<year.length; i++){
			addData(year[i])
			addData(compania[i])
			addData(salario[i])
			addData(impuesto[i])
			addAfpArray(onpAfp[i])
			addData(seguroSalud[i])
		}
	}

}
function editTable(){
	hideTable()
	contendBody.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
	contendBodyRetencion.style.gridColumnEnd = '7'
	contendBodyOnpAfp.style.gridColumnEnd = '6'
	contendBodyOnpAfp.style.gridRowEnd = '4'
	contendBodyOnpAfp.classList.add('border-white')
	contendBodySalud.style.gridColumnStart = '6'
	contendBodySalud.style.gridColumnEnd = '7'
}
function addData(data){
	console.log(data)

	const addGridDate = document.createElement('div')
	addGridDate.classList.add('border-white')
	addGridDate.innerText = data
	contendBody.appendChild(addGridDate)
}

function addAfpArray(dataArray){
	for(a of dataArray){
		addData(a)
	}
	let numberDate = 0
	dataArray.forEach(element => {numberDate += element});
	addData(numberDate*12)
}
function addOnpArray(array){
	for(a of array){
		addData(a*12)
	}
}
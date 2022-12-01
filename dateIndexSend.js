const imputBuscar = document.querySelector('.input-buscar')
const imputButton = document.querySelector('.input-botton')
const contendBody = document.querySelector('.contend-body')
const cuenta = document.querySelector('.contend-body__cuenta')
const admit = document.querySelector('.contend-body__admit')
const seguroPension = document.querySelector('.contend-body__seguroPension')
const reductionTotalPension = document.querySelector('.contend-body__reductionTotalPension')
const contendHeadNombre = document.querySelector('.contend-head__nombre')
const tableContendBody = document.querySelector('.table-contend-body')

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
	tableContendBody.classList.remove('inactive')

	contendHeadNombre.innerText = imputBuscar.value

	let arraycomplete = CalculosEstadisticos.inpuestos(imputBuscar.value)
	let year = arraycomplete[3]
	let compania = arraycomplete[4]
	let salario = arraycomplete[5]
	let impuesto = arraycomplete[0]
	let onpAfp = arraycomplete[2]
	let seguroSalud = arraycomplete[1]

	cuadroEstadistico(year,salario)
	dibujarEstadisticaData(year,salario,'red')
	dibujarEstadisticaData(year,impuesto,'blue')
	dibujarEstadisticaData(year,seguroSalud,'green')

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
// --------------------- estadistico en canvas----------------

// -- getContext -- retorna un constesto de dibujo en el lienzo
const lienzo = document.getElementById('estadistica')
const contexto = lienzo.getContext('2d')


function cuadroEstadistico(yearArray,salarioArray){
	dibujar(50,50,50,550,2,'white')
	dibujar(50,550,750,550,2,'white')
	let countYear = 700 / yearArray.length
	let countSalario = 500 / salarioArray.length
	let x = 0
	let righty = 550
	let maximoNumber = salarioArray.reduce((a,b)=>Math.max(a,b)) /salarioArray.length
	let numberRefe = 0
	for(a of yearArray){
		x = x + countYear
		dibujarText(a,x,560)
		dibujar(x,550,x,550,5)
	}
	for(a of salarioArray){
		righty = righty - countSalario
		dibujar(50,righty,50,righty,5)
		numberRefe = numberRefe + maximoNumber
		dibujarText((numberRefe).toFixed(1),30,righty)
	}
}
function dibujarEstadisticaData(year,salario, color){
	let sumax = 0
	const cordenadasx = []
	const cordenadasy = []

	for(i = 0; i<salario.length ;i++){
		let referencia = salario.reduce((a,b)=>Math.max(a,b))/100
		sumax = sumax + 700 / year.length
		for(c = 0; c <= salario[i] ; c = referencia + c){
			if(c > salario[i]- referencia){
				let calcy=((100-(c/referencia))*5)+50
				dibujarText(c,sumax,calcy-10)
				dibujar(sumax,calcy,sumax,calcy,5,color)
				cordenadasx.push(sumax)
				cordenadasy.push(calcy)
			}
		}
	}
	for(i = 1 ; cordenadasx.length>i; i++){
		dibujar(cordenadasx[i-1],cordenadasy[i-1],cordenadasx[i],cordenadasy[i],1,color)
	}
}

function dibujar(xinicial,yinicial,xfinal,yfinal,tall,color){
	//beginPath --- metodo que permite iniciar una nuevo trazo
	contexto.beginPath();
	//lineTo(x,y) --- el trazo termina en la cordenada x , y
	contexto.moveTo(xinicial,yinicial);
	// ----.lineWidth			... grosor de la linea
	contexto.lineWidth = tall
	//	 ----.strokesStyle		... Determina o devuelve el color, gradiente o patrón de la línea.
	contexto.strokeStyle = color;
	//	 ----.lineCap				...define la forma de los bordes del trazo finales
	contexto.lineCap = 'round'
	//	 ----.lineJoin			...define la forma de los bordes de la intercepsion de los trazos 
	contexto.lineTo(xfinal, yfinal);
	//moveTo(x,y) --- el trazo comiensa en la cordenada x , y
	contexto.stroke();
	// stroke --- dibuja el trazo
	contexto.closePath();
	//closePath --- metodo que permite cerrar trazo
}
function dibujarText(year,x,y){
	// ---.fillStyle Determina o devuelve el color, gradiente o patrón del relleno.
	contexto.fillStyle = 'white'
	// ---.textAlign	Especifica el tipo de alineación del texto.
	contexto.textAlign = 'center'
	// --.textBaseline	Determina o devuelve la alineación vertical del texto.
	contexto.textBaseline = 'middle'
	// fillText		Dibuja texto relleno con un color, gradiente o patrón previamente definido maxWidth es opcional.
	// ---.fillText(text,x,y,maxWidth);
	contexto.fillText(year, x, y)
}


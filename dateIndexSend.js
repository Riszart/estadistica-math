const imputBuscar = document.querySelector('.input-buscar')
const imputButton = document.querySelector('.input-botton')
const contendBody = document.querySelector('.contend-body')
const cuenta = document.querySelector('.contend-body__cuenta')
const admit = document.querySelector('.contend-body__admit')
const seguroPension = document.querySelector('.contend-body__seguroPension')
const reductionTotalPension = document.querySelector('.contend-body__reductionTotalPension')
const contendHeadNombre = document.querySelector('.contend-head__nombre')
const tableContendBody = document.querySelector('.table-contend-body')
const contenedor = document.querySelector('.contened')
const screenInicio = document.querySelector('.screen-inicio-General')
const nombresExistentes = document.querySelector('.nombre-existentes')

const contendBodyRetencionAfp = document.querySelector('.contend-body__retencion-afp')
const contendBodyRetencionOnp = document.querySelector('.contend-body__retencion-onp')
const contendBodyAfp = document.querySelector('.contend-body__afp')
const contendBodyOnp = document.querySelector('.contend-body__onp')
const contendBodySaludOnp = document.querySelector('.contend-body__salud-onp')
const contendBodySaludAfp = document.querySelector('.contend-body__salud-afp')
const onpOfAfp = document.querySelector('.onp-Afp')

const botonControlSalario = document.querySelector('.botones-control__salario')
const botonControlImpuesto = document.querySelector('.botones-control__impuesto')
const botonControlOnpAfp = document.querySelector('.botones-control__onpOafp')
const botonControlEsSalud = document.querySelector('.botones-control__seguroSalud')
const botonControlAllRetencion = document.querySelector('.botones-control__allRetencion')
const eventError = document.querySelector('.event-error')

botonControlSalario.addEventListener('click',graficoSalario)
botonControlImpuesto.addEventListener('click',graficoImpuesto)
botonControlOnpAfp.addEventListener('click',graficoOnpAfp)
botonControlEsSalud.addEventListener('click',graficoEsSalud)
botonControlAllRetencion.addEventListener('click',graficoAll)
imputButton.addEventListener('click', validacion)

let contextoCanvas
let arraycomplete
let year
let compania
let salario
let impuesto
let onpAfp
let seguroSalud
let activaCanvasSalario
let activaCanvasImpusto = true
let activaCanvasOnpAfp = true
let activaCanvasEsSalud = true
let activaCanvasAllRetencion = true
let nombreData
let bloqueadorDataAll = true
let nombreAbuscar
let cambioTabla

const nombresLista = []
for(i of personal){
	nombresLista.push(i.name)
}
for(a of nombresLista){
	const nombre = document.createElement('p')
	nombre.innerText = a
	nombresExistentes.appendChild(nombre)
}
function validacion(){
	const elementoDelGrid = document.querySelectorAll('.border-white')
	if(elementoDelGrid.length>0){
		for(element of elementoDelGrid){
			element.remove('.border-white')
		}
	}
	nombreAbuscar = imputBuscar.value
	for(i of personal){
		if(i.name == nombreAbuscar){
			imputBuscar.value = ''
			console.log(i.seguroVida)
			cambioTabla = i.seguroVida
			sendNombre()
			eventError.classList.add('inactive')
			break
		}
		else{
			imputBuscar.value = ''
			eventError.classList.remove('inactive')
			contenedor.classList.add('inactive')
			tableContendBody.classList.add('inactive')
			screenInicio.classList.remove('inactive')
		}
	}
}
function sendNombre(){	
	if(nombreAbuscar !== nombreData){
		contenedor.classList.remove('inactive')
		screenInicio.classList.add('inactive')
		contexto1.clearRect(0,0,800,600)
		nombreData = nombreAbuscar
		tableContendBody.classList.remove('inactive')
		contendHeadNombre.innerText = nombreAbuscar
		year = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[3]
		compania = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[4]
		salario = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[5]
		impuesto = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[0]
		onpAfp = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[2]
		seguroSalud = CalculosEstadisticos.retencionGeneral(nombreAbuscar)[1]
		activaCanvasSalario = true
		graficoSalario()
		addTableDataDown()
	}

}

function graficoSalario(){
	if(activaCanvasSalario == true){
		contexto2.clearRect(0,0,800,600)
		contexto3.clearRect(0,0,800,600)
		contexto4.clearRect(0,0,800,600)
		contexto5.clearRect(0,0,800,600)
		contextoCanvas = contexto1
		cuadroEstadistico(year,salario)
		dibujarEstadisticaData(year,salario,'red')
		activaCanvasSalario = false
	  activaCanvasImpusto = true
		activaCanvasEsSalud = true
		activaCanvasOnpAfp = true
		activaCanvasAllRetencion = true
	}
}
function graficoImpuesto(){
	if(activaCanvasImpusto == true){
		contexto1.clearRect(0,0,800,600)
		contexto3.clearRect(0,0,800,600)
		contexto4.clearRect(0,0,800,600)
		contexto5.clearRect(0,0,800,600)
		contextoCanvas = contexto2
		cuadroEstadistico(year,impuesto)
		dibujarEstadisticaData(year,impuesto,'blue')
		activaCanvasImpusto = false
		activaCanvasSalario = true
		activaCanvasEsSalud = true
		activaCanvasOnpAfp = true
		activaCanvasAllRetencion = true
	}
}
function graficoOnpAfp(){
	if(activaCanvasOnpAfp == true){
		contexto1.clearRect(0,0,800,600)
		contexto2.clearRect(0,0,800,600)
		contexto4.clearRect(0,0,800,600)
		contexto5.clearRect(0,0,800,600)
		contextoCanvas = contexto3
		const onpAfpArray = []
		for(a of onpAfp){
			onpAfpArray.push(a.reduce((j,r)=>j+r)*12)
		}
		cuadroEstadistico(year,onpAfpArray)
		dibujarEstadisticaData(year,onpAfpArray,'yellow')
		activaCanvasOnpAfp = false
		activaCanvasImpusto = true
		activaCanvasSalario = true
		activaCanvasEsSalud = true
		activaCanvasAllRetencion = true
	}

}
function graficoEsSalud(){
	if(activaCanvasEsSalud == true){
		contexto1.clearRect(0,0,800,600)
		contexto2.clearRect(0,0,800,600)
		contexto3.clearRect(0,0,800,600)
		contexto5.clearRect(0,0,800,600)
		contextoCanvas = contexto4
		cuadroEstadistico(year,seguroSalud)
		dibujarEstadisticaData(year,seguroSalud,'green')
		activaCanvasEsSalud = false
		activaCanvasSalario = true
		activaCanvasImpusto = true
		activaCanvasOnpAfp = true
		activaCanvasAllRetencion = true
	}
}
function graficoAll(){
	if(activaCanvasAllRetencion == true){
		contexto1.clearRect(0,0,800,600)
		contexto2.clearRect(0,0,800,600)
		contexto3.clearRect(0,0,800,600)
		contexto4.clearRect(0,0,800,600)
		contextoCanvas = contexto5
		bloqueadorDataAll = false

		const onpAfpArray = []
		for(a of onpAfp){
			onpAfpArray.push(a.reduce((j,r)=>j+r)*12)
		}
		let valorMax = Math.max(onpAfpArray.reduce((c,d)=>Math.max(c,d)),impuesto.reduce((c,d)=>Math.max(c,d)))
		cuadroEstadistico(year,salario,valorMax)
		dibujarEstadisticaData(year,onpAfpArray,'yellow',valorMax)
		dibujarEstadisticaData(year,seguroSalud,'green',valorMax)
		dibujarEstadisticaData(year,impuesto,'blue',valorMax)
		activaCanvasAllRetencion = false
		activaCanvasEsSalud = true
		activaCanvasSalario = true
		activaCanvasImpusto = true
		activaCanvasOnpAfp = true
		bloqueadorDataAll = true
	}
}
function cuadroEstadistico(yearArray,dataArray,valorMax){
	dibujar(50,50,50,550,2,'white')
	dibujar(50,550,750,550,2,'white')
	let spaceYear = 700 / yearArray.length
	let spaceData = 500 / dataArray.length
	let x = 0
	let y = 550
	let maximoNumber
	if(bloqueadorDataAll == true){
		maximoNumber = dataArray.reduce((a,b)=>Math.max(a,b))
	}
	else{
		maximoNumber = valorMax
	}
	let numberRefe = 0
	for(a of yearArray){
		x = x + spaceYear
		dibujarText(a,x,560)
		dibujar(x,550,x,550,5)
	}
	for(a of dataArray){
		y = y - spaceData
		dibujar(50,y,50,y,5)
		numberRefe = numberRefe + maximoNumber/dataArray.length
		dibujarText((numberRefe).toFixed(2),25,y)
	}
}
function dibujarEstadisticaData(yearArray,dataArray,color,valorMax){
	let x = 0
	let referencia = 0
	const cordenadasx = []
	const cordenadasy = []

	for(i = 0; i<dataArray.length ;i++){
		if(bloqueadorDataAll == true){
			referencia = dataArray.reduce((a,b)=>Math.max(a,b))/100
		}else{
			referencia = valorMax/100
		}
		x = x + 700 / yearArray.length
		let y = ((100-(dataArray[i]/referencia))*5)+50
		dibujarText(dataArray[i].toFixed(2),x,y-10)
		dibujar(x,y,x,y,5,color)
		cordenadasx.push(x)
		cordenadasy.push(y)
	}
	for(i = 1 ; cordenadasx.length>i; i++){
		dibujar(cordenadasx[i-1],cordenadasy[i-1],cordenadasx[i],cordenadasy[i],1,color)
	}
}

function addTableDataDown(){
	if(onpAfp[0].length == 1){
		for(i= 0; i<year.length; i++){
			editTable()
			addData(year[i])
			addData(compania[i])
			addData(salario[i].toFixed(2))
			addData(impuesto[i].toFixed(2))
			addOnpArray(onpAfp[i])
			addData(seguroSalud[i].toFixed(2))
		}
	}
	else{
		for(i= 0; i<year.length; i++){
			editTable()
			addData(year[i])
			addData(compania[i])
			addData(salario[i].toFixed(2))
			addData(impuesto[i].toFixed(2))
			addAfpArray(onpAfp[i])
			addData(seguroSalud[i].toFixed(2))
		}
	}
}

function editTable(){
	console.log(cambioTabla)
	if(cambioTabla == 'onp'){
		onpOfAfp.innerText = 'ONP'
		cuenta.classList.add('inactive')
		admit.classList.add('inactive')
		seguroPension.classList.add('inactive')
		reductionTotalPension.classList.add('inactive')
		contendBody.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
		contendBodyRetencionAfp.classList.remove('contend-body__retencion-afp')
		contendBodyRetencionOnp.classList.add('contend-body__retencion-onp')
		contendBodyAfp.classList.remove('contend-body__afp')
		contendBodyOnp.classList.add('contend-body__onp')
		contendBodySaludOnp.classList.add('contend-body__salud-onp')
		contendBodySaludAfp.classList.remove('contend-body__salud-afp')

	}
	else if(cambioTabla == 'afp'){
		onpOfAfp.innerText = 'AFP'
		cuenta.classList.remove('inactive')
		admit.classList.remove('inactive')
		seguroPension.classList.remove('inactive')
		reductionTotalPension.classList.remove('inactive')
		contendBody.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
		contendBodyRetencionAfp.classList.add('contend-body__retencion-afp')
		contendBodyRetencionOnp.classList.remove('contend-body__retencion-onp')
		contendBodyAfp.classList.add('contend-body__afp')
		contendBodyOnp.classList.remove('contend-body__onp')
		contendBodySaludOnp.classList.remove('contend-body__salud-onp')
		contendBodySaludAfp.classList.add('contend-body__salud-afp')
	}
}
function addData(data){
	const addGridDate = document.createElement('div')
	addGridDate.classList.add('border-white')
	addGridDate.innerText = data
	contendBody.appendChild(addGridDate)
}
function addAfpArray(dataArray){
	for(a of dataArray){
		addData(a.toFixed(2))
	}
	let numberDate = 0
	dataArray.forEach((element) => {numberDate += element})
	addData((numberDate*12).toFixed(2))
}
function addOnpArray(array){
	for(a of array){
		addData((a*12).toFixed(2))
	}
}
// --------------------- estadistico en canvas----------------

// -- getContext -- retorna un constesto de dibujo en el lienzo
const lienzo = document.getElementById('estadistica')
const contexto1 = lienzo.getContext('2d')
const contexto2 = lienzo.getContext('2d')
const contexto3 = lienzo.getContext('2d')
const contexto4 = lienzo.getContext('2d')
const contexto5 = lienzo.getContext('2d')

function dibujar(xinicial,yinicial,xfinal,yfinal,tall,color){
	//beginPath --- metodo que permite iniciar una nuevo trazo
	contextoCanvas.beginPath();
	//lineTo(x,y) --- el trazo termina en la cordenada x , y
	contextoCanvas.moveTo(xinicial,yinicial);
	// ----.lineWidth			... grosor de la linea
	contextoCanvas.lineWidth = tall
	//	 ----.strokesStyle		... Determina o devuelve el color, gradiente o patrón de la línea.
	contextoCanvas.strokeStyle = color;
	//	 ----.lineCap				...define la forma de los bordes del trazo finales
	contextoCanvas.lineCap = 'round'
	//	 ----.lineJoin			...define la forma de los bordes de la intercepsion de los trazos 
	contextoCanvas.lineTo(xfinal, yfinal);
	//moveTo(x,y) --- el trazo comiensa en la cordenada x , y
	contextoCanvas.stroke();
	// stroke --- dibuja el trazo
	contextoCanvas.closePath();
	//closePath --- metodo que permite cerrar trazo
}
function dibujarText(year,x,y,){
	// ---.fillStyle Determina o devuelve el color, gradiente o patrón del relleno.
	contextoCanvas.fillStyle = 'white'
	// ---.textAlign	Especifica el tipo de alineación del texto.
	contextoCanvas.textAlign = 'center'
	// --.textBaseline	Determina o devuelve la alineación vertical del texto.
	contextoCanvas.textBaseline = 'middle'
	// fillText		Dibuja texto relleno con un color, gradiente o patrón previamente definido maxWidth es opcional.
	// ---.fillText(text,x,y,maxWidth);
	contextoCanvas.fillText(year, x, y)
}


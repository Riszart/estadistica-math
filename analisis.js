const CalculosEstadisticos = {}
CalculosEstadisticos.retencionEspesifico = function retencionEspesifico(impuesto){
	let retencionAnual = a.salary * 12 * impuesto
//	console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
	return retencionAnual
}
CalculosEstadisticos.jubilacion = function jubilacion(salarioJubi, tipojubila){
	const onpAfpDetail = []
	if(tipojubila == 'afp'){
		let totalAfp = retencion[2].pension.afp.cuentapersonal + retencion[2].pension.afp.cobroAdministracion + retencion[2].pension.afp.seguro
		let afp = salarioJubi * totalAfp
//		console.log('afp: ' + afp)
		onpAfpDetail.push(retencion[2].pension.afp.cuentapersonal * salarioJubi) 
		onpAfpDetail.push(retencion[2].pension.afp.cobroAdministracion * salarioJubi) 
		onpAfpDetail.push(retencion[2].pension.afp.seguro * salarioJubi) 
	}
	else{
		let onp = salarioJubi * retencion[2].pension.onp
//		console.log('onp: ' + onp)
		onpAfpDetail.push(onp)
	}
	return onpAfpDetail
}

CalculosEstadisticos.seguro = function seguro(salario){
	for(a of retencion){
		if(a.esSalud){
			let seguro = salario * a.esSalud
//			console.log('salud:  ' + seguro)
			return seguro
		}
	}
}
CalculosEstadisticos.retencionGeneral = function retencionGeneral(nombre){
	const impuestosArray = []
	const seguroSaludArray = []
	const onpAfpArray = []
	const yearArray = []
	const CompaniaArray = []
	const salaryArray = []
	//for(i of personal){
	//	if(i.name == nombre){
			for(a of i.jobs){
				for(b of retencion){
				  if(a.company == 'Freelance'){
							if(b.impuesto){
								if(uit[a.year] * 7 < a.salary * 12){
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.cuarta, true))
									}
								else{ 
									impuestosArray.push(0)
								}
								yearArray.push(a.year)
								CompaniaArray.push(a.company)
								salaryArray.push(a.salary)
								seguroSaludArray.push(CalculosEstadisticos.seguro(0))
								onpAfpArray.push(CalculosEstadisticos.jubilacion(0, i.seguroVida))
							}
				  	}
					else{
							if(b.impuesto){
								yearArray.push(a.year)
								CompaniaArray.push(a.company)
								salaryArray.push(a.salary)
								let salaryoSec = a.salary
								if(a.salary * 12 <= uit[a.year] * 5 ){
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.quinta.primer))

								}
								else if(uit[a.year] * 5 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 20){
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.quinta.segunda))

								}
								else if(uit[a.year] * 20 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 35){
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.quinta.tercera))

								}
								else if(uit[a.year] * 35 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 45){ 
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.quinta.cuarta))

								}
								else if(uit[a.year] * 45 < a.salary * 12){ 
									impuestosArray.push(CalculosEstadisticos.retencionEspesifico(b.impuesto.quinta.quinta))
								}
								seguroSaludArray.push(CalculosEstadisticos.seguro(salaryoSec * 12))
								onpAfpArray.push(CalculosEstadisticos.jubilacion(salaryoSec, i.seguroVida))
							}         
				  	}
				}
			}
		return [impuestosArray, seguroSaludArray, onpAfpArray, yearArray, CompaniaArray, salaryArray]
//		}
//	}
}

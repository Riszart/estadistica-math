// recoleccion de impuestos
console.log(personal)
function categoria(empresa){
    for(a of empresa){
        for(b of retencion){
            if(a.company == 'Freelance'){
                if(b.impuesto){
                    if(uit[a.year] * 7 < a.salary * 12){
                        let retencionAnual = a.salary * 12 * b.impuesto.cuarta
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                    else{ 
                        console.log('impuesto para el año: '+ a.year +', es: 0')
                    }
                }
            }
            else{
                if(b.impuesto){
                    if(a.salary * 12 <= uit[a.year] * 5 ){
                        let retencionAnual = a.salary * 12 * b.impuesto.quinta.primer
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                    else if(uit[a.year] * 5 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 20){ 
                        let retencionAnual = a.salary * 12 * b.impuesto.quinta.segunda
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                    else if(uit[a.year] * 20 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 35){ 
                        let retencionAnual = a.salary * 12 * b.impuesto.quinta.tercero
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                    else if(uit[a.year] * 35 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 45){ 
                        let retencionAnual = a.salary * 12 * b.impuesto.quinta.cuarto1
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                    else if(uit[a.year] * 45 < a.salary * 12){ 
                        let retencionAnual = a.salary * 12 * b.impuesto.quinta.quinta
                        console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
                    }
                }         
            }
        }

    }
}

function inpuestos(nombre){
    for(i of personal){
        if(i.name == nombre){
            categoria(i.jobs)
        }
    }
}

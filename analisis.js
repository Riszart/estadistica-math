// recoleccion de impuestos
console.log(personal)
function categoria(empresa, jubilacionTipo){
    for(a of empresa){
        for(b of retencion){
            if(a.company == 'Freelance'){
                if(b.impuesto){
                    if(uit[a.year] * 7 < a.salary * 12){
                        impuestoEspesifico(b.impuesto.cuarta, true)
                    }
                    else{ 
                        console.log('impuesto para el año: '+ a.year +', es: 0')
                    }
                }
            }
            else{
                if(b.impuesto){
                    if(a.salary * 12 <= uit[a.year] * 5 ){
                        impuestoEspesifico(b.impuesto.quinta.primer, false, jubilacionTipo)
                    }
                    else if(uit[a.year] * 5 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 20){
                        impuestoEspesifico(b.impuesto.quinta.segunda, false, jubilacionTipo)
                    }
                    else if(uit[a.year] * 20 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 35){
                        impuestoEspesifico(b.impuesto.quinta.tercera, false, jubilacionTipo)
                    }
                    else if(uit[a.year] * 35 < a.salary * 12 ^ a.salary * 12 <= uit[a.year] * 45){ 
                        impuestoEspesifico(b.impuesto.quinta.cuarta, false, jubilacionTipo)
                    }
                    else if(uit[a.year] * 45 < a.salary * 12){ 
                        impuestoEspesifico(b.impuesto.quinta.quinta, false, jubilacionTipo)

                    }
                }         
            }
        }
    }
}
function impuestoEspesifico(impuesto, esFree, jubilacionModo){
    let retencionAnual = a.salary * 12 * impuesto
    console.log('impuesto para el año: ' + a.year +', es: '+ retencionAnual)
    if(esFree == false){
        let salarioDE = a.salary
        seguro(salarioDE * 12)
        jubilacion(salarioDE, jubilacionModo)
    }

}
function jubilacion(salarioJubi, tipojubila){
    if(tipojubila == 'onp'){
        let onp = salarioJubi * retencion[2].pension.onp
        console.log('onp: ' + onp) 
    }
    else{
        let totalAfp = retencion[2].pension.afp.cuentapersonal + retencion[2].pension.afp.cobroAdministracion + retencion[2].pension.afp.seguro
        let afp = salarioJubi * totalAfp
        console.log('afp: ' + afp) 
    }
}

function seguro(salario){
    for(a of retencion){
        if(a.esSalud){
            let seguro = salario * a.esSalud
            console.log('salud anual:  ' + seguro)
        }
    }
}
function inpuestos(nombre){
    for(i of personal){
        if(i.name == nombre){
            categoria(i.jobs, i.seguroVida)
        }
    }
}

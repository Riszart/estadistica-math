/* capasidad de endeudamineto = (ingresos totales - gastos fijos) * 0.35*/ 
/* capasidad de ahorro = (ingresos totales - gastos fijos) * 0.15*/ 
const retencion = []
const uit = {
  2017: 4050,
  2018: 4150,
  2019: 4200,
  2020: 4300,
  2021: 4400,
  2022: 4450
}
retencion.push({
  impuesto:{cuarta: 0.08, quinta:{primer:0.08,segunda: 0.14, tercera: 0.17, cuarta: 0.2, quinta: 0.3}},
})
retencion.push({
  esSalud: 0.09,
})
retencion.push({
  pension:{onp:0.13, afp:{cuentapersonal:0.1, cobroAdministracion:0.0023, seguro:0.0174}},
})

const personal = []

personal.push({
  seguroVida: 'onp',
  name:'Juan',
  gender:'Masculino',
  fixedCostsMonth: 600,
  jobs:[
    {year: 2017 ,company: 'Gloria', salary: 1050, hoursWeek: 48, daysWork: 5},
    {year: 2018 ,company: 'Gloria', salary: 1150, hoursWeek: 48, daysWork: 5},
    {year: 2019 ,company: 'Gloria', salary: 1250, hoursWeek: 48, daysWork: 5},
    {year: 2020 ,company: 'Laive', salary: 1050, hoursWeek: 48, daysWork: 5},
    {year: 2021 ,company: 'Laive', salary: 1300, hoursWeek: 48, daysWork: 5},
    {year: 2022 ,company: 'Laive', salary: 1250, hoursWeek: 48, daysWork: 5},
    {year: 2023 ,company: 'Laive', salary: 1250, hoursWeek: 48, daysWork: 5},
  ]
})
personal.push({
  seguroVida: 'afp',
  name:'Betty',
  gender:'Femenino',
  fixedCostsMonth: 500,
  jobs:[
    { year: 2017, company: 'Freelance', salary: 1050, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2019, company: 'Industrias Mokepon', salary: 1050, hoursWeek: 48},
    { year: 2020, company: 'Industrias Mokepon', salary: 1050, hoursWeek: 48},
    { year: 2021, company: 'Industrias Mokepon', salary: 1255, hoursWeek: 48},
    { year: 2022, company: 'Industrias Mokepon', salary: 1250, hoursWeek: 48},
    { year: 2023, company: 'Industrias Mokepon', salary: 1250, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Alex',
  gender:'Masculino',
  fixedCostsMonth: 510,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 950, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1100, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1200, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2021, company: 'Industrias Mokepon', salary: 1050, hoursWeek: 48},
    { year: 2022, company: 'Industrias Mokepon', salary: 1250, hoursWeek: 48},
    { year: 2023, company: 'Industrias Mokepon', salary: 1250, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Nath',
  gender:'Femenino',
  fixedCostsMonth: 700,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1000, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1200, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1100, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1560, hoursWeek: 0},
    { year: 2021, company: 'MarketerosCOL', salary: 1050, hoursWeek: 48},
    { year: 2022, company: 'MarketerosCOL', salary: 1000, hoursWeek: 48},
    { year: 2023, company: 'MarketerosCOL', salary: 1100, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Julia',
  gender:'Femenino',
  fixedCostsMonth: 880,
  jobs: [
    { year: 2017, company: 'MarketerosCOL', salary: 970, hoursWeek: 48},
    { year: 2018, company: 'MarketerosCOL', salary: 1000, hoursWeek: 48},
    { year: 2019, company: 'MarketerosCOL', salary: 1200, hoursWeek: 48},
    { year: 2020, company: 'MarketerosCOL', salary: 1200, hoursWeek: 48},
    { year: 2021, company: 'MarketerosCOL', salary: 1200, hoursWeek: 48},
    { year: 2022, company: 'MarketerosCOL', salary: 1300, hoursWeek: 48},
    { year: 2023, company: 'MarketerosCOL', salary: 1300, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Jonatan',
  gender:'Masculino',
  fixedCostsMonth: 810,
  jobs: [
    { year: 2017, company: 'MarketerosCOL', salary: 970, hoursWeek: 48},
    { year: 2018, company: 'MarketerosCOL', salary: 1010, hoursWeek: 48},
    { year: 2019, company: 'MarketerosCOL', salary: 1050, hoursWeek: 48},
    { year: 2020, company: 'MarketerosCOL', salary: 1100, hoursWeek: 48},
    { year: 2021, company: 'MarketerosCOL', salary: 1150, hoursWeek: 48},
    { year: 2022, company: 'MarketerosCOL', salary: 1300, hoursWeek: 48},
    { year: 2023, company: 'MarketerosCOL', salary: 1250, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Armando',
  gender:'Masculino',
  fixedCostsMonth: 920,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1700, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1900, hoursWeek: 0},
    { year: 2021, company: 'Freelance', salary: 2000, hoursWeek: 0},
    { year: 2022, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2023, company: 'Freelance', salary: 1700, hoursWeek: 0},
  ],
});
personal.push({
  name: 'Dilan',
  gender:'Masculino',
  fixedCostsMonth: 750,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1080, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1200, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1600, hoursWeek: 0},
    { year: 2021, company: 'Mokepon', salary: 1100, hoursWeek: 48},
    { year: 2022, company: 'Mokepon', salary: 1200, hoursWeek: 48},
    { year: 2023, company: 'Mokepon', salary: 1280, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Zamir',
  gender:'Masculino',
  fixedCostsMonth: 560,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1000, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 900, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 2000, hoursWeek: 0},
    { year: 2021, company: 'Mokepon', salary: 1100, hoursWeek: 48},
    { year: 2022, company: 'Mokepon', salary: 1100, hoursWeek: 48},
    { year: 2023, company: 'Mokepon', salary: 1200, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Daniela',
  gender:'Femenino',
  fixedCostsMonth: 730,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2021, company: 'Freelance', salary: 1550, hoursWeek: 0},
    { year: 2022, company: 'Freelance', salary: 1450, hoursWeek: 0},
    { year: 2023, company: 'MarketerosCOL', salary: 1500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Daniel',
  gender:'Masculino',
  fixedCostsMonth: 870,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1750, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1050, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1050, hoursWeek: 0},
    { year: 2020, company: 'Freelance', salary: 1250, hoursWeek: 0},
    { year: 2021, company: 'Freelance', salary: 1850, hoursWeek: 0},
    { year: 2022, company: 'Freelance', salary: 1550, hoursWeek: 0},
    { year: 2023, company: 'Freelance', salary: 1650, hoursWeek: 0},
  ]
})
personal.push({
  name: 'Rigoberto',
  gender:'Masculino',
  fixedCostsMonth: 650,
  jobs: [
    { year: 2017, company: 'MarketerosCOL', salary: 1500, hoursWeek: 48},
    { year: 2018, company: 'MarketerosCOL', salary: 1700, hoursWeek: 48},
    { year: 2019, company: 'MarketerosCOL', salary: 1700, hoursWeek: 48},
    { year: 2020, company: 'MarketerosCOL', salary: 1700, hoursWeek: 48},
    { year: 2021, company: 'MarketerosCOL', salary: 1750, hoursWeek: 48},
    { year: 2022, company: 'MarketerosCOL', salary: 1750, hoursWeek: 48},
    { year: 2023, company: 'MarketerosCOL', salary: 1750, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Alicia',
  gender:'Femenino',
  fixedCostsMonth: 440,
  jobs: [
    { year: 2017, company: 'Inversionify', salary: 970, hoursWeek: 48},
    { year: 2018, company: 'Inversionify', salary: 970, hoursWeek: 48},
    { year: 2019, company: 'Inversionify', salary: 1700, hoursWeek: 48},
    { year: 2020, company: 'Inversionify', salary: 2700, hoursWeek: 48},
    { year: 2021, company: 'Inversionify', salary: 3750, hoursWeek: 48},
    { year: 2022, company: 'Freelance', salary: 1550,hoursWeek: 0},
    { year: 2023, company: 'Freelance', salary: 350, hoursWeek: 0},
  ],
});
personal.push({
  name: 'Teodoro',
  gender:'Masculino',
  fixedCostsMonth: 880,
  jobs: [
    { year: 2017, company: 'Freelance', salary: 1500, hoursWeek: 0},
    { year: 2018, company: 'Freelance', salary: 1600, hoursWeek: 0},
    { year: 2019, company: 'Freelance', salary: 1700, hoursWeek: 0},
    { year: 2020, company: 'Inversionify', salary: 1700, hoursWeek: 48},
    { year: 2021, company: 'Inversionify', salary: 1750, hoursWeek: 48},
    { year: 2022, company: 'Freelance', salary: 1800, hoursWeek: 0},
    { year: 2023, company: 'Freelance', salary: 1850, hoursWeek: 0},
  ],
});
personal.push({
  name: 'Bruce',
  gender:'Masculino',
  fixedCostsMonth: 1500,
  jobs: [
    { year: 2017, company: 'Wayne Enterprises', salary: 4600, hoursWeek: 48},
    { year: 2018, company: 'Wayne Enterprises', salary: 4600, hoursWeek: 48},
    { year: 2019, company: 'Wayne Enterprises', salary: 4700, hoursWeek: 48},
    { year: 2020, company: 'Wayne Enterprises', salary: 3700, hoursWeek: 48},
    { year: 2021, company: 'Wayne Enterprises', salary: 4150, hoursWeek: 48},
    { year: 2022, company: 'Wayne Enterprises', salary: 4400, hoursWeek: 48},
    { year: 2023, company: 'Wayne Enterprises', salary: 3850, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Alfred',
  gender:'Masculino',
  fixedCostsMonth: 730,
  jobs: [
    { year: 2017, company: 'Wayne Enterprises', salary: 2000, hoursWeek: 48},
    { year: 2018, company: 'Wayne Enterprises', salary: 2000, hoursWeek: 48},
    { year: 2019, company: 'Wayne Enterprises', salary: 2000, hoursWeek: 48},
    { year: 2020, company: 'Wayne Enterprises', salary: 1500, hoursWeek: 48},
    { year: 2021, company: 'Wayne Enterprises', salary: 1500, hoursWeek: 48},
    { year: 2022, company: 'Wayne Enterprises', salary: 2000, hoursWeek: 48},
    { year: 2023, company: 'Wayne Enterprises', salary: 1500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Clark Kent',
  gender:'Masculino',
  fixedCostsMonth: 880,
  jobs: [
    { year: 2017, company: 'Daily Planet', salary: 970, hoursWeek: 48},
    { year: 2018, company: 'Daily Planet', salary: 1000, hoursWeek: 48},
    { year: 2019, company: 'Daily Planet', salary: 1200, hoursWeek: 48},
    { year: 2020, company: 'Daily Planet', salary: 1250, hoursWeek: 48},
    { year: 2021, company: 'Daily Planet', salary: 1500, hoursWeek: 48},
    { year: 2022, company: 'Daily Planet', salary: 1800, hoursWeek: 48},
    { year: 2023, company: 'Daily Planet', salary: 1500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Lois Lane',
  gender:'Femenino',
  fixedCostsMonth: 990,
  jobs: [
    { year: 2017, company: 'Daily Planet', salary: 2000, hoursWeek: 48},
    { year: 2018, company: 'Daily Planet', salary: 2000, hoursWeek: 48},
    { year: 2019, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
    { year: 2020, company: 'Daily Planet', salary: 2000, hoursWeek: 48},
    { year: 2021, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
    { year: 2022, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
    { year: 2023, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Jimmy Olsen',
  gender:'Masculino',
  fixedCostsMonth: 910,
  jobs: [
    { year: 2017, company: 'Daily Planet', salary: 1500, hoursWeek: 48},
    { year: 2018, company: 'Daily Planet', salary: 1500, hoursWeek: 48},
    { year: 2019, company: 'Daily Planet', salary: 2000, hoursWeek: 48},
    { year: 2020, company: 'Daily Planet', salary: 2000, hoursWeek: 48},
    { year: 2021, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
    { year: 2022, company: 'Daily Planet', salary: 2500, hoursWeek: 48},
    { year: 2023, company: 'Daily Planet', salary: 1500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Perry White',
  gender:'Femenino',
  fixedCostsMonth: 1000,
  jobs: [
    { year: 2017, company: 'Daily Planet', salary: 35000, hoursWeek: 48},
    { year: 2018, company: 'Daily Planet', salary: 35000, hoursWeek: 48},
    { year: 2019, company: 'Daily Planet', salary: 37000, hoursWeek: 48},
    { year: 2020, company: 'Daily Planet', salary: 38000, hoursWeek: 48},
    { year: 2021, company: 'Daily Planet', salary: 40000, hoursWeek: 48},
    { year: 2022, company: 'Daily Planet', salary: 40500, hoursWeek: 48},
    { year: 2023, company: 'Daily Planet', salary: 40500, hoursWeek: 48},
  ],
});
personal.push({
  name: 'Lex Luthor',
  gender:'Masculino',
  fixedCostsMonth: 1500,
  jobs: [
    { year: 2017, company: 'LexCorp', salary: 5000, hoursWeek: 48},
    { year: 2018, company: 'LexCorp', salary: 5000, hoursWeek: 48},
    { year: 2019, company: 'LexCorp', salary: 5300, hoursWeek: 48},
    { year: 2020, company: 'LexCorp', salary: 4000, hoursWeek: 48},
    { year: 2021, company: 'LexCorp', salary: 3000, hoursWeek: 48},
    { year: 2022, company: 'LexCorp', salary: 3500, hoursWeek: 48},
    { year: 2023, company: 'LexCorp', salary: 3050, hoursWeek: 48},
  ],
});

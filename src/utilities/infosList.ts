import { calculateImc } from "./getInfosIMC"

export function getInfosList(props: {weight: number, height: number}) {
  const {imc, evaluate, ideal} = calculateImc(props)
  return [
    {
      init: 'Seu ',
      first: 'IMC',
      second: ' é de:',
      third: `${imc} - ${evaluate}`
    },
    {
      init: 'Você ',
      first: (+imc >= 25 ? 'precisa perder peso.' : +imc < 18.5 ? 'precisa ganhar peso.' : 'está com o peso normal, parabéns!')
    },
    {
      init: 'Sua ',
      first: 'faixa de peso ideal ',
      second: 'é de:',
      third: `${ideal.min}kg a ${ideal.max}kg`
    }
  ]
}
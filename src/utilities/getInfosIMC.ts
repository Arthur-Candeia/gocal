export function calculateImc({weight, height}: {weight: number, height: number}) {
  height /= 100
  const imc = (weight / (height * height))

  return {imc: imc.toFixed(2), evaluate: evaluateImc(imc), ideal: idealWeight(height)}
}

function evaluateImc(imc: number) {
  switch (true) {
    case (imc < 18.5): return "Abaixo do peso";
    case (imc < 24.9): return "Peso normal";
    case (imc < 29.9): return "Sobrepeso";
    case (imc < 34.9):  return "Obesidade grau 1";
    case (imc < 39.9): return "Obesidade grau 2";
    default: return "Obesidade grau 3";
  }
}

function idealWeight(height: number) {
  return {
    min: (18.5 * (height * height)).toFixed(2),
    max: (24.9 * (height * height)).toFixed(2)
  }
}
const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
// funçaõ para formatar OS numeros dos valores que vem do backend no estilo de moeda;
export default formatValue;

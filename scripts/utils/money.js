export function formatCurrency(priceCennts) {
  return (Math.round(priceCennts) / 100).toFixed(2);
}
export default formatCurrency;

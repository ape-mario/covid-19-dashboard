export const calculateTrend = (currentValue, totalValue) => {
  if (!currentValue || !totalValue) return 0;
  // For negative changes (like decreases in cases)
  const change = currentValue < 0 ? currentValue * -1 : currentValue;
  return ((change / totalValue) * 100).toFixed(1);
};
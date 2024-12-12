export const getTopCountries = (data, limit) => {
  return data
    .sort((a, b) => b.cases - a.cases)
    .slice(0, limit);
};
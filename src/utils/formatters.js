/**
 * Utility functions for data formatting
 */

/**
 * Format number with locale-specific thousand separators
 * @param {number} value - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (value) => {
  if (!value && value !== 0) return '-';
  return value.toLocaleString();
};
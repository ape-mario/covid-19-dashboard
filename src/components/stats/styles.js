/**
 * Styles for statistical components
 * Defines the visual appearance of stat cards and their elements
 */
export const cardStyles = {
  cardBody: {
    padding: '20px',
  },
  getCardStyle: (color) => ({
    borderRadius: '8px',
    background: '#ffffff',
    borderLeft: `4px solid ${color.primary}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  }),
  getStatTitleStyle: (color) => ({
    color: color.primary,
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '8px',
  }),
  getIconStyle: (color) => ({
    color: color.primary,
    fontSize: '24px',
    marginRight: '8px',
    padding: '8px',
    background: color.secondary,
    borderRadius: '8px',
  }),
  getValueStyle: (color) => ({
    color: '#000000d9', // Using Ant Design's default text color
    fontSize: '1.75rem',
    fontWeight: 600,
  }),
};
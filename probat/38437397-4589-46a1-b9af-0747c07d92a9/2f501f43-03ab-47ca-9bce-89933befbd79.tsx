interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  borderRadius?: string;
  additionalPadding?: string;
  customBgColor?: string;
  customTextColor?: string;
  customBorderColor?: string;
  customHoverBgColor?: string;
  customHoverTextColor?: string;
  customHoverBorderColor?: string;
}

const getPaletteColors = (
  btnVariant: ButtonProps['variant'],
  isOutline: boolean,
  customBgColor?: string,
  customTextColor?: string,
  customBorderColor?: string,
  customHoverBgColor?: string,
  customHoverTextColor?: string,
  customHoverBorderColor?: string
) => {
  const palette = {
    primary: '#007bff', primaryHover: '#0056b3',
    secondary: '#5a6268', secondaryHover: '#4e555b', // Adjusted for WCAG AA
    success: '#28a745', successHover: '#1e7e34',
    danger: '#dc3545', dangerHover: '#bd2130',
    warning: '#ffc107', warningHover: '#e0a800',
    info: '#17a2b8', infoHover: '#117a8b',
    dark: '#343a40', darkHover: '#23272b',
    light: '#f8f9fa', lightHover: '#dae0e5',
    white: '#ffffff',
    black: '#212529',
  };

  let bgColor, textColor, borderColor, hoverBg, hoverText, hoverBorder;

  const lightText = palette.white;
  const darkText = palette.black;

  switch (btnVariant) {
    case 'primary':
      bgColor = palette.primary; textColor = lightText; borderColor = palette.primary;
      hoverBg = palette.primaryHover; hoverText = lightText; hoverBorder = palette.primaryHover;
      break;
    case 'secondary':
      bgColor = palette.secondary; textColor = lightText; borderColor = palette.secondary;
      hoverBg = palette.secondaryHover; hoverText = lightText; hoverBorder = palette.secondaryHover;
      break;
    case 'success':
      bgColor = palette.success; textColor = lightText; borderColor = palette.success;
      hoverBg = palette.successHover; hoverText = lightText; hoverBorder = palette.successHover;
      break;
    case 'danger':
      bgColor = palette.danger; textColor = lightText; borderColor = palette.danger;
      hoverBg = palette.dangerHover; hoverText = lightText; hoverBorder = palette.dangerHover;
      break;
    case 'warning':
      bgColor = palette.warning; textColor = darkText; borderColor = palette.warning;
      hoverBg = palette.warningHover; hoverText = darkText; hoverBorder = palette.warningHover;
      break;
    case 'info':
      bgColor = palette.info; textColor = lightText; borderColor = palette.info;
      hoverBg = palette.infoHover; hoverText = lightText; hoverBorder = palette.infoHover;
      break;
    case 'dark':
      bgColor = palette.dark; textColor = lightText; borderColor = palette.dark;
      hoverBg = palette.darkHover; hoverText = lightText; hoverBorder = palette.darkHover;
      break;
    case 'light':
      bgColor = palette.light; textColor = darkText; borderColor = palette.light;
      hoverBg = palette.lightHover; hoverText = darkText; hoverBorder = palette.lightHover;
      break;
    case 'ghost':
      bgColor = 'transparent'; textColor = palette.primary; borderColor = palette.primary;
      hoverBg = palette.primary; hoverText = lightText; hoverBorder = palette.primary;
      break;
    default:
      bgColor = palette.primary; textColor = lightText; borderColor = palette.primary;
      hoverBg = palette.primaryHover; hoverText = lightText; hoverBorder = palette.primaryHover;
  }

  if (customBgColor !== undefined || customTextColor !== undefined || customBorderColor !== undefined || customHoverBgColor !== undefined || customHoverTextColor !== undefined || customHoverBorderColor !== undefined) {
    bgColor = customBgColor !== undefined ? customBgColor : bgColor;
    textColor = customTextColor !== undefined ? customTextColor : textColor;
    borderColor = customBorderColor !== undefined ? customBorderColor : borderColor;
    hoverBg = customHoverBgColor !== undefined ? customHoverBgColor : hoverBg;
    hoverText = customHoverTextColor !== undefined ? customHoverTextColor : hoverText;
    hoverBorder = customHoverBorderColor !== undefined ? customHoverBorderColor : hoverBorder;
  }

  if (isOutline) {
    textColor = bgColor;
    borderColor = bgColor;
    bgColor = 'transparent';

    hoverBg = textColor;
    hoverText = lightText;
    hoverBorder = textColor;
  }

  return {
    backgroundColor: bgColor,
    color: textColor,
    borderColor: borderColor,
    hoverBackgroundColor: hoverBg,
    hoverColor: hoverText,
    hoverBorderColor: hoverBorder,
  };
};

export const sample = ({
  label = 'Click Me',
  onClick,
  variant = 'primary',
  size = 'medium',
  outline = false,
  fullWidth = false,
  centered = false,
  borderRadius = '0.25rem',
  additionalPadding = '',
  customBgColor,
  customTextColor,
  customBorderColor,
  customHoverBgColor,
  customHoverTextColor,
  customHoverBorderColor,
}: ButtonProps) => {
  const { backgroundColor, color, borderColor, hoverBackgroundColor, hoverColor, hoverBorderColor } = getPaletteColors(
    variant,
    outline,
    customBgColor,
    customTextColor,
    customBorderColor,
    customHoverBgColor,
    customHoverTextColor,
    customHoverBorderColor
  );

  const baseStyles: React.CSSProperties = {
    padding: size === 'small' ? '0.25rem 0.5rem' : size === 'large' ? '0.5rem 1rem' : '0.375rem 0.75rem',
    fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.25rem' : '1rem',
    lineHeight: '1.5',
    borderRadius: borderRadius,
    border: '1px solid',
    cursor: 'pointer',
    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    display: fullWidth || centered ? 'block' : 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    width: fullWidth ? '100%' : 'auto',
    margin: centered ? '0 auto' : '0',
    backgroundColor,
    color,
    borderColor,
  };

  if (additionalPadding) {
    baseStyles.padding = additionalPadding;
  }

  const uniqueId = `button-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <style>{`
        .${uniqueId} {
          background-color: ${backgroundColor};
          color: ${color};
          border-color: ${borderColor};
        }
        .${uniqueId}:hover {
          background-color: ${hoverBackgroundColor};
          color: ${hoverColor};
          border-color: ${hoverBorderColor};
        }
        .${uniqueId}:focus {
          outline: 0;
          box-shadow: 0 0 0 0.2rem ${borderColor + '40'}; /* Light shadow based on border */
        }
      `}</style>
      <button
        className={uniqueId}
        onClick={onClick}
        style={baseStyles}
      >
        {label}
      </button>
    </>
  );
};
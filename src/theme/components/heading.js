const baseStyle = {
  color: "white.A700",
  fontFamily: "Raleway",
};
const sizes = {
  "3xl": {
    fontSize: '{"md":"50px","base":"40px","sm":"46px"}',
    fontWeight: 600,
  },
  "2xl": {
    fontSize: '{"md":"42px","base":"32px","sm":"38px"}',
    fontWeight: 700,
  },
  xl: {
    fontSize: '{"md":"33px","base":"29px","sm":"31px"}',
    fontWeight: 600,
  },
  "4xl": {
    fontSize: '{"md":"60px","base":"46px","sm":"52px"}',
    fontWeight: 700,
  },
  s: {
    fontSize: "18px",
    fontWeight: 700,
  },
  md: {
    fontSize: '{"md":"28px","base":"24px","sm":"26px"}',
    fontWeight: 700,
  },
  xs: {
    fontSize: "16px",
    fontWeight: 700,
  },
  lg: {
    fontSize: '{"md":"32px","base":"28px","sm":"30px"}',
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "lg",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;

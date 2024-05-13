import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  md: defineStyle({
    h: "88px",
    fontSize: "32px",
    px: "20px",
  }),
  sm: defineStyle({
    h: "60px",
    px: "12px",
  }),
  xs: defineStyle({
    h: "56px",
    fontSize: "16px",
    px: "24px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      yellow_800_02: {
        bg: "yellow.800_02",
      },
      red_600: {
        bg: "red.600",
      },
      gray_900_01: {
        bg: "gray.900_01",
      },
      gray_900: {
        bg: "gray.900",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_900"];
  }),
  gradient: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      yellow_800_01_yellow_700_01: {
        bgGradient: "linear-gradient(323deg, #f69522,#fbb532)",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["yellow_800_01_yellow_700_01"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "gradient",
    size: "xs",
  },
});
export default Button;

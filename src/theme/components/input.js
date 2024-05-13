import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" } });

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "16px",
      height: "55px",
      px: "20px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_900: {
        field: {
          bg: "blue_gray.900",
          color: "gray.600",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["blue_gray_900"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_900_19: {
        field: {
          borderColor: "gray.900_19",
          borderTopWidth: "1px",
          borderLeftWidth: "1px",
          borderBottomWidth: "1px",
          borderStyle: "solid",
          color: "white.A700",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_900_19"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;

import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  xs: defineStyle({
    h: "196px",
    fontSize: "16px",
    p: "20px",
  }),
};

const variants = {
  tarFillBluegray900: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_900: {
        bg: "blue_gray.900",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["blue_gray_900"];
  }),
};

const TextArea = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "tarFillBluegray900",
    size: "xs",
  },
});
export default TextArea;

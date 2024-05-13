import React from "react";
import { Select } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
  round: {
    borderRadius: "5px",
  },
};
const variants = {
  fill: {
    blue_gray_900: {
      bg: "blue_gray.900",
      color: "white.A700",
    },
  },
};
const sizes = {
  xs: {
    h: "55px",
    pl: "20px",
    pr: "35px",
    fontSize: "16px",
  },
};

const SelectBox = React.forwardRef(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "xs",
      variant = "fill",
      color = "blue_gray_900",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              ...sizes[size],
              ...shapes[shape],
              ...variants[variant][color],
              ...style,
              zIndex: 0,
              display: "flex",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#141a36 !important",
              color: state.isSelected && "#ffffff !important",
              "&:hover": {
                backgroundColor: "#141a36",
                color: "#ffffff",
              },
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900"]),
};

export { SelectBox };

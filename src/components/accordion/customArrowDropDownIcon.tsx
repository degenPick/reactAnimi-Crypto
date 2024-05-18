import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomArrowDropDownIcon = styled(ArrowDropDownIcon)(({ theme }) => ({
    color: '#FFFFFF',
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
    },
    transform: 'rotate(270deg)',
    transition: 'transform 0.3s ease',
    '.MuiAccordion-root.Mui-expanded &': {
      transform: 'rotate(180deg)!important',
    },
  }));

export default CustomArrowDropDownIcon;

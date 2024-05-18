import { ReactNode } from 'react';
import { RHFSelect } from 'src/components/hook-form';

interface CustomRHFSelectType {
  name: string;
  label: string;
  children: ReactNode;
}

const CustomRHFSelect = ({ name, label, children }: CustomRHFSelectType) => (
  <RHFSelect
    name={name}
    label={label}
    InputLabelProps={{
      style: { color: '#fff' },
    }}
    sx={{
      '&.MuiFormControl-root': {
        my: 2,
      },
      '& .MuiPopover-paper .MuiMenu-pape': {
        backgroundColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
        border: 0,
        color: '#fff',
        backgroundColor: '#272F4C',
        borderRadius: 1,
        opacity: 1,
        '& fieldset': {
          border: 'none',
          color: '#fff',
          opacity: 0,
        },
      },

      maxWidth: '580px',
    }}
  >
    {children}
  </RHFSelect>
);

export default CustomRHFSelect;

import { RHFTextField } from 'src/components/hook-form';

interface CustomRHFTextFieldType {
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
}

const CustomRHFTextField = ({ name, label, multiline = false, rows }: CustomRHFTextFieldType) => (
  <RHFTextField
    name={name}
    label={label}
    InputLabelProps={{
      style: { color: '#fff' },
    }}
    multiline={multiline}
    rows={rows}
    sx={{
      '&.MuiFormControl-root': {
        my: 2,
      },
      maxWidth: '580px',
      color: 'red',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: 'none',
          color: '#fff',
          opacity: 0,
        },
        p: 0,
        textarea: {
          border: 0,
          color: '#fff',
          backgroundColor: '#272F4C',
          borderRadius: 1,
          opacity: 1,
          p: 2,
        },
        input: {
          border: 0,
          color: '#fff',
          backgroundColor: '#272F4C',
          borderRadius: 1,
          opacity: 1
        },
      },
    }}
  />
);

export default CustomRHFTextField;

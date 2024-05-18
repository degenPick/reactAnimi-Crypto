// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
// eslint-disable-next-line import/no-extraneous-dependencies
import { MuiTelInput, matchIsValidTel, MuiTelInputProps } from 'mui-tel-input';

// ----------------------------------------------------------------------

type Props = MuiTelInputProps & {
  name: string;
};

export default function RHFPhoneTextField({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ validate: matchIsValidTel }}
      render={({ field, fieldState: { error } }) => (
        <MuiTelInput
          {...field}
          error={!!error}
          {...other}
        />
      )}
    />
  );
}

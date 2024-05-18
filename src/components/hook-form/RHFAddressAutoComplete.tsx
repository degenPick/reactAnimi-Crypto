// form
import { useFormContext, Controller } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePlacesWidget } from "react-google-autocomplete";
import { TextField, TextFieldProps } from '@mui/material';
import {GOOGLE_API_KEY} from "../../config-global";
// @mui
// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  handleAddress: (address: string) => void,
};

export default function RHFAddressAutoComplete({ name, helperText, handleAddress, ...other }: Props) {
  const { control } = useFormContext();

  const { ref: materialRef } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      handleAddress(place.formatted_address);
    },
    inputAutocompleteValue: "country",
    options: {
      types: ["geocode"],
    }
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error ? error?.message : helperText}
          inputRef={materialRef}
          {...other}
        />
      )}
    />
  );
}

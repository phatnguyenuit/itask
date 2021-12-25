import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

export interface MyInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName>,
    Omit<TextFieldProps, 'name' | 'defaultValue' | 'inputRef' | 'error'> {}

function MyInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  rules,
  defaultValue,
  control,
  shouldUnregister,
  InputLabelProps,
  ...fieldProps
}: MyInputProps<TFieldValues, TName>) {
  const {
    fieldState: { error },
    field: { ref, ...inputProps },
  } = useController<TFieldValues, TName>({
    name,
    rules,
    defaultValue,
    control,
    shouldUnregister,
  });
  const errorMessage = error?.message;
  return (
    <Box>
      <TextField
        {...fieldProps}
        {...inputProps}
        InputLabelProps={{ shrink: true, ...InputLabelProps }}
        error={!!errorMessage}
        inputRef={ref}
      />
      {errorMessage && (
        <Box mt={1 / 2}>
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default MyInput;

import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputBase,
  InputBaseProps,
  Typography,
} from "@mui/material";
import { white } from "@/styles/colors";

const StyledInput = styled(InputBase)({
  backgroundColor: white,
  marginTop: "0.5rem",
  borderRadius: "6px",
  input: {
    padding: "1rem",
  },
  "&::placeholder": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "0",
    fontWeight: 400,
  },
});

interface InputProps extends InputBaseProps {
  label: string;
  errorMessage?: string;
}

export function Input({ label, errorMessage, ...rest }: InputProps) {
  return (
    <FormControl component="fieldset">
      <Typography htmlFor={rest.id} component="label" variant="label">
        {label}
      </Typography>
      <StyledInput {...rest} aria-describedby={`${rest.id}-helper-text`} />
      {errorMessage && (
        <FormHelperText id={`${rest.id}-helper-text`}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
}

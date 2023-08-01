import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/material/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

interface IFormInput {
  email: string;
}

const Container = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "24rem",
  gap: "1.313rem",
});

let schema = object({
  email: string().required("Este campo é obrigatório").email("Email inválido"),
});

export function NewsletterForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            fullWidth
            label="Email"
            placeholder="Email"
            error={!!error}
            errorMessage={error?.message}
            sx={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        size="large"
        sx={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
      >
        Subscribe
      </Button>
    </Container>
  );
}

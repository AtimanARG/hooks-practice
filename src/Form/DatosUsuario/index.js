import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { valdidarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({
    value: "",
    valid: null,
  });
  const [password, setPassword] = useState({ value: "", valid: null });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && password.valid) {
          updateStep(1);
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido"
        }
        value={email.value}
        onChange={(input) => {
          const valorEmail = input.target.value;
          const valido = valdidarEmail(valorEmail);
          setEmail({ value: valorEmail, valid: valido });
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Ingrese un contraseña valida, minimo 8 caracteres y maximo 20."
        }
        value={password.value}
        onChange={(input) => {
          const valorPassword = input.target.value;
          setPassword({
            value: valorPassword,
            valid: validarPassword(valorPassword),
          });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;

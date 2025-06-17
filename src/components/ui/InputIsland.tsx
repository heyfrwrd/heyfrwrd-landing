"use client";
import * as React from "react";
import {
  InputButtonProvider,
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonSubmit,
} from "@/components/animate-ui/buttons/input";

export default function InputIsland() {
  return (
    <InputButtonProvider>
      <InputButton>
        <InputButtonAction>¡Solicita acceso anticipado!</InputButtonAction>
        <InputButtonSubmit>Solicitar</InputButtonSubmit>
      </InputButton>
      <InputButtonInput placeholder="@your_instagram" />
    </InputButtonProvider>
  );
}

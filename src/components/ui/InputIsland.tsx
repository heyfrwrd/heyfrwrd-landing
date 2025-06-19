// src/components/InputIsland.tsx
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
  const [handle, setHandle] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = handle.trim();
    if (!trimmed) return;
    window.sessionStorage.setItem("instagram_handle", trimmed);
    window.location.href = "/request-demo";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[350px] w-full justify-center mx-auto flex items-center"
    >
      <InputButtonProvider>
        <InputButton>
          <InputButtonAction>¡Solicita acceso anticipado!</InputButtonAction>
          <InputButtonSubmit type="submit" disabled={!handle.trim()}>
            Solicitar
          </InputButtonSubmit>
          <InputButtonInput
            placeholder="@your_instagram"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </InputButton>
      </InputButtonProvider>
    </form>
  );
}

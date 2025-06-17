"use client";
import * as React from "react";
import {
  InputButtonProvider,
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonSubmit,
} from "./animate-ui/buttons/input";

export default function InputIsland() {
  return (
    <InputButtonProvider>
      <InputButton>
        <InputButtonAction>Join the newsletter</InputButtonAction>
        <InputButtonSubmit>Subscribe</InputButtonSubmit>
      </InputButton>
      <InputButtonInput type="email" placeholder="your-email@example.com" />
    </InputButtonProvider>
  );
}

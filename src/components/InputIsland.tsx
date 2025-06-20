"use client";
import * as React from "react";
import { getTranslation, getLanguagePrefix } from "@/utils/translations";
import {
  InputButtonProvider,
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonSubmit,
} from "@/components/animate-ui/buttons/input";

interface InputIslandProps {
  language: "en" | "es";
}

export default function InputIsland({ language }: InputIslandProps) {
  const [handle, setHandle] = React.useState("");

  // Helper function for translations
  const t = (key: string) => getTranslation(key, language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = handle.trim();
    if (!trimmed) return;
    
    // Store the handle in session storage
    window.sessionStorage.setItem("instagram_handle", trimmed);
    
    // Get the current language prefix for the URL
    const langPrefix = getLanguagePrefix(language);
    
    // Redirect to the request-demo page with the current language prefix
    window.location.href = `${langPrefix}/request-demo`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[350px] w-full justify-center mx-auto flex items-center"
    >
      <InputButtonProvider>
        <InputButton>
          <InputButtonAction>{t("input.requestAccess")}</InputButtonAction>
          <InputButtonSubmit type="submit" disabled={!handle.trim()}>
            {t("input.submit")}
          </InputButtonSubmit>
          <InputButtonInput
            placeholder={t("input.placeholder")}
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </InputButton>
      </InputButtonProvider>
    </form>
  );
}

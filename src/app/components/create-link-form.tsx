"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { createRef, FormEvent } from "react";
import { createShortLink } from "../actions/create-short-link";

function CreateLinkForm() {
  const ref = createRef<HTMLFormElement>();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("url") as string;
    if (!url) {
      throw Error("Url is required");
    }
    createShortLink(url);
    ref.current?.reset();
  }

  return (
    <form ref={ref} className="flex space-x-2" onSubmit={onSubmit}>
      <Input
        className="flex-1"
        placeholder="Paste your long URL here"
        type="url"
        name="url"
      />
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Clink It!
      </Button>
    </form>
  );
}

export default CreateLinkForm;

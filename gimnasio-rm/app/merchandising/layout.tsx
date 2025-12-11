"use client";
import React, { PropsWithChildren } from "react";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
const layout = ({ children }: PropsWithChildren) => {
  const cliente_pb = new QueryClient();
  return (
    <QueryClientProvider client={cliente_pb}>{children}</QueryClientProvider>
  );
};

export default layout;

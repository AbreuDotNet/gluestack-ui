
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customizing Theme",
  description: "Customize your UI theme in gluestack-ui v2 by defining a theme config and applying it via GluestackUIProvider. Tailwind CSS theme support lets you style your app seamlessly."
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
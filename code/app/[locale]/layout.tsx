// app/[locale]/layout.tsx
import { redirect } from 'next/navigation';
import React from 'react';
import Navigation from "@/components/Navigation";

// Definiujemy obsługiwane języki (locales)
const SUPPORTED_LOCALES = ['pl', 'en', 'de'];
const DEFAULT_LOCALE = 'pl';

interface URLParams {
    locale: string;
}

interface Props {
    children: React.ReactNode;
    params: Promise<URLParams>;
}

export default async function LocaleLayout({ children, params }: Props) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;

    const isValidLocale = SUPPORTED_LOCALES.includes(locale);

    if (!isValidLocale) {
        redirect(`/${DEFAULT_LOCALE}`);
    }

    return (
        <html lang={locale}>
        <body>
        {children}
        </body>
        </html>
    );
}
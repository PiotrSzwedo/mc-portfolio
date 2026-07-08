// app/[...slug]/page.tsx
import React from 'react';
import files from "@/routes/files";

interface Props {
    params: Promise<{
        locale: string;
        slug: string[]
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DynamicRouterPage(props: Props) {
    const { locale, slug } = await props.params;

    const url = slug.join('/');

    // @ts-ignore
    const ComponentToRender = files[locale]?.[url];

    if (!ComponentToRender) {
        return <div>Strona nie została znaleziona (404)</div>;
    }

    return <ComponentToRender {...props} />;
}
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['pl', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
    // 1. W Next.js 15 requestLocale to Promise, więc musimy użyć await
    const locale = await requestLocale;

    // 2. Sprawdzamy, czy język jest na liście wspieranych
    if (!locale || !locales.includes(locale)) {
        notFound();
    }

    return {
        locale, // Warto też jawnie zwrócić locale w obiekcie
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
    locales: ['pl', 'en'],
    defaultLocale: 'pl'
});

export const config = {
    matcher: ['/', '/(pl|en)/:path*']
};

export default function middleware(request: NextRequest) {
    return intlMiddleware(request);
}

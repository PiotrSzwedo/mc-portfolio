'use client';

import {useParams} from 'next/navigation';
import Link from 'next/link';
import Ikona from "@/assets/resources/ikona.svg";
import getLink from "@/routes/links";
import {useTranslations} from "next-intl";

export default function Navigation() {
    const params = useParams();
    const locale = params?.locale as string;

    const t = useTranslations()

    return (
        <nav>
            <a href={"/"}>
                <img src={Ikona.src}/>
            </a>
            <ul>
                <li><Link href={getLink(locale, "book_visit")}>{t("navigation.book_visit")}</Link></li>
            </ul>
            <div>

            </div>
        </nav>
    );
}
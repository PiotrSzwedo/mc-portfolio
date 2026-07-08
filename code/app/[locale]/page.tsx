import Image from "next/image";
import Ikona from "@/assets/resources/ikona.svg";
import {useTranslations} from 'next-intl';
import Navigation from "@/components/Navigation";
import React from "react";

// const t = useTranslations()

export default function Home() {
  return (
    <>
      <header>
          <Navigation></Navigation>
      </header>
    </>
  );
}

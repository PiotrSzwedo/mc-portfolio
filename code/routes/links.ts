export const link = {
    "pl": {
        "book_visit": `zarejestruj-wizyte`
    },
    "en": {
        "book_visit": "zarejestruj-wizyte"
    }
}

const getLink = (locale: string, key: string) => {
    if (locale == undefined || key == undefined || link == undefined){
        return ""
    }

    // @ts-ignore
    return `/${locale}/${link[locale][key]}`
}

export default getLink;
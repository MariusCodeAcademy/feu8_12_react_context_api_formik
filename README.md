# Praktika

## Register page

1. Sukurti Register page puslapio komponenta.
2. prideti i navigacija ir padaryti kad atsidarytu nuejus i /register
3. padaryti kad matytusi tik kai nesame prisijunge prie sistemos.
4. Sukurti forma su email, age, password ir repeatPassword inputais
5. Valdyti ir validuoti forma su useFormik() amzius turetu galimaas buti nuo 18 iki 300 metu, visi laukai privalomi
6. klaidas atvaizduoti po inputais.
7. password ir repeatPassword turi sutapti (sita galima spresti onSubmit funkcijoje arba su Yup)
8. jei klaidu nera siunciam forma i https://reqres.in/api/register. registracija ten buna sekminga jei email bus vienas is pateiktu: (george.bluth@reqres.in, janet.weaver@reqres.in, emma.wong@reqres.in, eve.holt@reqres.in)
9. jei ivestas bus email ne is pateiktu gausite klaida.

### sekme/nesekme

10. Atspausdinti sekmes ir nesekmes atvejus konsoleje kai jie ivyksta
11. sekmes atveju paslepiam forma.
12. Atspausdinti savo sukurta elementa su tekstu virs formos kad pavyko ar nepavyko.
13. Sukuti komponenta Feedback kuris gauna stiliu ir teksta ir atspausdina pavyko ar nepavyko.

## Aside

1. Sukurti Aside i komponenta HomePage. (desktop turetu uzimti apie 30% desines puses)
2. Avaizduojam jame is kontekxto logged in user emaila. jei varotojas prisijunges
3. Aside atvaizduojam dabartine data ir laika
4. laikas turetu atsinaujinti kas sekunde.

## Prisijungimo laikas ir data

1. papildyti LoginPage koda kad paduoti i login funkcija prisijungimo laika milisekundem. (new Date())
2. App.jsx papildyti login funkcija kad priimtu prisijungimo laika milisekundem
3. App.jsx susikurti prisijungimo laikui state kuriame laikas bus saugomas milisekundem.
4. paduoti prisijungimo laika milisekundem i conteksta.
5. Atvaizduoti prisijungimo laika Aside komponente (arba homePage jei nepasidarete Aside).

P.S. Laikas milisekundem gaunamas su +new Date(). Atversti laika i laiko objekta atgal galite su

```
const dateObj = new Date(<cia paduoti laika milisekundem>)
```

tada `dateObj` per tašką galite kviesti laiko formatavimo metodus tokius kaip:

1. .toLocaleString(),
2. .toLocaleDateString()
3. .toLocaleTimeString()

daugiau apie datas https://www.w3schools.com/js/js_dates.asp

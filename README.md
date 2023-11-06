# Javascript1_cviceni-novinky
## Novinky
Ovlivněte stránku JavaScriptem.

Vytvořte si repozitář ze šablony [cviceni-novinky](https://github.com/Czechitas-podklady-WEB/cviceni-novinky). V repozitáři je připravena webová stránka, která zobrazuje několik zajímavých zpráv. Zobrazte stránku v prohlížeči a veškeré úkoly z tohoto cvičení proveďte v JavaScriptovém souboru `index.js`.

1. Pomocí `document.querySelector` vyberte element `body` a uložte si jej do proměnné `bodyElement`. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu `#e9e9e9`.
1. Do jiné proměnné vyberte element s třídou `news` a nastavte mu barvu pozadí na bílou a maximální šířku na `60rem`.
1. Vyberte element `h1` a nastavte mu (v JavaScriptu) třídu na `news__title`. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text `Aktuální novinky`.
1. Pomocí atributu `id` vyberte element obsahující první zprávu. Přidejte do jeho atributu `class` třídu `post--main`. První zpráva by tak měla mírně změnit svůj styl.
1. Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (`id` zprávy je zprava3``) a změňte jeho atribut `src` na obrázek `images/zprava3-novy.jpg`.
Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže:

![Ukázka novinek](https://kodim.cz/cms/assets/vyvoj-webu/js1/lekce/dom-innerhtml/cv-manipulace/novinky/screen-novinky.png)

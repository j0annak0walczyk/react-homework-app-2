## Zadanie Konwerter jednostek ciężkości

Twoim zadaniem jest stworzenie mini aplikacji która będzie przeliczac jednostkę ciężaru - design przedstawia
przeliczanie funtów na gramy kilogramy i uncje - możesz użyć innych jednostek - do przeliczenia jednostek będzieszi musiał/musiała zrobić resaerch jak te jednostki przeliczyć ;)

w zadaniu nie ma narzuconego sposobu wykonania zadania jedynym wymogiem jest uzycie reacta
możesz zrobić to w jednym komponencie możesz to rozbić na kilka komponentów tak żeby zachować dobre praktyki pisania aplikacji w react czyli - modularność.

Jeżeli jednak potrzebujesz pomysłu jak podzielić sobie aplikacje na foldery i komponenty to zostawiam moją sugestie poniżej + plik design_podzial_na_komponenty:

Sugerowany podzial na komponenty:

- App.js komponent entry point który jest generowany i jest dostępny z automatu po wygenerowaniu aplikacji reactowej
- AppTitle.js jest to komponent wyświetlający tekst widoczny na deisngie
- WeightForm.js jest to ko komponent który ma input tekstowy do wprowadzenia wartości numerycznej do przeliczenia na inne jednostki - możesz też użyć formularza tak żeby urozmaicić działanie aplikacji i umożliwoć userowi klikania klawisza enter do obliczenia ALE możesz użyć tylko inputu i wszystkie obliczenia robić po każdej zmianie w inpucie i stanie (useState) + computed value
- WeightOutput.js jest to komponent który może przyjmować 3 propsy label, value oraz backgrounColor
  każdy z tych propów będzie odpowiednio label - nazwa jednostki (np. "Kilograms") value - wartość przeliczanej jednostki
  (czyli computed value) oraz backgroundColor czyli może to być string odpowiadający za kolor zgodny z designem
  na designie są 3 komponenty output więc będzie 3 użycia tego komponentu jedno użycie na jedną wyliczaną jednostkę.

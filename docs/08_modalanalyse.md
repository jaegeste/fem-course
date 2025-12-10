# Modul 06 – Modalanalyse

## Lernziele

In diesem Modul werden folgende Inhalte und Kompetenzen vermittelt:

* Bedeutung von Eigenfrequenzen und Eigenformen für Bauteile und Baugruppen
* Herleitung grundlegender Zusammenhänge aus einfachen Feder Masse Systemen
* Einfluss der Einspannung und der Massenverteilung auf das Eigenschwingungsverhalten
* Umsetzung einer Modalanalyse in ANSYS Mechanical
* Interpretation und Bewertung von Modenformen
* Vergleich numerischer und analytisch bekannter Lösungen an einfachen Strukturen
* Übertragung auf komplexere Baugruppen mit starren und verformbaren Teilen

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/lampe.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>

<br>

<video controls width="700">
  <source src="../media/08_modalanalyse/tisch.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<!-- markdownlint-enable MD033 -->

<!-- markdownlint-disable MD033 -->
<iframe  
    width="700"  
    height="394"  
    src="https://www.youtube-nocookie.com/embed/XggxeuFDaDU?cc_load_policy=0&cc_lang_pref=en&hl=en"  
    title="Tacoma Narrows Bridge Collapse"
    frameborder="0"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
    allowfullscreen
    playsinline>
</iframe>
<!-- markdownlint-enable MD033 -->

<!-- markdownlint-disable MD033 -->
<iframe  
    width="700"  
    height="394"  
    src="https://www.youtube-nocookie.com/embed/__yQcF4G7tM?start=37&end=105&cc_load_policy=0&cc_lang_pref=en&hl=en"  
    title="Machining vibration example"
    frameborder="0"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
    allowfullscreen
    playsinline>
</iframe>
<!-- markdownlint-enable MD033 -->

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="media/08_modalanalyse/unterbau.mp4" type="video/mp4">
  Ihr Browser unterstützt das Abspielen von Videos nicht.
</video>
<!-- markdownlint-enable MD033 -->


## Motivation und zentrale Fragestellungen

In vielen technischen Anwendungen zeigen reale Strukturen charakteristische Schwingungsphänomene. Beispiele reichen von sichtbaren Auslenkungen an Maschinen und Bauteilen bis hin zu großmaßstäblichen Resonanzerscheinungen an Konstruktionen. Filmsequenzen und Messaufnahmen verdeutlichen, dass sich Schwingungen häufig in typischen Mustern ausbilden und nur in bestimmten Frequenzbereichen verstärkt auftreten.

Diese Beobachtungen werfen grundlegende Fragen auf:

* Welche Eigenschaften eines Systems bestimmen sein Schwingungsverhalten  
* Warum treten deutliche Schwingungen oft nur in bestimmten Frequenzbereichen auf  
* Welche physikalischen Parameter steuern die Lage der Eigenfrequenzen und die Form der Schwingung  
* Wie unterscheiden sich die Schwingungsphänomene eines Einmassensystems von denen kontinuierlicher Strukturen  
* Welche Modenformen prägen das Verhalten komplexer Bauteile und Baugruppen  

Zur systematischen Beantwortung dieser Fragen wird schrittweise vom einfachen dynamischen Modell zum komplexen technischen Bauteil übergegangen. Der Einstieg erfolgt über grundlegende Modelle wie den Einmassenschwinger, bevor Balken, Platten, Wellen und komplexe Baugruppen analysiert werden.

## Theoretischer Hintergrund

### Motivation und Einordnung

* Unterschied Modalanalyse und Betriebsschwingungsanalyse
* Bedeutung für reale technische Systeme

### Grundbegriffe

* Frequenz, Eigenkreisfrequenz, Periode
* Gedämpfte und ungedämpfte Schwingungen
* Übertragungsfunktion als reale Messgröße

### Modellstufen

* Von starren Körpern zu kontinulierlichen Strukturen

### Grundlegende mathematische Zusammenhänge

* Einmassenschwinger
* Zweimassenschwinger
* Überleitung zur FE Modalanalyse: Lösung des Eigenwertproblems  
  M ẍ + K x = 0

### Analytische Lösungen einfacher Strukturen

* Balken eigenfrequenzen für freie, einseitig feste und beidseitig feste Lagerung
* Platte mit einfacher Geometrie (optional)

## Umsetzung in ANSYS

### Geometrie und Material

* Nutzung der vorhandenen Geometrien:  
  * Balken  
  * Stahlplatte  
  * Welle  
  * Baugruppe Windenergieanlage

### Kontakt und Verbindungselemente

* Einfluss auf Modenformen
* Wann kann ein Teil als starr modelliert werden

### Randbedingungen

* Frei, einseitig fest, beidseitig fest
* Einfluss auf Resultate

### Netz

* Bedeutung des Netzes für Modalanalysen
* Lokale Verfeinerung an kritischen Geometrien
* Einfluss der Trägheitsverteilung

### Lösereinstellungen

* Ziel: die ersten n Eigenfrequenzen
* Auswahl des Frequenzbereichs
* Skalierung der Modenformen
* Nutzung der Animation für Filmsequenzen

## Beispiele (vom einfachen Bauteil zur Baugruppe)

### 1. Balken

* Erste zehn Eigenformen vergleichen
* Einfluss der Einspannung
* Einfluss des Materials

### 2. Stahlplatte

* Erste fünf Moden
* Interpretation typischer Plattenmoden
* Vergleich der Moden bei freien und fixierten Kanten

### 3. Getriebewelle

* Einfluss von Punktmassen
* Identifikation relevanter Moden für den Betrieb einer Maschine

### 4. Windenergieanlage

* Reduktion komplexer Baugruppen
* Einfluss der Materialwahl
* Strukturkritische Moden

## Diskussion der Ergebnisse

* Veränderungen der Moden durch Masseverteilung, Steifigkeit, Randbedingungen
* Interpretation typischer Modenformen
* Bedeutung für Betriebsdrehzahlen und Sicherheit
* Grenzen der Modalanalyse

## Weiterführendes

* Einführung in Betriebsschwingungsanalyse
* Experimentelle Modalanalyse
* Modellreduktion für große Baugruppen
* Mehrkörpermodell und Kopplung an FE Modelle

## Quiz zur Selbstkontrolle

(Platzhalter)

<!-- 
wie geht's weiter:
  - Modul 7 Thermo-Mechanik: 09_thermomechanik.md
  - Modul 8 Sensoren I (Beschl.): 10_sensor_beschl.md
  - Modul 9 Sensoren II (Druck): 11_sensor_druck.md
  - Modul 10 Kontakt: 12_kontakt.md
  - Modul 11 Ausblick: 13_ausblick.md

  | Modul | Titel | Kerninhalt |
| :----: | :---- | :---------- |
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |
-->

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}
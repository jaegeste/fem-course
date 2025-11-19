# Modul 05 – Symmetrie und Modellreduktion

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* Symmetrieeigenschaften eines Bauteils erkennen und korrekt anwenden  
* Symmetrie in ANSYS definieren und geeignete Randbedingungen formulieren  
* typische Fehler bei falsch orientierten Symmetrierandbedingungen vermeiden  
* Druck vs. Kraft sauber unterscheiden  
* reibungsfreie Lager oder zyklische Symmetrie zur Reduktion der Rechenzeit einsetzen  
* die Rechenzeit signifikant reduzieren, ohne die Aussagekraft der Ergebnisse zu beeinträchtigen  

## Aufgabenstellung Flansch

Der in Abbildung dargestellte Flansch soll auf maximale Spannung und maximale Verformung untersucht werden. Die Rechenzeit soll durch geeignete Symmetrieausnutzung minimiert werden. Die Lösung muss netzunabhängig sein und ein sauberes Konvergenzverhalten zeigen.

* Fall A: Innendruck von 200 bar  
* Fall B: Zugkraft von 100 kN (aufgebracht an den Stirnflächen des Flansches)

[![Flansch](media/07_symmetrie/flansch.svg){width=800px}](media/07_symmetrie/flansch.svg "Flansch"){.glightbox}

Verwendet wird die bereitgestellte Geometrie des Flansches sowie deren reduzierte Varianten (Halbschnitt, Viertelmodell, Achtelmodell).

**Geometrie:**

* [flansch\_voll.stp](media/07_symmetrie/flansch_voll.stp)  
* [flansch\_halb.stp](media/07_symmetrie/flansch_halb.stp)  
* [flansch\_viertel.stp](media/07_symmetrie/flansch_viertel.stp)  
* [flansch\_achtel.stp](media/07_symmetrie/flansch_achtel.stp)

**Material (neu anzulegen):** *Flanschstahl450*

* Dichte \(\rho = 7.850 \,\text{kg/m}^3\)
* Elastizitätsmodul \(E = 215.000 \,\text{MPa}\)
* Querkontraktionszahl \(\nu = 0,30\)
* Streckgrenze \(R_\text{e} = 450 \,\text{MPa}\)

## Theoretischer Hintergrund

Die Nutzung von Symmetrie in der numerischen Analyse ermöglicht eine Reduktion des geometrischen Modells, der Freiheitsgrade und damit der Rechenzeit. Die Gültigkeit einer Modellreduktion setzt voraus, dass **Geometrie**, **Belastung**, **Randbedingungen** und **Material** geeignete Symmetrieeigenschaften besitzen. Nur wenn alle Bedingungen gleichzeitig erfüllt sind, ist das reduzierte Modell äquivalent zum Vollmodell.

### Symmetriebedingungen

Die Nutzung von Symmetrie gehört zu den wirkungsvollsten Strategien zur Reduktion der Modellgrösse in der FEM. Voraussetzung ist, dass das **physikalische Verhalten des Vollmodells** durch ein **geeignet reduziertes Teilmodell** vollständig beschrieben werden kann.  

Für die Anwendung von Symmetrie müssen vier Bedingungen gleichzeitig erfüllt sein:

* **Geometrische Symmetrie**  
  Die Bauteilgeometrie muss durch eine oder mehrere Ebenen beziehungsweise Achsen so teilbar sein, dass die verbleibenden Teilbereiche zueinander identisch sind.  
  Typische Beispiele sind Modelle mit Halbierung, Viertelung oder Achtelung sowie axiale oder zyklische Symmetrie.

* **Materialsymmetrie**  
  Das Materialverhalten muss in allen symmetrisch abgebildeten Teilbereichen identisch sein.  
  Für isotrope Werkstoffe ist diese Bedingung automatisch erfüllt.

* **Lastsymmetrie**  
  Belastungen müssen in allen durch Symmetrie erzeugten Teilbereichen konsistent wirken.  
  Ein flächenbezogener Druck erfüllt dies meist automatisch, eine einzelne Kraft wirkt dagegen nur dann symmetrisch, wenn sie korrekt auf den jeweilig berücksichtigten Modellanteil aufgeteilt wird.

* **Randbedingungssymmetrie**  
  Randbedingungen müssen in den durch Symmetrie entsprechenden Bereichen gleichwertig sein.  
  Unterschiedliche Lagerungen in zwei Teilbereichen würden die Symmetrie verletzen.

Sind alle vier Bedingungen erfüllt, kann anstelle des Vollmodells ein geeigneter Ausschnitt des Bauteils berechnet werden. Die zugehörige Symmetrierandbedingung sperrt die Verschiebung normal zur Symmetrieebene und erlaubt Bewegungen in ihren tangentialen Richtungen.

Dies führt zu einer erheblichen Reduktion der Freiheitsgrade und damit der Rechenzeit, ohne dass die Qualität oder Aussagekraft der Ergebnisse leidet.

---

### Typische Symmetrieebenen

In der Technik treten je nach Bauteilgeometrie und Belastung unterschiedliche Formen von Symmetrie auf. Die folgenden Symmetriearten zählen zu den häufigsten und ermöglichen jeweils eine deutliche Reduktion des Modells.

* **Planare Symmetrieebenen (XY, XZ, YZ)**  
  Planare Symmetrie tritt auf, wenn ein Bauteil durch eine oder mehrere senkrechte oder waagrechte Ebenen in identische Teilbereiche zerlegt werden kann. Dazu gehören die klassischen Ebenen XY, XZ und YZ. Typische Beispiele sind symmetrische Flansche, Zugstäbe mit mittigem Querschnitt, Platten mit zentralem Loch oder dünne Bauteile, deren Ober- und Unterseite identisch aufgebaut sind.

* **axiale Symmetrie**  
  Rotationssymmetrie um eine Achse: Alle Querschnitte besitzen die gleiche Form.  
  Typische Beispiele: Zylinder, Druckbehälter, Dichtflächen, Scheiben und viele Flanschgrundkörper.

* **zyklische Symmetrie**  
  Das Bauteil besteht aus wiederholenden Segmenten, die sich periodisch um eine Achse anordnen.  
  Typische Beispiele: Lochkreise in Flanschen, Laufräder, Turbinenscheiben oder Felgen mit identischen Speichen.

---

### Druck und Kraft bei Teilmodellen

#### Druck

Druck \(p\) wirkt stets **senkrecht zur belasteten Fläche** und orientiert sich entlang der lokalen Flächennormalen. Da \(p\) eine **flächenbezogene Last** ist, bleibt der Wert auch bei reduzierten Modellen unverändert.  
Die daraus resultierende Kraft \(F\) ergibt sich erst durch Multiplikation mit der wirksamen Fläche \(A\):

\[
F = p \cdot A
\]

#### Kraft

Eine Kraft \(F\) ist eine **integrale Last**, die über eine gesamte Fläche wirkt. Wird nur ein Teil des Bauteils modelliert, reduziert sich die wirksame Fläche.  
Daher muss die Kraft im reduzierten Modell \(F_r\) entsprechend skaliert werden. Der Skalierungsfaktor \(\alpha\) beschreibt den Anteil des berechneten Teilmodells am Vollmodell:

\[
F_r = \alpha F, \qquad \alpha = \frac{\text{Teilmodell}}{\text{Gesamtmodell}}
\]

Typische Skalierungen:

* Viertelmodell: \(\alpha = \frac{1}{4}\)  
* Achtelmodell: \(\alpha = \frac{1}{8}\)  
* Halbmodell: \(\alpha = \frac{1}{2}\)

Auf diese Weise bleibt die resultierende **Flächenpressung \( \sigma = F/A \)** und damit der physikalische Lastzustand korrekt erhalten.

---

## Umsetzung in ANSYS

### 1. Projektverwaltung und Geometrieimport

Wie Projekt organisieren? für alle Modelle EIN System jeweils für Druck und Kraft?

### 2. Materialzuweisung

**Materialname:** FEM-Flanschstahl 450

* Dichte \(\rho = 7 850 \,\text{kg/m}^3\)
* Elastizitätsmodul \(E = 215.000 \,\text{MPa}\)
* Querkontraktionszahl \(\nu = 0.30\)
* Streckgrenze \(R_\text{e} = 450 \,\text{MPa}\)

### 3. Netzgenerierung

### 4. Randbedingungen

Kraft/Druck
Reibungsfreie Lager
zyklische Symmetrie

### Reibungsfreie Lager

Ein reibungsfreies Lager verhindert Verschiebung in Normalrichtung:

\[
u \cdot n = 0
\]

lässt aber tangentiale Verschiebungen zu:

\[
u_t \ne 0
\]

Damit werden Querkräfte vermieden und Zwängungen ausgeschlossen.  
Typische Anwendungen:

* radiale Abstützungen  
* Bauteilführung  
* Ergänzung bei Symmetrie zur Stabilisierung des Modells

---

### Zyklische Symmetrie

Bei zyklischer Symmetrie besteht ein Körper aus \(N\) identischen Sektoren.  
Es genügt die Berechnung eines Sektors, wenn gilt:

\[
u(\theta + \Delta\theta) = R(\Delta\theta)\, u(\theta)
\]

mit dem Rotationsoperator

\[
R(\Delta\theta) =
\begin{pmatrix}
\cos\Delta\theta & -\sin\Delta\theta & 0 \\
\sin\Delta\theta & \cos\Delta\theta & 0 \\
0 & 0 & 1
\end{pmatrix}.
\]

Dies reduziert Rechenzeit und Speicherbedarf erheblich und verbessert die Kondition des Gleichungssystems.

### 5. Analyseeinstellungen

### 6. Auswertung

## Umsetzung in ANSYS

* Geometrie importieren (`flansch_voll.stp`, `flansch_viertel.stp`, `flansch_achtel.stp`)  
* Symmetrieebenen erzeugen → *Connections* → *Symmetry*  
* lokale Koordinatensysteme prüfen  
* Belastungsdefinition:  
    * Druck 200 bar direkt auf Innenfläche  
    * Zugkraft 100 kN anteilig je nach Modellreduktion  
* reibungsfreie Lager an geeigneten Flächen zur Stabilisierung  
* Netz: globale h-Verfeinerung, lokale Verfeinerung am Übergang Rohr–Flansch  
* Konvergenz: Vergleich Spannung/Verformung über Elementgrösse  
* Solverwahl: direkt (präzise), iterativ (schnell bei grossen Modellen)  

---

## Diskussion der Ergebnisse

Netzeinflussstudie vorausgesetzt
Rechenzeit/Anzahl Elemente vs. Schnittmodell

## Weiterführende Aspekte

* Einsatz zyklischer Symmetrie bei rotierenden oder segmentierten Strukturen  
* häufige Fehler: unvollständige Symmetrie, doppelte Lagerung, asymmetrische Kontakte  
* Darstellung von Ergebnissen über *Section Plane*  
* Vergleich Vollmodell vs. Teilmodell hinsichtlich Rechenzeit und Ergebniskonsistenz  
* Erweiterung auf Modalanalysen und komplexere Baugruppen  

## Aufgabenstellung Kühlkörper (lineare Symmetrie...)



<!-- 
wie geht's weiter:
  - Modul 6 Modalanalyse: 08_modalanalyse.md
  - Modul 7 Thermo-Mechanik: 09_thermomechanik.md
  - Modul 8 Sensoren I (Beschl.): 10_sensor_beschl.md
  - Modul 9 Sensoren II (Druck): 11_sensor_druck.md
  - Modul 10 Kontakt: 12_kontakt.md
  - Modul 11 Ausblick: 13_ausblick.md

  | Modul | Titel | Kerninhalt |
| :----: | :---- | :---------- |
| **06** | **Modalanalyse – vom Balken zur Baugruppe** | Einführung in die Eigenfrequenzanalyse: theoretischer Hintergrund, Eigenformen und -frequenzen, Einfluss von Lagerung, Material und Geometrie; Beispiel: Balken und einfache Baugruppe (z. B. Welle). Gitarrenseite unter Vorspannung?|
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |

-->

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}  

# Modul 04 – Krafteinleitung und Spannungsüberhöhungen

<!-- 

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* typische Ursachen numerischer Spannungsüberhöhungen erkennen,  
* den Unterschied zwischen physikalisch und numerisch bedingten Spannungsspitzen erklären,  
* unphysikalische Punkt- oder Linienlasten vermeiden,  
* geeignete Maßnahmen zur Entschärfung von Spannungssingularitäten anwenden (z. B. Sekantenschnitt, Radius, größere Lastfläche),  
* die Bedeutung der Krafteinleitung für die Ergebnisgüte einschätzen.

---

## Theoretischer Hintergrund

Eine der häufigsten Fehlerquellen in der FEM ist die **idealisierte Krafteinleitung**.  
Lasten, die in der Realität über Flächen verteilt werden, werden im Modell häufig als Punkt- oder Linienlasten angegeben.  
Dadurch entstehen an Kanten oder Punkten **Singularitäten** – mathematisch divergente Spannungen.

### Typische Ursachen:
* Punktlast auf Fläche → σ → ∞  
* Linienlast oder scharfer Kantenübergang  
* abrupte Querschnittsänderung ohne Radius  
* zu kleine Kontaktfläche zwischen Bauteilen  

Die FEM zeigt in solchen Fällen keine Konvergenz:  
Bei jeder Netzverfeinerung steigt die lokale Spannung weiter an.

### Lösung: realistische Krafteinleitung
Physikalisch korrekte Lastübertragung durch:
* **Flächenlast** statt Punktlast,  
* **Übergangsradien oder Fasen** statt scharfer Kanten,  
* **Sekantenschnitt** (sanfter Geometrieübergang),  
* **elastische Zwischenlage oder Endplatte** zur Kraftverteilung.

---

## Aufgabenstellung

1. Modellieren Sie einen zylindrischen oder rechteckigen Körper (z. B. Block 100×40×20 mm).  
2. Variante A: Belastung durch **Punktlast** auf kleiner Fläche (1×1 mm).  
3. Variante B: Belastung über **Flächenlast** auf 20×20 mm.  
4. Variante C: Belastung über Flächenlast + Sekantenschnitt oder Radius (r = 5 mm).  
5. Vergleichen Sie die Spannungsverteilungen und ermitteln Sie, ob eine Konvergenz erreicht wird.  
6. Diskutieren Sie, welche Variante das physikalisch sinnvollste Ergebnis liefert.

---

## Umsetzung in ANSYS Mechanical

* Erstellen Sie drei Geometrievarianten (A – C).  
* Verwenden Sie identische Randbedingungen und Netzeinstellungen.  
* Definieren Sie für jede Variante die gleiche Gesamtkraft F (z. B. 10 kN).  
  → Bei Flächenlast = F / A.  
* Vergleichen Sie σ<sub>v</sub> im Lastbereich entlang einer Linie oder Fläche.  
* Optional: Visualisieren Sie die Spannungsverläufe mit Plotly für Berichte.

---

## Diskussion der Ergebnisse

* Punkt- und Linienlasten erzeugen unrealistische Spannungsspitzen; die Ergebnisse sind nicht konvergent.  
* Eine Flächenlast mit Sekantenschnitt oder Radius führt zu stabilen, physikalisch interpretierbaren Spannungen.  
* Netzverfeinerung darf das Ergebnis nicht beliebig verändern → Konvergenzprüfung.  
* Lokale Spannungsspitzen dürfen nur bewertet werden, wenn sie geometrisch begründet sind (Kerbe, Kontakt).  
* Bei echten Punktkontakten: Spannungswert lokal unendlich, aber Energie endlich → Bewertung über Energieansatz oder Mittelspannung.

---

wie geht's weiter:
  - Modul 4 Krafteinleitung: 06_krafteinleitung.md
  - Modul 5 Symmetrie: 07_symmetrie.md
  - Modul 6 Modalanalyse: 08_modalanalyse.md
  - Modul 7 Thermo-Mechanik: 09_thermomechanik.md
  - Modul 8 Sensoren I (Beschl.): 10_sensor_beschl.md
  - Modul 9 Sensoren II (Druck): 11_sensor_druck.md
  - Modul 10 Kontakt: 12_kontakt.md
  - Modul 11 Ausblick: 13_ausblick.md

  | Modul | Titel | Kerninhalt |
| :----: | :---- | :---------- |
| **03** | **Elementtypen & Netzqualität** | Vergleich linearer und quadratischer Volumenelemente (SOLID185/186), Einfluss der Ansatzfunktionen auf Genauigkeit und Konvergenz, Netzgüte, Spannungs­glättung, einfache h-Studie. |
| **04** | **Krafteinleitung & Spannungsüberhöhungen** | Analyse unrealistischer Punkt- und Linienlasten, Divergenzen an Kanten, Einführung realer Flächenlasten, Sekantenschnitt und Übergangsradien zur Entschärfung, Spannungsverteilung im Lastbereich, Netzqualität und Spannungs­glättung |
| **05** | **Symmetrie & Modellreduktion** | Nutzung von Symmetrieebenen zur Reduktion von Rechenzeit, korrekte Definition der Symmetrierandbedingungen, Fehlerquellen bei falscher Orientierung, Anwendung am Zugstab oder Flansch, kleiner Exkurs zum Solver (direkt/indirekt), |
| **06** | **Modalanalyse – vom Balken zur Baugruppe** | Einführung in die Eigenfrequenzanalyse: theoretischer Hintergrund, Eigenformen und -frequenzen, Einfluss von Lagerung, Material und Geometrie; Beispiel: Balken und einfache Baugruppe (z. B. Welle). |
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |

-->

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}
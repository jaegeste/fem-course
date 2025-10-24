# Modul 3 Elementtypen und Netzqualität

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}

<!--

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* den Unterschied zwischen linearen und quadratischen Ansatzfunktionen erläutern,  
* den Einfluss des Elementtyps (SOLID185 vs. SOLID186) auf Genauigkeit und Spannungsverlauf bewerten,  
* eine h-Studie durchführen und Konvergenz beurteilen,  
* Kriterien zur Bewertung der Netzqualität anwenden (Aspektverhältnis, Verzerrung, Übergänge),  
* die Bedeutung der Spannungs­glättung für Vergleichsspannungen erklären.

---

## Theoretischer Hintergrund

Die Genauigkeit eines FEM-Ergebnisses hängt wesentlich von zwei Faktoren ab:

1. **Ansatzfunktion (Elementordnung)**  
   Lineare Elemente (z. B. SOLID185) verwenden lineare Formfunktionen zwischen den Knoten, quadratische Elemente (z. B. SOLID186) beinhalten Mittenknoten und bilden gekrümmte Geometrien sowie nichtlineare Spannungsverläufe besser ab.  
   Quadratische Elemente liefern bei gleichem Netz deutlich genauere Ergebnisse, erfordern aber mehr Rechenzeit.

2. **Netzqualität und Konvergenz**  
   Eine zu grobe Diskretisierung oder verzerrte Elemente führen zu unphysikalischen Spannungsverteilungen.  
   Durch Netzverfeinerung (h-Studie) wird überprüft, ob die Lösung gegen einen stabilen Wert konvergiert.  
   Nur konvergente Ergebnisse sind physikalisch interpretierbar.

**Spannungs­glättung:**  
Die FEM berechnet Spannungen an den Integration- bzw. Gauss-Punkten. Unterschiedliche Glättungsverfahren (z. B. averaged nodal stress) können die Darstellung glätten, dürfen aber keine numerische Unsicherheit verdecken.

---

## Aufgabenstellung

1. Verwenden Sie den Zugstab mit Endplatte (oder ein ähnliches 3D-Bauteil mit axialer Belastung).  
2. Erzeugen Sie zunächst ein Netz mit **linearer Elementordnung** (*Element Order = Linear*).  
3. Führen Sie dieselbe Analyse mit **quadratischer Elementordnung** (*Element Order = Quadratic*) durch.  
4. Vergleichen Sie die Spannungsverteilung und die maximale Vergleichsspannung im Übergangsbereich.  
5. Variieren Sie zusätzlich die Elementgröße (h-Studie) und dokumentieren Sie die Konvergenz.  
6. Diskutieren Sie Rechenzeit ↔ Genauigkeit.

---

## Umsetzung in ANSYS Mechanical

1. Im Projektbaum **Netz → Details → Elementordnung:**  
   *Programmgesteuert / Linear / Quadratisch* wählen.  
2. Nach jeder Änderung **Netz generieren** und Ergebnis prüfen.  
3. Zur Kontrolle des verwendeten Elementtyps:  
   *Extras → Protokoll anzeigen* oder *Elementqualität* einfügen.  
4. Für die h-Studie Elementgröße sukzessive halbieren und σ<sub>max</sub> protokollieren.  
5. Spannungen entlang einer Achse oder auf einer Linie auswerten und grafisch darstellen.

---

## Diskussion der Ergebnisse

* Quadratische Elemente bilden den Spannungsverlauf realistischer ab; der Unterschied zeigt sich deutlich im Krafteinleitungsbereich.  
* Bei linearer Elementordnung treten größere Abweichungen zwischen benachbarten Elementen auf.  
* Eine h-Studie zeigt, dass sich σ<sub>max</sub> bei Verfeinerung asymptotisch einem stabilen Wert annähert.  
* Netzfehler (zu schlanke oder verzerrte Elemente) können Konvergenz verhindern.  
* Spannungs­glättung kann qualitative Trends verbessern, ersetzt aber keine Konvergenzprüfung.

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
| **04** | **Krafteinleitung & Spannungsüberhöhungen** | Analyse unrealistischer Punkt- und Linienlasten, Divergenzen an Kanten, Einführung realer Flächenlasten, Sekantenschnitt und Übergangsradien zur Entschärfung, Spannungsverteilung im Lastbereich. |
| **05** | **Symmetrie & Modellreduktion** | Nutzung von Symmetrieebenen zur Reduktion von Rechenzeit, korrekte Definition der Symmetrierandbedingungen, Fehlerquellen bei falscher Orientierung, Anwendung am Zugstab oder Flansch. |
| **06** | **Modalanalyse – vom Balken zur Baugruppe** | Einführung in die Eigenfrequenzanalyse: theoretischer Hintergrund, Eigenformen und -frequenzen, Einfluss von Lagerung, Material und Geometrie; Beispiel: Balken und einfache Baugruppe (z. B. Welle). |
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |

-->
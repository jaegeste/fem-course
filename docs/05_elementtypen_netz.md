# Modul 3 Elementtypen und Netzqualität

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* den Unterschied zwischen linearen und quadratischen Ansatzfunktionen erläutern,  
* den Einfluss der Elementordnung (z. B. SOLID185 vs. SOLID186) auf Genauigkeit und Spannungsverlauf bewerten,  
* den Netzeinfluss gezielt eliminieren, um den Effekt der Ansatzfunktion isoliert zu betrachten,  
* eine h-Studie durchführen und Konvergenz beurteilen,  
* Ergebnisse mit analytischen Lösungen vergleichen und Abweichungen interpretieren,  
* Kriterien zur Bewertung der Netzqualität anwenden (Aspektverhältnis, Verzerrung, Übergänge),  
* die Bedeutung der Spannungs­glättung für Vergleichsspannungen erklären.

## Theoretischer Hintergrund

<!--

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* den Unterschied zwischen linearen und quadratischen Ansatzfunktionen erläutern,  
* den Einfluss der Elementordnung (z. B. SOLID185 vs. SOLID186) auf Genauigkeit und Spannungsverlauf bewerten,  
* den Netzeinfluss gezielt eliminieren, um den Effekt der Ansatzfunktion isoliert zu betrachten,  
* eine h-Studie durchführen und Konvergenz beurteilen,  
* Ergebnisse mit analytischen Lösungen vergleichen und Abweichungen interpretieren,  
* Kriterien zur Bewertung der Netzqualität anwenden (Aspektverhältnis, Verzerrung, Übergänge),  
* die Bedeutung der Spannungs­glättung für Vergleichsspannungen erklären.

---

## Theoretischer Hintergrund

Die Genauigkeit einer FEM-Analyse wird im Wesentlichen durch zwei Aspekte bestimmt:

1. **Ansatzfunktion (Elementordnung)**  
   Die Formfunktionen beschreiben, wie sich Verschiebungen innerhalb eines Elements verteilen.  
   * Lineare Elemente (z. B. SOLID185) verwenden lineare Formfunktionen zwischen den Knoten.  
   * Quadratische Elemente (z. B. SOLID186) besitzen zusätzliche Mittenknoten und können gekrümmte Geometrien sowie nichtlineare Spannungsverläufe besser abbilden.  
   Quadratische Elemente liefern bei gleicher Netzfeinheit in der Regel deutlich genauere Ergebnisse, erfordern jedoch höhere Rechenzeiten und Speicherbedarf.

2. **Netzqualität und Konvergenz**  
   Ein zu grobes oder verzerrtes Netz führt zu unphysikalischen Spannungsverteilungen.  
   Durch systematische Netzverfeinerung (h-Studie) kann überprüft werden, ob die Lösung gegen einen stabilen Wert konvergiert.  
   Nur konvergente Ergebnisse sind physikalisch aussagekräftig.  
   Um den reinen Effekt der Elementordnung zu bewerten, muss der Netzeinfluss zuvor minimiert werden.

**Spannungs­glättung:**  
Die FEM berechnet Spannungen in den Integrationspunkten (Gauss-Punkten).  
Zur Darstellung auf Knotenebene können Glättungsverfahren wie *Averaged Nodal Stress* verwendet werden.  
Diese verbessern die visuelle Homogenität, dürfen aber keine numerischen Unsicherheiten überdecken.

---

## Aufgabenstellung

1. Verwenden Sie den Zugstab mit Endplatte (oder ein vergleichbares 3D-Bauteil mit axialer Belastung).  
2. Erzeugen Sie zunächst ein fein genuges Netz, sodass der Netzeinfluss weitgehend eliminiert ist.  
3. Führen Sie anschließend Analysen mit **linearer** und **quadratischer Elementordnung** durch (*Element Order = Linear / Quadratic*).  
4. Vergleichen Sie die Spannungsverteilung und die maximale Vergleichsspannung im Übergangsbereich.  
5. Führen Sie zusätzlich eine h-Studie durch (Variation der Elementgröße) und dokumentieren Sie die Konvergenz.  
6. Vergleichen Sie die FEM-Ergebnisse mit der **analytischen Lösung** für den Zugstab (\(\sigma = F/A\)).  
7. Diskutieren Sie Rechenzeit, Speicherbedarf und Genauigkeit.

---

## Umsetzung in ANSYS Mechanical

1. Im Projektbaum _Netz → Details → Elementordnung_  
   *Programmgesteuert / Linear / Quadratisch* auswählen.  
2. Nach jeder Änderung **Netz generieren** und Ergebnisse kontrollieren.  
3. Über _Extras → Protokoll anzeigen_ oder den Eintrag _Elementqualität_ den verwendeten Elementtyp prüfen.  
4. Für die h-Studie: Elementgröße schrittweise halbieren und \(\sigma_\text{max}\) protokollieren.  
5. Ergebnisse entlang einer Referenzlinie (z. B. Bauteilachse) auswerten und grafisch darstellen.  
6. Analytische Vergleichsspannung \(\sigma_\text{ana} = F/A\) eintragen und Abweichung quantifizieren.

---

## Diskussion der Ergebnisse

* Quadratische Elemente bilden den Spannungsverlauf deutlich glatter und realistischer ab, insbesondere in Krafteinleitungsbereichen.  
* Der Vergleich mit der analytischen Lösung zeigt, dass quadratische Elemente schneller konvergieren und geringere Abweichungen liefern.  
* Bei linearer Elementordnung treten größere Unterschiede zwischen benachbarten Elementen und eine stärkere Abhängigkeit von der Netzfeinheit auf.  
* Ein stabiler Vergleich der Elementordnungen ist nur möglich, wenn der Netzeinfluss zuvor durch Verfeinerung minimiert wurde.  
* Spannungs­glättung verbessert die grafische Darstellung, ersetzt aber keine Konvergenzprüfung.  
* Die Rechenzeit steigt mit höherer Elementordnung, bleibt jedoch bei moderaten Modellgrößen vertretbar.


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
# Modul 04 – Krafteinleitung und Spannungsüberhöhung

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* typische Ursachen numerischer Spannungsüberhöhungen erkennen,  
* den Unterschied zwischen physikalisch und numerisch bedingten Spannungsspitzen erklären,  
* unphysikalische Punkt- oder Linienlasten vermeiden,  
* geeignete Maßnahmen zur Entschärfung von Spannungssingularitäten anwenden (z. B. Sekantenschnitt, Radius, größere Lastfläche),  
* die Bedeutung der Krafteinleitung für die Ergebnisgüte einschätzen.

## Aufgabenstellung Torsionsstab

Bei der Simulation eines Torsionsstabs mit Hebelarm soll die **Einleitung der äußeren Kraft** am Hebelarm untersucht werden.  

[![Torsionsstab mit Hebelarm](media/06_krafteinleitung/01_Torsionsstab.png){width=500px}](media/06_krafteinleitung/01_Torsionsstab.png "Torsionsstab mit Hebelarm"){.glightbox}

* zylindrischer Torsionsstab mit Hebelarm
* Länge \( L  = 152{,}4 \, \text{mm} \)  
* Durchmesser \( d = 38{,}1 \, \text{mm} \)  
* Hebelarm \( H = 203{,}2 \, \text{mm} \)  
* Material Baustahl gemäß ANSYS-Datenbank  
* Kraft \( F = 4{,}45 \, \text{kN} \)  
* eine Seite vollständig an einer Wand fixiert (feste Einspannung)  

Untersuchen Sie die folgenden Varianten der Krafteinleitung am Hebelarm:  

* Geometrie Variante A [Torsionsstab_A.stp](media/06_krafteinleitung/Torsionsstab_A.stp)
* Geometrie Variante B [Torsionsstab_B.stp](media/06_krafteinleitung/Torsionsstab_B.stp)
* Geometrie Variante C [Torsionsstab_C.stp](media/06_krafteinleitung/Torsionsstab_C.stp)

<!-- 
Variante A - ohne Fläche etc. Am Anfang geht da gar nix. 
Variante B - kleine erhabene Fläche mit Kerbwirkung
Variante C - Sekantenschnitt, groß ohne Kerbwirkung
-->

Bearbeiten Sie folgende Punkte:

* Ermitteln Sie eine **analytische Lösung** für die maximale Spannung. Wo ist der kritische Querschnitt?
* Achten Sie auf ein von der Vernetzung unabhängiges Ergebnis.  
* Führen Sie eine konvergierende Lösung herbei.  
* Diskutieren Sie, wie ein Krafteinleitungsproblem entstehen kann und wie es sich im FEM-Sinne beschreiben lässt. 

## Theoretischer Hintergrund

Die Kraft \(F\) greift am Hebelarm exzentrisch zur Stabachse an. Dadurch entstehen gleichzeitig:

* ein Biegemoment \(M_{\text{B}}\) durch den senkrechten Abstand der Kraft zur Stabachse  
* ein Torsionsmoment \(M_{\text{T}}\) durch den wirksamen Hebelarm um die Stabachse  
* eine Querkraft \(F_Q\), deren Schubspannungsanteil im Vergleich zu Biegung und Torsion klein ist und hier vernachlässigt wird  

### Biegung und schiefe Biegung

!!! danger "FIXME"
    Berechnung klären! 

Wirkt die Kraft nicht nur in einer Hauptebene, entsteht **schiefe Biegung**. Das gesamte Biegemoment setzt sich aus Anteilen um zwei senkrechte Achsen zusammen, etwa

\[
M_y,\quad M_z
\]

Die resultierende Biegespannung im Randfaserpunkt ergibt sich aus der Überlagerung

\[
\sigma_{\text{B}} = \frac{M_y\,z}{I_y} + \frac{M_z\,y}{I_z}
\]

mit den Flächenträgheitsmomenten \(I_y\) und \(I_z\) des Kreisquerschnitts.

!!! danger "FIXME"
    Abbildung Tabelle hinzu

### Torsion

Durch das Torsionsmoment \(M_{\text{T}}\) entstehen Schubspannungen im Querschnitt

\[
\tau_{\text{T}} = \frac{M_{\text{T}}\,r}{J}
\]

mit Radius \(r\) und polarem Flächenträgheitsmoment \(J\) des Vollkreises.

!!! danger "FIXME"
    Abbildung Tabelle hinzu

### Vergleichsspannung bei kombinierter Beanspruchung

Für die Festigkeitsbewertung werden Biegespannung \(\sigma_{\text{B}}\) und Torsionsschubspannung \(\tau_{\text{T}}\) zu einer **Vergleichsspannung** zusammengefasst, zum Beispiel nach von Mises:

\[
\sigma_{\text{v}} = \sqrt{\sigma_{\text{B}}^{2} + 3\,\tau_{\text{T}}^{2}}
\]

Die analytische Berechnung liefert damit einen einfachen Referenzwert für die maximal zu erwartende Vergleichsspannung im Stab.  
Die FEM berechnet zusätzlich die örtliche Spannungsverteilung, die stark davon abhängt, wie die Kraft \(F\) am Hebelarm in das Modell eingeleitet wird.

## Umsetzung in ANSYS

zunächst wenig neues...

## Diskussion der Ergebnisse

### Vergleich mit analytischer Lösung

hier die analytische Lösung...

### Ergebnisse der Varianten

Variante A, B und C

## Krafteinleitung über Knoten

Das ist die komplizierte Variante für den Schluss mit Koordinatensystem und knotengenauer Einleitung

## Zusammenfassung und weiterführende Hinweise

Eine der häufigsten Fehlerquellen in der FEM ist die **idealisierte Krafteinleitung**.  
Lasten, die in der Realität über Flächen verteilt werden, werden im Modell häufig als Punkt- oder Linienlasten angegeben.  
Dadurch entstehen an Kanten oder Punkten **Singularitäten** – mathematisch divergente Spannungen.

Typische Ursachen:

* Punktlast auf Fläche → σ → ∞  
* Linienlast oder scharfer Kantenübergang  
* abrupte Querschnittsänderung ohne Radius  
* zu kleine Kontaktfläche zwischen Bauteilen  

Die FEM zeigt in solchen Fällen keine Konvergenz:  
Bei jeder Netzverfeinerung steigt die lokale Spannung weiter an.

Lösung: realistische Krafteinleitung

Physikalisch korrekte Lastübertragung durch:

* **Flächenlast** statt Punktlast,  
* **Übergangsradien oder Fasen** statt scharfer Kanten,  
* **Sekantenschnitt** (sanfter Geometrieübergang),  
* **elastische Zwischenlage oder Endplatte** zur Kraftverteilung.

## Quiz zur Selbstkontrolle


<!-- 
## Theoretischer Hintergrund



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
  - Modul 5 Symmetrie: 07_symmetrie.md
  - Modul 6 Modalanalyse: 08_modalanalyse.md
  - Modul 7 Thermo-Mechanik: 09_thermomechanik.md
  - Modul 8 Sensoren I (Beschl.): 10_sensor_beschl.md
  - Modul 9 Sensoren II (Druck): 11_sensor_druck.md
  - Modul 10 Kontakt: 12_kontakt.md
  - Modul 11 Ausblick: 13_ausblick.md

  | Modul | Titel | Kerninhalt |
| :----: | :---- | :---------- |
| **04** | **Krafteinleitung & Spannungsüberhöhungen** | Analyse unrealistischer Punkt- und Linienlasten, Divergenzen an Kanten, Einführung realer Flächenlasten, Sekantenschnitt und Übergangsradien zur Entschärfung, Spannungsverteilung im Lastbereich |
| **05** | **Symmetrie & Modellreduktion** | Nutzung von Symmetrieebenen zur Reduktion von Rechenzeit, korrekte Definition der Symmetrierandbedingungen, Fehlerquellen bei falscher Orientierung, Anwendung am Zugstab oder Flansch, kleiner Exkurs zum Solver (direkt/indirekt), |
| **06** | **Modalanalyse – vom Balken zur Baugruppe** | Einführung in die Eigenfrequenzanalyse: theoretischer Hintergrund, Eigenformen und -frequenzen, Einfluss von Lagerung, Material und Geometrie; Beispiel: Balken und einfache Baugruppe (z. B. Welle). |
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |

-->

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}
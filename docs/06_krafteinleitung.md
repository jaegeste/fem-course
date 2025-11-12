# Modul 04 – Krafteinleitung und Spannungsüberhöhung

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* typische Ursachen numerischer Spannungsüberhöhungen erkennen,  
* den Unterschied zwischen physikalisch und numerisch bedingten Spannungsspitzen erklären,  
* nicht-physikalische Punkt- oder Linienlasten vermeiden,  
* geeignete Maßnahmen zur Entschärfung von Spannungssingularitäten anwenden,
* die Bedeutung der Krafteinleitung für die Ergebnisgüte einschätzen.

## Aufgabenstellung Torsionsstab

Bei der Simulation eines Torsionsstabs mit Hebelarm soll die **Einleitung der äußeren Kraft** am Hebelarm untersucht werden.  

[![Torsionsstab mit Hebelarm](media/06_krafteinleitung/01_Torsionsstab.png){width=500px}](media/06_krafteinleitung/01_Torsionsstab.png "Torsionsstab mit Hebelarm"){.glightbox}

* zylindrischer Torsionsstab mit Hebelarm
* Länge \( L  = 152{,}4 \, \text{mm} \)  
* Durchmesser \( d = 38{,}1 \, \text{mm} \)  
* Hebelarm \( H = 203{,}2 \, \text{mm} \)  
* Material Baustahl gemäß ANSYS-Datenbank mit geändertem **E-Modul** auf 210.000 Mpa.  
* Kraft \( F = 4{,}45 \, \text{kN} \)  
* eine Seite vollständig an einer Wand fixiert

Untersuchen Sie die folgenden Varianten der Krafteinleitung am Hebelarm:  

* Geometrie Variante A [Torsionsstab_A.stp](media/06_krafteinleitung/Torsionsstab_A.stp)
* Geometrie Variante B [Torsionsstab_B.stp](media/06_krafteinleitung/Torsionsstab_B.stp)
* Geometrie Variante C [Torsionsstab_C.stp](media/06_krafteinleitung/Torsionsstab_C.stp)

Bearbeiten Sie folgende Punkte:

* Ermitteln Sie eine **analytische Lösung** für die maximale Spannung. Wo ist der kritische Querschnitt?
* Berechnen Sie in ANSYS die maximale Vergleichsspannung.  
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
    J richtig?

### Vergleichsspannung bei kombinierter Beanspruchung

Für die Festigkeitsbewertung werden Biegespannung \(\sigma_{\text{B}}\) und Schubspannung infolge Torsion \(\tau_{\text{T}}\) zu einer **Vergleichsspannung** zusammengefasst, zum Beispiel nach von Mises:

\[
\sigma_{\text{v}} = \sqrt{\sigma_{\text{B}}^{2} + 3\,\tau_{\text{T}}^{2}}
\]

Die analytische Berechnung liefert damit einen einfachen Referenzwert für die maximal zu erwartende Vergleichsspannung im Stab. Die FEM berechnet zusätzlich die örtliche Spannungsverteilung, die stark davon abhängt, wie die Kraft \(F\) am Hebelarm in das Modell eingeleitet wird.

## Umsetzung in ANSYS

### 1. Projektverwaltung und Geometrieimport

formuliere kurz, Geometrieimport wie gehabt. Ein System für jede Geometrievariante ist sinnvoll, Eine Verknüpfung der technischen Daten ist sinnvoll damit das geänderte Material in alle System übertragen wird. Ggf. auch erst eine Variante fertig rechnen, dann kopieren (über Duplizieren), dann verknüpfen der technischen Daten,  dann austauschen der Geometrie

### 2. Materialzuweisung

Materialzuweisung ist automatisch Baustahl. Änderung des E-Moduls in den Technischen Daten vornehmen, wir bei Neuanlage des System automatisch übernommen, wenn nachträglich geändert, muss das System aktualisiert werden (grüner Pfeil-Kreis in der Projektoberfläche)

### 3. Netzgenerierung

wie immer erstmal Standardnetz. Kann visuell beurteilt werden.  

### 4. Randbedingungen

Feste Einspannung und Kraft gemäß der Abbildung in der Aufgabenstellung oben.  

### 5. Analyseeinstellungen

keine Änderungen hier erforderlich, Standard ist okay

### 6. Auswertung

gemäß Aufgabenstellung wird zunächst nur die Vergleichsspannung ausgewertet.  

## Diskussion der Ergebnisse

### Vergleich mit analytischer Lösung

hier zunächst Resultate aus ANSYS, dann die analytische Lösung. Wir schauen erstmal nur auf die maximale Spannung. Hier fällt auf Variante A lässt keine Implementierung der Kraft im angegebenen Bereich zu.  

### Einfluss der Krafteinleitung

Variante A, B und C

Hinweis formulieren, wo man nachsehen kann ob mit linearen oder quadratischen Elementen gerechnet wurde.  

## Krafteinleitung über Knoten

Das ist die komplizierte Variante für den Schluss mit Koordinatensystem und knotengenauer Einleitung bei Variante A. Führt aber zu gleichen Problemen.  

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

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}  

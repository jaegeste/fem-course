# Erste Schritte mit ANSYS Workbench

## Einleitung

Dieses Informationen soll helfen, die ersten Schritte in ANSYS Workbench zu gehen. Bevor Analysen durchgeführt werden, muss ein Projekt mit seinen Analysearten angelegt, Geometrie importiert oder erstellt und die technischen Daten des Projekts festgelegt werden.

---

## Einstieg in Workbench

### Programmstart

Weitere Hinweise zur Installation und zum Start findest du unter [Start von ANSYS](../02_installation_ansys/#start-von-ansys).

### Projektoberfläche

ANSYS Workbench dient als zentrale Oberfläche, um Simulationsprojekte zu organisieren und durchzuführen. Alle Arbeitsschritte einer Simulation lassen sich aus dem folgenden Fenster heraus erledigen:

[![Projektoberfläche in ANSYS Workbench](media\03_erste_Schritte\workbench.png){width=800px}](media\03_erste_Schritte\workbench.png "Projektoberfläche in ANSYS Workbench"){.glightbox}  

Auf der linken Seite befinden sich verschiedene Analysearten, die per Drag-and-Drop ins Projektschema eingefügt werden können. Bereits vorhandene Analysen lassen sich verknüpfen, um beispielsweise dieselbe Geometrie mehrfach zu verwenden, siehe nächste Abbildung. So wird in System B die gleiche Geometrie wie in System A verwendet, System D bezieht sich auf Ergebnisse des Systems C. Auch können in der Projektoberfläche Parameter, die in den Einzelbausteinen ausgewiesen wurden, angezeigt und bearbeitet werden (Parametersatz).  

[![Verknüpfte Analysen mit Parametersatz](media/03_erste_Schritte/verknuepfte_Analysen.png){width=800px}](media/03_erste_Schritte/verknuepfte_Analysen.png "Verknüpfte Analysen mit Parametersatz"){.glightbox}

Ein Analysesystem besteht typischerweise aus folgenden Komponenten. Um eine Simulation durchzuführen werden in der Regel die Punkte von oben nach unten abgearbeitet werden.

| Komponente       | Beschreibung |
|------------------|--------------|
| **Analyse-Art**  | Hier wird festgelegt, welche Physik und welches numerische Verfahren verwendet werden. |
| **Technische Daten** | Hiermit werden Materialdaten für das Bauteil oder die Baugruppe beschrieben. Es wird ein Standardmaterial verwendet, sofern die Materialdaten vom CAD-System nicht mit übernommen werden. Daher ist diese Komponente auch ohne eine Materialauswahl durch den Anwender mit einem grünen Haken versehen. |
| **Geometrie**    | Hier können die Dateien eines CAD-Systems eingeladen, ein neutrales Format wie z.B. IGES, STEP oder Parasolid importiert oder eine Geometrie mit dem ANSYS DesignModeler oder SpaceClaim neu erstellt werden. Auch die Übernahme eines in einem CAD-System geladenen Modells ist möglich. |
| **Modell**       | Alle Definitionen, die neben der Geometrie notwendig sind, um ein FE-Modell zu beschreiben, wie z. B. die Vernetzungseinstellungen, Kontakte oder auch lokale Koordinatensysteme, werden unter dem Begriff Modell zusammengefasst. |
| **Setup**        | Die Analyse-Einstellungen, die Belastung und die sonstigen Randbedingungen werden in den Setup-Einstellungen zusammengefasst. |
| **Lösung**       | Die Rückmeldungen des Gleichungslösers sind unter der Lösung verfügbar. |
| **Ergebnisse**   | Unter Ergebnisse sind die durch die FEM-Analyse ermittelten Resultate zu finden. |

<span class="bildquelle">Quelle[@Gebhardt2018]</span>


### Analysearten

Je nach Lizenz sind verschiedene Analysen verfügbar. Beispiele:

* **Eigenwert-Beulen** bietet ein lineares Knicken/Beulen dünnwandiger Strukturen unter hohen Druckbelastungen.  
* **Explizite Dynamik** ermöglicht es, transiente Dynamik mit nichtlinearen Effekten zu beschreiben z. B. für Falltests oder Containment-Tests.  
* **Harmonische Analysen** bieten die Untersuchung von schwingenden Systemen auf eine harmonische Anregung.  
* **Modalanalysen** ermitteln die Eigenfrequenzen und die Schwingungsformen einer Struktur.  
* **Statisch-strukturmechanische Analysen** ermitteln die Verformung, Spannungen und Dehnungen in Bauteilen in Abhängigkeit von äußeren, ruhenden Lasten ohne dynamische oder dämpfende Effekte. Optional liefert die Betriebsfestigkeitsanalyse die Lebensdauer eines Designs unter dynamischen Lasten. Unter Berücksichtigung von geometrischen Nichtlinearitäten können mit statisch-mechanischen Analysen auch nichtlineare Beulberechnungen durchgeführt werden.  
* **Thermisch-stationäre Analysen** dienen dazu, die Temperaturverteilung unter thermischen Lasten im eingeschwungenen (stationären) Zustand zu ermitteln.  
* **Thermisch-transiente Analysen** bilden den zeitlichen Verlauf eines Temperaturfeldes ab.  
* **Topologie-Optimierungen** helfen, die grundlegende Form eines Bauteils belastungsgerecht zu gestalten.  
* **Transiente strukturmechanische Analysen auf Basis von Mehrkörperdynamik (MBD, Multi Body Dynamics)** erlauben kinematische und dynamische Analysen von Systemen aus Starrkörpern.  


---

## Dateiablage und -struktur

### Projektdatei und Projektverzeichnis

Nach dem Anlegen eines Projekts sollte es sofort gespeichert werden. Die Datei hat die Endung `.wbpj` und erzeugt ein Projektverzeichnis `<projektname>_files`. Darin speichert ANSYS strukturierte Daten, was die Berechnungsgeschwindigkeit beeinflusst.  

**Hinweis:** Nutze zur Berechnung unbedingt eine schnelle, lokale Festplatte – nicht das Netzlaufwerk oder einen USB-Stick.

### Dateinamen

Vermeide Umlaute und Leerzeichen in Dateinamen.

---

## Einstellungen überprüfen und anpassen

ANSYS Workbench funktioniert auch ohne weitere Anpassungen. Zwei Empfehlungen:

* **Maßeinheiten umstellen**: In der Projektoberfläche auf ein gängigeres System wechseln, z. B. **kg und mm**.
* **Einstellungen prüfen**: Unter **Extras → Optionen** können Parameter angepasst werden, die Rechenleistung und Berechnungsdauer beeinflussen.

---

## Geometrie

Steht ein CAD-System zur Verfügung, ist der direkte Import von CAD-Daten empfehlenswert. Falls eine direkte oder bidirektional assoziative Verbindung nicht möglich ist, genügt in vielen Fällen der Weg über ein gängiges Austauschformat, zum Beispiel `.step`.

In diesem Kurs wird die Verwendung der ANSYS-eigenen Programme zur Geometrieerzeugung, **DesignModeler** und **SpaceClaim**, **nicht empfohlen**. Beide Werkzeuge ermöglichen zwar das Erstellen und Vereinfachen von Geometrie, sind jedoch im Vergleich zu vollwertigen CAD-Systemen wie **PTC Creo** funktional deutlich eingeschränkt.

!!! info "Geometrie Import"
    Die Geometrie wird über einen Rechtsklick auf **Geometrie → Geometrie importieren** eingebunden.

!!! warning "**Wichtig:**"
    Kein Doppelklick auf „Geometrie“, wenn keine Bearbeitung im ANSYS-Editor gewünscht ist.  
Ein Doppelklick würde die Geometrie automatisch in **DesignModeler** oder **SpaceClaim** laden und dabei unter Umständen die Verbindung zum ursprünglichen CAD-System aufheben.

Beim Import über ein Austauschformat kann es sinnvoll sein, die Geometrie in **DesignModeler** oder **SpaceClaim** zu betrachten oder anzupassen. Für unparametrische Modelle wie `.step` bietet sich **ANSYS SpaceClaim** an, da es als direkter Modellierer auch Änderungen an historienfreien Geometrien erlaubt.

Bei parametrischer Geometrie, die über eine bidirektionale CAD-Schnittstelle eingebunden ist, lassen sich Änderungen im CAD-System über **Geometrie aktualisieren** (Rechtsklick auf „Geometrie“) nach ANSYS übernehmen. Auch bei Parameterstudien ist es möglich, die Geometrie ausgehend von ANSYS im CAD-System zu verändern und anschließend zurückzuspielen.

---

## Technische Daten

ANSYS Workbench bringt eine kleine Vorauswahl an Materialien mit vordefinierten Eigenschaften mit. Mit einem Doppelklick auf **Technische Daten** kann auf die Materialdatenbank zugegriffen werden. Dort lassen sich Materialien bearbeiten oder neu erstellen.

Oben links kann eine Datenquelle ausgewählt werden (siehe folgende Abbildung). Anschließend können Materialien dem aktuellen Projekt zugewiesen werden. Die Zuordnung erfolgt im mittleren Fensterbereich durch Klick auf das Plus-Symbol. Die Materialeigenschaften werden im unteren Bereich angezeigt.

[![Materialdatenbank in Workbench](media/03_erste_Schritte/materialdatenbank.png){width=800px}](media/03_erste_Schritte/materialdatenbank.png "Materialdatenbank in Workbench"){.glightbox}  

Zu beachten ist, dass die Datenbank im Wesentlichen auf US-amerikanischen Normen basiert.


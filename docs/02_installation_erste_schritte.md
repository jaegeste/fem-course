# Installation von ANSYS und erste Schritte

Diese Anleitung beschreibt die Installation von ANSYS 2024R1 auf einem privaten Windows-Rechner.

## Installation von ANSYS  

### Voraussetzungen  

Diese Anleitung gilt für folgende Voraussetzungen:

* ANSYS 2024R1  
* Windows 11 (andere Systeme nicht getestet)  
* Aktive HFU-VPN-Verbindung (nur außerhalb des Campus erforderlich)

---

### VPN

Um ANSYS nutzen zu können, muss eine Verbindung zum Lizenzserver der HFU hergestellt werden. Das wird _außerhalb_ der Hochschule nur mit einer aktiven VPN-Verbindung erreicht. Innerhalb des Hochschulnetzwerks ist kein VPN erforderlich.  

* Anleitung zur VPN-Installation: [https://howto.hs-furtwangen.de/vpn](https://howto.hs-furtwangen.de/vpn)  
* Bei Problemen: [it-support@hs-furtwangen.de](mailto:it-support@hs-furtwangen.de)

---

### Schritt 1: Herunterladen der Installationsdateien

Die Installationsdaten finden sich unter:

[https://bwsyncandshare.kit.edu/s/5P9a3FnCCfMgnbC](https://bwsyncandshare.kit.edu/s/5P9a3FnCCfMgnbC)

Folgende Dateien müssen heruntergeladen werden (VPN nicht erforderlich):

* `STRUCTURES_2024R1_WINX64.zip` (Hauptprogramm)
* `ANSYS_2024R1.04_WINX64.zip` (aktuelles Service-Update)

---

### Schritt 2: Entpacken und Installation von ANSYS

_1._ **VPN-Verbindung aktivieren.**  
_2._ `STRUCTURES_2024R1_WINX64.zip` entpacken. `setup.exe` **als Administrator** ausführen (Rechtsklick → Als Administrator ausführen).  
_3._ Folgen Sie dem Installationsprozess wie in den folgenden Abbildungen angegeben. Die Einstellungen müssen z.T. angepasst werden, ändern Sie bitte keine Dateipfade  
_4._ „Installation ANSYS Produkte“ auswählen:  

[![Installationsstart](media/02_Installation_erste_Schritte/02_01.png){width=600px}](media/02_Installation_erste_Schritte/02_01.png "Installationsstart"){.glightbox}  

_5._ Einstellungen übernehmen:

[![EULA](media/02_Installation_erste_Schritte/02_02.png){width=600px}](media/02_Installation_erste_Schritte/02_02.png "EULA"){.glightbox}  

_6._ Einstellungen übernehmen, keine Dateipfade ändern:  

[![Einstellungen Pfade](media/02_Installation_erste_Schritte/02_03.png){width=600px}](media/02_Installation_erste_Schritte/02_03.png "Einstellungen Pfade"){.glightbox}  

_7._ Lizenzserver eintragen: `10.10.13.101`, VPN-Verbindung erforderlich.  

[![Lizenzserver](media/02_Installation_erste_Schritte/02_04.png){width=600px}](media/02_Installation_erste_Schritte/02_04.png "Lizenzserver"){.glightbox}  

_8._ Nur **Geometry Interfaces** und **Mechanical Products** auswählen:  

[![Komponenten](media/02_Installation_erste_Schritte/02_05.png){width=600px}](media/02_Installation_erste_Schritte/02_05.png "Komponenten"){.glightbox}  

_9._ Weiter:  

[![CAD-Schnittstellen](media/02_Installation_erste_Schritte/02_06.png){width=600px}](media/02_Installation_erste_Schritte/02_06.png "CAD-Schnittstellen"){.glightbox}  

_10._ Weiter (je nach System andere Inhalte):  

[![CAD-Schnittstellen Konfiguration](media/02_Installation_erste_Schritte/02_07.png){width=600px}](media/02_Installation_erste_Schritte/02_07.png "CAD-Schnittstellen Konfiguration"){.glightbox}  

_11._ Weiter (je nach System andere Inhalte):  

[![Einstellungen prüfen](media/02_Installation_erste_Schritte/02_08.png){width=600px}](media/02_Installation_erste_Schritte/02_08.png "Einstellungen prüfen"){.glightbox}  

_12._ Installation fertig:  

[![Installation](media/02_Installation_erste_Schritte/02_09.png){width=600px}](media/02_Installation_erste_Schritte/02_09.png "Installation"){.glightbox}  

_13._ Installation abgeschlossen (je nach System andere Inhalte):  

[![Fertigstellung](media/02_Installation_erste_Schritte/02_10.png){width=600px}](media/02_Installation_erste_Schritte/02_10.png "Fertigstellung"){.glightbox}  

_14._ Um ANSYS nutzen zu können, muss eine Verbindung zum Lizenzserver der HFU hergestellt werden. Das wird außerhalb der Hochschule nur mit einer aktiven VPN-Verbindung erreicht. Innerhalb des Hochschulnetzwerks ist kein VPN erforderlich.  
_15._ Weiter mit dem Service-Update.  

---

### Schritt 3: Installation des Service-Updates

_1._ `ANSYS_2024R1.04_WINX64.zip` entpacken.  
_2._ `setup.exe` **als Administrator** starten.  
_3._ „Installation ANSYS Produkte“ wählen:  

[![Serviceupdate](media/02_Installation_erste_Schritte/02_11.png){width=600px}](media/02_Installation_erste_Schritte/02_11.png "Serviceupdate"){.glightbox}  

_4._ Einstellungen übernehmen:

[![EULA](media/02_Installation_erste_Schritte/02_12.png){width=600px}](media/02_Installation_erste_Schritte/02_12.png "EULA"){.glightbox}  

_5._ Weiter, keine Dateipfade ändern:

[![Einstellungen Pfade](media/02_Installation_erste_Schritte/02_13.png){width=600px}](media/02_Installation_erste_Schritte/02_13.png "Einstellungen Pfade"){.glightbox}  

_6._ Einstellungen übernehmen und weiter:

[![Auswahl Komponenten](media/02_Installation_erste_Schritte/02_14.png){width=600px}](media/02_Installation_erste_Schritte/02_14.png "Auswahl Komponenten"){.glightbox}  

_7._ Weiter:

[![Einstellungen prüfen](media/02_Installation_erste_Schritte/02_15.png){width=600px}](media/02_Installation_erste_Schritte/02_15.png "Einstellungen prüfen"){.glightbox}  

_8._ Installation abgeschlossen:

[![Installation Service](media/02_Installation_erste_Schritte/02_16.png){width=600px}](media/02_Installation_erste_Schritte/02_16.png "Installation Service"){.glightbox}  

_9._ Fertig:

[![Fertigstellung](media/02_Installation_erste_Schritte/02_17.png){width=600px}](media/02_Installation_erste_Schritte/02_17.png "Fertigstellung"){.glightbox}  

_10._ ZIP-Datei und entpackte Daten können gelöscht werden.  

---

### Start von ANSYS

* VPN-Verbindung aktivieren (außerhalb des HFU-Netzwerks).
* Start über das Windows-Startmenü.
* Bei Problemen: Rechtsklick → „Als Administrator ausführen“.

??? warning "Probleme beim Starten"

    Kann ANSYS trotz richtiger Installation und VPN-Verbindung keine Lizenz ziehen (Fehlermeldung beim Start), gehen Sie wie folgt vor:

    - Navigieren Sie zu `C:\Windows\System32\drivers\etc`  
    - Ergänzen Sie in der Datei `hosts` ganz am Ende die Zeile: `10.10.13.101 Flex`  
    - Speichern und fertig. Falls das Speichern Probleme macht, müssen Sie die Datei evtl. erst auf den Desktop o. ä. kopieren. Und beachten Sie, dass der Dateityp sich nicht ändert.

---

### Kopplung von ANSYS mit Creo

Eine direkte bidirektionale Kopplung zwischen ANSYS und PTC Creo ist möglich.

_1._ Creo und die HFU-CAD-Umgebung gemäß Anleitung installieren.  
_2._ Über den **ANSYS CAD Configuration Manager** die Workbench-assoziative Schnittstelle einrichten.  
_3._ Einrichtung **als Administrator** ausführen.  

---

## Erste Schritte mit ANSYS Workbench

Dieses Informationen soll helfen, die ersten Schritte in ANSYS Workbench zu gehen. Bevor Analysen durchgeführt werden, muss ein Projekt mit seinen Analysearten angelegt, Geometrie importiert oder erstellt und die technischen Daten des Projekts festgelegt werden.

---

### Projektoberfläche

ANSYS Workbench dient als zentrale Oberfläche, um Simulationsprojekte zu organisieren und durchzuführen. Alle Arbeitsschritte einer Simulation lassen sich aus dem folgenden Fenster heraus erledigen:

[![Projektoberfläche in ANSYS Workbench](media\02_Installation_erste_Schritte\workbench.png){width=800px}](media\02_Installation_erste_Schritte\workbench.png "Projektoberfläche in ANSYS Workbench"){.glightbox}  

Auf der linken Seite befinden sich verschiedene Analysearten, die per Drag-and-Drop ins Projektschema eingefügt werden können. Bereits vorhandene Analysen lassen sich verknüpfen, um beispielsweise dieselbe Geometrie mehrfach zu verwenden, siehe nächste Abbildung. So wird in System B die gleiche Geometrie wie in System A verwendet, System D bezieht sich auf Ergebnisse des Systems C. Auch können in der Projektoberfläche Parameter, die in den Einzelbausteinen ausgewiesen wurden, angezeigt und bearbeitet werden (Parametersatz).  

[![Verknüpfte Analysen mit Parametersatz](media/02_Installation_erste_Schritte/verknuepfte_Analysen.png){width=800px}](media/02_Installation_erste_Schritte/verknuepfte_Analysen.png "Verknüpfte Analysen mit Parametersatz"){.glightbox}

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

--

### Dateiablage und -struktur

Nach dem Anlegen eines Projekts sollte es sofort gespeichert werden. Die Datei hat die Endung `.wbpj` und erzeugt ein Projektverzeichnis `<projektname>_files`. Darin speichert ANSYS strukturierte Daten, was die Berechnungsgeschwindigkeit beeinflusst.  

**Hinweis:** Nutze zur Berechnung unbedingt eine schnelle, lokale Festplatte – nicht das Netzlaufwerk oder einen USB-Stick.

!!! warning "**Wichtig:**"
    Vermeide Umlaute und Leerzeichen in Dateinamen.

---

### Einstellungen überprüfen und anpassen

ANSYS Workbench funktioniert auch ohne weitere Anpassungen. Zwei Empfehlungen:

* **Maßeinheiten umstellen**: In der Projektoberfläche auf ein gängigeres System wechseln, z. B. **kg und mm**.
* **Einstellungen prüfen**: Unter **Extras → Optionen** können Parameter angepasst werden, die Rechenleistung und Berechnungsdauer beeinflussen.

---

### Geometrie

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

### Technische Daten

ANSYS Workbench bringt eine kleine Vorauswahl an Materialien mit vordefinierten Eigenschaften mit. Mit einem Doppelklick auf **Technische Daten** kann auf die Materialdatenbank zugegriffen werden. Dort lassen sich Materialien bearbeiten oder neu erstellen.

Oben links kann eine Datenquelle ausgewählt werden (siehe folgende Abbildung). Anschließend können Materialien dem aktuellen Projekt zugewiesen werden. Die Zuordnung erfolgt im mittleren Fensterbereich durch Klick auf das Plus-Symbol. Die Materialeigenschaften werden im unteren Bereich angezeigt.

[![Materialdatenbank in Workbench](media/02_Installation_erste_Schritte/materialdatenbank.png){width=800px}](media/02_Installation_erste_Schritte/materialdatenbank.png "Materialdatenbank in Workbench"){.glightbox}  

Zu beachten ist, dass die Datenbank im Wesentlichen auf US-amerikanischen Normen basiert.

## ANSYS Mechanical

In ANSYS Workbench werden unter dem Begriff _Modell_ sämtliche Definitionen zusammengefasst, die zwischen Geometrie und Lastfallbeschreibung liegen. Dazu gehören:

* Materialeigenschaften und Zusatzmassen,
* Hilfsgeometrien für Randbedingungen und Auswertungen,
* virtuelle Topologien zur Vernetzungssteuerung,
* Koordinatensysteme und Kontakte,
* Netzdefinitionen sowie
* Kombinationen mehrerer Lastfälle.

Die **Mechanical-Applikation (ANSYS Mechanical)** dient dabei als zentrales FEM-Werkzeug. Hier werden physikalische Eigenschaften zugewiesen, Netze generiert, Berechnungen gestartet und Ergebnisse visualisiert. Ein Mechanical-Fenster kann mehrere Berechnungszweige mit unterschiedlichen Lastfällen enthalten. Der Aufbau dieser Struktur wird durch den Projektmanager festgelegt.  
Ein Doppelklick auf _Modell_ öffnet die Mechanical-Applikation.

---

### Benutzeroberfläche

[![Mechanical-Applikation in ANSYS](media/02_Installation_erste_Schritte/mechanical_ui.png){width=700px}](media/02_Installation_erste_Schritte/mechanical_ui.png "Mechanical-Applikation in ANSYS"){.glightbox}  

Typische Elemente der Oberfläche:

* **Links**: Strukturbaum mit Analyseobjekten  
* **Darunter**: Detailfenster für das aktuell markierte Element  
* **Oben**: Menü, Darstellungstools, Selektionseinstellungen  
* **Über der Geometrieanzeige**: kontextsensitive Befehle

### Statusanzeigen im Strukturbaum

* Grüner Haken: Eingabe vollständig  
* Blaues Fragezeichen: Eingabe fehlt  
* Graues X: Element unterdrückt  
* Rotes Ausrufezeichen: Unstimmigkeit  
* Gelber Blitz: Bereit zur Berechnung  
* Grüner Blitz: Berechnung läuft  
* Roter Blitz: Berechnung abgebrochen  
* Grüner Pfeil: Ausgelagerte Berechnung kann geladen werden  
* Roter Pfeil: Ausgelagerte, abgebrochene Berechnung  

### Farben im Detailfenster

* Gelb: Eingabe unvollständig  
* Weiß: Eingabe erlaubt  
* Grau: Nur Anzeige (nicht änderbar)  
* Rot: Ungültig, z. B. nach Änderung ohne Neuberechnung

### Steuerung der Ansicht

[![Steuerung der Ansichten](media/02_Installation_erste_Schritte/ansichtsteuerung.png){width=500px}](media/02_Installation_erste_Schritte/ansichtsteuerung.png "Steuerung der Ansichten"){.glightbox}  

Typische Funktionen:

* Rotieren, Verschieben, Zoomen  
* In Rahmen oder Fenster einpassen  
* Vorige/Nächste Ansicht  
* ISO-Ansichten, Draufsicht  
* Ansicht speichern oder verwalten

### Selektionsmöglichkeiten

Die Selektion erfolgt über Mausaktionen.

* Auswahltyp über Icons festlegen: Punkt, Kante, Fläche, Körper  
* Mouseover hebt Geometrien optisch hervor  
* Mit Klick selektieren; mit `STRG` Mehrfachauswahl  
* Entfernen durch erneuten Klick bei gedrückter `STRG`-Taste  
* **Fortlaufende Selektion**: gedrückte Maustaste → Flächen überfahren  
* **Auswahl erweitern**: tangential angrenzende Flächen hinzufügen  
* Tangentenwinkel (Standard: 20°) in den Einstellungen einstellbar  
* Doppelte Anwendung der Funktion erweitert tangential erneut  
* **Angrenzend/Alle**: selektiert alle tangential verbundenen Flächen bis zur nächsten scharfen Kante

[![Selektionsfunktionen](media/02_Installation_erste_Schritte/selektion.png){width=600px}](media/02_Installation_erste_Schritte/selektion.png "Selektionsfunktionen"){.glightbox}  

**Verdeckte Objekte selektieren:**

Beim Klick auf überlagerte Geometrie erscheint ein Auswahlfenster im 3D-Viewer. Mit der Maus kann eine der überlagerten Flächen gezielt ausgewählt werden.  
Bei Baugruppen sind die Flächen farblich entsprechend ihrer Bauteilzugehörigkeit gekennzeichnet.

---

### Geometrie in Mechanical

Im Abschnitt _Geometrie_ erscheinen alle importierten Bauteile mit ihren Eigenschaften.

Funktionen:

* Sichtbarkeit ein-/ausblenden  
* Elemente unterdrücken oder wiederherstellen  
* Materialzuweisung je Teil  
* Hinzufügen von Punktmassen (verformbar oder starr)  
  → Diese Entscheidung beeinflusst das Rechenergebnis erheblich.

---

### Koordinatensysteme

Nach dem Geometrieimport erscheint zunächst das globale Koordinatensystem – meist identisch mit dem Creo-Koordinatensystem.

Weitere lokale Koordinatensysteme lassen sich über das Kontextmenü erzeugen. Dazu:

* Geometrie selektieren  
* Einfügen → Koordinatensystem

**Logik für den Ursprung:**

* Punkt → exakt dort  
* Linie → in der Mitte  
* Kreis/Bogen → im Zentrum  
* Fläche → Flächenschwerpunkt  
* Zylinderfläche → Achse, axial mittig

[![Koordinatensysteme bearbeiten](media/02_Installation_erste_Schritte/koordinaten.png){width=350px}](media/02_Installation_erste_Schritte/koordinaten.png "Koordinatensysteme bearbeiten"){.glightbox}  

Erstellte Systeme lassen sich verschieben oder verdrehen.

---

### Grundlegendes zur Vernetzung

Die Vernetzung unterteilt das Bauteil in finite Elemente, die über Knoten verbunden sind.

In konstruktionsbegleitenden FEM-Anwendungen ist keine aufwendige Netzoptimierung erforderlich – moderne Rechner bewältigen auch gröbere Netze. Entscheidend ist hier die **Unabhängigkeit des Ergebnisses vom Netz**, nicht die perfekte Netzqualität.

Dazu führt man eine **Netzeinflussstudie** durch:

* Variation der globalen Elementgröße  
* lokale Netzverfeinerung  
* adaptive Vernetzung (siehe Übung)

Ziel ist ein tragfähiger Kompromiss aus Ergebnisqualität und Rechenzeit.

!!! note "Hinweis"
    Dieser Abschnitt markiert den Einstieg in die praktische Arbeit mit Netzen in ANSYS.  
    Die manuelle Vernetzung ist die einfachste Methode zur Steuerung der Elementgrößen.

Die globale Elementgröße – also die durchschnittliche Kantenlänge der Elemente für das gesamte Modell – wird direkt im Strukturbaum unter dem Eintrag _Netz_ eingestellt.

[![Globale Elementgröße festlegen](media/02_Installation_erste_Schritte/globale_elementgröße.png){width=400px}](media/02_Installation_erste_Schritte/globale_elementgröße.png "Globale Elementgröße festlegen"){.glightbox}  

Das Modell wird auf Basis dieses Wertes komplett mit Elementen vernetzt.  
**Problematisch wird dieses Vorgehen**, wenn das relevante Ergebnis nur in einem lokalen Bereich auftritt:  
Eine globale Verfeinerung erzeugt dann unnötig viele Elemente und verlängert die Rechenzeit erheblich – ohne zusätzlichen Nutzen.

Alternativ lässt sich das Netz auch **lokal verfeinern**:

* Unter _Netzsteuerung_ kann man die **Elementgröße pro Bauteil oder Fläche** einzeln festlegen.
* Einzelne Geometriebereiche (z. B. Kanten, Flächen) lassen sich gezielt mit feineren Elementen versehen.
* Die Funktion *_Methode_ ermöglicht die Auswahl eines bestimmten **Elementtyps** (z. B. Tetraeder oder Hexaeder).  
  → Diese Auswahl sollte fundiert erfolgen – siehe Literatur.

Das manuelle Vorgehen eignet sich besonders für einfache Modelle oder gezielte Voruntersuchungen.

---

### Kontakte

Bei Baugruppen erzeugt ANSYS automatisch Kontaktflächen zwischen Bauteilen – optional können sie auch manuell definiert werden.

[![Kontakttypen in ANSYS](media/02_Installation_erste_Schritte/kontakte.png){width=500px}](media/02_Installation_erste_Schritte/kontakte.png "Kontakttypen in ANSYS"){.glightbox}  
<span class="bildquelle">Bildquelle[@Gebhardt2018]</span>

Kontakte erfüllen zwei Aufgaben:

1. **Kraftübertragung**  
2. **Verhinderung von Durchdringung**

Typische Einstellungen:

* **Verbund**  
* **Keine Trennung**  
* **Reibungsfrei**  
* **Rau**  
* **Reibungsbehaftet**

Achtung bei komplexeren Kontaktmodellen:  
Kontakte mit Reibung oder Abheben erfordern deutlich mehr Rechenzeit. Für die meisten Fälle sind _Verbund_ oder _Keine Trennung_ ein guter Kompromiss.

!!! note "Hinweis"
    Diese Übersicht vermittelt nur die Grundlagen der Kontaktdefinition.  
    Die konkrete Anwendung, Auswahl und Bewertung von Kontakten erfolgt in späteren Übungen.  


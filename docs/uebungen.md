# Übungen

Die folgenden Übungen dienen der **Vertiefung der in den Modulen erworbenen Kenntnisse**. Für alle FE Berechnungen sind Ergebnisse zu erzeugen, deren Betrag möglichst unabhängig vom Vernetzungseinfluss ist. In allen Excel Berechnungen ist jede verwendete Zahl mit ihrer jeweiligen Einheit anzugeben. Analytische Lösungen sind im Hinblick auf die Klausur konsequent in Excel zu erstellen.

---

## Stahllineal

Gegeben ist die Geometrie eines Stahllineals in der Datei [lineal.stp](media/uebungen/lineal.stp). Es wird durch eine Kraft \(F\) auf Zug in seiner Längsrichtung belastet, der Werkstoff sei Baustahl laut ANSYS Datenbank, jedoch mit einem **E-Modul von 210.000 N/mm²** und einer **Streckgrenze von 300 MPa**.

## Stahllineal Aufgabenteil a)

Berechnen Sie in Excel den Betrag der Zugkraft, bei der gerade noch keine plastische Verformung auftritt. Wie groß ist die resultierende Längenänderung bei dieser Kraft? Es gilt das Hooke’sche Gesetz \(\sigma = \varepsilon \cdot E\).

## Stahllineal Aufgabenteil b)

Weisen Sie Ihr Ergebnis für Kraft beziehungsweise Spannung und Verformung mit einer Berechnung in ANSYS nach. Wählen Sie die Randbedingungen so, dass die Querkontraktion des Bauteils an keiner Stelle verhindert wird.

---

## Niederhalter

Gegeben ist der dargestellte Niederhalter in der Datei [niederhalter.stp](media/uebungen/niederhalter.stp). Er sei auf Druck beansprucht und eingespannt gemäß Abbildung. Seine Querschnittsfläche im kleinen Querschnitt ist 300 mm².

[![Randbedingungen statisch mechanische Analyse des Niederhalters](media/uebungen/niederhalter.png){width=350px}](media/uebungen/niederhalter.png "Randbedingungen statisch mechanische Analyse des Niederhalters"){.glightbox}

Berechnen Sie für den Übergang zwischen dem kleinen und großen Querschnitt die Kerbformzahl. Verwenden Sie hierzu ANSYS und Excel. Es gilt \(\sigma_k = \sigma_n \cdot \alpha_k\).

---

## Tisch

Gegeben ist das unten gezeigt Video eines Tischs sowie die zugehörige Geometrie [tisch.stp](media/uebungen/tisch.stp). Zu sehen ist ein Tisch, der nach einer kurzen Auslenkung mit großer Amplitude und über eine lange Dauer schwingt. Ein solches Verhalten ist für den Einsatz im Esszimmer unerwünscht.

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/tisch.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<!-- markdownlint-enable MD033 -->

### Tisch Aufgabenteil a)

Welche zwei Parameter könnten verändert werden, um Abhilfe für dieses Problem zu schaffen? Die Fragestellung ist aus maschinendynamischer Sicht zu beantworten. Die beiden Möglichkeiten sind in Excel zu benennen.

**Hinweis:** Es sind keine Berechnungen erforderlich.  

### Tisch Aufgabenteil b)

Führen Sie für den Tisch eine Modalanalyse in ANSYS durch, mit der sich das im Video gezeigte Phänomen numerisch erfassen lässt. Wählen Sie die Randbedingungen (z. B. Einspannungen, Kontakte) zweckmäßig und berechnen Sie die ersten **acht** Eigenmoden. Für die gesamte Baugruppe ist zunächst das Material *Baustahl* aus der ANSYS-Materialdatenbank zu verwenden.

### Tisch Aufgabenteil c)

Erweitern Sie anschließend das implementierte Modell um eine differenzierte Materialzuweisung. Die Materialien sind wie folgt zu definieren:

* Gestell: Aluminium  
  Dichte 2.7 kg/dm³, Elastizitätsmodul 70 GPa, Querkontraktionszahl ν = 0.35

* Tischplatte: Eiche  
  Dichte 0.94 kg/dm³, Elastizitätsmodul 23 GPa, Querkontraktionszahl ν = 0.4

Welchen Einfluss hat die Materialwahl auf die Eigenfrequenzen? Dokumentieren Sie die Ergebnisse in Excel.

### Tisch Aufgabenteil d)

Unter realen Einsatzbedingungen ist der Tisch nicht immer leer. Erweitern Sie das Modell daher um eine zusätzliche Masse, die den Tisch durch ein umfangreiches Angebot an Speisen und Getränken belastet. Die Art der Implementierung sowie die gewählten Parameter sind zweckmäßig zu wählen.

---

## Straßenlaterne

Gegeben ist das Video einer Straßenlaterne.

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/lampe.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<!-- markdownlint-enable MD033 -->

### Straßenlaterne Aufgabenteil a)

Beschreiben Sie kurz und in Stichworten, welches Phänomen zu sehen ist. Verwenden Sie hierzu Excel.  

### Straßenlaterne Aufgabenteil b)

Erstellen Sie mit der Geometrie [lampe.stp](media/uebungen/lampe.stp) eine Analyse in ANSYS, mit der Sie das Phänomen zumindest grundlegend nachbilden können. Werkstoff *Baustahl* (laut ANSYS-Datenbank).  

### Straßenlaterne Aufgabenteil c)

Welche der von Ihnen berechneten Eigenfrequenzen ist im Video zu sehen? Geben Sie die Mode in Excel an.  

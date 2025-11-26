# Übungen

Die folgenden Übungen dienen der **Vertiefung der in den Modulen erworbenen Kenntnisse**. Beachten Sie, dass für alle FE-Berechnungen Ergebnisse zu erzeugen sind, deren Betrag möglichst unabhängig vom Einfluss der Vernetzung ist, dass in allen Excel-Berechnungen jede verwendete Zahl mit ihrer jeweiligen Einheit anzugeben ist und dass die analytischen Lösungen mit Hinblick auf die Klausur konsequent in Excel zu erstellen sind.

## Stahllineal

Gegeben ist die Geometrie eines Stahllineals in der Datei [lineal.stp](media/uebungen/lineal.stp). Es wird durch eine Kraft \(F\) auf Zug in seiner Längsrichtung belastet, der Werkstoff sei Baustahl laut ANSYS Datenbank, jedoch mit einem **E-Modul von 210.000 N/mm²** und einer **Streckgrenze von 300 MPa**.

Berechnen Sie in Excel den Betrag der Zugkraft, bei der gerade noch keine plastische Verformung auftritt. Wie groß ist die resultierende Längenänderung bei dieser Kraft? Es gilt das Hooke’sche Gesetz \(\sigma = \varepsilon \cdot E\).

Weisen Sie Ihr Ergebnis für Kraft beziehungsweise Spannung und Verformung mit einer Berechnung in ANSYS nach. Wählen Sie die Randbedingungen so, dass die Querkontraktion des Bauteils an keiner Stelle verhindert wird.

## Niederhalter

Gegeben ist der dargestellte Niederhalter in der Datei [niederhalter.stp](media/uebungen/niederhalter.stp). Er sei auf Druck belastet und eingespannt gemäß Abbildung.

[![Randbedingungen statisch mechanische Analyse des Niederhalters](media/uebungen/niederhalter.png){width=350px}](media/uebungen/niederhalter.png "Randbedingungen statisch mechanische Analyse des Niederhalters"){.glightbox}

Berechnen Sie für den Übergang zwischen dem kleinen und großen Querschnitt die Kerbformzahl. Verwenden Sie hierzu ANSYS und EXCEL. Es gilt \(\sigma_k = \sigma_n \cdot \alpha_k\).

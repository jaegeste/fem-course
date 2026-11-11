# FEM-Kurs

## Kursinhalte

- Kursseiten in `docs/` in beiden Sprachfassungen pflegen. Deutsche Dateien verwenden `.md`, englische `.en.md`. Englischen Fließtext in British English schreiben. Offizielle ANSYS-Menütexte im Original der jeweiligen Oberfläche wiedergeben.
- Übersetzungen inhaltlich und strukturell 1:1 halten. Werte, Einheiten, Gleichungen, Links und Reihenfolge abgleichen. Bildtitel, Alt-Texte und Beschriftungen übersetzen. Sprachneutrale Bilder können beide Fassungen gemeinsam nutzen.
- Aufbau, Ton und Überschriften am jeweiligen Modul ausrichten. Aufgaben heißen auf Deutsch **Aufgabenstellung**, auf Englisch **Task Definition**.
- Peer-Teaching-Material zuerst fachlich und auf Mehrwert gegenüber dem Kurs prüfen. Belege der jeweiligen Aussage zuordnen. Freigegebene Inhalte in der Struktur und Sprache des Zielmoduls einarbeiten.
- Modellannahmen, Randbedingungen, Lastdefinitionen, Materialdaten und Ergebnisse aus der Vorlage belegen. Fehlende Angaben, Widersprüche und fachlich sinnvolle Ergänzungen zur Entscheidung vorlegen. Neue fachliche Inhalte erst nach ausdrücklicher Freigabe einarbeiten.
- ANSYS-Menüeinträge in der Sprache der Kursseite wiedergeben. Beispielsweise entspricht *Fixierte Lagerung* dem englischen *Fixed Support*. Unbestätigte Menübezeichnungen im Fließtext beschreiben und zur Prüfung in `TODO.md` erfassen.
- Bilder und CAD-Dateien im vorhandenen Medienordner des Moduls ablegen. Screenshots fortlaufend nummerieren, EN-Varianten mit `.en` vor der Dateiendung kennzeichnen und nach dem bestehenden Lightbox-Muster einbinden.
- Offene redaktionelle Aufgaben knapp als Markdown-Checkboxen in `TODO.md` im Projektstamm pflegen.

## Markdown und Diagramme

- Gliederung, Nummerierung und Hervorhebungen des Zielmoduls übernehmen. `mkdocs.yml` begrenzt das Inhaltsverzeichnis auf Ebene 2. Ergänzungen innerhalb eines Abschnitts entsprechend tiefer gliedern.
- Formeln mit der vorhandenen MathJax-/Arithmatex-Syntax des Abschnitts schreiben. Bei Zahleneinsetzungen die Einheiten mitführen. Im Fließtext und in Tabellen gilt DE `1.234,56`, EN `1,234.56`.
- Für Hinweise und aufklappbare Ergänzungen die vorhandenen Admonitions verwenden, z. B. `!!! note` und `??? note`. Blockinhalt mit vier Leerzeichen einrücken. Interne Links mit relativen Pfaden oder den tatsächlich erzeugten Abschnittsankern schreiben.
- Bilder nach dem Muster `[![Alt](pfad){width=600px}](pfad "Titel"){.glightbox}` einbinden. Breite und Beschriftung am jeweiligen Modul ausrichten. Bildquellen direkt darunter mit `<span class="bildquelle">…</span>` angeben. Für Literatur die bestehenden BibTeX-Schlüssel in `literatur.bib` und `[@Schlüssel]` verwenden.
- Interaktive Diagramme wie in `docs/07_symmetrie.md` als `<div class="plotly-chart">` mit gültigem JSON in `data-fig` einbinden. `data` und `layout` angeben, `config` bei Bedarf. Der zentrale Initialisierer `docs/js/plotly-init.js` rendert die Diagramme. Plotly und Initialisierung pro Seite nicht erneut laden.
- Vergleichsdiagramme nach dem Kursmuster in voller Breite und typischerweise 500 px Höhe einbinden. Für Datenreihen auf gemeinsamer x-Achse `hovermode: "x unified"` und ein helles Hover-Label verwenden. `text` und `hovertemplate` für lesbare Werte mit Einheiten nutzen.
- Diagrammdaten zwischen DE und EN abgleichen. Titel, Achsen, Legenden und Hover-Texte lokalisieren. Zahlen im JSON bleiben numerisch mit Dezimalpunkt. Formatierte Anzeigewerte stehen separat in `text`.
- Selbstkontrollfragen im vorhandenen `<?quiz?>`-Format schreiben. Die Position der richtigen Antwort zwischen Fragen variieren. MD033 für HTML und Quizblöcke nur lokal deaktivieren und danach ausdrücklich mit `<!-- markdownlint-enable MD033 -->` wieder aktivieren. Die übrigen Lint-Regeln stehen in `.markdownlint.json`.

## Arbeitsablauf

- Der aktive Checkout liegt unter `D:\ChatGPT-Workspace\fem-course`. Die lokale `.venv` und die VS-Code-Konfiguration verwenden projektbezogene Pfade. Der alte Checkout unter `D:\dev\fem-course` dient als Reserve.
- Für Kursaufgaben im aktiven Checkout bleiben. Andere Checkouts oder Verzeichnisse nur bei ausdrücklichem Auftrag prüfen.
- MkDocs mit der lokalen `.venv` prüfen. Bei einem Build einen separaten Ausgabeordner verwenden, da `site/` versionierte Dateien enthält.
- Änderungen und Prüfergebnisse für den Review bereitstellen. Branchwechsel, Commits und Deployment führt der Nutzer derzeit in VS Code aus.
- Commit-Nachrichten auf Englisch formulieren und die gesamte vereinbarte Bearbeitungsrunde berücksichtigen.

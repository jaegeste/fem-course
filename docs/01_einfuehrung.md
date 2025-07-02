# Einführung in die Vorlesung

## Einordnung der Vorlesung

- WING-Studierende im 5. Semester, Studiengang PEB  
- Teil des Moduls **Angewandte Maschinenkonstruktion**
- 6 Leistungspunkte  
- Zusammen mit **Maschinenelemente 2**

## Organisation

### Vorkenntnisse

- Einführung in die Konstruktion  
- Technisches Zeichnen  
- Technische Mechanik  
- Werkstoff- und Fertigungstechnik  
- CAD in Creo  
- Maschinenelemente 1  

### Inhalte

- Konstruktionsbegleitende Simulation von Maschinenbauteilen  
- Festigkeitsberechnung  
- Einfachste Maschinendynamik  

### Didaktischer Aufbau

- Vorlesung mit Übungen  
- Übungen am Rechner mit **ANSYS 2024R1** und **Creo 10.0.3.0**  
- Weiterführende Aufgaben für Zuhause  
- FELIX, Vorlesungsmitschriebe, Übungsaufgaben, Forum, Tools …

### Klausur

- Gemeinsam mit **Maschinenelemente 2**  
- **E-Klausur, 120 Minuten**  
- Keine Hilfsmittel  
- FEM-Aufgaben am Rechner  

## Grundlagen der FEM

### Warum CAx?

- Ziel: **Effizientere und schnellere Produktentwicklung**
- In kleinen und mittleren Firmen: **Konstrukteur berechnet selbst**
- In großen Firmen:
  - **Abstimmung** zwischen Konstruktion und Berechnung entscheidend
  - **Kommunikation** muss funktionieren
  - Projektmanagement muss **Verständnis für alle Fachabteilungen** aufbauen

### Entstehung der FEM

- Wunsch: Lösungen für beliebige kontinuumsmechanische Probleme
- Idee: Zerlegung des Kontinuums in bekannte Elemente (finite Elemente)
- Mathematische Grundlagen: **Ritz-Ansatz**, ca. 1909
- Heute: Lösung komplexer Gleichungssysteme mittels Hochleistungsrechnern

### Näherungsverfahren

- Näherung der wahren Lösung durch bekannte Elementeigenschaften
- FEM ist ein **Verschiebungsverfahren**  
  (Prinzip virtueller Verschiebungen)
- **Spannungen** resultieren aus einer **Nachlaufrechnung**

### Ablauf einer FE-Berechnung (grob)

1. Modell erstellen (CAD / Geometrie)
2. Netz generieren (Meshing)
3. Randbedingungen setzen (Lagerung, Lasten)
4. Lösung berechnen (Solver)
5. Ergebnisse interpretieren (Postprocessing)

### Ablauf einer FE-Berechnung (detailliert)

*(Siehe Folie „Ablauf einer FE-Berechnung, detailliert“)  
→ Grafik ggf. per Lightbox ergänzen*

### Ergebnisinterpretation

- Ergebnisse plausibel und zweckmäßig?
- Randbedingungen, Größenordnungen, Einheiten korrekt?
- Materialverhalten angemessen gewählt?
- Abgleich mit Erfahrungen oder analytischen Lösungen möglich?
- Rechenzeit vertretbar?
- Netzeinfluss eliminiert?
- Konvergenz erreicht?
- Divergenzen bewusst berücksichtigt?

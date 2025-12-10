# Modul 06 – Modalanalyse

## Lernziele

In diesem Modul werden folgende Inhalte und Kompetenzen vermittelt:

* Bedeutung von Eigenfrequenzen und Eigenformen für Bauteile und Baugruppen
* Herleitung grundlegender Zusammenhänge aus einfachen Feder Masse Systemen
* Einfluss der Einspannung und der Massenverteilung auf das Eigenschwingungsverhalten
* Umsetzung einer Modalanalyse in ANSYS Mechanical
* Interpretation und Bewertung von Modenformen
* Vergleich numerischer und analytisch bekannter Lösungen an einfachen Strukturen
* Übertragung auf komplexere Baugruppen mit starren und verformbaren Teilen

## Motivation und zentrale Fragestellungen

Schwingungen treten in technischen Systemen in vielfältiger Form auf. Bereits einfache Beobachtungen zeigen, dass Strukturen nicht beliebig schwingen, sondern charakteristische, systemabhängige Muster ausbilden. Diese Muster entstehen nicht zufällig, sondern entsprechen dem Eigenschwingverhalten des jeweiligen Systems.  

Die folgenden Filmsequenzen verdeutlichen typische Situationen, in denen sich dieses Eigenverhalten unmittelbar beobachten lässt. Die Beispiele reichen von alltäglichen Objekten bis hin zu technischen Bearbeitungsprozessen und dienen als Ausgangspunkt für die Analyse der zugrunde liegenden Mechanismen.

### Schwingung einer Straßenlaterne

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/lampe.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>
<!-- markdownlint-enable MD033 -->

??? question "Was lässt sich in dieser Filmsequenz erkennen?"

    * Die Lampe führt eine freie Schwingung aus.  
    * Die Bewegung konzentriert sich in einer charakteristischen Form, die einer Eigenform des Systems entspricht.  
    * Dass die Laterne in dieser Form schwingt, liegt daran, dass der Wind Anregungsanteile enthält, die die Eigenfrequenz des Systems treffen.

---

### Schwingung einer Tischplatte

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/tisch.mp4" type="video/mp4">
  Ihr Browser kann dieses Video nicht wiedergeben.
</video>

??? question "Welche Phänomene treten hier auf?"

    * Die Tischplatte ist im Gestell offenbar sehr weich gelagert; bereits geringe Kräfte können zu einer Verdrehung des gesamten Aufbaus führen.  
    * Nach dem Loslassen führt die Platte eine freie Schwingung aus, was auf eine Kombination aus geringer Steifigkeit des Untergestells und relativ hoher Masse der Platte hinweist.  
    * Ein solcher Aufbau ist strukturdynamisch ungünstig: geringe Gestellsteifigkeit in Kombination mit großer Plattenmasse führt zu ausgeprägtem Eigenschwingverhalten.  

---

### Resonanz eines Brückensystems (Tacoma Narrows Bridge)

<!-- markdownlint-disable MD033 -->
<iframe  
    width="700"  
    height="394"  
    src="https://www.youtube-nocookie.com/embed/XggxeuFDaDU?cc_load_policy=0&cc_lang_pref=en&hl=en"  
    title="Tacoma Narrows Bridge Collapse"
    frameborder="0"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
    allowfullscreen
    playsinline>
</iframe>
<!-- markdownlint-enable MD033 -->

??? question "Welche strukturdynamischen Effekte sind sichtbar?"

    * Die Brücke zeigt eine ausgeprägte Torsionsmode mit großer Auslenkung; die Eigenform dominiert das gesamte Systemverhalten deutlich.  
    * Die starke Zunahme der Schwingungsamplitude weist auf einen Resonanzzustand hin, der in eine **Resonanzkatastrophe** übergeht.  
    * Die aerodynamische Anregung entsteht durch Strömungsabriss und periodische Wirbelablösungen, die Anregungsanteile im Bereich einer Eigenfrequenz der Brücke erzeugen.  
    * Die Kopplung zwischen Strömung und Struktur führt zu einer selbsterregten Schwingung, sodass die Bewegung nicht durch äußere periodische Lasten, sondern durch das System selbst aufrechterhalten wird.  
    * Moderne Brücken werden aerodynamisch günstiger ausgeführt, um solche Effekte durch optimierte Profile, Versteifungen und geänderte Bauformen zu vermeiden.  
    * Weitere Informationen hier: [https://wsdot.wa.gov/TNBhistory/](https://wsdot.wa.gov/TNBhistory/)

---

### Vibrationen beim Fräsen

<!-- markdownlint-disable MD033 -->
<iframe  
    width="700"  
    height="394"  
    src="https://www.youtube-nocookie.com/embed/__yQcF4G7tM?start=37&end=105&cc_load_policy=0&cc_lang_pref=en&hl=en"  
    title="Machining vibration example"
    frameborder="0"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
    allowfullscreen
    playsinline>
</iframe>
<!-- markdownlint-enable MD033 -->

??? question "Welche Hinweise auf Eigenfrequenzen liefert diese Bearbeitung?"

    * Das Werkzeug beginnt zu schwingen, sobald die Schnittbedingungen eine dynamisch instabile Konfiguration erzeugen. Diese liegt vor, wenn die Rückkopplung zwischen Werkzeugbewegung und Spanbildungsprozess Schwingungen verstärkt statt dämpft.  
    * Die entstehende Rattermarke ist ein direktes Abbild der Werkzeugschwingung und zeigt die dominierende Eigenform des Systems.  
    * Das Gesamtsystem Werkzeug–Spindel–Werkstück weist eine oder mehrere charakteristische Eigenfrequenzen auf, in deren Nähe das Schwingungsverhalten besonders ausgeprägt ist.  
    * Dynamische Instabilität entsteht, wenn die Prozessanregung Anteile im Bereich einer Eigenfrequenz enthält und die Systemdämpfung nicht ausreicht, um die Schwingung zu reduzieren.  
    * In der Filmsequenz ist eine aktive Schwingungsreduzierung sichtbar. Deren Wirkung zeigt sich darin, dass die Schwingungsamplitude zeitweise deutlich reduziert wird, da der Dämpfer dem System aktiv Energie entzieht und somit das Eigenschwingverhalten beeinflusst.  

---

### Schwingungen eines Maschinenunterbaus

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="../media/08_modalanalyse/unterbau.mp4" type="video/mp4">
  Ihr Browser unterstützt das Abspielen von Videos nicht.
</video>
<!-- markdownlint-enable MD033 -->

??? question "Welche strukturdynamischen Aspekte treten hier hervor?"

    * Das Video zeigt eine Zusammenfassung zahlreicher Eigenformen eines Maschinenunterbaus, wie sie in einer FEM-Modalanalyse berechnet werden.  
    * Die dargestellten Moden decken einen breiten Frequenzbereich ab und verdeutlichen, dass technische Systeme viele charakteristische Eigenformen besitzen, die sich lokal oder global ausprägen können.  
    * Die sichtbaren Schwingungsmuster werden durch die Verteilung von Masse und Steifigkeit bestimmt.
    * Niedrigfrequente Eigenformen betreffen oft den gesamten Aufbau, während höherfrequente Moden lokal konzentrierte Verformungen aufweisen.  
    * Die Vielzahl möglicher Eigenformen erklärt, warum bereits geringe Anregungen – wie im vorherigen Video des Fräsprozesses – bestimmte Moden aktivieren und damit unerwünschte Schwingungen verursachen können.  

---

### Zwischenfazit

Die gezeigten Beispiele machen deutlich, dass technische Systeme nicht beliebig schwingen, sondern ausgeprägte Eigenformen besitzen, die in charakteristischen Frequenzbereichen auftreten.  

Diese Beobachtungen führen zu grundlegenden Fragestellungen:

* Welche Eigenschaften eines Systems bestimmen sein Schwingungsverhalten?  
* Warum treten Schwingungen nur in bestimmten Frequenzbereichen verstärkt auf?  
* Welche physikalischen Parameter steuern Lage und Form der Eigenmoden?  
* Wie prägen Eigenformen das Verhalten komplexer Bauteile und Baugruppen?
* Wie unterscheiden sich Einmassensysteme von kontinuierlichen Strukturen?  

Zur systematischen Analyse dieser Fragestellungen wird schrittweise vom einfachen dynamischen Modell zum komplexen technischen Bauteil übergegangen. Der Einstieg erfolgt über den Einmassenschwinger, bevor Balken, Platten, Wellen und Baugruppen untersucht werden.

## Theoretischer Hintergrund nach Eichler[@Eichler2023]

### Grundbegriffe

Technische Schwingungen lassen sich durch wenige grundlegende Größen beschreiben. Die wichtigsten sind:

* **Auslenkung**  
  Zeitabhängige Abweichung einer Größe (z. B. Lage) vom Gleichgewichtszustand.  

* **Periode** \(T\)  
  Zeitspanne, nach der sich ein periodischer Vorgang wiederholt.  

* **Frequenz** \(f\) und **Kreisfrequenz** \(\omega\)  
  \(f = \frac{1}{T}\)  
  \(\omega = 2 \pi f\)  

* **Amplitude** \(A\)  
  Maximale Auslenkung aus dem Gleichgewicht.  

Diese Größen bilden die Basis für die Beschreibung mechanischer Schwingungen.  

---

### Ungedämpfte Schwingung eines Einmassenschwingers

Ein großes Spektrum technischer Schwingungsprobleme lässt sich im Kern auf das lineare Feder–Masse–System zurückführen.

[![Feder Masse System ](media/08_modalanalyse/feder_masse.png){width=350px}](media/08_modalanalyse/feder_masse.png "Feder Masse System"){.glightbox}
<span class="bildquelle">Bildquelle[@Eichler2023]</span>  

Die Auslenkung aus der Ruhelage wird durch \(y(t)\) beschrieben. Die rücktreibende Kraft ist proportional zur Auslenkung, jedoch entgegengesetzt gerichtet:

\[
F = -\,c\,y(t)
\]

Die Größe \(c\) ist die Federkonstante (Einheit: N/m bzw. N/mm).

#### Kräfteansatz und Bewegungsgleichung

Nach dem zweiten Newtonschen Gesetz führt die resultierende Kraft zu einer Beschleunigung:

\[
F = m\,\ddot{y}(t)
\]

Gleichsetzen beider Ausdrücke ergibt:

\[
m\,\ddot{y}(t) = -\,c\,y(t)
\]

oder in Standardform:

\[
\ddot{y}(t) + \frac{c}{m}\,y(t) = 0
\]

Hierbei handelt es sich um **lineare, homogene Differentialgleichung zweiter Ordnung** mit konstanten Koeffizienten.

---

#### Harmonischer Lösungsansatz

Eine Lösung der Form

\[
y(t) = \hat{y}\,\cos(\omega_0 t + \varphi_0)
\]

wird eingesetzt. Die Ableitungen lauten:

\[
\dot{y}(t) = -\,\hat{y}\,\omega_0 \sin(\omega_0 t + \varphi_0)
\]

\[
\ddot{y}(t) = -\,\hat{y}\,\omega_0^{2} \cos(\omega_0 t + \varphi_0)
\]

Einsetzen in die Bewegungsgleichung führt auf:

\[
-\,\hat{y}\,\omega_0^{2} \cos(\omega_0 t + \varphi_0) + \frac{c}{m}\,\hat{y}\,\cos(\omega_0 t + \varphi_0) = 0
\]

Daraus folgt die charakteristische Beziehung:

\[
\omega_0^{2} = \frac{c}{m}
\qquad\Longrightarrow\qquad
\omega_0 = \sqrt{\frac{c}{m}}
\]

Dies ist die **Eigenkreisfrequenz** des Systems.

---

#### Eigenfrequenz und Schwingungsdauer

Aus der Kreisfrequenz ergibt sich die Eigenfrequenz:

\[
f_0 = \frac{\omega_0}{2\pi}
\]

Die dazugehörige Periodendauer lautet:

\[
T_0 = \frac{1}{f_0} = \frac{2\pi}{\omega_0}
\]

Die Schwingung ist also eine **Systemeigenschaft**, bestimmt ausschließlich durch Masse und Federkonstante. Die Anfangsbedingungen beeinflussen lediglich Amplitude \(\hat{y}\) und Phase \(\varphi_0\).

---

### Gedämpfte Schwingung

Reale technische Systeme verlieren Schwingungsenergie durch Reibung, Luftwiderstand oder Materialdämpfung.  
Die Dämpfung wird durch eine Proportionalität zur Geschwindigkeit modelliert:  

\[
m \ddot{x} + k \dot{x} + D x = 0
\]

Eichler unterscheidet folgende Fälle (S. 138–140):  

* schwach gedämpfte Schwingung (periodisches Verhalten, langsames Abklingen)  
* kritische Dämpfung (Grenzfall, schnellster Abklingvorgang ohne Schwingung)  
* starke Dämpfung (keine periodische Bewegung)  

Die gedämpfte Eigenkreisfrequenz lautet:  

\[
\omega_\mathrm{d} = \sqrt{\omega_0^2 - \left(\frac{k}{2m}\right)^2}
\]

---

### Beispielabbildung: Gedämpfte Schwingung  
*(Screenshot aus Eichler S. 139)*  

<!-- markdownlint-disable MD033 -->
[![Gedämpfte Schwingungen – nach Eichler](media/08_modalanalyse/eichler_daempfung.png){width=650px}](media/08_modalanalyse/eichler_daempfung.png "Gedämpfte Schwingungen – nach Eichler"){.glightbox}
<!-- markdownlint-enable MD033 -->

<span class="bildquelle">Bildquelle nach Eichler (2023), S. 139.</span>  

---

## Erzwungene Schwingung und Resonanz

Wirkt auf das System eine zeitabhängige äußere Kraft  

\[
F(t) = F_0 \sin(\omega t)
\]

so stellt sich ein stationärer Schwingungszustand ein. Die Amplitude der Antwortschwingung hängt von der Anregungsfrequenz \(\omega\) ab und zeigt ein Maximum, wenn \(\omega\) in der Nähe der Eigenkreisfrequenz \(\omega_0\) liegt.  

Dieses Verhalten wird als Resonanz bezeichnet. Eichler veranschaulicht dieses Verhalten in der Resonanzkurve (Abb. 6.7, S. 143).  

---

### Beispielabbildung: Resonanzkurve  
*(Screenshot aus Eichler S. 143)*  

<!-- markdownlint-disable MD033 -->
[![Resonanzkurve – nach Eichler](media/08_modalanalyse/eichler_resonanz.png){width=650px}](media/08_modalanalyse/eichler_resonanz.png "Resonanzkurve – nach Eichler"){.glightbox}
<!-- markdownlint-enable MD033 -->

<span class="bildquelle">Bildquelle nach Eichler (2023), S. 143.</span>  

Diese Darstellung knüpft unmittelbar an die zuvor gezeigten Filmsequenzen an (Brückenschwingung, Fräsprozess).  

---

## Überlagerung und Schwebung

Ein technisches System kann mehrere Schwingungsanteile gleichzeitig enthalten.  
Die Überlagerung zweier harmonischer Schwingungen mit leicht unterschiedlicher Frequenz führt zur Schwebung, einem alternierenden Verstärken und Abschwächen der Gesamtamplitude.  

Nach Eichler (S. 145–147) lässt sich die Überlagerung zweier Schwingungen schreiben als:  

\[
x(t) = A_1 \sin(\omega_1 t) + A_2 \sin(\omega_2 t)
\]

Die Schwebungsfrequenz ergibt sich zu:  

\[
f_\mathrm{s} = \lvert f_1 - f_2 \rvert
\]

Dieses Konzept bildet einen intuitiven Übergang zur Vorstellung einer Vielzahl von Eigenformen in realen Strukturen.  

---

### Beispielabbildung: Schwebung  
*(Screenshot aus Eichler S. 146)*  

<!-- markdownlint-disable MD033 -->
[![Schwebung – nach Eichler](media/08_modalanalyse/eichler_schwebung.png){width=650px}](media/08_modalanalyse/eichler_schwebung.png "Schwebung – nach Eichler"){.glightbox}
<!-- markdownlint-enable MD033 -->

<span class="bildquelle">Bildquelle nach Eichler (2023), S. 146.</span>  

---

## Von der eindimensionalen Schwingung zur Modalanalyse

Eichler zeigt auf S. 156 Beispiele für Eigenschwingungen in Kontinua, etwa Luftsäulen oder Membranen. Diese Beispiele verdeutlichen:  

* reale Strukturen besitzen viele Eigenfrequenzen  
* jede Eigenfrequenz gehört zu einer charakteristischen Eigenform  
* nur bestimmte Frequenzen sind mit der Struktur verträglich und führen zu ausgeprägtem Schwingungsverhalten  

Diese Prinzipien lassen sich verallgemeinern zur Formulierung des Eigenwertproblems in der Finite Element Methode. Für ein lineares System mit Massenmatrix \(M\) und Steifigkeitsmatrix \(K\) gilt:  

\[
M \ddot{\varphi} + K \varphi = 0
\]

Mit dem Ansatz \(\varphi(t) = \Phi \,\mathrm{e}^{\mathrm{i} \omega t}\) ergibt sich das Eigenwertproblem  

\[
K \Phi = \omega^2 M \Phi
\]

Aus dessen Lösung folgen Eigenfrequenzen \(\omega\) und zugehörige Eigenformen \(\Phi\) für Balken, Platten, Wellen und Baugruppen.  

---

### Beispielabbildung: Eigenschwingungen eines Kontinuums  
*(Screenshot aus Eichler S. 156)*  

<!-- markdownlint-disable MD033 -->
[![Eigenschwingungen eines Kontinuums – nach Eichler](media/08_modalanalyse/eichler_kontinuum.png){width=650px}](media/08_modalanalyse/eichler_kontinuum.png "Eigenschwingungen eines Kontinuums – nach Eichler"){.glightbox}
<!-- markdownlint-enable MD033 -->

<span class="bildquelle">Bildquelle nach Eichler (2023), S. 156.</span>  



### Modellstufen

* Von starren Körpern zu kontinulierlichen Strukturen

### Analytische Lösungen einfacher Strukturen

* Balken eigenfrequenzen für freie, einseitig feste und beidseitig feste Lagerung
* Platte mit einfacher Geometrie (optional)

## Umsetzung in ANSYS

### Geometrie und Material

* Nutzung der vorhandenen Geometrien:  
  * Balken  
  * Stahlplatte  
  * Welle  
  * Baugruppe Windenergieanlage

### Kontakt und Verbindungselemente

* Einfluss auf Modenformen
* Wann kann ein Teil als starr modelliert werden

### Randbedingungen

* Frei, einseitig fest, beidseitig fest
* Einfluss auf Resultate

### Netz

* Bedeutung des Netzes für Modalanalysen
* Lokale Verfeinerung an kritischen Geometrien
* Einfluss der Trägheitsverteilung

### Lösereinstellungen

* Ziel: die ersten n Eigenfrequenzen
* Auswahl des Frequenzbereichs
* Skalierung der Modenformen
* Nutzung der Animation für Filmsequenzen

## Beispiele (vom einfachen Bauteil zur Baugruppe)

### 1. Balken

* Erste zehn Eigenformen vergleichen
* Einfluss der Einspannung
* Einfluss des Materials

### 2. Stahlplatte

* Erste fünf Moden
* Interpretation typischer Plattenmoden
* Vergleich der Moden bei freien und fixierten Kanten

### 3. Getriebewelle

* Einfluss von Punktmassen
* Identifikation relevanter Moden für den Betrieb einer Maschine

### 4. Windenergieanlage

* Reduktion komplexer Baugruppen
* Einfluss der Materialwahl
* Strukturkritische Moden

## Diskussion der Ergebnisse

* Veränderungen der Moden durch Masseverteilung, Steifigkeit, Randbedingungen
* Interpretation typischer Modenformen
* Bedeutung für Betriebsdrehzahlen und Sicherheit
* Grenzen der Modalanalyse

## Weiterführendes

* Einführung in Betriebsschwingungsanalyse
* Experimentelle Modalanalyse
* Modellreduktion für große Baugruppen
* Mehrkörpermodell und Kopplung an FE Modelle

## Quiz zur Selbstkontrolle

(Platzhalter)

<!-- 
wie geht's weiter:
  - Modul 7 Thermo-Mechanik: 09_thermomechanik.md
  - Modul 8 Sensoren I (Beschl.): 10_sensor_beschl.md
  - Modul 9 Sensoren II (Druck): 11_sensor_druck.md
  - Modul 10 Kontakt: 12_kontakt.md
  - Modul 11 Ausblick: 13_ausblick.md

  | Modul | Titel | Kerninhalt |
| :----: | :---- | :---------- |
| **07** | **Thermo-mechanische Kopplung** | Temperaturfeld → thermische Dehnung → mechanische Spannung, Vergleich isotherm vs. thermisch belastet, Einfluss von Materialparametern (α, E), Beispiel: Platte mit Temperaturgradient. Alternativ Wärme aus Reibung (Bremse) |
| **8** | **Sensoren I – Beschleunigungssensor** | Simulation eines Masse-Feder-Systems, statisches Äquivalent einer Beschleunigung, Bestimmung der Durchbiegung und Eigenfrequenz, Funktionsnachweis als FEM-basiertes Messprinzip. |
| **9** | **Sensoren II – Drucksensor / Membran** | Modellierung einer dünnen Platte unter Flächenlast, Berechnung der Durchbiegung und Vergleichsspannung, Herleitung einer Sensorkennlinie (Druck → Verformung), Einfluss der Membrandicke. |
| **10** | **Kontakt & Baugruppen** | Grundlagen der Kontaktmodellierung (bonded, frictionless, frictional), Reibungseinfluss auf Spannungsverteilung, Anwendung an Flansch- oder Bolzenverbindungen, Netz- und Konvergenzaspekte. |
| **11 (optional)** | **Moderne FEM / Ausblick** | Neue Entwicklungen: additive und generative Strukturen, vereinfachte Reduced-Order-Modelle, KI-gestützte Approximation physikalischer Modelle, Konzept des Digital Twin. |
-->

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}
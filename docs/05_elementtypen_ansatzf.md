# Modul 3 Elementtypen und Ansatzfunktionen

## Lernziele

Nach Abschluss dieses Moduls können die Studierenden:

* den Einfluss der Ansatzfunktionen und der Elementordnung (linear vs. quadratisch) auf die Genauigkeit eines FEM-Ergebnisses erläutern,  
* den Zusammenhang zwischen Netzverfeinerung, Elementverzerrung und Ergebnisqualität bewerten,  
* den Begriff der Konvergenz besser erklären und eine h-Studie (Netzeinflussstudie) durchführen,  
* aus FEM-Ergebnissen ableiten, wann weitere Netzverfeinerung oder höhere Ansatzordnung erforderlich ist.

## Ansatzfunktion (Theoretischer Hintergrund nach Bielak[@Bielak2024])

Im vorherigen Kapitel wurde die Finite-Elemente-Methode in vereinfachter Form eingeführt. Dabei stand im Vordergrund, wie komplexe Bauteile durch eine diskrete Anzahl von Elementen angenähert und über Knotenpunkte miteinander verbunden werden.  

In diesem Modul wird die theoretische Grundlage vertieft, auf der diese Methode basiert. Im Mittelpunkt stehen die mathematischen Prinzipien der Diskretisierung, die Form der Ansatzfunktionen  sowie der Einfluss der Elementordnung auf die Genauigkeit und Konvergenz des Ergebnisses. Diese Zusammenhänge bilden das Fundament, um die späteren FEM-Ergebnisse physikalisch korrekt zu interpretieren und den Einfluss der Netzqualität systematisch zu bewerten.

FEM beruht auf der Idee, ein kontinuierliches physikalisches System in eine endliche Anzahl kleiner, einfach beschreibbarer Teilbereiche zu zerlegen. Diese Teilbereiche werden als **Elemente** bezeichnet. Die Verbindungspunkte zwischen ihnen heißen **Knoten**.  

Innerhalb jedes Elements wird das physikalische Verhalten (z. B. die Verschiebung \(u\)) nicht exakt, sondern durch eine einfache mathematische Funktion beschrieben. Diese Funktion wird als **Ansatzfunktion** bezeichnet.

---

### Diskretisierung und Ansatzfunktion

Statt das gesamte Bauteil kontinuierlich zu beschreiben, wird jedes Element einzeln betrachtet. Für jedes Element gilt: Die Verschiebung zwischen den Knoten wird durch eine Ansatzfunktion angenähert.  

Ein eindimensionaler Stab wird dazu in mehrere **Finite Elemente** zerlegt, deren Grenzen durch **Knotenpunkte** festgelegt sind. Die folgende Abbildung zeigt ein solches Netz aus \(N\) Elementen. Die Knoten sind entlang der Stabachse nummeriert, die Elemente werden mit \(\Omega_1, \Omega_2, \dots, \Omega_N\) bezeichnet.

<!-- markdownlint-disable MD033 -->
<br>
<!-- markdownlint-enable MD033 -->

[![Diskretisierung eines Stabes in Finite Elemente](media/05_elementtypen_ansatzf/01_FE_Discretization.png){width=600px}](media/05_elementtypen_ansatzf/01_FE_Discretization.png "Diskretisierung eines Stabes in Finite Elemente"){.glightbox}
<span class="bildquelle">Bildquelle[@Bielak2024]</span>

!!! note "Erläuterung zur Element- und Knotennummerierung"

    * Zwischen zwei aufeinanderfolgenden Knoten \(x_i\) und \(x_{i+1}\) liegt jeweils ein Element \(\Omega_i\).
    * Die Knoten sind entlang der Stabachse fortlaufend nummeriert – von \(x_1\) bis \(x_{N+1}\).
    * Der Index \(i\) steht stellvertretend für eine beliebige Position im Netz (z. B. \(i = 3\) für das dritte Element).
    * Insgesamt gilt: Ein Netz mit \(N\) Elementen besitzt \(N + 1\) Knoten.

---

Jeder Knoten erhält eine eigene **Ansatzfunktion** \(\Phi_i(x)\), die im direkten Nachbarbereich ungleich null ist und außerhalb davon verschwindet. Diese Funktionen werden häufig auch als **Hutfunktionen** bezeichnet, da ihr Verlauf an die Form eines Daches erinnert.  

Für die Gesamtlösung \(u(x)\) gilt:

\[
u(x) = \sum_{i=1}^{n} \Phi_i(x) \, u_i
\]

Jede Funktion \(\Phi_i(x)\) beschreibt also den Einfluss des Knotens \(i\) auf die Gesamtverschiebung. Am eigenen Knoten gilt \(\Phi_i(x_i) = 1\), an allen anderen Knoten \(\Phi_i(x_j) = 0\).

<!-- markdownlint-disable MD033 -->
<br>
<!-- markdownlint-enable MD033 -->

[![Ansatzfunktionen für mehrere Knoten eines Stabes](media/05_elementtypen_ansatzf/02_ShapeFunctions_Linear.png){width=600px}](media/05_elementtypen_ansatzf/02_ShapeFunctions_Linear.png "Ansatzfunktionen für mehrere Knoten eines Stabes"){.glightbox}
<span class="bildquelle">Bildquelle[@Bielak2024]</span>

!!! note "Erläuterungen zu den Ansatzfunktionen"
    * Jede Ansatzfunktion \(\Phi_i(x)\) besitzt nur eine **lokale Tragweite** – sie ist nur in den direkt angrenzenden Elementen aktiv und außerhalb dieses Bereichs null.  
      Dadurch beeinflusst jeder Knoten nur seine unmittelbare Umgebung, was zur sparsamen Struktur der globalen Gleichungen führt.  

    * Der Begriff **Hutfunktion** beschreibt ausschließlich die Form der **linearen Ansatzfunktionen**.  
      Bei quadratischen oder höheren Elementen sind die Funktionen gekrümmt; sie erfüllen dieselben Bedingungen \(\Phi_i(x_i)=1\), \(\Phi_i(x_j)=0\), besitzen aber keine einfache Dachform mehr.

    * Die Überlagerung aller Ansatzfunktionen ergibt die angenäherte Verschiebungsverteilung \(u(x)\) entlang des gesamten Bauteils.  
      Damit wird das ursprünglich kontinuierliche Problem auf eine endliche Zahl von Freiheitsgraden – die Verschiebungen \(u_i\) an den Knoten – reduziert.

---

### Lineare Ansatzfunktionen (1D-Elemente)

Die im vorherigen Abschnitt eingeführte allgemeine Näherung  

\[
u(x) = \sum_{i=1}^{n} \Phi_i(x)\,u_i
\]

gilt für das gesamte System. Betrachtet man nun **ein einzelnes Element** mit **zwei Knoten** an den Positionen \(x_1 = 0\) und \(x_2 = L\), so reduziert sich der Ausdruck auf zwei lokale Ansatzfunktionen \(N_1(x)\) und \(N_2(x)\):

\[
u(x) = N_1(x)\,u_1 + N_2(x)\,u_2
\]

Die Aufgabe besteht nun darin, diese \(N_i(x)\) so zu bestimmen, dass sie die Interpolationsbedingungen

\[
N_1(0)=1,\; N_1(L)=0, \qquad N_2(0)=0,\; N_2(L)=1
\]

erfüllen. Da die Verschiebung zwischen den Knoten linear verlaufen soll, wird angenommen:

\[
u(x) = a + bx
\]

Einsetzen der Randbedingungen liefert:

\[
u(0)=u_1,\quad u(L)=u_2 \;\Rightarrow\; u(x)=u_1+\frac{u_2-u_1}{L}\,x
\]

Vergleicht man diesen Ausdruck mit \(u(x)=N_1(x)u_1+N_2(x)u_2\), so ergeben sich die **linearen Ansatzfunktionen**:

\[
N_1(x)=1-\frac{x}{L}, \qquad N_2(x)=\frac{x}{L}
\]

Die Ableitung nach der Koordinate \(x\) ergibt die konstante Dehnung \(\varepsilon=\frac{du}{dx}\). Lineare Elemente können daher **nur lineare Verformungsverläufe** abbilden.  
Bei gekrümmten oder stark veränderlichen Verläufen – etwa in der Nähe von Kerben oder Kontaktzonen – liefern sie nur eine grobe Näherung. Eine höhere Genauigkeit wird dort durch feinere Netze oder höhergradige Ansatzfunktionen erreicht.

### Quadratische Ansatzfunktionen (1D-Elemente)

Quadratische Elemente besitzen **drei Knoten** – zwei Randknoten und einen Mittenknoten.  
Im Gegensatz zu linearen Elementen verlaufen die Ansatzfunktionen nun **quadratisch** und können dadurch auch **gekrümmte Verformungen** innerhalb des Elements abbilden.

<!-- markdownlint-disable MD033 -->
<br>
<!-- markdownlint-enable MD033 -->

[![Quadratische Ansatzfunktionen eines 1D-Elements](media/05_elementtypen_ansatzf/03_ShapeFunctions_Quadratic.png){width=550px}](media/05_elementtypen_ansatzf/03_ShapeFunctions_Quadratic.png "Quadratische Ansatzfunktionen eines 1D-Elements"){.glightbox}
<span class="bildquelle">Bildquelle [@Bielak2024]</span>

In der Abbildung sind die drei **Formfunktionen** \(\Phi_1(\xi)\), \(\Phi_2(\xi)\) und \(\Phi_3(\xi)\) dargestellt.  

* \(\Phi_1(\xi)\) und \(\Phi_3(\xi)\) verlaufen jeweils durch die Randknoten und verschwinden an den anderen Knoten.  
* \(\Phi_2(\xi)\) besitzt ihr Maximum im Mittenknoten und geht an den Rändern gegen null.  

Zur Beschreibung wird häufig die **normierte Koordinate**

\[
\xi = \frac{x}{L}
\]

verwendet, sodass das Element im Intervall \(0 \le \xi \le 1\) liegt. Die drei Ansatzfunktionen lauten:

\[
\begin{aligned}
\Phi_1(\xi) &= 1 - 3\xi + 2\xi^2, \\
\Phi_2(\xi) &= 4\xi(1 - \xi), \\
\Phi_3(\xi) &= 2\xi^2 - \xi
\end{aligned}
\]

Damit ergibt sich die Verschiebung innerhalb des Elements zu:

\[
u(\xi) = \Phi_1(\xi)\,u_1 + \Phi_2(\xi)\,u_2 + \Phi_3(\xi)\,u_3
\]

Quadratische Elemente können sowohl **lineare als auch gekrümmte Verläufe** der Verschiebung \(u(x)\) und der Spannung \(\sigma(x)\) darstellen. Bei gleicher Netzgröße liefern sie deutlich genauere Ergebnisse als lineare Elemente, sind jedoch aufgrund der zusätzlichen Freiheitsgrade pro Element rechenintensiver.

---

### Einfluss der Elementordnung

Vergleicht man lineare und quadratische Elemente am gleichen Bauteil, so zeigt sich:

* Quadratische Elemente approximieren den Spannungs- und Verschiebungsverlauf besser.  
* Die Konvergenzgeschwindigkeit (Annäherung an die exakte Lösung) steigt mit der Ansatzordnung.  
* Bei linearen Elementen muss die Netzgröße \(h\) stärker verringert werden, um vergleichbare Genauigkeit zu erreichen.

Die wichtigsten Unterschiede zwischen linearen und quadratischen Elementen sind in der folgenden Übersicht zusammengefasst:

| **Kriterium** | **Lineare Elemente (p = 1)** | **Quadratische Elemente (p = 2)** |
| :------------- | :---------------------------- | :-------------------------------- |
| **Ansatzfunktion** | geradlinig zwischen den Knoten | gekrümmt, Mittenknoten vorhanden |
| **Verformungsverlauf** | linear, keine Krümmung | gekrümmt, auch nichtlineare Verläufe abbildbar |
| **Genauigkeit** | gering, konvergiert langsam | hoch, schnellere Konvergenz |
| **Rechenaufwand** | gering | höher durch zusätzliche Freiheitsgrade |
| **Einsatzgebiet** | einfache Geometrien, homogene Belastungen | Bereiche mit Krümmung, Spannungsgradienten oder Kontaktzonen |

---

## Konvergenzverhalten und Netzqualität

Die Genauigkeit einer FEM-Lösung hängt von zwei Faktoren ab: der **Elementgröße \(h\)** und der **Ansatzordnung \(p\)**.  

* \(h\) beschreibt die charakteristische Länge eines Elements (also die Netzauflösung).  
* \(p\) steht für die Polynomordnung der Ansatzfunktion (linear, quadratisch, …).  

Mit abnehmender Elementgröße und höherer Ansatzordnung nähert sich die numerische Lösung der exakten Lösung an. Der verbleibende Unterschied zwischen der **exakten (wahren)** und der **numerischen (FEM-)Lösung** wird als **Fehler \(e\)** bezeichnet:

\[
e = u_\text{exakt} - u_\text{FEM}
\]

Da die exakte Lösung \(u_\text{exakt}\) meist unbekannt ist, wird der Fehler nicht direkt, sondern **über seine Größenordnung** abgeschätzt. Für viele lineare Probleme lässt sich sein Verlauf mit der Elementgröße durch eine Potenzfunktion beschreiben:

\[
\| e \| \approx C \, h^p
\]

Hierbei gilt:  

* \(C\) fasst den **Einfluss von Geometrie, Material und Randbedingungen** zusammen,  
* \(h\) steht für die **charakteristische Elementgröße**,  
* \(p\) beschreibt die **Ansatzordnung**,  
* \(\| e \|\) ist eine Maßzahl für den Fehler, z. B. die **Energie- oder \(L_2\)-Norm**.

Je kleiner \(h\) und je größer \(p\), desto kleiner wird der Fehler.  

* Wird die Elementlänge \(h\) halbiert, reduziert sich der Fehler bei **quadratischen Elementen** etwa **viermal**, bei **linearen** nur **zweimal**.  
* Eine **Konvergenzprüfung (h-Studie)** überprüft, ob das Ergebnis unabhängig vom Netz ist.

In ANSYS kann eine solche Untersuchung mit verschiedenen Netzgrößen durchgeführt werden. Typischerweise wird dabei die **maximale Spannung oder Verschiebung** gegen die **Elementanzahl** oder die **Elementgröße** aufgetragen. Ein stabiler (konvergenter) Verlauf zeigt, dass das Ergebnis nicht mehr vom Netz abhängt.

Die folgende Abbildung zeigt beispielhaft den Zusammenhang zwischen Fehlermaß und Netzverfeinerung. In doppeltlogarithmischer Darstellung erscheinen die Kurven linear – ihre Steigung entspricht der jeweiligen **Konvergenzordnung \(p\)**.

[![Konvergenzdiagramm h-p](media/05_elementtypen_ansatzf/05_Convergence_hp.png){width=520px}](media/05_elementtypen_ansatzf/05_Convergence_hp.png "Konvergenzdiagramm h-p"){.glightbox}
<span class="bildquelle">Bildquelle [@Bielak2024]</span>

---

## Elementtypen in ANSYS

Das Prinzip der Ansatzfunktionen überträgt sich direkt auf höhere Dimensionen. Unabhängig davon, ob ein Stab, eine Fläche oder ein Volumenkörper analysiert wird – die Grundidee bleibt dieselbe: **Ansatzfunktionen** beschreiben, wie sich Verschiebungen oder andere physikalische Größen zwischen den Knotenpunkten verhalten.  

In der Finite-Elemente-Software werden diese mathematischen Funktionen über konkrete **Elementtypen** abgebildet. Je nach Dimension und Ansatzordnung ändert sich dabei die **Anzahl der Knoten** und damit die **Genauigkeit der Approximation**.

| Dimension | Beispiel-Elemente (ANSYS) | Knotenanzahl | Ansatzordnung |
| :--------- | :------------------------ | :------------ | :-------------- |
| **1D** | LINK180 | 2 | linear |
| **1D**    | BEAM188 / BEAM189         | 2 / 3        | linear / quadratisch |
| **2D** | PLANE182 / 183 | 4 / 8 | linear / quadratisch |
| **3D** | SOLID185 / 186 | 8 / 20 | linear / quadratisch |

Die Tabelle zeigt typische **Elementtypen aus ANSYS Mechanical**:  

* **LINK180** ist ein linienförmiges 1D-Element für Zug-/Druckstäbe (Zugglieder).  
* **BEAM188 / BEAM189** bilden Biegung nach Timoshenko ab und stellen den direkten Bezug zu quadratischen 1D-Ansätzen her.  
* **PLANE182** und **PLANE183** sind 2D-Flächenelemente, die ebene oder rotationssymmetrische Strukturen abbilden können.  
* **SOLID185** (linear) und **SOLID186** (quadratisch) sind 3D-Volumenelemente für den allgemeinen Festkörperzustand und unterstützen mehrere Topologien (z. B. Hexaeder, Tetraeder), abhängig von der Netzstrategie.

1D-Elemente bestehen somit aus **Liniensegmenten**, 2D-Elemente bilden **Flächen** ab, und 3D-Elemente beschreiben **Volumina**. Mit zunehmender Dimension steigt die Zahl der **Knotenpunkte und Freiheitsgrade** – und damit das Potenzial für eine genauere und realistischere Beschreibung des physikalischen Verhaltens.

[![2D- und 3D-Elementtypen](media/05_elementtypen_ansatzf/06_Elementtypen.png){width=600px}](media/05_elementtypen_ansatzf/06_Elementtypen.png "2D- und 3D-Elementtypen"){.glightbox}
<span class="bildquelle">Bildquelle[@Comsol2025]</span>

Bei jeder Dimension kann zusätzlich die **Ansatzordnung** verändert werden. Linear bedeutet, dass die physikalischen Größen zwischen den Knoten **geradlinig** verlaufen. Quadratische und kubische Elemente besitzen **Mittenknoten**, wodurch sich die Form innerhalb eines Elements **gekrümmt** darstellen lässt – ein entscheidender Vorteil bei runden oder komplexen Geometrien.  

Die folgende Abbildung zeigt ein **halbkreisförmiges Gebiet**, das mit unterschiedlichen geometrischen Ansatzordnungen diskretisiert wurde. Je höher die Ordnung, desto besser folgt die Netzgeometrie der tatsächlichen Rundung: lineare Elemente bilden den Kreis nur grob ab, während quadratische und kubische Elemente die Kontur deutlich glatter wiedergeben. Die blauen Punkte kennzeichnen die Knotenpositionen.

[![Einfluss der Ansatzordnung auf die Geometrie-Approximation](media/05_elementtypen_ansatzf/07_Elementtypen_COMSOL_OrderEffect.png){width=700px}](media/05_elementtypen_ansatzf/07_Elementtypen_COMSOL_OrderEffect.png "Einfluss der Ansatzordnung auf die Geometrie-Approximation"){.glightbox}
<span class="bildquelle">Bildquelle[@Comsol2025]</span>

---
!!! Note "Zusammenfassung"
    Die Kombination aus **Elementtyp (1D–3D)** und **Ansatzordnung (linear–quadratisch)** bestimmt also, *wie fein* und *wie realistisch* ein physikalischer Zusammenhang abgebildet werden kann.  
    In der Praxis wählt man den Elementtyp so, dass die Geometrie und der Belastungszustand bestmöglich beschrieben werden, mit dem Ziel, eine **präzise, aber numerisch effiziente Simulation** zu erreichen.

---

Die Wahl des passenden Elementtyps richtet sich nach Geometrie, Belastungsart und relevanter Physik. Ziel ist stets, mit minimalem Rechenaufwand eine physikalisch konsistente Beschreibung zu erreichen. Zum Beispiel reduzieren *Balken* und *Schalen* Dimensionen, *Kontakt-* und *Cohesive-Elemente* erweitern den physikalischen Geltungsbereich, *thermische* und *Feder-Elemente* koppeln zusätzliche Disziplinen.

??? note "Spezial-Elemente"

    Neben den Standard-Volumen- und Flächenelementen existiert eine Vielzahl spezialisierter Elementtypen, die bestimmte physikalische oder geometrische Besonderheiten effizient abbilden. Die folgenden Beispiele zeigen typische Vertreter in *ANSYS Mechanical*.

    ---

    **Schalenelemente**  
    * **SHELL181 / SHELL281:** dünnwandige 2D-Elemente mit Membran- und Biegeverhalten.  
      Geeignet für Bleche, Gehäuse, Rohre und Schalenstrukturen. 

    [![Schalenelemente und Krümmung](media/05_elementtypen_ansatzf/09_Shell_Elements.png){width=400px}](media/05_elementtypen_ansatzf/09_Shell_Elements.png "Schalenelemente und Krümmung"){.glightbox}  
    <span class="bildquelle">Bildquelle[@Ansys2025]</span>   

    ---

    **Kontaktelelemente**  
    * **CONTA174 / TARGE170:** modellieren Reibung, Haftung, Öffnen / Schließen.  
      Wichtig für Presssitze, Lagerungen und Montagezustände.  

    [![Kontaktelelemente](media/05_elementtypen_ansatzf/11_Contact_Elements.svg){width=550px}](media/05_elementtypen_ansatzf/11_Contact_Elements.svg "Kontaktelelemente"){.glightbox}  
    <span class="bildquelle">Bildquelle[@Ansys2025]</span>  

    ---

    **Cohesive- und Interface-Elemente**  
    * **INTER205:** Modellierung von Klebverbindungen, Laminaten, Delamination.  
      Erlaubt schrittweises Versagen durch Schädigungsgesetze.  

    ---

    **Feder-, Lager- und Zusatz-Elemente**  
    [![Federn und Lager](media/05_elementtypen_ansatzf/13_Spring_Elements.svg){width=500px}](media/05_elementtypen_ansatzf/13_Spring_Elements.svg "Federn und Lager"){.glightbox}  
    <span class="bildquelle">Bildquelle[@Ansys2025]</span>  

    * **COMBIN14:** lineare Feder / Dämpfer zwischen Knoten  
    * **MPC184:** kinematische Kopplungen  
    * **MASS21:** konzentrierte Masse  

    ---

    **Thermische Elemente**  

    * **SOLID70 / SOLID90:** stationäre / transiente Wärmeleitung  
    * **SURF152:** Wärmeaustausch über Oberflächen  

## Aufgabenstellung Zugstab mit Querschnittsänderung

Untersucht wird der Einfluss der **Elementordnung** und der **Netzauflösung** auf die Ergebnisqualität einer FEM-Berechnung. Als Beispiel dient der **Zugstab mit kreisförmigem Übergang** (nach Schier[@Schier2023]).  

Geometrie und Randbedingungen:  

* verjüngter Rundstab mit kreisförmigem Übergang  
* Anfangsdurchmesser \( D = 34{,}8\,\text{mm} \)  
* Enddurchmesser \( d = 8\,\text{mm} \)  
* Übergangslänge \( L = 50\,\text{mm} \)  
* Übergangsradius \( R = 100\,\text{mm} \)  
* axiale Zugkraft \( F = 10\,\text{kN} \)  
* Material: *Aluminiumlegierung* (aus ANSYS-Bibliothek)  
* Geometriedatei: [zugstab.stp](media/05_elementtypen_ansatzf/zugstab.stp)

[![Zugstab mit kreisförmigem Übergang nach Schier](media/05_elementtypen_ansatzf/zugstab.svg){width=600px}](media/05_elementtypen_ansatzf/zugstab.svg "Zugstab mit kreisförmigem Übergang nach Schier"){.glightbox}

**Bearbeiten Sie folgende Punkte:**

* Erzeugen Sie mehrere Netzvarianten mit unterschiedlicher **Netzauflösung**.  
* Vergleichen Sie die Ergebnisse für **lineare** (SOLID185) und **quadratische** (SOLID186) Volumenelemente.  
* Bewerten Sie die **Netzqualität** im Übergangsbereich.  
* Leiten Sie aus den Ergebnissen das **Konvergenzverhalten** ab und diskutieren Sie den Einfluss der Ansatzfunktionen.  
* Vergleichen Sie Ihre Ergebnisse mit der **analytischen Lösung** (maximale Spannung und maximale Verschiebung).

Ziel ist der Vergleich von **linearen** und **quadratischen Volumenelementen** bei schrittweiser Verfeinerung der Netzauflösung sowie die Bewertung der **Netzqualität** im Übergangsbereich.  
Besonderes Augenmerk liegt auf der Wirkung der **Ansatzfunktionen** und dem daraus resultierenden **Konvergenzverhalten**.

## Analytische Lösung

Die analytische Lösung beschreibt den Zusammenhang zwischen **Zugkraft**, **Querschnittsfläche** und **Verschiebung** entlang der Stablänge. Ausgehend von der linearen Elastizität gilt:

\[
\sigma(x) = \frac{F}{A(x)}, \quad \varepsilon(x) = \frac{\sigma(x)}{E}, \quad \frac{du}{dx} = \varepsilon(x)
\]

Damit ergibt sich die Verschiebung \(u(x)\) aus der Integration über die Stablänge:

\[
u(x) = \int_0^x \frac{F}{E \, A(x)} \, dx
\]

Für den Zugstab mit kreisförmigem Übergang wird die Querschnittsfläche \(A(x)\) näherungsweise beschrieben durch[@Schier2023]

\[
A(x) = 857 \, e^{-0{,}062x}
\]

mit \(x\) in mm und \(A(x)\) in mm². Durch Integration ergibt sich die Verschiebungsverteilung:

\[
u(x) = \frac{F}{857 \, E \, 0{,}062} \left( e^{0{,}062x} - 1 \right)
\]

und damit die ortsabhängige Spannung:

\[
\sigma(x) = \frac{F}{A(x)} = \frac{F}{857} \, e^{0{,}062x}
\]

??? note "Erläuterung zur Näherung – exakte Kreisgleichung und Integrationsaufwand"
    Für einen kreisförmigen Übergang ergibt sich der Radiusverlauf als Kreisbogen mit

    \[
    (x - x_c)^2 + \bigl(r(x) - r_c\bigr)^2 = R^2
    \quad\Rightarrow\quad
    A(x) = \pi \Bigl[r_c \mp \sqrt{R^2 - (x - x_c)^2}\Bigr]^2 .
    \]

    Dabei bezeichnet  
    * \(R\): den **Übergangsradius**, also den Radius des Kreisbogens, der den Querschnittsübergang beschreibt,  
    * \(x_c\): die **horizontale Lage** des Kreismittelpunkts,  
    * \(r_c\): die **vertikale Lage** des Kreismittelpunkts (bezieht sich auf den Radius des Stabs).  

    Die Verschiebung ergibt sich zu

    \[
    u(L)=\int_0^{L}\frac{F}{E\,A(x)}\,dx
    =\frac{F}{E\pi}\int_0^{L}\frac{dx}{\Bigl[r_c \mp \sqrt{R^2-(x-x_c)^2}\Bigr]^2}\, .
    \]

    Dieses Integral ist analytisch **nur schwer lösbar**, da trigonometrische Substitutionen und Randwertanpassungen erforderlich sind.  
    Hier wird deshalb eine **exponentielle Näherung** \(A(x)=857\,e^{-0{,}062x}\) verwendet.  
    Sie vereinfacht die Integration erheblich, ohne den physikalischen Verlauf wesentlich zu verändern.

**Eingesetzte Werte:**

* Zugkraft \( F = 10\,000\,\text{N} \)  
* Elastizitätsmodul Aluminium \( E = 70\,000\,\text{MPa} \)  
* Stablänge \( L = 50\,\text{mm} \)

Damit ergibt sich die maximale Verschiebung am freien Ende:

\[
u(L) = \frac{10\,000}{857 \cdot 70\,000 \cdot 0{,}062} \left( e^{0{,}062 \cdot 50} - 1 \right)
\]

\[
u(L) \approx 0{,}057\,\text{mm}
\]

Die maximale Spannung im kleinsten Querschnitt mit \( A_\text{min} = 50{,}3\,\text{mm}^2 \) beträgt:

\[
\sigma_\text{max} = \frac{F}{A_\text{min}} = \frac{10\,000}{50{,}3} \approx 199\,\text{MPa}
\]

!!! Note "Kontinuierliche vs. diskrete Beschreibung"
    Die analytische Lösung beschreibt den **kontinuierlichen Verlauf** der Verschiebung entlang der Stablänge. In der Finite-Elemente-Methode wird derselbe Zusammenhang **diskretisiert**, indem der Stab in Teilbereiche zerlegt wird. Innerhalb jedes Elements erfolgt die Approximation des Verschiebungsverlaufs über Ansatzfunktionen, sodass die Integration über das Gebiet schrittweise (lokal) erfolgt. Bei hinreichend feiner Netzauflösung konvergiert das FEM-Ergebnis gegen die analytische Lösung.

## Umsetzung in ANSYS

### Projektverwaltung und Geometrieimport

Zunächst in *Workbench* eine neue *statisch strukturelle* (bzw. *statisch mechanische*) Analyse anlegen.  

In *Geometrie* über *Rechtsklick → Geometrie importieren → Durchsuchen* die Datei [zugstab.stp](media/05_elementtypen_ansatzf/zugstab.stp) importieren.  

### Materialzuweisung

Die Materialverwaltung in *ANSYS Workbench* dient zur Auswahl und Prüfung der Werkstoffeigenschaften, die später in der Analyse verwendet werden. Sie ist über den Projektbaum unter *Technische Daten* (per Doppelklick öffnen) erreichbar und besteht aus mehreren Bereichen mit klarer Struktur:

[![Materialauswahl in Technische Daten](media/05_elementtypen_ansatzf/14_technische_daten.png){width=700px}](media/05_elementtypen_ansatzf/14_technische_daten.png "Materialauswahl in Technische Daten"){.glightbox}

* **Materialübersicht (Mitte/oben):**  
  Zeigt die im aktuellen Projekt verfügbaren Materialien an.  
  Standardmäßig ist nur *Baustahl* enthalten.  
  Hier könnte ein neues Material angelegt werden.  

* **Toolbox (links):**  
  Enthält die verfügbaren Materialkategorien, z. B. *Festigkeit*, *Thermisch*, *Viskoelastisch* oder *Lebensdauer*.  
  Die einzelnen Eigenschaften können per Doppelklick dem aktiven Material hinzugefügt werden.

* **Eigenschaftenbereich (unten):**  
  Zeigt die Kennwerte des aktuell ausgewählten Materials.  
  Jede Zeile enthält eine Bezeichnung, einen Zahlenwert und eine Einheit.  
  Hier können Dichte, Elastizitätsmodul, Querkontraktionszahl oder Streckgrenzen geprüft und angepasst werden.
  
* **Eigenschaftenbereich (links):**  
  Zeigt die Kennwerte des aktuell ausgewählten Materials in Form von Grafiken.  

Um auf weitere Materialien zuzugreifen, kann über den Reiter *Quellen für Technische Daten* die zentrale Materialdatenbank geöffnet werden.  

[![Quelle für Technische Daten](media/05_elementtypen_ansatzf/15_Quelle_technische_Daten.png){width=700px}](media/05_elementtypen_ansatzf/15_Quelle_technische_Daten.png "Quelle für Technische Daten"){.glightbox}

* **Bereich oben/mittig:** Auswahl der verfügbaren Datenquellen (z. B. *Standardmaterialien* oder *ANSYS GRANTA*).  
* **Bereich Mitte/mittig:** Anzeige der Materialien in der gewählten Datenbank.  
  Über das gelbe *Pluszeichen* lässt sich das gewünschte Material in das aktuelle Projekt übernehmen. Alternativ: per Rechtsklick.  
* **Bereich unten/mittig:** Darstellung der Materialeigenschaften mit Werten und Einheiten.  

Hier ist unter anderem in den Standardmaterialien eine *Aluminiumlegierung* zu finden, die folgende Daten besitzt.  

| Eigenschaft | Symbol | Wert |
| :----------- | :------ | :---- |
| Elastizitätsmodul | \( E \) | 70 000 N/mm² |
| Querkontraktionszahl | \( \nu \) | 0,33 |
| Dichte | \( \rho \) | 2,7 kg/dm³ |

[![Auswahl Aluminiumlegierung](media/05_elementtypen_ansatzf/16_Auswahl_Aluminiumlegierung.png){width=700px}](media/05_elementtypen_ansatzf/16_Auswahl_Aluminiumlegierung.png "Auswahl Aluminiumlegierung"){.glightbox}

Nach dem Hinzufügen des gewünschten Materials aus der Datenbank zurück in die *Projektübersicht* wechseln (Reiter *Projekt*). Dort per Doppelklick auf *Modell* wechseln, um das Setup im mechanischen Editor zu öffnen.  

Im Abschnitt *Geometrie* des Strukturbaums lässt sich  prüfen, ob der Körper korrekt erkannt wurde. Dort kann dem Bauteil das zuvor gewählte Material zugewiesen werden. Die Zuweisung erfolgt über das Feld *Material* im *Details*-Fenster.

[![Materialzuweisung im Strukturbaum unter Geometrie](media/05_elementtypen_ansatzf/17_material_zuweisung.png){width=700px}](media/05_elementtypen_ansatzf/17_material_zuweisung.png "Materialzuweisung im Strukturbaum unter Geometrie"){.glightbox}

In der Projektübersicht werden unter *Material* alle aktuell im Projekt verfügbaren Werkstoffe angezeigt, einschließlich der hinzugefügten *Aluminiumlegierung*.

[![Materialien im Projekt unter Material](media/05_elementtypen_ansatzf/18_materialien_im_projekt.png){width=700px}](media/05_elementtypen_ansatzf/18_materialien_im_projekt.png "Materialien im Projekt unter Material"){.glightbox}

### Netzgenerierung

### Randbedingungen

### Analyseeinstellungen

### Auswertung

## Element/Ansatz/Netzeinfluss

Erzeugung verschiedener Netzstufen (h-Studie) und Wahl der Elementordnung:  

* lineare Elemente → SOLID185  
* quadratische Elemente → SOLID186  

Konvergenz wie darstellen? Da braucht es noch einen Vorschlag zum Vorgehen...

## Diskussion der Ergebnisse

Berechnung der Varianten, Auswertung von  

* Verschiebung \(u_x\)  
* Normalspannung \(\sigma_{xx}\)  
* Vergleich der Spannungskonturen linear/quadratisch  
* ggf. Pfadauswertung und Export der Ergebnisse  

Darstellung der Ergebnisse in Tabellen- oder Plotform:  
Konvergenzverhalten, Fehler vs. h, Einfluss der Elementordnung.  
Einbindung interaktiver Plotly-Diagramme.

## (Netzqualität)

Demonstration verzerrter Elemente und ihrer Auswirkung auf Spannungsverteilung.  
Abbildung mit Lightbox-Zoom und Quellenangabe.

[![Under Construction](media/under_construction.png){width=600px}](media/under_construction.png "Under Construction"){.glightbox}
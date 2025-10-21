<!-- 
Inhalt: 

1. Theorie Konvergenz Divergenz  
2. Theorie Stabmathematik  
3. Theorie Kerbwirkung  
4. Aufgabe Kerbwirkung  
5. Umsetzung ANSYS, Verfeinerung, Konvergenz, lokale Ergebnisse  
-->

# Modul 2 Kerbwirkung

[![Under Construction mit FEM-Bezug](media/under_construction.png){width=700px}](media/under_construction.png "Under Construction"){.glightbox} 

## Lernziele

??? note "FIXME: Lernziele definieren"
    Für diesen Abschnitt müssen die **Lernziele** noch formuliert werden.  
    Vorschlag für den Platzhalter:

    * Verständnis der grundlegenden mathematischen Prinzipien der Finite-Elemente-Methode  
    * Herleitung und Bedeutung der Elementsteifigkeitsmatrix  
    * Zusammenhang zwischen Kräften, Verschiebungen und Steifigkeiten in Matrixform  
    * Anwendung einfacher analytischer Beispiele (1- und 2-Element-Systeme)  

## Mathematische Grundlagen zur FEM

Die FEM ist ein numerisches Verfahren zur näherungsweisen Lösung kontinuierlicher Feldprobleme. Dieses Kapitel erläutert die grundlegenden mathematischen Zusammenhänge der Methode. Betrachtet man die FEM als konstruktionsbegleitendes Werkzeug, spielt das Detailwissen zur Aufbereitung und Auswertung einer Simulation eine wichtige Rolle. Noch entscheidender ist jedoch das physikalische Verständnis des zugrunde liegenden Problems[@Gebhardt2018].

Zur vollständigen Beschreibung eines physikalischen Problems gehören:

* die **Geometrie** zur Definition des Gebiets  
* die **Feldgleichungen** im Gebiet  
* die **Randbedingungen**[@Merkel2020]  

Die folgenden Abschnitte zeigen das Vorgehen anhand einfacher Beispiele.

---

### Berechnung mit einem Element

Ein einzelnes Stab-Element wird durch zwei äußere Kräfte belastet. Es wirken die Kräfte _F₁_ und _F₂_, die Längenänderungen _u₁_ bzw. _u₂_ verursachen. Der Stab habe die Länge _l_. Die Knoten begrenzen das Element und definieren dessen Bewegungsmöglichkeiten, also die Knotenfreiheitsgrade.

[![Stab-Element](media/04_kerbwirkung/Stab-Element_1.png){width=700px}](media/04_kerbwirkung/Stab-Element_1.png "Stab-Element"){.glightbox}  

#### Finite Grundgleichung

\[
F = c \cdot \Delta u
\]

Die Gesamtkraft _F_ ergibt sich als Produkt aus der Federsteifigkeit _c_ und der Längenänderung \(\Delta u = u_1 - u_2\).  

Nach dem Hooke’schen Gesetz gilt:

\[
\sigma = \varepsilon \cdot E \quad \text{und} \quad \varepsilon = \frac{\Delta l}{l}
\]

Mit \(\sigma_z = \frac{F_z}{A}\) folgt für die Federsteifigkeit:

\[
c = \frac{E \cdot A}{l}
\]

Damit gilt: Das Produkt aus Elastizitätsmodul _E_ und Querschnittsfläche _A_ geteilt durch die Länge _l_ ergibt die Federsteifigkeit _c_.

#### Kräftegleichgewicht

\[
\begin{aligned}
F_1 &= c \cdot (u_1 - u_2) = c \cdot u_1 - c \cdot u_2 \\
F_2 &= c \cdot (-u_1 + u_2) = -c \cdot u_1 + c \cdot u_2
\end{aligned}
\]

In Matrixform:

$$
\begin{bmatrix}
F_1 \\[4pt]
F_2
\end{bmatrix}
=
c
\begin{bmatrix}
1 & -1 \\[4pt]
-1 & 1
\end{bmatrix}
\begin{bmatrix}
u_1 \\[4pt]
u_2
\end{bmatrix}
$$

Für eine feste Einspannung am linken Ende gilt \(u_1 = 0\). Damit vereinfacht sich das System zu:

\[
F_2 = c \cdot u_2
\]

und es folgt:

\[
u_2 = \frac{F_2}{c}
\]

---

### Berechnung mit zwei Elementen

Das Beispiel wird  auf zwei Stab-Elemente mit einer Einspannung erweitert.

[![Stab-Element](media/04_kerbwirkung/Stab-Element_2.png){width=700px}](media/04_kerbwirkung/Stab-Element_2.png "Stab-Element"){.glightbox}  

Gegeben seien:

* \(u_1 = 0\)
* \(c_1, c_2\)
* \(F_2 = 2F\)
* \(F_3 = -F\)

Gesucht sind:

* \(F_1\) (Lagerreaktion)
* \(u_2, u_3\)

#### Kräftematrix

$$
\vec{f} =
\begin{bmatrix}
F_1 \\[4pt]
F_2 \\[4pt]
F_3
\end{bmatrix}
=
\begin{bmatrix}
F_1 \\[4pt]
2F \\[4pt]
- F
\end{bmatrix}
$$

#### Gesamtsteifigkeitsmatrix

Die Elementsteifigkeitsmatrix beschreibt die Steifigkeit eines Elements in Abhängigkeit von Länge, Querschnitt und Materialparametern. Die Gesamtsteifigkeitsmatrix ergibt sich als Summe aller Elementsteifigkeitsmatrizen:

\[
k = \sum_{i=1}^{z} k_i
\]

Für zwei Stäbe:

\[
k =
\begin{bmatrix}
c_1 & -c_1 & 0 \\[4pt]
-c_1 & c_1 + c_2 & -c_2 \\[4pt]
0 & -c_2 & c_2
\end{bmatrix}
\]

Bei identischen Steifigkeiten \(c_1 = c_2 = c\):

\[
k =
\begin{bmatrix}
c & -c & 0 \\[4pt]
-c & 2c & -c \\[4pt]
0 & -c & c
\end{bmatrix}
\]

#### Grundgleichung in vektorieller Schreibweise

Die Grundgleichung in vektorieller Schreibweise lautet:

\[
\vec{f} = k \cdot \vec{d}
\]

Das Matrix-Vektor-Produkt aus dem Vektor \(\vec{d}\) (die Verschiebungen) und der Elementsteifigkeitsmatrix \(k\) (die Steifigkeiten) ergibt die Kräftematrix \(\vec{f}\). Analog zum ersten Beispiel wird auch hier ein Kräftegleichgewicht gebildet, das unmittelbar in die Matrixschreibweise überführt wird:

$$
\begin{bmatrix}
F_1 \\[4pt]
F_2 \\[4pt]
F_3
\end{bmatrix}
=
\begin{bmatrix}
c & -c & 0 \\[4pt]
-c & 2c & -c \\[4pt]
0 & -c & c
\end{bmatrix}
\cdot
\begin{bmatrix}
u_1 \\[4pt]
u_2 \\[4pt]
u_3
\end{bmatrix}
$$

Wie oben angegeben, wird \(u_1 = 0\) gesetzt. Es folgt:

$$
\begin{bmatrix}
F_1 \\[4pt]
F_2 \\[4pt]
F_3
\end{bmatrix}
=
\begin{bmatrix}
\cancel{c} & \cancel{-c} & 0 \\[4pt]
\cancel{-c} & 2c & -c \\[4pt]
0 & -c & c
\end{bmatrix}
\cdot
\begin{bmatrix}
\cancel{u_1} \\[4pt]
u_2 \\[4pt]
u_3
\end{bmatrix}
$$

und demnach:

$$
\begin{bmatrix}
F_2 \\[4pt]
F_3
\end{bmatrix}
=
\begin{bmatrix}
2F \\[4pt]
- F
\end{bmatrix}
=
\begin{bmatrix}
2c & -c \\[4pt]
-c & c
\end{bmatrix}
\cdot
\begin{bmatrix}
u_2 \\[4pt]
u_3
\end{bmatrix}
$$

Die Matrizen-Darstellung wird anschließend in ein lineares Gleichungssystem überführt, das mittels Additionsverfahren gelöst werden kann:

\[
\begin{aligned}
\text{I:} & \quad 2F = 2c \cdot u_2 - c \cdot u_3 \\[4pt]
\text{II:} & \quad -F = -c \cdot u_2 + c \cdot u_3
\end{aligned}
\]

Aus Addition folgt:

\[
u_2 = \frac{F}{c}, \quad u_3 = 0
\]

Überführt in die vektorielle Schreibweise ist

$$
\vec{d} =
\begin{bmatrix}
u_2 \\[4pt]
u_3
\end{bmatrix}
=
\frac{F}{c}
\cdot
\begin{bmatrix}
1 \\[4pt]
0
\end{bmatrix}.
$$

Durch Einsetzen in die eliminierte Gleichung

\[
F_1 =
\begin{bmatrix}
c & -c & 0
\end{bmatrix}
\cdot
\begin{bmatrix}
u_1 \\[4pt]
u_2 \\[4pt]
u_3
\end{bmatrix}
\]

und für die Lagerreaktionskraft:

\[
F_1 = -c \cdot u_2 = -c \cdot \frac{F}{c}
\]

\[
F_1 = -F
\]

### Hinweis zur praktischen Berechnung

Die hier gezeigten Beispiele sind analytisch lösbar. In realen Anwendungen entstehen jedoch sehr große Gleichungssysteme (oft mehrere Millionen Knoten), die nur näherungsweise und iterativ gelöst werden können. Etablierte Näherungsverfahren sind etwa die **Ritz-** und **Galerkin-Methoden**[@Betten2003].

---

## Konvergenz und Divergenz

## Aufgabe Kerbwirkung  

## Theorie Kerbwirkung  

## Umsetzung in ANSYS

### 1. Projektverwaltung und Geometrieimport

### 2. Materialzuweisung

### 3. Netzgenerierung

### 4. Randbedingungen

### 5. Auswertung

## Diskussion der Ergebnisse

### Abgleich mit analytischer Lösung

<!-- 
vielleicht auch erst nach dem Netzeinfluss
-->

### Netzeinfluss

<!-- 
hier dann Diskussion Rechenzeit, Darstellung in Tabelle
Konvergenz
Reduktion der Rechenzeit
-->
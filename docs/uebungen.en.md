# Exercises

The following exercises serve to **deepen the knowledge acquired in the modules**. All FE analyses must produce results whose magnitude is as independent as possible from the mesh influence, every numerical value used in Excel calculations must include its unit, and all analytical solutions must be created in Excel with regard to the exam.

## Steel ruler

The geometry of a steel ruler is provided in the file [lineal.stp](media/uebungen/lineal.stp). It is subjected to a tensile force \(F\) acting along its longitudinal direction. The material is structural steel according to the ANSYS database, but with a **Young’s modulus of 210,000 N/mm²** and a **yield strength of 300 MPa**.

### Steel ruler task a)

Use Excel to calculate the tensile force at which no plastic deformation occurs yet. What is the resulting change in length at this force? Hooke’s law \(\sigma = \varepsilon \cdot E\) applies.

### Steel ruler task b)

Verify your results for force or stress and deformation with an ANSYS calculation. Choose boundary conditions such that lateral contraction of the component is not constrained at any location.

---

## Hold-down device

The illustrated hold-down device is provided in the file [niederhalter.stp](media/uebungen/niederhalter.stp). It is subjected to compression and fixed according to the figure. Its cross-sectional area in the small cross-section is 300 mm².

[![Boundary conditions for the static structural analysis of the hold-down device](media/uebungen/niederhalter.png){width=350px}](media/uebungen/niederhalter.png "Boundary conditions for the static structural analysis of the hold-down device"){.glightbox}

Determine the notch stress factor for the transition between the small and large cross-section. Use ANSYS and Excel for this purpose. The relation \(\sigma_k = \sigma_n \cdot \alpha_k\) applies.

---

## Base Plate, Bending

The base plate shown in the figure is given in the file [grundplatte.stp](media/uebungen/grundplatte.stp). The material is structural steel according to the ANSYS material database.

[![Base plate component, bending.](media/uebungen/grundplatte.png){width=450px}](media/uebungen/grundplatte.png "Base plate component, bending."){.glightbox}

### Base Plate, Bending Subtask a)

The base plate is fully fixed on its underside (in the figure, this is the non visible surface at the bottom). In addition, a force **F = 100 kN** acts on the surface marked in red in the figure.

Where is the most highly stressed location in the component? To answer this, implement a model in ANSYS that serves purely to determine the critical cross section in a global analysis. Document your result in Excel (for example by means of a screenshot).

### Base Plate, Bending Subtask b)

For the region of the component identified in a), generate a focused result for the equivalent stress and determine a solution that is as well approximated as possible using adaptive meshing (change < 10 %).

---

## Base Plate, Tension

The base plate shown in the figure is given in the file [grundplatte.stp](media/uebungen/grundplatte.stp). The material is structural steel according to the ANSYS material database. In this case, the base plate is subjected to tensile loading by the force **F = 750 kN**, see the figure on the left. The base plate is fully fixed on its underside (in the figure, this is the non visible surface at the bottom).

[![Base plate component, tension.](media/uebungen/grundplatte_2_3.png){width=700px}](media/uebungen/grundplatte_2_3.png "Base plate component, bending."){.glightbox}

### Base Plate, Tension Subtask a)

Estimate in Excel the change in length of the cylindrical cross section (marked in Figure 2 on the right). Hooke’s law applies

\[
\sigma = \varepsilon \cdot E
\]

### Base Plate, Tension Subtask b)

Implement the base plate under tensile loading in ANSYS. The force acts on the surfaces marked in red as shown in the figure.

Generate a result that shows the deformation of the surface marked in green, see the figure on the right.

### Base Plate, Tension Subtask c)

Between the deformation obtained in subtask a) and that obtained in subtask b), a difference of a few 1/1000 mm can be observed. Explain the reasons for this deviation in Excel.

---

## Table

Given is the video of a table shown below as well as the associated geometry [tisch.stp](media/uebungen/tisch.stp). The video shows a table that, after a short excitation, oscillates with large amplitude and over a long duration. Such behaviour is undesirable for use in a dining room.

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="/fem-course/media/08_modalanalyse/tisch.mp4" type="video/mp4">
  Your browser does not support this video.
</video>
<!-- markdownlint-enable MD033 -->

### Table task a)

Which two parameters could be modified to mitigate this problem? The question is to be answered from a machine dynamics perspective. The two options are to be stated in Excel.

**Note:** No calculations are required.  

### Table task b)

Perform a modal analysis of the table in ANSYS that allows the phenomenon shown in the video to be captured numerically. Choose the boundary conditions (e.g. constraints, contacts) appropriately and calculate the first **eight** eigenmodes. For the entire assembly, initially use the material *Structural Steel* from the ANSYS material database.

### Table task c)

Subsequently extend the implemented model by applying differentiated material assignments. The materials are to be defined as follows:

* Frame: Aluminium  
  Density 2.7 kg/dm³, Young’s modulus 70 GPa, Poisson’s ratio ν = 0.35

* Table top: Oak  
  Density 0.94 kg/dm³, Young’s modulus 23 GPa, Poisson’s ratio ν = 0.4

What influence does the choice of material have on the eigenfrequencies? Document the results in Excel.

### Table task d)

Under real operating conditions, the table is not always empty. Therefore, extend the model by an additional mass that loads the table through an extensive selection of food and drinks. The type of implementation and the chosen parameters are to be selected appropriately.

---

## Street lamp

Given is the video of a street lamp.

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="/fem-course/media/08_modalanalyse/lampe.mp4" type="video/mp4">
  Your browser does not support this video.
</video>
<!-- markdownlint-enable MD033 -->

### Street lamp task a)

Briefly describe, in bullet points, which phenomenon can be observed. Use Excel for this.  

### Street lamp task b)

Using the geometry [lampe.stp](media/uebungen/lampe.stp), create an analysis in ANSYS that at least reproduces the phenomenon in a basic manner. Material: *Structural Steel* (from the ANSYS database).  

### Street lamp task c)

Which of the eigenfrequencies you calculated can be observed in the video? State the mode in Excel.  
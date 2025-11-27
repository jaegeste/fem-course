# Exercises

The following exercises serve to **deepen the knowledge acquired in the modules**. All FE analyses must produce results whose magnitude is as independent as possible from the mesh influence, every numerical value used in Excel calculations must include its unit, and all analytical solutions must be created in Excel with regard to the exam.

## Steel ruler

The geometry of a steel ruler is provided in the file [lineal.stp](media/uebungen/lineal.stp). It is subjected to a tensile force \(F\) acting along its longitudinal direction. The material is structural steel according to the ANSYS database, but with a **Young’s modulus of 210,000 N/mm²** and a **yield strength of 300 MPa**.

Use Excel to calculate the tensile force at which no plastic deformation occurs yet. What is the resulting change in length at this force? Hooke’s law \(\sigma = \varepsilon \cdot E\) applies.

Verify your results for force or stress and deformation with an ANSYS calculation. Choose boundary conditions such that lateral contraction of the component is not constrained at any location.

## Hold-down device

The illustrated hold-down device is provided in the file [niederhalter.stp](media/uebungen/niederhalter.stp). It is subjected to compression and fixed according to the figure.

[![Boundary conditions for the static structural analysis of the hold-down device](media/uebungen/niederhalter.png){width=350px}](media/uebungen/niederhalter.png "Boundary conditions for the static structural analysis of the hold-down device"){.glightbox}

Determine the notch stress factor for the transition between the small and large cross-section. Use ANSYS and Excel for this purpose. The relation \(\sigma_k = \sigma_n \cdot \alpha_k\) applies.

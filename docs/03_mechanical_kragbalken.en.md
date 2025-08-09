# ANSYS Mechanical and Beam Exercise



## Beam Exercise

### Task

For the cantilever beam with square cross-section shown in the figure, calculate the maximum stress and deformation using ANSYS Mechanical.  

* Length: \( L = 150 \,\text{mm} \)  
* Edge length: \( a = 12 \,\text{mm} \)  
* Force: \( F = 7{.}500 \,\text{N} \)  
* Material: Structural steel with yield strength \( R_e = 250 \,\text{N/mm}^2 \)  

Download the file [kragbalken.stp](media/03_mechanical_kragbalken/kragbalken.stp) and import it into ANSYS Workbench.

???+ danger "FIXME"
    rename file  

Compare your result with the analytical solution and discuss any deviations.  

[![Cantilever beam under tension](media/03_mechanical_kragbalken/kragbalken_zug.svg){width=500px}](media/03_mechanical_kragbalken/kragbalken_zug.svg "Cantilever beam under tension"){.glightbox}  

---

### Theoretical Background

#### Hooke’s Law

The calculation is based on **Hooke’s Law**. It describes the linear relationship between stress and strain in the elastic range of a material.

\[
\sigma = \frac{F}{A},  
\quad \varepsilon = \frac{\Delta l}{l},  
\quad E = \frac{\sigma}{\varepsilon}
\]

with  

* \( \sigma \): normal stress  
* \( F \): applied force  
* \( A = a^2 \): cross-sectional area of the beam  
* \( \varepsilon \): strain in the direction of loading  
* \( E \): modulus of elasticity (material constant)  

The **elongation** is calculated as:

\[
\Delta l = \frac{F \cdot l}{A \cdot E}
\]

---

#### Lateral Contraction

???+ danger "FIXME"
    Insert a schematic figure showing the relationship between longitudinal strain and lateral contraction.

In addition to the strain in the loading direction, a lateral contraction occurs. It is described by the **Poisson’s ratio** (\(\nu\)).  
It defines the ratio of transverse strain to longitudinal strain:

\[
\nu \;=\; - \frac{\varepsilon_q}{\varepsilon_l}
\]

with  

\[
\varepsilon_l = \frac{\Delta l}{l},  
\qquad
\varepsilon_q = \frac{\Delta a}{a}
\]

* \( \varepsilon_l \): longitudinal strain  
* \( \varepsilon_q \): transverse strain  
* \( \Delta l \): elongation  
* \( \Delta a \): change in cross-section (e.g. edge length for a square beam)  
* \( l, a \): original length and cross-section dimension  

Thus:

\[
\varepsilon_q = -\nu \cdot \varepsilon_l
\]

For steel, \(\nu \approx 0{,}3\).  
This means that with a longitudinal strain of 1 %, the cross-section shortens transversely by about 0.3 %.  

---

#### Stress-Strain Diagram

Hooke’s Law applies only in the **linear elastic range** of a material. This range appears as a straight line in the stress-strain diagram.  

The first diagram shows the behavior of a material **without a distinct yield point**. After the linear increase up to the proof stress, the curve gradually transitions into the plastic range. This is typical for many non-ferrous metals such as aluminum:

[![Stress-strain curve without distinct yield point](media/03_mechanical_kragbalken/Spgs-Dehnungs-Kurve_Dehngrenze.en.svg){width=450}](media/03_mechanical_kragbalken/Spgs-Dehnungs-Kurve_Dehngrenze.en.svg "Stress-strain curve without distinct yield point"){.glightbox}  
<span class="bildquelle">Image source based on[@Wikipedia2023]</span>

The second diagram shows the behavior of a material **with a distinct yield point**, as is typical for structural steel. The linear range ends abruptly, followed by a plateau with nearly constant stress, before the plastic increase begins:

[![Stress-strain curve with distinct yield point](media/03_mechanical_kragbalken/Spgs-Dehnungs-Kurve_Streckgrenze.en.svg){width=450}](media/03_mechanical_kragbalken/Spgs-Dehnungs-Kurve_Streckgrenze.en.svg "Stress-strain curve with distinct yield point"){.glightbox}  
<span class="bildquelle">Image source based on[@Wikipedia2023]</span>

For the calculation of the cantilever beam in this exercise, the load lies within the **elastic range**. Hooke’s Law is therefore sufficient.

---

### Implementation in ANSYS Mechanical

#### 1. Geometry Import

Load the file [kragbalken.stp](media/03_mechanical_kragbalken/kragbalken.stp) into ANSYS Workbench.  

???+ danger "FIXME"
    rename file  

???+ danger "FIXME"
    Screenshot?

#### 2. Material Definition  

???+ danger "FIXME"
    Material definition ist glaube ich nicht richtig übersetzt. Es muss Materialzuweisung heißen

By default, ANSYS assigns structural steel as the material. Before further use, the respective material properties should be verified to ensure suitability for the intended application.

???+ danger "FIXME"
    Screenshot

#### 3. Meshing

The part is divided into finite elements connected via nodes (**meshing**).  

???+ danger "FIXME"
    vgl. deutsche Version. Ergänze wie wird das Netz erstellt

* Start with a **global automatic mesh**.  
* Then vary the **element size** to study **mesh influence**.  
* Convergence is confirmed if results remain nearly unchanged with further refinement.  

Rules of thumb:  

* Coarse mesh → low computation time, possibly inaccurate.  
* Fine mesh → high accuracy, but longer computation time.  
* Optimal mesh → sufficiently accurate without excessive elements.  

???+ danger "FIXME"
    Screenshot

#### 4. Boundary Conditions

Two boundary conditions are required:

* **Fixed support** at the left end  
* **Tensile force** \( F \) at the right face  

The fixed support is modeled in ANSYS by blocking **all degrees of freedom** of the selected face. Concretely: translations in \(x\), \(y\), and \(z\) directions as well as rotations about all three axes are prevented. Physically, this represents the connection of the beam to a rigid environment.  

The tensile force is applied at the right face. In ANSYS this is done either as a **surface load (pressure)** or as a **total force**, distributed evenly over the entire face. This ensures the load is not applied at a point (which would cause a singularity) but is realistically distributed.  

From an FEM perspective:

* The fixed support creates a **displacement boundary condition**:  
  Nodes cannot move → reaction forces develop.
* The tensile force creates a **load condition**:  
  Nodes experience additional external forces → leading to stresses and deformations.  

Together, the combination of **displacement-controlled** and **force-controlled** conditions forms a **closed system of equations** for the FEM solver.  

???+ note "Modeling Note"
    If the force is applied only to a small edge or a single node, unrealistically high local stresses (singularities) appear. Always use a surface to distribute the load realistically.

???+ danger "FIXME"
    Screenshots?

#### 5. Evaluation

Two results are examined in ANSYS:

* **Total deformation**  
* **von Mises stress**

The deformation shows the total displacement. ANSYS usually displays it in an exaggerated scale for visualization. The actual numerical values must be read from the results tables.  

The von Mises stress is an equivalent stress combining normal and shear stresses:

\[
\sigma_\text{vM} = \sqrt{\frac{1}{2} \left[(\sigma_x-\sigma_y)^2 + (\sigma_y-\sigma_z)^2 + (\sigma_z-\sigma_x)^2 \right] + 3(\tau_{xy}^2+\tau_{yz}^2+\tau_{zx}^2)}
\]

This value is useful for comparing with allowable stresses. For this tensile beam in the elastic range, the von Mises stress should be close to the analytical normal stress.  

Steps in ANSYS:

1. Select **total deformation** → check magnitude and plausibility.  
2. Display **von Mises stress** → compare with analytical stress.  
3. Assess the **stress distribution**.  

???+ danger "FIXME"
    Screenshot

---

### Discussion of Results

#### Comparison with Analytical Solution

Expectation: very good agreement of average stress and deformation.

Results from ANSYS...

???+ danger "FIXME"
    Add screenshots and discuss “what is observed”.

???+ danger "FIXME"
    Einheiten in Formeln ergänzen

??? note "Calculation of Δl, Δa and σ"
    For the analytical solution, the elongation Δl, the cross-section change Δa, and the normal stress σ are calculated.

    **Stress**

    \[
    \sigma = \frac{F}{A}
    \]

    With the given values:

    \[
    F = 7{.}500 \,\text{N}, \quad A = 144 \,\text{mm}^2
    \]

    \[
    \sigma = \frac{7{.}500}{144} \approx 52{,}1 \,\text{N/mm}^2
    \]

    **Elongation**

    \[
    \Delta l = \frac{F \cdot l}{A \cdot E}
    \]

    Using the given values:

    \[
    l = 150 \,\text{mm}, \quad E = 210{.}000 \,\text{N/mm}^2
    \]

    \[
    \Delta l = \frac{7{.}500 \cdot 150}{144 \cdot 210{.}000} 
            \approx 0{,}037 \,\text{mm}
    \]

    **Cross-section Change**

    Using the Poisson’s ratio \(\nu = 0{,}3\):

    \[
    \varepsilon_q = - \nu \cdot \varepsilon_l
    \]

    with  

    \[
    \varepsilon_l = \frac{\Delta l}{l} = \frac{0{,}037}{150} \approx 2{,}47 \cdot 10^{-4}
    \]

    \[
    \varepsilon_q = -0{,}3 \cdot 2{,}47 \cdot 10^{-4}
                  \approx -7{,}4 \cdot 10^{-5}
    \]

    Thus, the cross-section change is:

    \[
    \Delta a = \varepsilon_q \cdot a = -7{,}4 \cdot 10^{-5} \cdot 12
            \approx -8{,}9 \cdot 10^{-4} \,\text{mm}
    \]

    **Result:**  
    * Normal stress: approx. **52 N/mm²**  
    * Beam elongation: approx. **0.037 mm**  
    * Reduction of edge length: approx. **0.0009 mm**

#### Mesh Influence

* Coarse mesh → less accurate.  
* Fine mesh → more accurate but longer time.  
* Aim: results independent of mesh (mesh influence minimized).  

???+ danger "FIXME"
    Add screenshots. Relevant here? Divergence at the support...

#### Prevented Lateral Contraction

In reality, the beam can contract laterally.  
In the FEM model with fixed support, this **lateral contraction is locally prevented**.  
This leads to **edge stress peaks** not predicted analytically.  
→ Explains deviations near the support.

---

### Add-on: Bending Moment Instead of Force

As an alternative, a **pure bending moment** can be applied.  
This results in a **shear-free beam** with a more uniform stress field.  

* Implementation: load type “Moment” on the face.  
* Observation: smoother distribution, no singularity from force application.  

???+ danger "FIXME"
    Add screenshot: moment at face.

???+ danger "FIXME"
    belongs more to exercise beam bending

---

### Variants of Load Application

In ANSYS Mechanical, various options are available for applying loads. The choice strongly influences the stress distribution and physical plausibility.

* **Force on surface**  
  Recommended for this cantilever beam:  
  A total force evenly distributed over a face.  
  → Prevents unrealistic high stresses from point loading.  

* **Edge load**  
  Force along an edge.  
  Used when real application is along a weld seam or support edge.  
  → Note: higher stress gradients, mesh quality critical.  

* **Point load**  
  Force at a single node.  
  → Usually to be avoided, as it leads to singularities.  
  Only for special theoretical models.  

* **Moment**  
  Load type “Moment” on face or edge.  
  → Suitable for applying a constant bending moment without shear.  

* **Vectors and direction selection**  
  In ANSYS the direction of force can be chosen:  
    * global coordinate system (x, y, z)  
    * local coordinate system (part orientation)  
    * user-defined vector input  
  → Ensures the force acts in the intended direction.  

These options illustrate that the “same” load can yield very different results depending on how it is applied. Choosing the correct method is a key part of FEM modeling.

---

### Further Notes

???+ danger "FIXME"
    Add video?

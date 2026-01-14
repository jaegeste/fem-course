# Module 06 – Modal Analysis

## Learning Objectives

In this module, the following topics and competencies are addressed:

* Significance of natural frequencies and mode shapes for components and assemblies
* Derivation of fundamental relationships using simple mass spring systems
* Influence of boundary conditions and mass distribution on natural vibration behaviour
* Implementation of a modal analysis in ANSYS Mechanical
* Interpretation and evaluation of mode shapes
* Transfer to more complex assemblies with rigid and deformable parts

## Motivation and Key Questions

Vibrations occur in technical systems in many different forms. Even simple observations show that structures do not vibrate arbitrarily, but instead develop characteristic, system specific patterns. These patterns do not arise by chance, but correspond to the natural vibration behaviour of the respective system.  

The following video sequences illustrate typical situations in which this natural behaviour can be directly observed. The examples range from everyday objects to technical machining processes and serve as a starting point for analysing the underlying mechanisms.

### Vibration of a Street Lamp

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="/fem-course/media/08_modalanalyse/lampe.mp4" type="video/mp4">
  Your browser does not support this video.
</video>
<!-- markdownlint-enable MD033 -->

??? question "What can be observed in this video sequence?"

    * The lamp undergoes free vibration.  
    * The motion is concentrated in a characteristic shape that corresponds to a mode shape of the system.  
    * The reason the lamp vibrates in this form is that the wind contains excitation components that coincide with the natural frequency of the system.

---

### Vibration of a Tabletop

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="/fem-course/media/08_modalanalyse/tisch.mp4" type="video/mp4">
  Your browser does not support this video.
</video>

??? question "Which phenomena can be observed here?"

    * The tabletop is apparently mounted very weak within the frame; even small forces can lead to a twisting motion of the entire structure.  
    * After being released, the tabletop undergoes free vibration, indicating a combination of low stiffness of the supporting frame and relatively high mass of the tabletop.  
    * Such a configuration is structurally unfavourable from a dynamics perspective: low frame stiffness combined with a large tabletop mass leads to pronounced natural vibration behaviour.  

---

### Resonance of a Bridge System (Tacoma Narrows Bridge)

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

??? question "Which structural dynamic effects are visible?"

    * The bridge exhibits a pronounced torsional mode with large amplitudes; the mode shape clearly dominates the overall system behaviour.  
    * The strong increase in vibration amplitude indicates a resonance condition that develops into a **resonance catastrophe**.  
    * The aerodynamic excitation is caused by flow separation and periodic vortex shedding, which generate excitation components in the range of a natural frequency of the bridge.  
    * The coupling between flow and structure leads to a self excited vibration, meaning that the motion is not maintained by external periodic loads but by the system itself.  
    * Modern bridges are designed with more favourable aerodynamic properties in order to avoid such effects through optimised profiles, additional stiffening, and modified structural concepts.  
    * Further information is available here: [https://wsdot.wa.gov/TNBhistory/](https://wsdot.wa.gov/TNBhistory/)

---

### Vibrations During Milling

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

??? question "Which indications of natural frequencies does this machining process provide?"

    * The tool starts to vibrate as soon as the cutting conditions create a dynamically unstable configuration. This occurs when the feedback between tool motion and chip formation amplifies vibrations rather than damping them.  
    * The resulting chatter marks are a direct imprint of the tool vibration and reveal the dominant mode shape of the system.  
    * The overall system consisting of tool, spindle, and workpiece exhibits one or more characteristic natural frequencies, near which the vibration behaviour becomes particularly pronounced.  
    * Dynamic instability arises when the process excitation contains components in the range of a natural frequency and the system damping is insufficient to reduce the vibration.  
    * In the video sequence, active vibration reduction is visible. Its effect is reflected in a temporary and significant reduction of vibration amplitude, as the damper actively extracts energy from the system and thereby influences the natural vibration behaviour.  

---

### Vibrations of a Machine Base

<!-- markdownlint-disable MD033 -->
<video controls width="700">
  <source src="/fem-course/media/08_modalanalyse/unterbau.mp4" type="video/mp4">
  Your browser does not support video playback.
</video>
<!-- markdownlint-enable MD033 -->

??? question "Which structural dynamic aspects become apparent here?"

    * The video shows a compilation of numerous mode shapes of a machine base, as calculated in a FEM modal analysis.  
    * The displayed modes cover a wide frequency range and illustrate that technical systems possess many characteristic mode shapes, which may develop locally or globally.  
    * The visible vibration patterns are governed by the distribution of mass and stiffness.
    * Low frequency mode shapes often involve the entire structure, whereas higher frequency modes exhibit locally concentrated deformations.  
    * The large number of possible mode shapes explains why even small excitations, such as those in the preceding milling process video, can activate specific modes and thereby cause undesired vibrations.  

---

### Interim Conclusion

The presented examples clearly demonstrate that technical systems do not vibrate arbitrarily, but instead exhibit pronounced mode shapes that occur within characteristic frequency ranges.  

These observations lead to fundamental questions:

* Which properties of a system determine its vibration behaviour?  
* Why do vibrations become amplified only within certain frequency ranges?  
* Which physical parameters govern the location and shape of the mode shapes?  
* How do mode shapes influence the behaviour of complex components and assemblies?
* How do single degree of freedom systems differ from continuous structures?  

For a systematic analysis of these questions, the approach progresses step by step from simple dynamic models to complex technical components. The starting point is the single mass oscillator, followed by the investigation of beams, plates, shafts, and assemblies.

---

## Theoretical Background

### Basic Concepts

Technical vibrations can be described using a small number of fundamental quantities.  

[![Mass spring animation](media/08_modalanalyse/Animated-mass-spring.gif){width=100px}](media/08_modalanalyse/Animated-mass-spring.gif "Mass spring animation"){.glightbox}
<span class="bildquelle">Image source[@wikipedia2025]</span>

* **Displacement**  
  Time dependent deviation of a quantity (e.g. position) from the equilibrium state.  

* **Period** \(T\)  
  Time interval after which a periodic process repeats itself.  

* **Frequency** \(f\) and **angular frequency** \(\omega\)  
  \(f = \frac{1}{T}\)  
  \(\omega = 2 \pi f\)  

* **Amplitude** \(A\)  
  Maximum displacement from equilibrium.  

These quantities form the basis for the description of mechanical vibrations.  

---

### Undamped Vibration of a Single Mass Oscillator

A wide range of technical vibration problems can essentially be reduced to the linear mass spring system.

[![Mass spring system ](media/08_modalanalyse/feder_masse.png){width=300px}](media/08_modalanalyse/feder_masse.png "Mass spring system"){.glightbox}
<span class="bildquelle">Image source[@Eichler2023]</span>  

The displacement from the equilibrium position is described by \(y(t)\). The restoring force is proportional to the displacement, but acts in the opposite direction:

\[
F = -\,c\,y(t)
\]

The quantity \(c\) is the spring constant (unit: N/m or N/mm).

### Force Balance and Equation of Motion

According to Newton’s second law, the resultant force leads to an acceleration:

\[
F = m\,\ddot{y}(t)
\]

Equating both expressions yields:

\[
m\,\ddot{y}(t) = -\,c\,y(t)
\]

or, in standard form:

\[
\ddot{y}(t) + \frac{c}{m}\,y(t) = 0
\]

This is a **linear, homogeneous second order differential equation** with constant coefficients.

---

#### Harmonic Solution Ansatz

A solution of the form

\[
y(t) = \hat{y}\,\cos(\omega_0 t + \varphi_0)
\]

is assumed. The derivatives are:

\[
\dot{y}(t) = -\,\hat{y}\,\omega_0 \sin(\omega_0 t + \varphi_0)
\]

\[
\ddot{y}(t) = -\,\hat{y}\,\omega_0^{2} \cos(\omega_0 t + \varphi_0)
\]

Substitution into the equation of motion leads to:

\[
-\,\hat{y}\,\omega_0^{2} \cos(\omega_0 t + \varphi_0) + \frac{c}{m}\,\hat{y}\,\cos(\omega_0 t + \varphi_0) = 0
\]

This results in the characteristic relation:

\[
\omega_0^{2} = \frac{c}{m}
\qquad\Longrightarrow\qquad
\omega_0 = \sqrt{\frac{c}{m}}
\]

This is the **natural angular frequency** of the system.

---

#### Natural Frequency and Period of Oscillation

From the angular frequency, the natural frequency is obtained as:

\[
f_0 = \frac{\omega_0}{2\pi}
\]

The corresponding period is:

\[
T_0 = \frac{1}{f_0} = \frac{2\pi}{\omega_0}
\]

The oscillation is therefore a **system property**, determined exclusively by the mass and the spring constant. The initial conditions influence only the amplitude \(\hat{y}\) and the phase \(\varphi_0\).

#### Representation of the Oscillation in the Time and Frequency Domains

The properties of the solution of the single mass oscillator can be illustrated clearly in both the time domain and the frequency domain. In the time domain, the displacement \(y(t)\), amplitude \(\hat{y}\), period \(T_0\), and initial phase \(\varphi_0\) become visible. In the frequency domain, ideally only a single frequency component appears at the natural frequency \(f_0\) or \(\omega_0\).  

**Time domain:** Harmonic oscillation with marked characteristic quantities  

[![Harmonic oscillation (time domain)](media/08_modalanalyse/harmonische_schwingung_zeitbereich.svg){width=500px}](media/08_modalanalyse/harmonische_schwingung_zeitbereich.svg "Harmonic oscillation (time domain)"){.glightbox}
<span class="bildquelle">Image source[@kitmath2025]</span>

This representation shows how amplitude, period, and initial phase determine the shape of the time function.

**Frequency domain:** Representation of the natural frequency

[![Harmonic oscillation (frequency domain)](media/08_modalanalyse/harmonische_schwingung_frequenzbereich.svg){width=500px}](media/08_modalanalyse/harmonische_schwingung_frequenzbereich.svg "Harmonic oscillation (frequency domain)"){.glightbox}
<span class="bildquelle">Image source[@physikbuch2025]</span>

The corresponding spectrum ideally shows only a single frequency component at the natural frequency.

---

### Damped Oscillation

Real technical systems lose vibrational energy due to friction, air resistance, or material damping. Damping is modelled by a proportionality to the velocity:  

\[
m \ddot{x} + k \dot{x} + D x = 0
\]

The following cases are distinguished:  

* lightly damped oscillation (periodic behaviour, slow decay)  
* critical damping (limiting case, fastest decay without oscillation)  
* heavy damping (no periodic motion)  

The damped natural angular frequency is given by:  

\[
\omega_\mathrm{d} = \sqrt{\omega_0^2 - \left(\frac{k}{2m}\right)^2}
\]

[![Damped oscillations](media/08_modalanalyse/gedaempfte_schwingung.png){width=350px}](media/08_modalanalyse/gedaempfte_schwingung.png "Damped oscillations"){.glightbox}
<span class="bildquelle">Image source[@Eichler2023]</span>  

---

### Forced Oscillation and Resonance

If a time dependent external force acts on the system  

\[
F(t) = F_0 \sin(\omega t)
\]

a stationary oscillation state is established. The amplitude of the response oscillation depends on the excitation frequency \(\omega\) and exhibits a maximum when \(\omega\) is close to the natural angular frequency \(\omega_0\). This behaviour is referred to as resonance.  

!!! danger "FIXME"
    Add figure showing operating range subcritical/supercritical

<!--
[![Resonance curve](media/08_modalanalyse/resonanz.png){width=650px}](media/08_modalanalyse/resonanz.png "Resonance curve"){.glightbox}
<span class="bildquelle">Image source[]</span>  
-->

---

### Superposition and Beating

A technical system can contain several vibration components simultaneously. The superposition of two harmonic oscillations with slightly different frequencies leads to beating, an alternating amplification and attenuation of the overall amplitude.  

The superposition of two oscillations can be written as:  

\[
x(t) = A_1 \sin(\omega_1 t) + A_2 \sin(\omega_2 t)
\]

The beat frequency is given by:  

\[
f_\mathrm{s} = \lvert f_1 - f_2 \rvert
\]

This concept therefore forms the transition to the idea of a multitude of mode shapes in real structures.  

[![Superposition of oscillations](media/08_modalanalyse/ueberlagerung.svg){width=650px}](media/08_modalanalyse/ueberlagerung.svg "Superposition of oscillations"){.glightbox}
<span class="bildquelle">Image source[@physikbuch2025].</span>  

---

### From One Dimensional Vibration to Modal Analysis

Natural vibrations do not occur only in one dimensional systems, but wherever continua such as air columns, strings, beams, membranes, or plates exhibit oscillatory behaviour. These examples make it clear that:

* real structures possess a large number of natural frequencies  
* each natural frequency is associated with a characteristic mode shape  
* only certain frequencies are compatible with the geometry and boundary conditions and lead to pronounced vibration behaviour  

These fundamental principles can be systematically transferred to technical structures. The finite element method formulates them in terms of the general eigenvalue problem. For a linear system with mass matrix \(M\) and stiffness matrix \(K\), the following applies:

\[
M \ddot{\varphi} + K \varphi = 0
\]

Using the harmonic solution ansatz \(\varphi(t) = \Phi\,\mathrm{e}^{\mathrm{i}\omega t}\), the algebraic eigenvalue problem is obtained:

\[
K \Phi = \omega^2 M \Phi
\]

The solution yields the natural frequencies \(\omega\) and the associated mode shapes \(\Phi\). They describe the fundamental vibration behaviour of beams, plates, shafts, as well as complex assemblies, and form the basis of modal analysis.

### Model Levels

The modelling of vibration behaviour proceeds step by step, from rigid bodies with only a few degrees of freedom, through discrete mass spring systems, to continuous structures such as beams, plates, or shafts. With each model level, the capability to represent real vibration shapes increases, ranging from simple motions of individual bodies to distributed mode shapes of technical structures.

!!! danger "FIXME"
    Add suitable figures from Dresig/Beitelschmidt (model levels: rigid body → multi mass system → beam/plate),  
    Expand this section in terms of content: brief explanation of the role of degrees of freedom, transition from discrete to continuous models, relevance for subsequent FE modal analysis.

### Analytical Solutions of Simple Structures

!!! danger "FIXME"
    Add simple calculations

---

## General Aspects of Implementation in ANSYS

### Project Schematic

In the project schematic, the analysis type *Modal* must be selected. For many tasks, the system can be used as a standalone modal analysis. For more advanced investigations, coupling with a *static structural analysis* or a *harmonic analysis* is useful, for example to investigate load cases or to perform a frequency response analysis.  

[![Project schematic, modal analysis](media/08_modalanalyse/modal_projektoberflaeche.png){width=650px}](media/08_modalanalyse/modal_projektoberflaeche.png "Project schematic modal analysis"){.glightbox}

### Geometry and Material

The geometry is integrated into the project as usual.  

Even in modal analysis, the selection and correct assignment of materials is of central importance, since the natural frequencies and mode shapes depend directly on the mass distribution (see theoretical derivation). For assemblies, multiple materials often have to be considered and correctly assigned to the respective components. The required material properties are integrated into the project via the engineering data.  

[![Material selection in modal analysis](media/08_modalanalyse/modal_materialauswahl.png){width=650px}](media/08_modalanalyse/modal_materialauswahl.png "Material selection in modal analysis"){.glightbox}

### Contacts and Connection Elements

In assemblies, contacts and connection elements play a key role in vibration behaviour. They influence both the effective stiffness and the mass coupling between the individual components and therefore have a direct effect on the calculated natural frequencies and mode shapes.

In modal analysis, contacts are generally **linearised**. Nonlinear effects such as friction, opening, or sliding are not taken into account. Instead, the contact represents a linear coupling of the involved components, for example as *bonded*, *no separation*, or an idealised support condition.

For many applications, this simplification is sufficient, especially if:

* small vibration amplitudes are considered,  
* the contact does not change significantly during operation,  
* the objective is the determination of global natural frequencies and mode shapes.  

Connection elements such as bolts, springs, or bearings can alternatively be modelled explicitly or replaced by idealised elements. The choice of contact and connection types represents an important modelling decision and should always be made in the context of the real structure and the objective of the analysis.

!!! warning "Automatic contact detection"
    ANSYS detects contacts in assemblies **automatically**. However, these automatically generated contacts should **always be checked, adjusted, and, if necessary, revised deliberately**, as they have a significant influence on the calculated natural frequencies and mode shapes.

### Boundary Conditions

Boundary conditions have a significant influence on natural frequencies and mode shapes.

* typical support cases: free, fixed at one end, fixed at both ends, fixed on all sides  
* additional constraints increase the effective stiffness and shift natural frequencies  
* in modal analysis, boundary conditions directly define the dynamic system  
* changes in boundary conditions therefore lead to markedly different mode shapes  

In assemblies, boundary conditions are often represented via contacts, supports, or idealised fixations.

* here, the analysis is also linearised  
* small vibrations about a reference state are considered  

The choice of boundary conditions is a key modelling decision and should be adapted as closely as possible to the real installation situation.

### Mesh

<!--
* Importance of the mesh for modal analyses
* Local refinement at critical geometries
* Influence of inertia distribution
-->

### Solver Settings

<!--
* Objective: first n natural frequencies
* Selection of the frequency range
* Scaling of mode shapes
* Use of animation for video sequences
-->

## Task Description

* [biegebalken.stp](media/08_modalanalyse/biegebalken.stp)
* [stahlplatte.stp](media/08_modalanalyse/stahlplatte.stp)
* [getriebewelle.stp](media/08_modalanalyse/getriebewelle.stp)
* [windrad.stp](media/08_modalanalyse/windrad.stp)

### 1. Beam

* Compare the first ten mode shapes
* Influence of boundary conditions
* Influence of material

### 2. Steel Plate

* First five modes
* Interpretation of typical plate modes
* Comparison of modes for free and fixed edges

### 3. Gear Shaft

* Influence of boundary conditions. Where and how implemented? Fixed, external, cylindrical bearing etc. Fixed floating bearing arrangement; rotational degrees of freedom affect ONLY the rigid body modes.  
* Influence of point masses → does not affect the shaft end
* Identification of relevant modes for machine operation

### 4. Wind Turbine

* Reduction of complex assemblies
* Influence of material selection
* Structurally critical modes

## Discussion of Results

* Changes in mode shapes due to mass distribution, stiffness, and boundary conditions
* Interpretation of typical mode shapes
* Relevance for operating speeds and safety
* Limitations of modal analysis

## Further Reading

<!--
* Introduction to operational vibration analysis
* Experimental modal analysis
* Model reduction for large assemblies
* Multibody models and coupling to FE models
-->

## Quiz for Self Assessment

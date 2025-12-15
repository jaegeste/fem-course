# Peer Teaching: B2 Frequency Response Analysis

## 7.0 Specific Learning Objectives – Harmonic (Frequency Response) Analysis

After completing harmonic analysis, the student will be able to:

- Predict the steady-state response of a structure subjected to sinusoidal loading.
- Identify resonance frequencies and their relation to modal natural frequencies.
- Study the effect of damping on vibration amplitude.
- Analyze frequency-dependent displacement, stress, and phase response.
- Understand how modal superposition reduces computational effort.
- Evaluate the dynamic amplification factor of a structure.

## 7.1 What is Harmonic Analysis?

Harmonic analysis determines the steady-state response of a structure subjected to sinusoidal loads of known frequency.

Used when:

- Loads vary harmonically with time
- Transient effects are negligible
- Frequency content is known

## 7.2 Governing Equation of Motion

[M]{x¨} + [C]{x˙} + [K]{x} = {F₀} sin(ωt)

Where:

[M] — Mass Matrix

The mass matrix represents how the mass of the structure is distributed over its degrees of freedom (DOFs).

It quantifies inertia — how resistant the structure is to acceleration.

Contributes to dynamic effects.

Larger mass → lower natural frequencie.

[C] — Damping Matrix
Represents energy dissipation mechanisms (e.g., material damping, joints, friction).

Relates velocity to resistive force.

If damping is ignored, the system becomes undamped.

Different models exist: structural damping, Rayleigh damping, modal damping.

[K] — Stiffness Matrix
Represents elastic resistance of the structure.

Relates displacements to restoring forces.

Larger stiffness → higher natural frequencies.

{F₀} - Forcing Vector

Amplitude vector of applied sinusoidal loads.

The excitation applied to the system.

ω — Forcing Angular Frequency (rad/s)

Angular frequency at which the load oscillates.

Linked to ordinary frequency via:

ω = 2πf

Defines the frequency domain over which response is evaluated.

## 7.3 Steady-State Solution

Assuming harmonic response:

{x} = {X}e^{iωt}

Substituting yields:

(-ω²[M] + iω[C] + [K]){X} = {F₀}

ANSYS solves this equation for each frequency step.

## 7.4 Modal Superposition Method (Used in ANSYS)

To reduce computation, ANSYS uses modal superposition:

{x} = [Φ]{q}

Where:

Φ= mode shapes from modal analysis

q = modal coordinates

Advantages:

- Faster solution
- High accuracy near resonances
- Ideal for linear systems

## 7.5 Frequency Response Function (FRF)

The Frequency Response Function describes system response as a function of frequency:

H(ω) = X(ω) / F(ω)

Key observations:

- Peak at resonance
- Phase shift near resonance
- Damping controls peak amplitude

## 7.6 Role of Damping

Types of damping in ANSYS:

- Structural damping
- Rayleigh damping
- Modal damping ratio

Effects:

- Reduces peak amplitude
- Broadens resonance curve
- Improves numerical stability

## 7.7 Differences between modal and harmonic analysis

| Modal Analysis | Harmonic Analysis |
|---------------|------------------|
| No external load | Sinusoidal load applied |
| Finds natural frequencies | Finds vibration amplitude |
| No damping | Damping included |
| Free vibration | Forced vibration |

## 7.8 Engineering significance

- Avoid resonance in design
- Predict fatigue due to vibration
- Improve structural reliability
- Optimize stiffness and mass distribution

Used in:

- Automotive components
- Aerospace structures
- Mechanical frames
- Civil structures

## 7.9 Implementation in Ansys with an example

### Phase 1: Workbench Setup

1. Open ANSYS Workbench.

2. Select System:

   In the Toolbox on the left, find Modal.
   Drag and drop it into the Project Schematic window.

3. Engineering Data (Crucial Step):

   Double-click Engineering Data.
   Ensure you define Density (for the Mass matrix) and Young's Modulus/Poisson's Ratio.

4. Geometry:

   Right-click Geometry cell ->Import Geometry

   Geometry – [Download H-beam geometry](media/peer-teaching_B2/Hbeam.stp)

### Phase 2: Mechanical Setup (The Modeling)

Double-click the Model cell to open ANSYS Mechanical.

1. Meshing

- Click on Mesh in the outline tree.
- Sizing: 15mm.
- Generate Mesh: Right-click Mesh ->Generate Mesh.
- Check: Ensure the mesh looks uniform.

2. Boundary Conditions (Setup)

- Right-click Modal (A5) ->Insert -> Fixed Support.
- Select the two H-faces of the H-bar and click Apply.

3. Analysis Settings

- Click Analysis Settings in the tree.
- Max Modes to Find: The default is usually 6.
- Solver Options: Leave as "Program Controlled" unless you have a specific requirement.

![Alt Text](media/peer-teaching_B2/1.png)

![Alt Text](media/peer-teaching_B2/2.png)

### Phase 3: Solution & post-processing

1. Solve

- Right-click Solution (A6) ->Solve.
- ANSYS will compute the eigenvalues (frequencies).

2. Reviewing Frequencies

- Once done, click Solution.
- In the bottom right table ("Tabular Data"), you will see a list of Mode numbers and their corresponding Frequencies (Hz).

3. Visualizing Mode Shapes

- Select all the rows in the Tabular Data window.
- Right-click ->Create Mode Shape Results.
- This adds "Total Deformation" items to your Solution tree.
- Right-click Solution -> Evaluate All Results.
- Click on each Total Deformation to evaluate and note the minimum and maximum frequencies.

![Alt Text](media/peer-teaching_B2/3.png)

### Phase 4

Go to ANSYS workbench and now select and drag the harmonic response from the drop down menu to the solution row of the modal to transfer and share data.

![Alt Text](media/peer-teaching_B2/4.png)

Go back to the model and now you have the harmonic response B5 in the outline tree.

In analysis settings of B5 change the input minimum and maximum frequencies according to the results obtained in total deformation and set the intervals to 50.

![Alt Text](media/peer-teaching_B2/5.png)

Now apply a pressure of 2000MPa on one of the rectangular faces in Z axis.

![Alt Text](media/peer-teaching_B2/6.png)

Under the outline tree insert frequency response-> Deformation select the entire body with direction of deformation is Z-axis in details and solve.

![Alt Text](media/peer-teaching_B2/7.png)

![Alt Text](media/peer-teaching_B2/8.png)

Insert equivalent stress for details of equivalent stress input the maximum frequency obtained in the results of frequency response and solve again.

![Alt Text](media/peer-teaching_B2/9.png)

Now provide some damping by providing a damping ratio of 0.02 under damping controls in analysis settings which is by default equal to 0. This means the vibration will damp and eventually come to rest. And solve again and analyse.

![Alt Text](media/peer-teaching_B2/10.png)

## 7.10 Important result discussions and conclusions

Discussions

- Comparison Between Damped and Undamped Systems
- Peak amplitudes: Undamped >> Damped
- Resonance sensitivity: Undamped systems are highly sensitive; damped systems show controlled response.
- Dynamic amplification factor is highest in undamped systems and reduced in damped systems.
- Practical engineering systems always include damping to avoid catastrophic failure at resonance frequencies.

Conclusions

- The H-beam exhibits maximum vibration at its natural frequencies, confirming the principle of resonance.
- Undamped systems show very high peak amplitudes at resonance, posing a risk of structural failure.
- Damping significantly reduces peak response and improves stability under harmonic loading.
- Phase response analysis indicates that damped systems lag the applied load, whereas undamped systems have abrupt phase changes near resonance.
- Modal superposition and harmonic analysis together provide accurate prediction of frequency-dependent behavior with reduced computational effort.
- Proper selection of damping and material stiffness is critical to ensure structural reliability and avoid resonance-induced failures

## 7.11 Self assessment quiz

Q1. What is the primary objective of harmonic analysis?

A. To determine transient shock response

B. To predict steady-state response under sinusoidal loading

C. To calculate buckling loads

D. To determine thermal stresses

Q2. Harmonic analysis is used when:

A. Loads are random and unpredictable

B. Frequency content of loading is unknown

C. Loads vary harmonically with time

D. Nonlinear material behavior dominates

Q3. In the governing equation

[M]{u ̈}+[C]{u ̇}+[K]{u}={F_0}sin⁡(ωt)

Which matrix represents energy dissipation?

A. Mass matrix [M]

B. Stiffness matrix [K]

C. Damping matrix [C]

D. Forcing vector {F₀}

Q4. Increasing the stiffness of a structure generally results in:

A. Lower natural frequencies

B. Higher natural frequencies

C. No change in frequency

D. Increased damping

Q5. The forcing angular frequency ω is related to ordinary frequency f by:

A.f=2πω

B. ω=2πf

C. f=ω

D. ω=f/2π

Q6. In steady-state harmonic response, displacement is assumed in the form:

A.u(t)=Ut

B. u(t)=Usin⁡(t)

C. u(t)=Ue^iωt

D. u(t)=Ue^(-t)

Q7. Which method does ANSYS commonly use to reduce computational effort in harmonic analysis?

A. Direct integration method

B. Explicit time stepping

C. Modal superposition method

D. Finite difference method

Q8. What happens to vibration amplitude near resonance?

A. It becomes zero

B. It decreases linearly

C. It reaches a peak

D. It becomes frequency independent

Q9. What is the main effect of damping on frequency response?

A. Increases resonance frequency

B. Eliminates stiffness

C. Reduces peak amplitude

D. Increases mass effect

Q10. Which statement correctly differentiates harmonic and modal analysis?

A. Both include damping and external loads

B. Modal analysis studies forced vibration

C. Harmonic analysis applies sinusoidal loading

D. Modal analysis calculates vibration amplitude

Answer Key

1.B

2.C

3.C

4.B

5.B

6.C

7.C

8.C

9.C

10.C

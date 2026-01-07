
# FEM Analysis of a Four-Sided Clamped MEMS Accelerometer

## 1. Introduction and Learning Objectives

The objective of this project is to analyze a four-sided clamped MEMS acceleration sensor using the Finite Element Method (FEM). The accelerometer is treated as a microscale bending-beam system where inertial forces caused by acceleration lead to elastic deformation and stress in the suspension beams.

After completing this project, the student will be able to:

- Understand the mechanics of acceleration sensors based on bending beams
- Derive and interpret the bending beam equation for MEMS structures
- Explain the advantages of a four-sided clamped configuration
- Translate analytical beam theory into an FEM model
- Implement, mesh, and refine a MEMS accelerometer model in ANSYS Workbench

## 2. Geometry of the Four-Sided Clamped Accelerometer

The accelerometer consists of a central seismic (proof) mass symmetrically suspended by four identical bending beams, clamped at both ends to the proof mass and outer frame.

### Proof Mass

- Length: 100 µm
- Width: 100 µm
- Thickness: 20 µm

### Suspension Beams

- Beam length: 100 µm
- Beam width: 20 µm
- Beam thickness: 20 µm

### Fixed Frame

- Length: 300 µm
- Width: 300 µm
- Thickness: 20 µm

## 5. Mechanics of Acceleration Sensors – Bending Beam Theory

### Acceleration

$$
a = \frac{dv}{dt}
$$

### Equation of Motion

$$
m a = m \frac{d^2x}{dt^2} + \lambda \frac{dx}{dt} + kx
$$

### Bending Beam Equation

$$
M(x) = -EI w''(x)
$$

### Stress Distribution

$$
\sigma_z = -Ez w''(x)
$$

### Second Moment of Area

$$
I_y = \frac{bd^3}{12}, \quad I_z = \frac{db^3}{12}
$$

## 6. Four-Sided Clamped Configuration

$$
F_{beam} = \frac{F}{4}
$$

$$
w(L) = \frac{4FL^3}{3EI}
$$

## 7. FEM Calculations

### Mass and Force

$$
V = 100\mu m \times 100\mu m \times 20\mu m = 2 \times 10^{-13} m^3
$$

$$
m = \rho V = 4.66 \times 10^{-10} kg
$$

$$
F = ma \approx 4.57 nN
$$

### Capacitance

$$
C = \frac{\varepsilon_0 A}{d}, \quad \Delta C = C_0 \frac{\Delta d}{d}
$$

# Test 3D Viewer

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<model-viewer src="/fem-course/media/03_mechanical_kragbalken/kragbalken.glb"
              alt="Kragbalken"
              auto-rotate
              camera-controls
              camera-orbit="30deg 70deg 600mm"
              field-of-view="20deg"
              style="width:600px;height:400px; background-color: white;"
              exposure="1.0"
              shadow-intensity="1"
              shadow-softness="0.7"
              environment-image="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
              poster="data:,">
</model-viewer>

<model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              alt="Astronaut"
              auto-rotate
              camera-controls
              style="width:600px; height:400px;">
</model-viewer>

## Quiz-Test

<?quiz?>
question: Was beschreibt die von Mises Spannung?
answer: Nur Normalspannungen
answer-correct: Eine äquivalente Spannung aus Normal- und Schubspannungen
answer: Nur Schubspannungen
content:
<p><strong>Hinweis:</strong> Siehe Theorieabschnitt im Kapitel Spannungsarten.</p>
<?/quiz?>

---

<?quiz?>
question: Welche Einheit hat die von Mises Spannung?
answer: Newton
answer: Meter
answer-correct: Pascal (N/m²)
content:
<p><em>Tipp:</em> Es handelt sich um eine Spannungseinheit.</p>
<?/quiz?>
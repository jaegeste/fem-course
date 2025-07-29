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

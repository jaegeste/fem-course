(function () {
  function renderAll() {
    document.querySelectorAll('.plotly-chart[data-fig]').forEach(function (el) {
      try {
        const fig = JSON.parse(el.getAttribute('data-fig'));
        if (!el._plotted) {
          Plotly.newPlot(el, fig.data, fig.layout, fig.config || {});
          el._plotted = true;
        } else {
          Plotly.Plots.resize(el);
        }
      } catch (e) {
        console.warn('Plotly: Fehler beim Parsen von data-fig', e);
      }
    });
  }

  if (document.readyState !== 'loading') renderAll();
  else document.addEventListener('DOMContentLoaded', renderAll);

  if (window.document$) document$.subscribe(renderAll);

  window.addEventListener('resize', function () {
    document.querySelectorAll('.plotly-chart').forEach(Plotly.Plots.resize);
  });
})();

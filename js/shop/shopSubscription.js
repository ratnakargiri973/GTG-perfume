document.addEventListener('DOMContentLoaded', () => {
  const planRadios = document.querySelectorAll('input[name="plan"]');
  const tryRadios = document.querySelectorAll('input[name="tryMode"]');
  const tryModeOptions = document.getElementById('tryModeOptions');
  const panels = {
    single: document.getElementById('panel-single'),
    double: document.getElementById('panel-double'),
    try: document.getElementById('panel-try'),
  };
  const trySingle = document.getElementById('trySingle');
  const tryDouble = document.getElementById('tryDouble');

  function updateView() {
    const plan = document.querySelector('input[name="plan"]:checked').value;
    tryModeOptions.style.display = plan === 'try' ? 'flex' : 'none';

    for (let key in panels) panels[key].style.display = 'none';
    if (plan === 'try') {
      panels.try.style.display = 'block';
      const mode = document.querySelector('input[name="tryMode"]:checked').value;
      trySingle.style.display = mode === 'single' ? 'block' : 'none';
      tryDouble.style.display = mode === 'double' ? 'block' : 'none';
    } else {
      panels[plan].style.display = 'block';
    }

    updateCartLink();
  }

  function updateCartLink() {
    let plan = document.querySelector('input[name="plan"]:checked').value;
    let link = 'https://example.com/';
    if (plan === 'single') {
      let frag = document.querySelector('input[name="single-fragrance"]:checked').value;
      link += `single-${frag}`;
    } else if (plan === 'double') {
      let f1 = document.querySelector('input[name="double-fragrance1"]:checked').value;
      let f2 = document.querySelector('input[name="double-fragrance2"]:checked').value;
      link += `double-${f1}-${f2}`;
    } else if (plan === 'try') {
      const mode = document.querySelector('input[name="tryMode"]:checked').value;
      if (mode === 'single') {
        let frag = document.querySelector('input[name="try-single"]:checked').value;
        link += `try-single-${frag}`;
      } else {
        let f1 = document.querySelector('input[name="try-double1"]:checked').value;
        let f2 = document.querySelector('input[name="try-double2"]:checked').value;
        link += `try-double-${f1}-${f2}`;
      }
    }
    document.getElementById('addToCart').href = link;
  }

  planRadios.forEach(r => r.addEventListener('change', updateView));
  tryRadios.forEach(r => r.addEventListener('change', updateView));
  document.querySelectorAll('input[type="radio"]').forEach(r => r.addEventListener('change', updateCartLink));

  updateView();
});

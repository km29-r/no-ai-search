(function() {
  function handleSubmit(e) {
    const form = e.target;
    const input = form.querySelector('input[name="q"]');
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    if (!/-ai\s*$/i.test(query)) {
      e.preventDefault();
      input.value = query + ' -ai';
      form.submit();
    }
  }

  document.addEventListener('submit', handleSubmit, true);
})();


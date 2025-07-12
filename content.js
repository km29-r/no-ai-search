chrome.storage.local.get({enabled: true}, ({enabled}) => {
  if (!enabled) return;

  function appendExcludeAI(input) {
    if (input && input.value && !input.value.includes('-ai')) {
      input.value = input.value + ' -ai';
    }
  }

  const searchInputs = document.querySelectorAll('input[name="q"]');
  searchInputs.forEach(appendExcludeAI);

  document.addEventListener('submit', (e) => {
    const input = e.target.querySelector('input[name="q"]');
    appendExcludeAI(input);
  }, true);
});

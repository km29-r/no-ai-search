chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
  if (!enabled) return;

  function shouldAppendAI(query) {
    return query && !/-ai(\s+|$)/i.test(query);
  }

  function appendExcludeAI(input) {
    if (input && input.value && shouldAppendAI(input.value)) {
      input.value = input.value.trim() + ' -ai';
    }
  }

  // 初期表示時に input を検出して補完
  const searchInputs = document.querySelectorAll('input[name="q"]');
  searchInputs.forEach(appendExcludeAI);

  // submit 時に補完 + 再送信
  document.addEventListener('submit', (e) => {
    const form = e.target;
    const input = form.querySelector('input[name="q"]');
    if (!input) return;

    if (shouldAppendAI(input.value)) {
      e.preventDefault();
      appendExcludeAI(input);
      form.submit();
    }
  }, true);
});

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

  // 初期表示時に検索フォームを探して処理
  const searchInputs = document.querySelectorAll('input[name="q"]');
  searchInputs.forEach(appendExcludeAI);

  // submit イベントで動的に対応
  document.addEventListener('submit', (e) => {
    const form = e.target;
    const input = form.querySelector('input[name="q"]');
    if (!input) return;

    if (shouldAppendAI(input.value)) {
      e.preventDefault(); // フォームの送信を一旦止める
      appendExcludeAI(input);
      form.submit(); // 値を変えてから送信し直す
    }

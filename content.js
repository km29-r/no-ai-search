chrome.storage.local.get(['isEnabled'], function(result) {
    if (!result.isEnabled) return;
    const input = document.querySelector('input[name="q"]');
    if (input) {
        const value = input.value.trim();
        if (!value.includes('-ai')) {
            input.value = value + (value ? ' ' : '') + '-ai';
        }
    }
});

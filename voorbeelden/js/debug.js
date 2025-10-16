const skipTags = ['html', 'script', 'style', 'meta', 'link', 'title', 'head', 'br', 'hr', 'body'];

const addDebugLabels = () => {
  document.querySelectorAll('*').forEach(el => {
    const tagName = el.tagName.toLowerCase();
    if (!skipTags.includes(tagName) && !el.dataset.debugLabel) {
      let label = tagName;
      if (el.id) label += `#${el.id}`;
      if (el.className) label += `.${el.className.split(' ').join('.')}`;
      el.dataset.debugLabel = label;
    }
  });
};

const toggleDebug = () => {
  const isDebugOn = document.documentElement.classList.toggle('debug');
  if (isDebugOn) addDebugLabels();
  localStorage.setItem('debug-mode', isDebugOn);
  console.log(`Debug mode: ${isDebugOn ? 'ON' : 'OFF'}`);
};

const initDebug = () => {
  if (localStorage.getItem('debug-mode') === 'true') {
    document.documentElement.classList.add('debug');
    addDebugLabels();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      toggleDebug();
    }
  });
};

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', initDebug)
  : initDebug();
/**
 * Toast Notification Utility
 */

export function showToast(message, type = 'success', duration = 4000) {
  let container = document.getElementById('ff-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'ff-toast-container';
    container.className = 'ff-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `ff-toast ff-toast-${type}`;

  const iconSvg = type === 'success'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';

  toast.innerHTML = `
    <div class="ff-toast-icon">${iconSvg}</div>
    <div class="ff-toast-message">${message}</div>
    <button class="ff-toast-close" aria-label="Close Notification">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('ff-toast-show');
  });

  const removeToast = () => {
    toast.classList.remove('ff-toast-show');
    toast.classList.add('ff-toast-hide');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  };

  toast.querySelector('.ff-toast-close').addEventListener('click', removeToast);
  setTimeout(removeToast, duration);
}

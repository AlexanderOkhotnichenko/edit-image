import { createRoot } from './root';
import { appEdit } from './edit';

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.querySelector('body'));
  appEdit(document.querySelector('.container'));
});
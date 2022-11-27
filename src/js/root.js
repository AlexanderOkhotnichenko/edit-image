import { sampleElement } from './sampleElement';

export function createRoot(root) {
  const container = sampleElement('div', ['container']);

  root.append(container);

  return root;
}
import { expect, test } from 'vitest';
import { KaonCard } from '../components/card.js';

test('KaonCard is defined', () => {
  expect(customElements.get('kaon-card')).toBe(KaonCard);
});

test('KaonCard has correct default properties', () => {
  const card = new KaonCard();
  expect(card.title).toBe('');
});
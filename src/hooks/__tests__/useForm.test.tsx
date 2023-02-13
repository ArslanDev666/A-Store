import { act, renderHook } from '@testing-library/react';
import { useForm } from 'hooks/useForm';

test('should render useForm hook', () => {
  const { result } = renderHook(() =>
    useForm({
      text: 'Note One',
    })
  );

  expect(result.current).toBeDefined();
  expect(result.current.values.text).toBe('Note One');

  const event = new Event('change');
  Object.defineProperty(event, 'target', {
    value: {
      name: 'text',
      value: 'Note Two',
    },
    writable: false,
  });

  act(() => {
    result.current.handleChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>
    );
  });

  expect(result.current.values.text).toBe('Note Two');

  act(() => {
    result.current.reset();
  });
  expect(result.current.values.text).toBe('Note One');
});

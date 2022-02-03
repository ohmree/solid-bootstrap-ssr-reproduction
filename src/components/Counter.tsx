/* import './Counter.css'; */

import { Button } from 'solid-bootstrap';

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button onClick={() => setCount(count() + 1)}>
      Clicks: {count}
    </Button>
  );
}

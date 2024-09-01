import { effect, signal } from '@preact/signals';
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/dashboard/dashboard';
import './app.css'

const state = createAppState();

effect(() => console.log('app caught signal change', state.counter.value));

export function App() {
  console.log('App render');
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div>
        <Dashboard state={state.counter} />
        <button onClick={() => state.counter.value++} class="signal-button">Signal Increment: {state.counter}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}

function createAppState() {
  const counter = signal(0);
  return {
    counter
  }
}
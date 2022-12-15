import { createRoot } from 'react-dom/client'
import {App} from './App'
import { inject } from '@vercel/analytics';

inject();

const root = createRoot(document.querySelector("#root"))

root.render(<App/>)
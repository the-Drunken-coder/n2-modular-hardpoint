import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './style.css';
import { Classes } from '@blueprintjs/core';
import App from './App.jsx';
document.body.classList.add(Classes.DARK);
createRoot(document.getElementById('root')).render(<App />);

import ReactDOM from 'react-dom/client';
import './samples/node-api';
import './styles/index.scss';
import ReduxApp from './ReduxApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<ReduxApp />);

postMessage({ payload: 'removeLoading' }, '*');

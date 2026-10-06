import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: false, details: '' }; }
  static getDerivedStateFromError(error) { return { error: true, details: error?.message || 'Unknown render error' }; }
  render() {
    if (this.state.error) return <main style={{fontFamily:'system-ui',maxWidth:560,margin:'12vh auto',padding:24,color:'#292524'}}><h1 style={{fontSize:24,fontWeight:700}}>Hamro Lunch Box could not load</h1><p>An unexpected error stopped the app. Reload the page to try again. Saved invoice data has not been cleared.</p><details style={{margin:'16px 0',color:'#78716c'}}><summary>Error details</summary><pre style={{whiteSpace:'pre-wrap'}}>{this.state.details}</pre></details><button style={{padding:'10px 16px',background:'#E62227',color:'white',border:0,borderRadius:8,cursor:'pointer'}} onClick={()=>window.location.reload()}>Reload app</button></main>;
    return this.props.children;
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>);

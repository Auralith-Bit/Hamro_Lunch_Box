import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Btn } from './ui';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault(); setError(''); setBusy(true);
    try { await onLogin(username, password); }
    catch (err) { setError(err.message || 'Sign in failed. Try again.'); }
    finally { setBusy(false); }
  };
  const field = 'w-full border border-cream-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand/40';
  return <div className="min-h-screen grid place-items-center p-4"><div className="bg-cream-50 border border-cream-300 rounded-3xl p-6 w-full max-w-sm shadow-sm">
    <img src={logo} alt="Hamro Lunch Box" className="w-52 mx-auto rounded-xl bg-white"/><h1 className="font-bold text-xl mt-4 text-center">Sign in</h1>
    <form onSubmit={submit} className="grid gap-3 mt-4 text-sm">
      <label>Username<input className={field} value={username} onChange={e=>setUsername(e.target.value)} autoComplete="username" required/></label>
      <label>Password<input type="password" className={field} value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password" required/></label>
      {error&&<div role="alert" className="rounded-lg bg-brand/10 text-brand p-2.5 font-semibold">{error}</div>}
      <Btn type="submit" disabled={busy}>{busy?'Signing in…':'Sign in'}</Btn>
    </form>
  </div></div>;
}

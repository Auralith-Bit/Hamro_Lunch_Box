import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { USERS } from '../data';
import { Btn } from './ui';

const ROLES = [['admin', 'Admin', 'bg-brand'], ['reception', 'Receptionist', 'bg-leaf'], ['delivery', 'Delivery person', 'bg-navy']];

export default function Login({ onLogin }) {
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const u = USERS.find((x) => x.username === username.trim().toLowerCase() && x.password === password && x.role === role);
    if (!u) return setError('Username or password is incorrect for this role.');
    onLogin({ username: u.username, role: u.role, name: u.name });
  };
  const pick = (r) => { setRole(r); setError(''); };
  const field = 'w-full border border-cream-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand/40';

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="bg-cream-50 border border-cream-300 rounded-3xl p-6 w-full max-w-sm shadow-sm">
        <img src={logo} alt="Hamro Lunch Box" className="w-52 mx-auto rounded-xl bg-white" />
        <h1 className="font-bold text-xl mt-4 text-center">Sign in</h1>
        <div className="grid grid-cols-3 gap-1.5 mt-4" role="tablist">
          {ROLES.map(([k, l, c]) => (
            <button key={k} type="button" role="tab" aria-selected={role === k} onClick={() => pick(k)}
              className={'px-2 py-2 rounded-lg text-xs font-semibold ' + (role === k ? c + ' text-white' : 'bg-white border border-cream-300 text-stone-700')}>{l}</button>
          ))}
        </div>
        <form onSubmit={submit} className="grid gap-3 mt-4 text-sm">
          <label>Username<input className={field} value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required /></label>
          <label>Password<input type="password" className={field} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required /></label>
          {error && <div role="alert" className="rounded-lg bg-brand/10 text-brand p-2.5 font-semibold">{error}</div>}
          <Btn type="submit">Sign in as {ROLES.find((r) => r[0] === role)[1]}</Btn>
        </form>
        <div className="mt-4 rounded-lg bg-cream-100 p-3 text-xs text-stone-600">
          <b>Demo accounts</b>
          {USERS.filter((u) => u.role === role).map((u) => <div key={u.username}>{u.username} / {u.password}</div>)}
        </div>
      </div>
    </div>
  );
}

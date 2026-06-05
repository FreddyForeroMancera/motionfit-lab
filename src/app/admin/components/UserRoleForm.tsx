"use client";

import { useState, useTransition } from "react";
import { updateUser } from "../../actions/user-actions";

type User = {
  id: string;
  role: string;
  plan: string;
  status: string;
};

export default function UserRoleForm({ user }: { user: User }) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await updateUser(user.id, formData);
      if (result.success) {
        setMessage("Mis à jour");
        setTimeout(() => setMessage(""), 2000);
      } else {
        setMessage("Erreur");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <select name="role" defaultValue={user.role} style={{ padding: '0.2rem', borderRadius: '4px' }}>
        <option value="CLIENT">Client</option>
        <option value="ADMIN">Admin</option>
      </select>
      
      <select name="plan" defaultValue={user.plan} style={{ padding: '0.2rem', borderRadius: '4px' }}>
        <option value="NONE">Aucun</option>
        <option value="STANDARD">Standard</option>
        <option value="VIP">VIP</option>
        <option value="VIP_PREMIUM">VIP Premium</option>
        <option value="VIP_ENTERPRISE">VIP Enterprise</option>
      </select>
      
      <select name="status" defaultValue={user.status} style={{ padding: '0.2rem', borderRadius: '4px' }}>
        <option value="ACTIVE">Actif</option>
        <option value="INACTIVE">Inactif</option>
        <option value="SUSPENDED">Suspendu</option>
      </select>

      <button 
        type="submit" 
        disabled={isPending}
        style={{
          background: 'var(--color-accent)',
          color: 'white',
          border: 'none',
          padding: '0.3rem 0.6rem',
          borderRadius: '4px',
          cursor: isPending ? 'not-allowed' : 'pointer',
          fontSize: '0.8rem',
        }}
      >
        {isPending ? "..." : "Sauver"}
      </button>
      
      {message && <span style={{ fontSize: '0.8rem', color: message === "Erreur" ? 'red' : 'green' }}>{message}</span>}
    </form>
  );
}

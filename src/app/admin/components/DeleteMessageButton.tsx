"use client";

import { useTransition } from "react";
import { deleteMessage } from "../../actions/message-actions";

export default function DeleteMessageButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) {
      startTransition(() => {
        deleteMessage(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={isPending}
      style={{
        background: '#fee2e2',
        color: '#ef4444',
        border: 'none',
        padding: '0.4rem 0.8rem',
        borderRadius: '4px',
        cursor: isPending ? 'not-allowed' : 'pointer',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        opacity: isPending ? 0.7 : 1
      }}
    >
      {isPending ? "..." : "Supprimer"}
    </button>
  );
}

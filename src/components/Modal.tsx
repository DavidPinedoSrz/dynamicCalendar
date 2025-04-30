import React, { useState } from "react";
import { Event } from "../App.tsx";

interface ModalProps {
  clicked: string;
  events: Event[];
  onSave: (title: string) => void;
  onDelete: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ clicked, events, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState("");
  const eventForDay = events.find((e) => e.date === clicked);

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{eventForDay ? "Detalles del evento" : "Nuevo evento"}</h2>
        </div>
        
        <div className="modal-body">
          {eventForDay ? (
            <p>{eventForDay.title}</p>
          ) : (
            <input
              className="modal-input"
              placeholder="Título del evento"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          )}
        </div>
        
        <div className="modal-footer">
          {eventForDay ? (
            <button className="btn btn-danger" onClick={onDelete}>
              Eliminar
            </button>
          ) : (
            <button className="btn btn-close" onClick={onClose}>
              Cancelar
            </button>
          )}
          
          <button 
            className="btn btn-primary" 
            onClick={() => eventForDay ? onClose() : onSave(title)}
          >
            {eventForDay ? "Cerrar" : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
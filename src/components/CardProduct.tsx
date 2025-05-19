import React from "react";

interface CardProductProps {
  icon?: string;
  title: string;
  desc: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

export default function CardProduct({ icon, title, desc, image, onClick, className = "" }: CardProductProps) {
  return (
    <div
      onClick={onClick}
      className={`card h-100 text-center ${className}`}
      style={{ cursor: 'pointer' }}
      tabIndex={0}
      role="button"
      onKeyPress={e => (e.key === "Enter" || e.key === " ") && onClick?.()}
    >
      <div className="card-body d-flex flex-column align-items-center">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="img-fluid rounded mb-3" 
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            onError={e => { (e.target as HTMLImageElement).src = '/next.svg'; }} 
          />
        ) : (
          <div className="display-4 text-digitalpurple mb-3">{icon}</div>
        )}
        <h3 className="card-title fw-bold mb-2">{title}</h3>
        <p className="card-text text-muted">{desc}</p>
      </div>
    </div>
  );
} 
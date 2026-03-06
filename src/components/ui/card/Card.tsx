// src/components/ui/Card/Card.tsx
import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps)  => {
  return <article className="card">{children}</article>;
};

export default Card;
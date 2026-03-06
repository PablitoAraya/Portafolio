// src/components/ui/SectionTitle/SectionTitle.tsx
import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string; // opcional
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle__h2">{title}</h2>
      {subtitle && <p className="sectionTitle__p">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
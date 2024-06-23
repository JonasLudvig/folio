import React, { ReactNode } from 'react';
import useInView from './View';

interface ViewItemProps {
  children: ReactNode;
}

const ViewItem: React.FC<ViewItemProps> = ({ children }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={`fade-in ${isInView ? 'in-view' : ''}`}>
      {children}
    </div>
  );
};

export default ViewItem;

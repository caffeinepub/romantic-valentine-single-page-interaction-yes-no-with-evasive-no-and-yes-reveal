import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ValentineActionsProps {
  onYesClick: () => void;
  onNoInteraction: () => void;
  showNo: boolean;
}

export default function ValentineActions({ onYesClick, onNoInteraction, showNo }: ValentineActionsProps) {
  const [isNoHovered, setIsNoHovered] = useState(false);

  const handleNoPointerEnter = () => {
    setIsNoHovered(true);
    onNoInteraction();
  };

  const handleNoPointerLeave = () => {
    setIsNoHovered(false);
  };

  const handleNoPointerDown = () => {
    setIsNoHovered(true);
    onNoInteraction();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button
        onClick={onYesClick}
        size="lg"
        className="text-2xl px-12 py-8 h-auto bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold rounded-full shadow-romantic focus-visible:ring-4 focus-visible:ring-romantic-ring"
        style={{
          transform: isNoHovered ? 'scale(1.3)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        Yes
      </Button>
      
      {showNo && (
        <Button
          onPointerEnter={handleNoPointerEnter}
          onPointerLeave={handleNoPointerLeave}
          onPointerDown={handleNoPointerDown}
          size="lg"
          variant="outline"
          className="text-2xl px-12 py-8 h-auto border-romantic-border border-2 text-romantic-secondary hover:bg-romantic-light hover:text-romantic-primary font-bold rounded-full focus-visible:ring-4 focus-visible:ring-romantic-ring"
          style={{
            transform: isNoHovered ? 'scale(0.7)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          No
        </Button>
      )}
    </div>
  );
}

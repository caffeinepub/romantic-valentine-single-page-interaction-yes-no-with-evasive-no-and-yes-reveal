import { Button } from '@/components/ui/button';

interface ValentineActionsProps {
  onYesClick: () => void;
  onNoInteraction: () => void;
  showNo: boolean;
}

export default function ValentineActions({ onYesClick, onNoInteraction, showNo }: ValentineActionsProps) {
  const handleNoPointerEnter = () => {
    onNoInteraction();
  };

  const handleNoPointerDown = () => {
    onNoInteraction();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button
        onClick={onYesClick}
        size="lg"
        className="text-2xl px-12 py-8 h-auto bg-romantic-primary hover:bg-romantic-primary-hover text-white font-bold rounded-full shadow-romantic transition-all duration-300 hover:scale-110 focus-visible:ring-4 focus-visible:ring-romantic-ring"
      >
        Yes! 💖
      </Button>
      
      {showNo && (
        <Button
          onPointerEnter={handleNoPointerEnter}
          onPointerDown={handleNoPointerDown}
          size="lg"
          variant="outline"
          className="text-2xl px-12 py-8 h-auto border-romantic-border border-2 text-romantic-secondary hover:bg-romantic-light hover:text-romantic-primary font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-romantic-ring"
        >
          No
        </Button>
      )}
    </div>
  );
}

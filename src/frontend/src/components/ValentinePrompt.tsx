import { useState } from 'react';
import { Heart } from 'lucide-react';
import ValentineActions from './ValentineActions';

interface ValentinePromptProps {
  onYesClick: () => void;
}

export default function ValentinePrompt({ onYesClick }: ValentinePromptProps) {
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [showNo, setShowNo] = useState(true);

  const handleNoInteraction = () => {
    const newCount = noHoverCount + 1;
    setNoHoverCount(newCount);
    
    if (newCount >= 3) {
      setShowNo(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center animate-in fade-in duration-700">
      <div className="mb-8 flex justify-center">
        <Heart className="w-20 h-20 text-romantic-primary fill-romantic-primary animate-pulse" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-romantic-primary leading-tight">
        Will You Be My Valentine?
      </h1>
      
      <p className="text-xl md:text-2xl mb-12 text-romantic-secondary font-medium">
        I have something special to ask you... 💕
      </p>
      
      <ValentineActions 
        onYesClick={onYesClick}
        onNoInteraction={handleNoInteraction}
        showNo={showNo}
      />
    </div>
  );
}

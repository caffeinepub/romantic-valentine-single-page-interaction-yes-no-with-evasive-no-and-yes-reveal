import { useState } from 'react';
import ValentinePrompt from './ValentinePrompt';
import ValentineSuccess from './ValentineSuccess';

export default function ValentinePage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500">
      {!showSuccess ? (
        <ValentinePrompt onYesClick={handleYesClick} />
      ) : (
        <ValentineSuccess />
      )}
    </div>
  );
}

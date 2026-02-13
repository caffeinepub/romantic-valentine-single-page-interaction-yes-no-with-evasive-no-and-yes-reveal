import { Heart, Sparkles } from 'lucide-react';

export default function ValentineSuccess() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center animate-in fade-in zoom-in duration-700">
      <div className="mb-6 flex justify-center gap-4">
        <Sparkles className="w-12 h-12 text-romantic-accent animate-pulse" />
        <Heart className="w-16 h-16 text-romantic-primary fill-romantic-primary animate-bounce" />
        <Sparkles className="w-12 h-12 text-romantic-accent animate-pulse" />
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-romantic-primary leading-tight">
        Good choice Choosing me is..❤️
      </h1>
      
      <div className="mb-8 rounded-3xl overflow-hidden shadow-romantic-lg max-w-2xl mx-auto">
        <img 
          src="/assets/generated/valentine-meme.dim_1200x900.png" 
          alt="Valentine celebration meme"
          className="w-full h-auto"
        />
      </div>
      
      <div className="bg-romantic-card rounded-3xl p-8 md:p-12 shadow-romantic-lg border-2 border-romantic-border">
        <p className="text-lg md:text-xl text-romantic-text leading-relaxed whitespace-pre-line">
          IQRA, I just want to thank you from the bottom of my heart for choosing me as your life partner. It means more to me than words can truly explain. Your trust, your love, and the way you stand by me make my world brighter every single day. I promise to always respect you, support your dreams, and keep trying to become the person you deserve. With you, life feels more beautiful, more peaceful, and full of hope. I'm truly grateful to have you in my life, today and always. ❤️
        </p>
        <p className="text-2xl md:text-3xl font-bold text-romantic-primary mt-8">
          I love you my baby girl Iqra🐣💗💋
        </p>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Não",
      "Tem certeza?",
      "E se eu pedisse com carinho?",
      "Por favorzinho",
      "Com um brigadeiro em cima",
      "Que tal um açaí?",
      "POR FAVOR AMOR",
      "Mas :*(",
      "Vou morrer",
      "Pronto, morri",
      "Agora você está falando com meu fantasma",
      "por favor bebê",
      ":((((",
      "POR FAVOR VAI",
      "Eu imploro",
      "Não :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Eu te amo, minha princesa!! &lt;3</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Ana Gabriela, quer ser minha namorada para sempre?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sim
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Não" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

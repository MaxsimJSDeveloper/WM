interface secondVariantProps {
  firstCard: string;
  secondCard: string;
}

const SecondVariant = ({ firstCard, secondCard }: secondVariantProps) => {
  return (
    <div className="flex justify-between max-w-[340px] mx-auto mb-5">
      <div className="z-10 flex items-center rounded-lg p-4 w-[150px] h-[120px] bg-card transition-transform duration-300 transform hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg">
        <p className="text-center text-sm">{firstCard}</p>
      </div>
      <div className="z-10 flex items-center rounded-lg p-4 w-[150px] h-[120px] bg-card transition-transform duration-300 transform hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg">
        <p className="text-center text-sm">{secondCard}</p>
      </div>
    </div>
  );
};

export default SecondVariant;

interface linkProps {
  title: string;
  subtitle: string;
}

const LinkItem = ({ title, subtitle }: linkProps) => {
  return (
    <div rel="noopener noreferrer" aria-label={`${title} ${subtitle}`}>
      <div className="flex justify-center items-center flex-col text-[18px]">
        {title}
        <p className="text-[#d8d8d8] text-[14px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default LinkItem;

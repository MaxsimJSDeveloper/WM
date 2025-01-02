interface titleProps {
  text: string;
}

const Title = ({ text }: titleProps) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

export default Title;

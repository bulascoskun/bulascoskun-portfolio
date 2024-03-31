const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center justify-between mt-16">
      <div className="border-b border-stone-500 w-full" />
      <h2 className="text-5xl text-stone-200 container text-center">{title}</h2>
      <div className="border-b border-stone-500 w-full" />
    </div>
  );
};
export default SectionTitle;

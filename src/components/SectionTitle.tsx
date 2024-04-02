const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-8">
      <div className="border-b border-stone-500 w-full" />
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-200 text-center font-astronaut tracking-wider whitespace-nowrap">
        {title}
      </h2>
      <div className="border-b border-stone-500 w-full" />
    </div>
  );
};
export default SectionTitle;

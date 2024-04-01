const ContactRow = ({
  name,
  value,
  href,
}: {
  name: string;
  value: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="tracking-wider text-2xl">{name}</h3>
      <a href={href} target="_blank" className="font-mono pl-4">
        {value}
      </a>
    </div>
  );
};
export default ContactRow;

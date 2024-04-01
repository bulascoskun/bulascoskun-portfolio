import SectionTitle from '../SectionTitle';
import ContactRow from './ContactRow';
import Satellite from './Satellite';
import ContactForm from './ContactForm';

const contactRow = [
  {
    name: 'Mail',
    value: 'bulascoskun@outlook.com',
    href: 'mailto:bulascoskun@outlook.com',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/bulascoskun',
    href: 'https://www.linkedin.com/in/bulascoskun/',
  },
  {
    name: 'GitHub',
    value: 'github.com/bulascoskun',
    href: 'https://github.com/bulascoskun',
  },
];

const Contact = () => {
  return (
    <section className="overflow-hidden asteroid">
      <SectionTitle title="CONTACT" />

      <div className="flex justify-center gap-8 p-8">
        <div className="p-8 flex-1 flex flex-col gap-12">
          <h1 className="text-4xl tracking-wider underline underline-offset-[20px]">
            Let's work together!
          </h1>
          <div className="flex flex-col gap-8 pl-8">
            {contactRow.map((item, i) => {
              return <ContactRow key={i} {...item} />;
            })}
          </div>
        </div>
        <div className="flex-1 relative">
          <Satellite />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;

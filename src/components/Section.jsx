const Section = ({ children, last = false }) => (
  <section className={last ? '' : 'mb-16'}>
    {children}
  </section>
);

export default Section;

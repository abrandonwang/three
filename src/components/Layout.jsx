const Layout = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-black text-zinc-700 dark:text-white font-sans antialiased">
    <main className="max-w-[640px] mx-auto px-6 pt-10 pb-10 md:pt-[12vh] md:pb-[12vh]">
      {children}
    </main>
  </div>
);

export default Layout;

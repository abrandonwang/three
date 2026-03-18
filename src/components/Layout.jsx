const Layout = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-black text-zinc-700 dark:text-white font-sans antialiased">
    <main className="max-w-[640px] mx-auto px-6 pt-24 pb-24">
      {children}
    </main>
  </div>
);

export default Layout;

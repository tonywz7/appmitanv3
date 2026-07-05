export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
          <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
          </svg>
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight text-text-primary uppercase">
          Mitan
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-secondary">
        <a className="hover:text-accent transition-colors" href="#values">Values</a>
        <a className="hover:text-accent transition-colors" href="#how-it-works">How it Works</a>
        <a className="hover:text-accent transition-colors" href="#stories">Stories</a>
        <a className="hover:text-accent transition-colors" href="#pricing">Pricing</a>
      </nav>

      <div className="flex items-center gap-3">
        <button className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-primary hover:bg-accent-hover transition-all">
          Start Your Journey
        </button>
        <button className="hidden sm:inline-flex bg-gray-100 text-text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
          Log In
        </button>
      </div>
    </header>
  );
}

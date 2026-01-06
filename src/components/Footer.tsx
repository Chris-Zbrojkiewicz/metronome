const Footer = () => {
    const START_YEAR = 2005;
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className="w-full py-2 text-xs text-center sm:text-sm sm:py-4 text-[color:var(--text-muted)]">
            © {START_YEAR}
            {CURRENT_YEAR > START_YEAR && `–${CURRENT_YEAR}`}  {" "}
            <a
                href="https://chris-z.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
            >
                Chris Zbrojkiewicz
            </a>
        </footer>
    );
};

export default Footer;
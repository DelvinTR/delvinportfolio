export default function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10 justify-center">
            <nav>
                <h6 className="footer-title">Social</h6>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="link link-hover flex items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761
            0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966
            0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75
            1.75.784 1.75 1.75-.784 1.75-1.75
            1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868
            0-2.155 1.459-2.155 2.968v5.699h-3v-10h2.879v1.367h.041c.401-.761
            1.379-1.562 2.838-1.562 3.034 0 3.6 1.998
            3.6 4.594v5.601z" />
                    </svg>
                    LinkedIn
                </a>
            </nav>
        </footer>
    );
}

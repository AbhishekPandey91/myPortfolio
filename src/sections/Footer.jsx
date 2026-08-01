const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>MNNIT Allahabad</p>
        <p>|</p>
        <p>Electrical Engineering</p>
      </div>

      <div className="flex gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/AbhishekPandey91"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="GitHub">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pandeyabhishek25/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn">
          <svg className="w-1/2 h-1/2 fill-current text-white" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/code_Abhishek_pandey_/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LeetCode">
          <svg className="w-1/2 h-1/2 fill-current text-amber-400" viewBox="0 0 24 24">
            <path d="M16.102 17.93l-2.697 2.607c-.766.741-1.986.741-2.753 0l-6.839-6.61a2.04 2.04 0 0 1 0-2.825l6.839-6.61c.767-.741 1.987-.741 2.753 0l2.697 2.606a.586.586 0 0 1 0 .848.63.63 0 0 1-.864 0l-2.697-2.606a.798.798 0 0 0-1.1 0l-6.839 6.61a.816.816 0 0 0 0 1.129l6.839 6.61a.798.798 0 0 0 1.1 0l2.697-2.607a.63.63 0 0 1 .864 0 .586.586 0 0 1 0 .848zM20.811 13.01H10.666a.609.609 0 0 1-.609-.609c0-.336.273-.609.609-.609h10.145c.336 0 .609.273.609.609 0 .336-.273.609-.609.609z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/pandey.abhishek_/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="Instagram">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2026 Abhishek Pandey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

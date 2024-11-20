const Footer = () => {
    return (
        <div className="grid place-items-center p-5 pt-24 sm:pt-32">
            <div className="flex sm:flex-row w-full max-w-[22rem] items-center gap-2">
                <div className="h-px w-full sm:w-1/4 bg-current opacity-20"></div>
                <div className="shrink-0">A final year project, by</div>
                <div><a href="https://github.com/X-nimesh/Panoramer">
                    Nimesh Shrestha
                </a>
                </div>
            </div>


            <div className="mt-6 h-px w-full max-w-[22rem] bg-current opacity-20"></div>
            <div className="pt-10 sm:pt-20 text-center text-xs">
                <p>&copy; Panoramer, All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

function Footer() {
    return (
        <footer className="py-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}. All rights reserved.
        </footer>
    );
}

export default Footer;
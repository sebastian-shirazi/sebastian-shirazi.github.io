import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sebastian Shirazi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

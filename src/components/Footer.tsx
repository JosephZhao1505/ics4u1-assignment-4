import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
        
        <nav className="flex items-center space-x-4">
          <a 
            href="https://github.com/JosephZhao1505" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
          >
            <FaGithub />
          </a>
        </nav>

        <div className="text-center">
          <p className="text-sm font-medium">Taking up space on the internet since 2008</p>
          <p className="text-xs text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} BrokeFlix+. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
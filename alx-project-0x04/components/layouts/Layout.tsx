import { LayoutProps } from "@/interface";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Splash App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-3 mt-auto">
        <p className="text-sm">&copy; 2025 Splash App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

import { useState } from 'react';
import { Shield, Lock } from 'lucide-react';
import { useAuth, AuthProvider } from './AuthProvider';
import AuthModal from './AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedContent = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p>Authenticatie controleren...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white max-w-md mx-auto p-8">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Toegang Vereist</h1>
          <p className="text-gray-400 mb-8">
            Je moet ingelogd zijn om toegang te krijgen tot dit dashboard.
          </p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mx-auto"
          >
            <Lock className="w-5 h-5" />
            Inloggen
          </button>
        </div>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={() => setShowAuthModal(false)}
        />
      </div>
    );
  }

  return <>{children}</>;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return (
    <AuthProvider>
      <ProtectedContent>{children}</ProtectedContent>
    </AuthProvider>
  );
};

export default ProtectedRoute;
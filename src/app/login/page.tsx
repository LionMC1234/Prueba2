import Navbar from '@/components/Navbar';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 mt-16">
        <LoginForm />
      </div>
    </main>
  );
}

import Navbar from '@/components/Navbar';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 mt-16">
        <RegisterForm />
      </div>
    </main>
  );
}

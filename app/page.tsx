import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1
  
          className="text-6xl font-semibold text-white drop-shadow-md"
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A Simple Authentication Service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

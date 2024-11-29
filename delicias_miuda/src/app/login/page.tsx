import React from "react";
import Image from 'next/image';
import LoginForm from "../components/login/loginForm";
import chef from '../../../public/images/chef.jpg'

const Login: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200 flex flex-col justify-center items-center">
      <main className="flex flex-col bg-white items-center p-6 rounded-md gap-8">
        <Image
          width={200}
          priority
          className="h-full"
          src={chef}
          alt="Delicias miuda"
        />
        <LoginForm />

      </main>

    </div>
  );
};

export default Login;

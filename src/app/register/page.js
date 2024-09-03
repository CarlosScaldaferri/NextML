"use client";
import Button from "@/components/form/button/Buttom";
import Input from "@/components/form/input/Input";
import { HeaderContext } from "@/context";
import { useContext, useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const { setStandBy } = useContext(HeaderContext);

  setStandBy(true);

  return (
    <div className="flex justify-center items-start h-screen pt-10">
      <form
        className="bg-Form-background p-8 shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="flex justify-starttext-2xl font-bold mb-6 text-center">
          Criar Conta
        </h1>

        <div className="mb-4">
          <Input
            label="Nome"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <Input
            label="Número de Celular ou E-mail"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <Input
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full"
            required
          />
        </div>

        <div className="flex w-full justify-end">
          <Button type="submit" children="Continuar" />
        </div>

        <p className="mt-4 text-xs">
          Ao criar uma conta, você concorda com as{" "}
          <a href="#" className="text-link-default hover:underline">
            Condições de Uso
          </a>
          . Por favor, verifique a{" "}
          <a href="#" className="text-link-default hover:underline">
            Notificação de Privacidade
          </a>
          ,{" "}
          <a href="#" className="text-link-default hover:underline">
            Notificação de Cookies
          </a>{" "}
          e a{" "}
          <a href="#" className="text-link-default hover:underline">
            Notificação de Anúncios Baseados em Interesse
          </a>
          .
        </p>

        <p className="mt-6 text-center text-sm">
          Você já tem uma conta?{" "}
          <a href="#" className="text-link-default hover:underline">
            Fazer login
          </a>
        </p>
      </form>
    </div>
  );
}

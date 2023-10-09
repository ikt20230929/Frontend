import { Briefcase, KeyRound, Mail, User } from "lucide-react";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Form, FormItem, FormItemSet } from "./components/Form";
import { Header, HeaderItem } from "./components/Header";
import { generateRandomPassword } from "./passwordGenerator";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return [
    <Header title="Regisztráció" items={[
      <HeaderItem href="docs" text="Dokumentáció" />
    ]} />,

    <Form classes="container mx-auto" onsubmit={handleSubmit(onSubmit)} items={[
      <div className="space-y-2">
        <FormItemSet classes="join flex justify-center items-center" items={[
          <Controller name="name" control={control} render={({ field }) => [
              <User className="ml-3" />,
              <FormItem field={field} type="text" text="Név" />
          ]} />
        ]} />

        <FormItemSet classes="join flex justify-center items-center" items={[
          <Controller name="profession" control={control} render={({ field }) => [
              <Briefcase className="ml-3" />,
              <FormItem field={field} type="text" text="Foglalkozás" required={true} />
          ]} />
        ]} />


        <FormItemSet classes="join flex justify-center items-center" items={[
          <Controller name="email" control={control} render={({ field }) => [
              <Mail className="ml-3" />,
              <FormItem field={field} type="email" text="Email (.com/.hu/.net/.edu)" required={true} />
          ]} />
        ]} />

        <FormItemSet classes="join flex justify-center items-center" items={[
          <Controller name="password" control={control} render={({ field }) => [
              <KeyRound className="ml-3 w-12" />,
              <FormItem field={field} autocomplete="new-password" id="password" type="password" text="Jelszó" required={true} />
          ]} />,
          <FormItem type="button" onclick={() => {
            setValue("password", generateRandomPassword(16));
          }} classes="btn-ghost no-animation" text="Generálás" />
        ]} />
      </div>,

      <FormItemSet title="Életkor" items={[
        <div className="join gap-2">
          <Controller name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="18-20" />
          )} />
          <Controller name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="25-30" />
          )} />
          <Controller name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="21-24" />
          )} />
          <Controller name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="30+" />
          )} />
        </div>
      ]} />,

      <FormItemSet title="Nem" items={[
        <div className="join gap-10 flex justify-center items-center">
          <Controller name="gender" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Férfi" required={true} />
          )} />
          <Controller name="gender" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Nő" required={true} />
          )} />
        </div>
      ]} />,

      <FormItemSet title="Ágazat" items={[
        <div className="grid grid-cols-2 gap-x-12">
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Bányászat" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Egészségügy" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Építőipar" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Élelmiszeripar" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Épületgépészet" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Honvédelem" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Gépészet" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Kereskedelem" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Oktatás" required={true} />
          )} />
          <Controller name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Szociális" required={true} />
          )} />
        </div>
      ]} />,

      <FormItem type="submit" classes="mt-2" text="Regisztráció" />,
    ]} />
  ]
}

createRoot(document.getElementById("root")).render(<App />);

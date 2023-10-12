import { Briefcase, KeyRound, Mail, User } from "lucide-react";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Form, FormItem, FormItemSet } from "./components/Form";
import { Header, HeaderItem } from "./components/Header";
import { generateRandomPassword } from "./passwordGenerator";
import { Controller, useForm } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, setValue, trigger, formState: { errors } } = useForm({
    mode: "onChange"
  });

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
        <FormItemSet joined={true} error={errors.name && true} items={[
          <Controller rules={{required: true, pattern: /^[A-Z][^0-9]*$/}} name="name" control={control} render={({ field }) => [
            <User className="ml-3" />,
            <FormItem field={field} autocomplete="name" type="text" text="Név" />
          ]} />
        ]} />

        <FormItemSet joined={true} error={errors.profession && true} items={[
          <Controller rules={{ required: true }} name="profession" control={control} render={({ field }) => [
            <Briefcase className="ml-3" />,
            <FormItem field={field} autocomplete="organization-title" type="text" text="Foglalkozás" />
          ]} />
        ]} />


        <FormItemSet joined={true} error={errors.email && true} items={[
          <Controller rules={{required: true, pattern: /.*(\.com|\.hu|\.net|\.edu)/}} name="email" control={control} render={({ field }) => [
            <Mail className="ml-3" />,
            <FormItem field={field} autocomplete="email" type="email" text="Email (.com/.hu/.net/.edu)" />
          ]} />
        ]} />

        <FormItemSet joined={true} error={errors.password && true} items={[
          <Controller rules={{ required: true }} name="password" control={control} render={({ field }) => [
            <KeyRound className="ml-3 w-12" />,
            <FormItem field={field} autocomplete="new-password" id="password" type="password" text="Jelszó" />
          ]} />,
          <FormItem type="button" onclick={() => {
            setValue("password", generateRandomPassword(16));
            trigger("password");
          }} classes="btn-ghost no-animation" text="Generálás" />
        ]} />
      </div>,

      <FormItemSet title="Életkor" error={errors.agegroup && true} nofocus={true} items={[
        <div className="join gap-2">
          <Controller rules={{ required: true }} name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="18-20" />
          )} />
          <Controller rules={{ required: true }} name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="25-30" />
          )} />
          <Controller rules={{ required: true }} name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="21-24" />
          )} />
          <Controller rules={{ required: true }} name="agegroup" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="30+" />
          )} />
        </div>
      ]} />,

      <FormItemSet title="Nem" error={errors.gender && true} nofocus={true} items={[
        <div className="join gap-10 flex justify-center items-center">
          <Controller rules={{ required: true }} name="gender" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Férfi" />
          )} />
          <Controller rules={{ required: true }} name="gender" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Nő" />
          )} />
        </div>
      ]} />,

      <FormItemSet title="Ágazat" error={errors.field && true} nofocus={true} items={[
        <div className="grid grid-cols-2 gap-x-12">
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Bányászat" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Egészségügy" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Építőipar" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Élelmiszeripar" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Épületgépészet" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Honvédelem" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Gépészet" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Kereskedelem" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Oktatás" />
          )} />
          <Controller rules={{ required: true }} name="field" control={control} render={({ field }) => (
            <FormItem field={field} type="radio" text="Szociális" />
          )} />
        </div>
      ]} />,

      <FormItem type="submit" classes="mt-2" text="Regisztráció" />,
    ]} />
  ]
}

createRoot(document.getElementById("root")).render(<App />);

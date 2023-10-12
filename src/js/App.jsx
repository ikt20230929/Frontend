import { Briefcase, HelpCircle, KeyRound, Mail, User } from "lucide-react";
import React, { Fragment, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Controller, useForm, useWatch } from "react-hook-form";
import { Dialog } from "./components/Dialog";
import { Form, FormItem, FormItemSet, RadioButtonGroup } from "./components/Form";
import { Header, HeaderItem } from "./components/Header";
import { generateRandomPassword } from "./passwordGenerator";

export default function App() {
  const { control, handleSubmit, setValue, trigger, reset, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogText, setDialogText] = useState("");

  const gender = useWatch({
    control,
    name: "gender"
  });

  const onSubmit = (data) => {
    if (data.gender_custom) {
      data.gender = data.gender_custom;
    }

    setDialogTitle("Sikeres regisztráció!");
    setDialogText(`Név: ${data.name}
Foglalkozás: ${data.profession}
Email: ${data.email}
Jelszó: ${data.password}
Életkor: ${data.agegroup}
Nem: ${data.gender}
Ágazat: ${data.field}`);
    document.getElementById('status').showModal();
    
    reset();
    document.getElementById('register').reset();
  };

  return [
    <Header title="Regisztráció" items={[
      <HeaderItem href="docs" text="Dokumentáció" />
    ]} />,

    <Dialog id="status" title={dialogTitle} text={dialogText} />,

    <Form classes="container mx-auto" id="register" onsubmit={handleSubmit(onSubmit)} items={[
      <div className="space-y-2">
        <FormItemSet joined={true} error={errors.name} items={[
          <Controller rules={{
            required: {
              value: true,
              message: "A név mező nem lehet üres!"
            },
            pattern: {
              value: /^[A-Z][^0-9]*$/,
              message: "A megadott név nem felel meg a követelményeknek!"
            }
          }} name="name" control={control} defaultValue="" render={({ field }) => [
            <User className="ml-3" />,
            <FormItem field={field} autocomplete="name" type="text" text="Név" />
          ]} />
        ]} />

        <FormItemSet joined={true} error={errors.profession} items={[
          <Controller rules={{
            required: {
              value: true,
              message: "A foglalkozás mező nem lehet üres!"
            }
          }} name="profession" control={control} defaultValue="" render={({ field }) => [
            <Briefcase className="ml-3" />,
            <FormItem field={field} autocomplete="organization-title" type="text" text="Foglalkozás" />
          ]} />
        ]} />

        <FormItemSet joined={true} error={errors.email} items={[
          <Controller rules={{
            required: {
              value: true,
              message: "Az email mező nem lehet üres!"
            },
            pattern: {
              value: /.*@.*(\.com|\.hu|\.net|\.edu)/,
              message: "Az email cím nem felel meg a követelményeknek!"
            }
          }} name="email" control={control} defaultValue="" render={({ field }) => [
            <Mail className="ml-3" />,
            <FormItem field={field} autocomplete="email" type="email" text="Email (.com/.hu/.net/.edu)" />
          ]} />
        ]} />

        <FormItemSet joined={true} error={errors.password} items={[
          <Controller rules={{
            required: {
              value: true,
              message: "A jelsző mező nem lehet üres!"
            }
          }} name="password" control={control} defaultValue="" render={({ field }) => [
            <KeyRound className="ml-3 w-[2.79rem]" />,
            <FormItem field={field} autocomplete="new-password" id="password" type="password" text="Jelszó" />
          ]} />,
          <FormItem type="button" onclick={() => {
            setValue("password", generateRandomPassword(16));
            trigger("password");
          }} classes="btn-ghost no-animation" text="Generálás" />
        ]} />
      </div>,

      <FormItemSet title="Életkor" error={errors.agegroup} nofocus={true} items={[
        <RadioButtonGroup name="agegroup" options={[
          '18-20',
          '25-30',
          '21-24',
          '30+'
        ]} control={control} rules={{
          required: {
            value: true,
            message: "Ki kell választania a korcsoportját!"
          }
        }} />
      ]} />,

      <Fragment>
        <FormItemSet title="Nem" error={errors.gender} nofocus={true} items={[
          <div className="join gap-10 flex justify-center">
            <RadioButtonGroup name="gender" options={[
              'Férfi',
              'Nő',
              'Egyéb'
            ]} control={control} rules={{
              required: {
                value: true,
                message: "Ki kell választania a nemét!"
              }
            }} />
          </div>
        ]} />
        {gender == "Egyéb" && [
          <div className="mt-2">
            <FormItemSet joined={true} error={errors.gender_custom} nofocus={true} items={[
              <Controller rules={{
                required: {
                  value: true,
                  message: "Az egyéb mező nem lehet üres!"
                }
              }} name="gender_custom" control={control} defaultValue="" render={({ field }) => [
                <HelpCircle className="ml-3" />,
                <FormItem field={field} type="text" text="Adja meg a nemét!" />
              ]} />
            ]} />
          </div>
        ]}
      </Fragment>,

      <FormItemSet title="Ágazat" error={errors.field} nofocus={true} items={[
        <RadioButtonGroup name="field" grid={true} options={[
          'Bányászat',
          'Egészségügy',
          'Építőipar',
          'Élelmiszeripar',
          'Épületgépészet',
          'Honvédelem',
          'Gépészet',
          'Kereskedelem',
          'Oktatás',
          'Szociális'
        ]} control={control} rules={{
          required: {
            value: true,
            message: "Az ágazat mező nem lehet üres!"
          }
        }} />
      ]} />,

      <FormItem type="submit" classes="mt-2" text="Regisztráció" />
    ]} />
  ]
}

createRoot(document.getElementById("root")).render(<App />);

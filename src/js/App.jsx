import { Briefcase, Eye, EyeOff, HelpCircle, KeyRound, Mail, User } from "lucide-react";
import React, { Fragment, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Controller, useForm, useWatch } from "react-hook-form";
import { Dialog } from "./components/Dialog";
import { Form, FormItem, FormItemSet, RadioButtonGroup } from "./components/Form";
import { Header, HeaderItem } from "./components/Header";
import { generateRandomPassword } from "./passwordGenerator";

export default function App() {
  const defaults = {
    name: "",
    profession: "",
    email: "",
    password: "",
    gender_custom: "",
    agegroup: null,
    gender: null,
    field: null
  };

  const { control, handleSubmit, setValue, trigger, reset, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: defaults
  });

  const resetForm = () => {
    reset(defaults);
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
  }

  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogText, setDialogText] = useState("");
  const [hidePass, setHidePass] = useState(true);

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

    resetForm();
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
            validate: {
              firstLetter: (value) => /^[A-Z]/.test(value) || "A névnek nagybetűvel kell kezdődnie!",
              noNumbers: (value) => /^[^0-9]*$/.test(value) || "A név nem tartalmazhat számokat!"
            }
          }} name="name" control={control} render={({ field }) => [
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
          }} name="profession" control={control} render={({ field }) => [
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
            validate: {
              atSign: (value) => /@/.test(value) || "Az email címnek tartalmaznia kell egy @ jelet!",
              tld: (value) => /(\.com|\.hu|\.net|\.edu)$/.test(value) || "Az email címnek .com, .hu, .net vagy .edu végződésűnek kell lennie!"
            }
          }} name="email" control={control} render={({ field }) => [
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
          }} name="password" control={control} render={({ field }) => [
            <KeyRound className="ml-3 w-[4.387rem]" />,
            <FormItem field={field} classes="m-[1px]" autocomplete="new-password" id="password" type={hidePass ? "password" : "text"} text="Jelszó" />
          ]} />,
          <FormItem type="button" onclick={() => {
            setHidePass(!hidePass);
          }} classes="btn-ghost" text={hidePass ? <Eye/> : <EyeOff/>} />,
          <FormItem type="button" onclick={() => {
            setValue("password", generateRandomPassword(16));
            trigger("password");
          }} classes="btn btn-ghost no-animation" text="Generálás" />
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
              }} name="gender_custom" control={control} render={({ field }) => [
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

      <FormItem type="submit" classes="btn mt-2" text="Regisztráció" />
    ]} />
  ]
}

createRoot(document.getElementById("root")).render(<App />);

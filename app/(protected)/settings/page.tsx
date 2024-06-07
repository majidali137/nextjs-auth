// "use client";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useTransition, useState, useEffect } from "react";
// import { settings } from "@/actions/settings";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { useSession } from "next-auth/react";
// import { SettingsSchema } from "@/Schemas";
// import {
//   Form,
//   FormField,
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormDescription,
// } from "@/components/ui/form";

// import { Switch } from "@/components/ui/switch";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Input } from "@/components/ui/input";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { FormSuccess } from "@/components/form-success";
// import { FormError } from "@/components/form-error";
// import { UserRole } from "@prisma/client";

// const SettingsPage = () => {
//   const user = useCurrentUser();

//   const [error, setError] = useState<string | undefined>();
//   const [success, setSuccess] = useState<string | undefined>();
//   const { update } = useSession();
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof SettingsSchema>>({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       password: undefined,
//       newPassword: undefined,
//       name: user?.name || undefined,
//       email: user?.email || undefined,
//       role: user?.role || undefined,
//       isTwoFactorEnable: user?.isTwoFactorEnable || undefined,
//     },
//   });

//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings(values)
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }
//           if (data.success) {
//             update();
//             setSuccess(data.success);
//           }
//         })
//         .catch(() => setError("Something went wrong!"));
//     });
//   };

//   return (
//     <div className="w-full px-2 items-center justify-center flex ">
//       <Card className="sm:w-[600px] w-full">
//         <CardHeader>
//           <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//               <div className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input
//                           {...field}
//                           placeholder="Please Enter Name"
//                           disabled={isPending}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 {user?.isOAuth === false && (
//                   <>
//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Email</FormLabel>
//                           <FormControl>
//                             <Input
//                               {...field}
//                               type="email"
//                               placeholder="example@mail.com"
//                               disabled={isPending}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="password"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Password</FormLabel>
//                           <FormControl>
//                             <Input
//                               {...field}
//                               type="password"
//                               placeholder="******"
//                               disabled={isPending}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="newPassword"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>New Password</FormLabel>
//                           <FormControl>
//                             <Input
//                               {...field}
//                               type="password"
//                               placeholder="******"
//                               disabled={isPending}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </>
//                 )}

//                 <FormField
//                   control={form.control}
//                   name="role"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Role</FormLabel>
//                       <Select
//                         disabled={isPending}
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select a role" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
//                           <SelectItem value={UserRole.USER}>User</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {user?.isOAuth === false && (
//                   <FormField
//                     control={form.control}
//                     name="isTwoFactorEnable"
//                     render={({ field }) => (
//                       <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//                         <div className="space-y-0.5">
//                           <FormLabel>Two Factor Authentication</FormLabel>
//                           <FormDescription>
//                             Enable two factor authentication for your account
//                           </FormDescription>
//                         </div>
//                         <FormControl>
//                           <Switch
//                             disabled={isPending}
//                             checked={field.value}
//                             onCheckedChange={field.onChange}
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 )}
//               </div>
//               <FormError message={error} />
//               <FormSuccess message={success} />
//               <Button type="submit" disabled={isPending}>
//                 Save
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SettingsPage;




"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState, useEffect } from "react";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { SettingsSchema } from "@/Schemas";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { UserRole } from "@prisma/client";
import ClipLoader from "react-spinners/ClipLoader";

const SettingsPage = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnable: user?.isTwoFactorEnable || undefined,
    },
  });

  useEffect(() => {
    form.reset({
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || undefined,
      isTwoFactorEnable: user?.isTwoFactorEnable || false,
    });
  }, [user, form]);

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#000" size={50} />
      </div>
    );
  }

  return (
    <div className="w-full px-2 items-center justify-center flex ">
      <Card className="sm:w-[600px] w-full">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Please Enter Name"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {user?.isOAuth === false && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="example@mail.com"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="******"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="******"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value || undefined}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                          <SelectItem value={UserRole.USER}>User</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {user?.isOAuth === false && (
                  <FormField
                    control={form.control}
                    name="isTwoFactorEnable"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Two Factor Authentication</FormLabel>
                          <FormDescription>
                            Enable two factor authentication for your account
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            disabled={isPending}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" disabled={isPending}>
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;

















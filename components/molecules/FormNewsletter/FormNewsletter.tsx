"use client";

// Import zod dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Import library dependencies
import { Input } from "@/components/atoms/Input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/Form";
import { MoveRight } from "lucide-react";
import Button from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

// Validation schema
const formSchema = z.object({
  email: z.string().email("Please type a valid email."),
});

// types

interface FormNewsletterProps {
  title?: string;
  className?: string;
}

/// Form
export default function FormNewsletter({
  title,
  className,
}: FormNewsletterProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  /// That's the submit function and we could add more code in the future here.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/klaviyo-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });

      if (response.status === 200) {
        console.log("Subscription successful");
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "w-full max-w-[200px] space-y-8 xl:min-w-[200px]",
          className
        )}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {title && <FormLabel>{title}</FormLabel>}
              <FormControl className="relative">
                <div className="relative">
                  <Input
                    placeholder="enter your email"
                    {...field}
                    className="relative z-10 pr-8"
                  />
                  <Button
                    variant={"none"}
                    className="absolute right-0 top-[8px] z-20 h-auto p-0"
                  >
                    <MoveRight strokeWidth={1} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

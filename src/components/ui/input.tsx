import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-mist px-3.5 font-sans text-sm text-ink shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-lg bg-mist px-3.5 py-3 font-sans text-sm text-ink shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss",
        className,
      )}
      {...props}
    />
  );
}

export function NativeSelect({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-md bg-mist bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3.5 pr-10 font-sans text-sm text-ink shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%231B2318' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
      }}
      {...props}
    >
      {children}
    </select>
  );
}

export function FieldLabel({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block font-sans text-xs font-medium uppercase tracking-[0.16em] text-sage",
        className,
      )}
      {...props}
    />
  );
}

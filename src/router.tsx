import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="kicker">Lost in the fernery</p>
      <h1 className="font-display text-4xl text-ink">This path is overgrown</h1>
      <p className="max-w-sm text-sage">
        The page you asked for isn’t planted here. Return to the house.
      </p>
      <a
        href="/"
        className="pressable inline-flex h-11 items-center rounded-md bg-moss px-5 text-sm font-medium text-cream transition-colors duration-150 hover:bg-moss-deep"
      >
        Back to The Glasshouse
      </a>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}

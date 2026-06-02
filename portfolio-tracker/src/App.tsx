import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SignIn, SignUp, Show, useClerk, ClerkLoading } from "@clerk/react";
import { useEffect, useRef } from "react";

import { Layout } from "@/components/layout";
import { FxProvider } from "@/lib/fx-context";
import { PrivacyProvider } from "@/lib/privacy-context";
import Dashboard from "@/pages/dashboard";
import Portfolios from "@/pages/portfolios";
import PortfolioDetail from "@/pages/portfolio-detail";
import Transactions from "@/pages/transactions";
import Watchlists from "@/pages/watchlists";
import Alerts from "@/pages/alerts";
import DividendCalendar from "@/pages/dividend-calendar";
import CsvImportExport from "@/pages/csv";
import Settings from "@/pages/settings";
import TaxReport from "@/pages/tax-report";
import Feedback from "@/pages/feedback";
import Notes from "@/pages/notes";
import Recurring from "@/pages/recurring";
import Sizer from "@/pages/sizer";
import Analytics from "@/pages/analytics";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}

function LandingPage() {
  const [, setLocation] = useLocation();
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase opacity-70">
            Portfolio Tracker
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground">Folio</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A unified command center for multi-market investors. Track PSE, LSE, US stocks, crypto, and custom holdings — all in one place.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setLocation("/sign-in")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-sign-in"
          >
            Sign In
          </button>
          <button
            onClick={() => setLocation("/sign-up")}
            className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-colors"
            data-testid="button-sign-up"
          >
            Create Account
          </button>
        </div>
        <p className="text-xs text-muted-foreground/60">
          Real-time prices. Multi-currency. Dividend calendar. Price alerts.
        </p>
      </div>
    </div>
  );
}

function HomeRedirect() {
  return (
    <>
      <ClerkLoading>
        <div className="flex min-h-[100dvh] items-center justify-center bg-background">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </ClerkLoading>
      <Show when="signed-in">
        <Redirect to="/dashboard" />
      </Show>
      <Show when="signed-out">
        <LandingPage />
      </Show>
    </>
  );
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function ProtectedRoutes() {
  return (
    <>
      <ClerkLoading>
        <div className="flex min-h-[100dvh] items-center justify-center bg-background">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </ClerkLoading>
      <Show when="signed-in">
        <PrivacyProvider>
          <FxProvider>
            <Layout>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/portfolios" component={Portfolios} />
                <Route path="/portfolios/:id" component={PortfolioDetail} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/watchlists" component={Watchlists} />
                <Route path="/alerts" component={Alerts} />
                <Route path="/dividend-calendar" component={DividendCalendar} />
                <Route path="/csv" component={CsvImportExport} />
                <Route path="/tax-report" component={TaxReport} />
                <Route path="/notes" component={Notes} />
                <Route path="/recurring" component={Recurring} />
                <Route path="/sizer" component={Sizer} />
                <Route path="/analytics" component={Analytics} />
                <Route path="/settings" component={Settings} />
                <Route path="/feedback" component={Feedback} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </FxProvider>
        </PrivacyProvider>
      </Show>
      <Show when="signed-out">
        <Redirect to="/" />
      </Show>
    </>
  );
}

function App() {
  useEffect(() => {
    const saved = (localStorage.getItem("folio_theme") ?? "dark") as "system" | "light" | "dark";
    const apply = () => {
      const dark = saved === "dark" || (saved === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", dark);
    };
    apply();
    if (saved !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <TooltipProvider>
      <WouterRouter>
        <QueryClientProvider client={queryClient}>
          <ClerkQueryClientCacheInvalidator />
          <Switch>
            <Route path="/" component={HomeRedirect} />
            <Route path="/sign-in/*?" component={SignInPage} />
            <Route path="/sign-up/*?" component={SignUpPage} />
            <Route path="/*" component={ProtectedRoutes} />
          </Switch>
        </QueryClientProvider>
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;

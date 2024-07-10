"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Feed from "./Feed";
import { Suspense } from "react";
import PostSkeleton from "../posts/PostSkeleton";

const queryClient = new QueryClient();

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default function FeedClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<PostSkeleton />}>
          <Feed />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

import { PageError } from "@/widgets/PageError";
import * as React from "react";

interface ErrorBoundaryProp {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: false;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProp,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProp) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageError />;
    }

    return this.props.children;
  }
}

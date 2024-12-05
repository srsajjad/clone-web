"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <span className="text-sm text-red-600">
          Failed to load data — please try later
        </span>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

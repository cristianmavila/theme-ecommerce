// React dependencies
import { ReactElement } from "react";

// types
interface ConditionalWrapperProps {
  children: ReactElement;
  condition: boolean;
  wrapper: (children: ReactElement) => JSX.Element;
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;

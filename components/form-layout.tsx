import formLayoutStyles from "./form-layout.module.css";

import { forwardRef, ForwardedRef, PropsWithChildren } from "react";

export const FormLayout = forwardRef(function (
  {
    children,
    onSubmit,
  }: PropsWithChildren<{
    onSubmit?: () => void;
  }>,
  ref: ForwardedRef<HTMLFormElement>
) {
  return (
    <form ref={ref} className={formLayoutStyles.forms} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

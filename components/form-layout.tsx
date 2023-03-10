import formLayoutStyles from '../styles/form-layout.module.css';

import { forwardRef, ForwardedRef, PropsWithChildren } from 'react';

export default forwardRef(function FormLayout(
  {
    children,
    onSubmit,
  }: PropsWithChildren<{
    onSubmit?: () => void;
  }>,
  ref: ForwardedRef<HTMLFormElement>,
) {
  return (
    <form ref={ref} className={formLayoutStyles.forms} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

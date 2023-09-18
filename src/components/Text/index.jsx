import React from "react";

const sizeClasses = {
  txtLufgaMedium19: "font-lufga font-medium",
  txtLufgaRegular14: "font-lufga font-normal",
  txtLufgaMedium16: "font-lufga font-medium",
  txtLufgaMedium38: "font-lufga font-medium",
  txtLufgaRegular18: "font-lufga font-normal",
  txtLufgaSemiBold28: "font-lufga font-semibold",
  txtLufgaMedium24: "font-lufga font-medium",
  txtLufgaRegular22: "font-lufga font-normal",
  txtLufgaSemiBold20: "font-lufga font-semibold",
  txtLufgaRegular13: "font-lufga font-normal",
  txtLufgaSemiBold54: "font-lufga font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

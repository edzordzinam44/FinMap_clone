import React from "react";

const primaryTextColor = 'text-primary-foreground';
const primaryHoverTextColor = 'hover:text-primary-foreground/80';
const primaryBgColor = 'bg-primary';
const bgBackgroundColor = 'bg-background';
const primaryWidth = 'w-1/4';
const padding = 'p-4';
const fontWeight = 'font-semibold';
const textSize = 'text-lg';
const marginBottom = 'mb-4';
const paddingY = 'py-2';
const block = 'block';

const Menu = () => {
  return (
    <div className="flex h-screen">
      <div className={`${primaryBgColor} ${primaryWidth} ${padding}`}>
        <h2 className={`${primaryTextColor} ${textSize} ${fontWeight} ${marginBottom}`}>Menu</h2>
        <ul>
          <li className={paddingY}>
            <a href="./sigup" className={`${block} ${primaryTextColor} ${primaryHoverTextColor}`}>Dashboard</a>
          </li>
          <li className={paddingY}>
            <a href="./contact" className={`${block} ${primaryTextColor} ${primaryHoverTextColor}`}>Expenses</a>
          </li>
          <li className={paddingY}>
            <a href="./home" className={`${block} ${primaryTextColor} ${primaryHoverTextColor}`}>Loan</a>
          </li>
          <li className={paddingY}>
            <a href="./login" className={`${block} ${primaryTextColor} ${primaryHoverTextColor}`}>Debts</a>
          </li>
        </ul>
      </div>

      <div className={`flex-1 ${bgBackgroundColor} ${padding}`}></div>
    </div>
  );
};

export default Menu;
import * as React from "react";

type IconProps = React.SVGAttributes<SVGSVGElement>;

// Shared defaults so every gig-category icon stays visually consistent:
// 64x64 viewBox, 2.6px stroke, rounded joins. Override via props if needed.
function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

export function TutorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 16c8-4 16-4 22 0v34c-6-4-14-4-22 0Z" />
      <path d="M54 16c-8-4-16-4-22 0v34c6-4 14-4 22 0Z" />
    </svg>
  );
}

export function DeliveryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="16" cy="46" r="8" />
      <circle cx="48" cy="46" r="8" />
      <path d="M16 46 26 22h14l8 24M26 22l-6 12h20" />
    </svg>
  );
}

export function TechIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="12" y="10" width="40" height="26" rx="2" />
      <path d="M6 44h52l-6 8H12Z" />
      <path d="M40 20l6 6-6 6M28 20l-6 6 6 6" />
    </svg>
  );
}

export function EventIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 40V22a10 10 0 0 1 20 0v18" />
      <path d="M42 40V26a8 8 0 0 1 16 0v14" />
      <rect x="8" y="40" width="48" height="12" rx="3" />
    </svg>
  );
}

export function MoveIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 22 32 10l24 12-24 12Z" />
      <path d="M8 22v20l24 12 24-12V22" />
      <path d="M32 34v20" />
    </svg>
  );
}

export function DesignIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 50 42 22a5 5 0 0 0-7-7L7 43l-2 9Z" />
      <path d="M34 15l7 7" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

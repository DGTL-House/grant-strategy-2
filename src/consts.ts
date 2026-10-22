// Shared config + copy for the grant-strategy landing.

// On-page CTAs scroll to the final CTA block (#book); its button is the one
// that opens the booking widget. Same split as nonprofit-next.
export const BOOK_HREF = "#book";
export const BOOK_CALL =
  "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits";

export const CONTACT = {
  email: "nonprofit@dgtl-house.com",
  phone: "+1 (224) 313-4445",
  phoneHref: "tel:+12243134445",
  address: "1635 Eagle Grove Ct., Wheeling, IL 60090",
} as const;

// Header / mobile menu / bottom pill nav. Figma's mobile menu lists
// "What's Ad Budget" and "FAQ", which have no section on the page, so every
// menu uses the desktop header's labels instead.
export const NAV = [
  { label: "Results", href: "#results" },
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#how-it-works" },
] as const;

// TODO: real profile URLs — neither the layout nor the sibling projects have
// them yet, so the icons point nowhere for now.
export const SOCIALS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
] as const;

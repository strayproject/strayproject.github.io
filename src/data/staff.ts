export type StaffMember = {
  name: string;
  img?: string;
  role: string;
  text?: string;
  twitter?: string;
};

export const staffMembers: StaffMember[] = [
  {
    name: "NekoPanda",
    img: "assets/img/staff/nekopanda.webp",
    role: "Leader",
    text: "Originally founded the Stray Project.",
  },
  {
    name: "Nathan",
    img: "assets/img/staff/nathan.webp",
    role: "Writer",
  },
  {
    name: "Adjy",
    img: "assets/img/staff/adjy.webp",
    role: "Writer",
    twitter: "AdjyHarby",
  },
  {
    name: "Treble",
    img: "assets/img/staff/treb.webp",
    role: "Writer",
  },
  {
    name: "Flunky",
    img: "assets/img/staff/flunky.jpg",
    role: "Drawer",
    twitter: "fwflunky",
  },
  {
    name: "Rex Revon",
    img: "assets/img/staff/rex.webp",
    role: "Musician",
  },
  {
    name: "Zammu",
    role: "Musician",
  },
  {
    name: "brandon pow",
    img: "assets/img/staff/brandonpow.webp",
    role: "GUI Coder",
    text: "urrrrrr. (webmaster of this website!)",
  },
  {
    name: "haku (alias 'none')",
    role: "Script Coder",
  },
  {
    name: "Kara",
    img: "assets/img/staff/kara.webp",
    role: "Office Kitty",
    twitter: "",
  },
];

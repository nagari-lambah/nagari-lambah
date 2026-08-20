import NavbarNagari from "./NavbarNagari";
import SiteFooter from "./SiteFooter";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen text-slate-800"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <NavbarNagari />
      {children}
      <SiteFooter />
    </main>
  );
}

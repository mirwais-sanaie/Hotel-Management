import SideNavigation from "../_components/SideNavigation";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default layout;

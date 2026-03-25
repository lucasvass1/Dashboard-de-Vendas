import { Sidebar } from "./sidebar/sidebar";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        {children}
      </main>

    </div>
  );
}
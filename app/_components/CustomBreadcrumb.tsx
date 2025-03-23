import { Breadcrumb, ConfigProvider } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const CustomBreadcrumb = () => {
  const pathname = usePathname();

  // Generate breadcrumb items based on the current pathname
  const generateBreadcrumbItems = (pathname: string): ItemType[] => {
    const paths = pathname.split("/").filter((path) => path);
    return [
      {
        title: <p className="text-md text-textColor">Home</p>,
        href: "/",
      },
      ...paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        return {
          title: (
            <p className="text-md text-textColor">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </p>
          ),
          href,
        };
      }),
    ];
  };

  const items = useMemo(() => generateBreadcrumbItems(pathname), [pathname]);

  // Custom render function for breadcrumb items
  const renderBreadcrumbItem = (
    route: ItemType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _: any,
    routes: ItemType[],
    paths: string[],
  ) => {
    const isLast = routes.indexOf(route) === routes.length - 1;
    const href = `/${paths.slice(0, routes.indexOf(route) + 1).join("/")}`;

    return isLast ? (
      <span className="text-md text-textColor">{route.title}</span>
    ) : (
      <Link href={href} className="text-md text-textColor">
        {route.title}
      </Link>
    );
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Breadcrumb: {
              separatorColor: "var(--color-textColor)",
            },
          },
        }}
      >
        <Breadcrumb
          separator="/"
          className="text-textColor"
          items={items}
          itemRender={renderBreadcrumbItem}
        />
      </ConfigProvider>
    </div>
  );
};
export default CustomBreadcrumb;

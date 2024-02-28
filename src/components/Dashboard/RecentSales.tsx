import React, { useMemo, useRef } from "react";
import { getDefaultFilter } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import {
  FunnelIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
export const RecentSales = () => {
  const filterForm: any = useRef(null);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "Id",
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: "Amount",
        cell: function render({ getValue }) {
          const amountCur = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(getValue() as number);

          return <div>{amountCur}</div>;
        },
      },
      {
        id: "orderedBy",
        accessorKey: "user.fullName",
        header: "Ordered By",
      },
      {
        id: "gender",
        accessorKey: "user.gender",
        header: "Gender",
      },
      {
        id: "tel",
        accessorKey: "user.gsm",
        enableSorting: false,
        header: "Tel",
      },
      {
        id: "deliveryAddress",
        accessorKey: "adress.text",
        header: "Delivery Address",
      },
      {
        id: "deliveryStatus",
        accessorKey: "status.text",
        header: "Delivery Status",
        cell: function render({ getValue }) {
          type TSaleStatusStyleMap = {
            [key: string]: string;
          };

          const saleStatusStyleMap: TSaleStatusStyleMap = {
            Cancelled: "error",
            Ready: "primary",
            "On The Way": "info",
            Pending: "warning",
            Delivered: "success",
          };

          const status = getValue() as string;
          const daisyBadgeClasses = () =>
            "badge badge-" + saleStatusStyleMap[status];

          return <div className={daisyBadgeClasses()}>{status}</div>;
        },
      },
      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: "Created At",
        cell: function render({ getValue }) {
          const date = new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(new Date(getValue() as string));

          return <div>{date}</div>;
        },
      },
    ],
    []
  );

  const {
    refineCore: { filters, setCurrent, setFilters },
    getHeaderGroups,
    getRowModel,
  } = useTable({
    refineCoreProps: {
      resource: "orders",
      pagination: {
        pageSize: 5,
      },
    },
    columns,
  });

  const header = <div className="w-full mx-auto"></div>;

  return <div className="w-full mx-auto my-8 drop-shadow-md"></div>;
};

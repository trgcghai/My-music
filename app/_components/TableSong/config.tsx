import { formatSongLength } from "@utils/formatSongLength";

export const columns = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    width: 20,
    render: (text: string) => {
      return <p className="m-w-[10px]">{text}</p>;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 450,
    render: (text: string) => {
      return (
        <p className="w-[450px] overflow-hidden truncate whitespace-nowrap">
          {text}
        </p>
      );
    },
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    width: 100,
  },
  {
    title: "Artist",
    dataIndex: "artist",
    key: "artist",
    width: 200,
  },
  {
    title: "Album",
    dataIndex: "album",
    key: "album",
    width: 450,
    render: (text: string) => {
      return (
        <p className="w-[450px] overflow-hidden truncate whitespace-nowrap">
          {text}
        </p>
      );
    },
  },
  {
    title: "Length",
    dataIndex: "length",
    key: "length",
    render: (text: number) => {
      return <p>{formatSongLength(text)}</p>;
    },
  },
];

export const tableThemeConfig = {
  token: {
    colorText: "var(--textColor)",
  },
  components: {
    Table: {
      // Header styles
      headerBg: "var(--bgColor)",
      headerColor: "var(--textColor)",
      headerSplitColor: "transparent",
      borderColor: "transparent",

      // Row styles
      rowHoverBg: "var(--bgColorLight)",
      rowSelectedBg: "var(--bgColorLight)",
      rowSelectedHoverBg: "var(--bgColorLight)",
      rowExpandedBg: "var(--bgColorLight)",

      // Border styles
      headerBorderRadius: 0,
    },
    Pagination: {
      itemBg: "var(--bgColor)",
      itemActiveBg: "var(--bgColorLight)",
    },
  },
};

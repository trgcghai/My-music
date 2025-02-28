import { Table, ConfigProvider } from "antd";
import { columns, tableThemeConfig } from "./config";

const TableSongs = ({
  singlePage,
  songs,
  handleContextMenu,
}: TableSongProps) => {
  return (
    <ConfigProvider theme={tableThemeConfig}>
      <Table
        rowClassName="bg-bgColor"
        columns={columns}
        pagination={{
          hideOnSinglePage: singlePage,
          responsive: true,
          showSizeChanger: false,
        }}
        onRow={(record) => {
          return {
            onContextMenu: (event) => {
              handleContextMenu(event, record.id);
            },
          };
        }}
        dataSource={songs}
      />
    </ConfigProvider>
  );
};

export default TableSongs;

interface TableSongProps {
  singlePage: boolean;
  songs: SongRowProps[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleContextMenu: (event: React.MouseEvent, data: any) => void;
}

interface SongRowProps {
  index: number;
  id: string;
  title: string;
  year: string;
  artist: string;
  album: string;
  length: number;
  key: string;
}

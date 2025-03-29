import { Table, ConfigProvider } from "antd";
import { columns, tableThemeConfig } from "./config";
import { SongRowProps } from "_types/component";

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
              handleContextMenu(event, record);
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
  handleContextMenu: (event: React.MouseEvent, data: SongRowProps) => void;
}

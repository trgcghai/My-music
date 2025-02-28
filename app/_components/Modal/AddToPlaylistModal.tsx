import Loading from "@components/Loading";
import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@libs/hooks";
import { AddCircleOutline } from "@mui/icons-material";
import {
  useAddSongToPlaylistMutation,
  useCreatePlaylistWithSongMutation,
  useGetPlaylistByEmailQuery,
} from "@services/playlistApi";
import { useGetSongByIdQuery } from "@services/songApi";
import { DynamicModalProps } from "_types/component";
import { Playlist } from "_types/entity";
import { Button, Checkbox, CheckboxChangeEvent, Divider, Modal } from "antd";
import { useEffect, useState } from "react";

const PlaylistCheckbox = ({
  setSelectedPlaylists,
  selectedPlaylists,
  playlist,
  disabled,
}: {
  setSelectedPlaylists: (value: string[]) => void;
  selectedPlaylists: string[];
  playlist: Playlist;
  disabled: boolean;
}) => {
  const [checked, setChecked] = useState<boolean>();
  const { data } = useAppSelector((state) => state.modal);

  useEffect(() => {
    setChecked(playlist.songs.map((song) => song._id).includes(data.songId));
  }, [data.songId, playlist.songs]);

  const handleOnChange = (e: CheckboxChangeEvent) => {
    if (disabled) return;

    setChecked(e.target.checked);

    if (e.target.checked) {
      setSelectedPlaylists([...selectedPlaylists, playlist._id]);
    } else {
      setSelectedPlaylists(
        selectedPlaylists.filter((id) => id !== playlist._id),
      );
    }
  };

  return (
    <Checkbox
      checked={checked}
      className={`text-lg text-textColor`}
      onChange={handleOnChange}
    >
      {playlist.name}
    </Checkbox>
  );
};

const AddToPlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const { open, title, data } = useAppSelector((state) => state.modal);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [selectedPlaylists, setSelectedPlaylists] = useState<string[]>([]);
  const {
    data: playlistData,
    isLoading: loadingPlaylist,
    isFetching: fetchingPlaylist,
  } = useGetPlaylistByEmailQuery(userInfo.email);
  const [addSongToPlaylist] = useAddSongToPlaylistMutation();
  const [createPlaylistWithSong] = useCreatePlaylistWithSongMutation();
  const { data: songData } = useGetSongByIdQuery(data.songId);

  const handleCreatePlaylistWithSong = async () => {
    const title = songData.result[0].metadata.common.title;
    const createResult = await createPlaylistWithSong({
      playlist: title,
      userInfo,
      songId: data.songId,
    }).unwrap();

    console.log(createResult);

    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    const { songId } = data;
    const setPlaylists = [...new Set(selectedPlaylists)];

    const result = await addSongToPlaylist({
      songId,
      listPlaylists: setPlaylists,
    }).unwrap();

    console.log(result);

    setSelectedPlaylists([]);
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      {...props}
      open={open}
      title={title}
      onOk={handleConfirm}
      onCancel={handleCancel}
    >
      {(fetchingPlaylist || loadingPlaylist) && <Loading />}
      <div className="my-4 flex flex-col items-start gap-2">
        {playlistData?.result &&
          playlistData?.result.length > 0 &&
          playlistData?.result.map((playlist) => {
            return (
              <PlaylistCheckbox
                key={playlist._id}
                playlist={playlist}
                setSelectedPlaylists={setSelectedPlaylists}
                selectedPlaylists={selectedPlaylists}
                disabled={playlist.songs
                  .map((song) => song._id)
                  .includes(data.songId)}
              />
            );
          })}
      </div>
      <Divider
        style={{ borderColor: "var(--textColor)", color: "var(--textColor)" }}
      >
        Or
      </Divider>
      <Button
        className="my-4 w-full border-0 bg-main text-lg text-white hover:!bg-bgColorSuperLight"
        onClick={() => handleCreatePlaylistWithSong()}
      >
        <AddCircleOutline></AddCircleOutline>
        Create new playlist with this song
      </Button>
    </Modal>
  );
};
export default AddToPlaylistModal;

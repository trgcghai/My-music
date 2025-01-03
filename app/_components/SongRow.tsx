const SongRow = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-textDark hover:bg-bgLightColor">
      <p className="flex-[3] border-r border-r-bgLightColor">Song name</p>
      <p className="flex-1 border-r border-r-bgLightColor text-center">
        Author
      </p>
      <p className="flex-1 text-center">Length</p>
    </div>
  );
};
export default SongRow;

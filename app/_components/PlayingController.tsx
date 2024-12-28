import OptmizeImage from "./OptmizeImage";

const PlayingController = () => {
  return (
    <div className="bg-bgDarkColor flex h-20 items-center justify-between px-4 text-textColor">
      <div className="flex items-center gap-2">
        <OptmizeImage
          src="https://placehold.co/60x60"
          width={60}
          height={60}
          className="rounded-md"
        />
        <div>
          <p className="text-lg">Song name</p>
          <p className="text-md text-textDark">Author name</p>
        </div>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};
export default PlayingController;

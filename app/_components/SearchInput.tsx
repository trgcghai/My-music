import { Input } from "antd";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="mb-2 text-xl font-bold">Search song</p>
      <Input
        variant="outlined"
        className="!h-[40px] !w-[500px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main"
      />
    </div>
  );
};
export default SearchInput;

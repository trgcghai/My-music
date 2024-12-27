import { Input } from "antd";

const SearchInput = () => {
  return (
    <>
      <p className="text-lg font-bold">Search</p>
      <Input
        variant="outlined"
        className="!h-[40px] !w-[500px] !rounded-lg !bg-bgLightColor hover:border-main"
      />
    </>
  );
};
export default SearchInput;

import { ConfigProvider, Slider } from "antd";

const CustomSlider = ({
  className = "",
  value,
  onChange,
  step = 1,
  minValue = 0,
  maxValue = 100,
}: {
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
  step?: number;
  minValue?: number;
  maxValue?: number;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            trackBg: "white",
            trackHoverBg: "var(--main)",
            railBg: "var(--bgColorLight)",
          },
        },
      }}
    >
      <Slider
        className={className}
        value={value}
        onChange={onChange}
        step={step}
        defaultValue={minValue}
        max={maxValue}
        min={minValue}
      />
    </ConfigProvider>
  );
};
export default CustomSlider;

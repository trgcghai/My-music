import { Card, Form, Switch, Button, ColorPicker } from "antd";

interface SettingItemProps {
  title: string;
  description: string;
  name: string;
  defaultChecked?: boolean;
}

function SettingItem({
  title,
  description,
  name,
  defaultChecked = false,
}: SettingItemProps) {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      initialValue={defaultChecked}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-white">{title}</p>
          <p className="text-md text-gray-400">{description}</p>
        </div>
        <Switch defaultChecked={defaultChecked} />
      </div>
    </Form.Item>
  );
}

export default function SettingsContent() {
  return (
    <Card
      title={<p className="text-lg">App Settings</p>}
      bordered={false}
      className="border border-gray-800 text-lg"
      extra={<Button type="primary">Save Settings</Button>}
    >
      <Form layout="vertical" className="space-y-6">
        <SettingItem
          title="Dark Mode"
          description="Enable dark theme"
          name="darkMode"
          defaultChecked={true}
        />
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-white">Theme</p>
              <p className="text-md text-gray-400">Chose your own color</p>
            </div>
            <ColorPicker
              defaultValue="#1677ff"
              className="border border-gray-600 bg-bgColorLight"
              allowClear
            />
          </div>
        </div>
      </Form>
    </Card>
  );
}

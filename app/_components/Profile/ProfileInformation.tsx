import { Card, Form, Input, Button } from "antd";
const { TextArea } = Input;

export default function ProfileInformation() {
  return (
    <Card
      title={<p className="text-lg">Profile Information</p>}
      bordered={false}
      className="border border-gray-800 text-lg"
      extra={<Button type="primary">Save Changes</Button>}
    >
      <Form layout="vertical">
        <Form.Item
          label={<span className="text-lg text-white">User Name</span>}
          name="firstName"
          initialValue="John"
        >
          <Input className="text-md bg-bgColor" />
        </Form.Item>

        <Form.Item
          label={<span className="text-lg text-white">Email</span>}
          name="email"
          initialValue="john.doe@example.com"
        >
          <Input type="email" className="text-md bg-bgColor" />
        </Form.Item>

        <Form.Item
          label={<span className="text-lg text-white">Bio</span>}
          name="bio"
          initialValue="Music enthusiast and avid listener. I enjoy discovering new artists and creating playlists for every mood."
        >
          <TextArea rows={4} className="text-md bg-bgColor" />
        </Form.Item>
      </Form>
    </Card>
  );
}

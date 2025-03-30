import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Card, Form, Input, Button } from "antd";

export default function AccountSection() {
  return (
    <Card
      title={<p className="text-lg">Account Management</p>}
      bordered={false}
      className="border border-gray-800"
    >
      <Form layout="vertical">
        <PasswordSection />
      </Form>
    </Card>
  );
}

function PasswordSection() {
  return (
    <div className="mb-6 space-y-4">
      <h3 className="text-lg font-medium text-white">Password</h3>

      <Form.Item
        label={<span className="text-lg text-white">Current Password</span>}
        name="currentPassword"
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? (
              <Visibility fontSize="small" />
            ) : (
              <VisibilityOff fontSize="small" />
            )
          }
          className="text-md bg-bgColor"
        />
      </Form.Item>

      <Form.Item
        label={<span className="text-lg text-white">New Password</span>}
        name="newPassword"
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? (
              <Visibility fontSize="small" />
            ) : (
              <VisibilityOff fontSize="small" />
            )
          }
          className="text-md bg-bgColor"
        />
      </Form.Item>

      <Form.Item
        label={<span className="text-lg text-white">Confirm New Password</span>}
        name="confirmPassword"
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? (
              <Visibility fontSize="small" />
            ) : (
              <VisibilityOff fontSize="small" />
            )
          }
          className="text-md bg-bgColor"
        />
      </Form.Item>

      <Button type="primary">Update Password</Button>
    </div>
  );
}

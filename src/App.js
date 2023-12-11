import "./App.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input.Search
          placeholder="Name"
          maxLength={10}
          prefix={<UserOutlined />}
          allowClear
        />
      </header>
    </div>
  );
}

export default App;

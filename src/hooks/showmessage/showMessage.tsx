import { MessageInstance } from "antd/es/message/interface";

interface ShowMessageProps {
    type: "success" | "error" | "loading" | "info";
    content: string;
    duration?: number;
}

const showMessage = (messageApi: MessageInstance, { type, content, duration }: ShowMessageProps) => {

  messageApi.open({
    type: type,
    content: content,
    duration: duration
  })

}

export default showMessage
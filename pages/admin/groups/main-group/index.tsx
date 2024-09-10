import { useSelector } from "react-redux";
import { RootState } from "../../../../utils/reduxtoolkit/store/store";
import { AxiosInstance as axios } from "../../../../utils/axios/axios";
import { useEffect, useState } from "react";
import { DeleteOutlined_antd, EditOutlined_antd, Table_antd } from "../../../../src/components/common/antd/antd";
import { CiCirclePlus } from "react-icons/ci";

import "./style.css"
import 'antd/dist/reset.css';
import { useNavigate } from "react-router-dom";

interface MainGroupsItemType {
  uuid: string;
  image: JSX.Element | null;
}

const MainGroup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MainGroupsItemType[]>([]);

  const navigate = useNavigate();

  const columns = [
    {
      title: "SURATY",
      dataIndex: "image"
    },
    {
      title: "KODY",
      dataIndex: "code"
    },
    {
      title: "ADY",
      dataIndex: "name"
    },
    {
      title: "TM ADY",
      dataIndex: "namePluralTm"
    },
    {
      title: "RU ADY",
      dataIndex: "namePluralRu"
    },
    {
      title: "AMALLAR",
      render: (item: MainGroupsItemType) => {
        return (
          <div className="text-[18px]">
            <EditOutlined_antd className="m-2 text-orange-500" />
            <DeleteOutlined_antd className="m-2 text-red-500" />
          </div>
        )
      }
    }
  ]

  const collapsed = useSelector((state: RootState) => state.Collapsed1.collapsed1);
  const mode = useSelector((state: RootState) => state.Mode.mode);

  const getMainGroups = async () => {
    setLoading(true);
    await axios.get("/mainGroups", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    }).then((res) => {
      const data: MainGroupsItemType[] = res.data.map((item: MainGroupsItemType) => ({
        ...item,
        key: item.uuid,
        image: item.image == null && <img src="/comingsoon.jpg" width={100} height={112} className="comingsoon"></img>
      }))
      setData(data);
      setLoading(true);
    }).catch((err) => {
      console.log(err);
    }).finally(() => { setLoading(false); })
  }

  useEffect(() => {
    getMainGroups();
  }, [])

  return (
    <div className={`flex flex-col p-[20px] ${mode == "dark" ? "dark_1" : "white_1"}`}>
      <CiCirclePlus className={`absolute text-orange-500 top-32 
        right-[32px] z-10 size-12 opacity-30 hover:opacity-100 hover:cursor-pointer`} 
        onClick={() => { navigate("/groups/maingroups/addMainGroup") }}
        />
      <Table_antd
        className={`${mode == "dark" ? "!scrollbar_added1 ant-table-dark-mode z"
          : "!white_1 !scrollbar_added2 ant-table-light-mode"} heighted w-full overflow-auto`}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
      ></Table_antd>
    </div>
  );
};

export default MainGroup;

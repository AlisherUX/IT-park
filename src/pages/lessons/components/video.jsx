import { useState } from "react";
import { Tabs } from "antd";
import Information from "./video/information";
import Homework from "./video/homework";
import Test from "./video/test";
import ClosedFiles from "./video/closedFiles";
import Files from "./video/files";
import { TabLockIcon } from "@/assets/icons";

export function VidStack() {
  const [lock, setLock] = useState(true);

  return (
    <div className="video">
      <div className="tab-box">
        <Tabs className="tab" defaultActiveKey="tab1">
          <Tabs tab={<span>Malumotlar</span>} key="tab1">
            <Information />
          </Tabs>

          <Tabs
            tab={
              <span className="tab-guide">
                {lock == true ? (
                  <>
                    Fayllar <TabLockIcon />
                  </>
                ) : (
                  <>Fayllar</>
                )}
              </span>
            }
            key="tab2"
          >
            {lock == true ? <ClosedFiles setLock={setLock} /> : <Files />}
          </Tabs>

          <Tabs
            tab={
              <span className="tab-guide">
                {lock == true ? (
                  <>
                    Uyga vazifa <TabLockIcon />
                  </>
                ) : (
                  <>Uyga vazifa</>
                )}
              </span>
            }
            disabled={lock == true ? true : false}
            key="tab3"
          >
            <Homework />
          </Tabs>

          <Tabs
            tab={
              <span className="tab-guide">
                {lock == true ? (
                  <>
                    Sinov testi <TabLockIcon />
                  </>
                ) : (
                  <>Sinov testi</>
                )}
              </span>
            }
            key="tab4"
            disabled={lock == true ? true : false}
          >
            <Test />
          </Tabs>
        </Tabs>
      </div>
    </div>
  );
}

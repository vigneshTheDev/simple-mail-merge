import { Empty, Input } from "antd";
import React, { useMemo, useState } from "react";
import QueAnim from "rc-queue-anim";
import { CheckCircleOutlined } from "@ant-design/icons";
import cn from "classnames";
import TweenOne from "rc-tween-one";

import styles from "./SearchableList.module.scss";

type ListItem = {
  label: string;
  key: string;
};

export interface SearchableListProps {
  items: ListItem[];
  onSelect: (key: string) => void;
  selectedItem?: string;
}

export const SearchableList: React.FC<SearchableListProps> = ({ items, onSelect, selectedItem }) => {
  const [searchKey, setSearchKey] = useState("");

  const itemsSearchable = useMemo(
    () => items.map((item) => ({ ...item, labelLowerCase: item.label.toLowerCase() })),
    [items]
  );
  const filteredItems = useMemo(() => {
    if (!searchKey) return itemsSearchable;

    const searchKeyLowerCase = searchKey.toLowerCase();
    return itemsSearchable.filter((item) => item.labelLowerCase.match(searchKeyLowerCase));
  }, [searchKey, itemsSearchable]);

  return (
    <div className={styles.container}>
      <Input placeholder={"Search"} className={styles.searchBox} onChange={(e) => setSearchKey(e.target.value)} />
      {filteredItems.length ? (
        <div>
          <QueAnim appear={false} animConfig={{ opacity: [1, 0], height: [40, 0] }} interval={0}>
            {filteredItems.map((item) => {
              const { key, label } = item;
              return (
                <div
                  key={key}
                  onClick={() => onSelect(key)}
                  className={cn(styles.listItem, { [styles.selected]: selectedItem === key })}
                  title={label}
                >
                  <div className={styles.itemLabel}>{label}</div>{" "}
                  {key === selectedItem && (
                    <div className={styles.selectedIcon}>
                      <TweenOne
                        animation={[
                          { scale: 0, type: "from", ease: "easeOutElastic", duration: 900 },
                          // { scale: 1.2, duration: 350 },
                          // { scale: 1, duration: 100 },
                        ]}
                      >
                        <CheckCircleOutlined />
                      </TweenOne>
                    </div>
                  )}
                </div>
              );
            })}
          </QueAnim>
        </div>
      ) : (
        <Empty description={searchKey ? "No Match Found" : "No Data"} />
      )}
    </div>
  );
};

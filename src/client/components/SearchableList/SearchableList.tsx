import { Empty, Input } from "antd";
import React, { useMemo, useState } from "react";
import QueAnim from "rc-queue-anim";

import styles from "./SearchableList.module.scss";

type ListItem = {
  label: string;
  key: string;
};

export interface SearchableListProps {
  items: ListItem[];
  onSelect: (key: string) => void;
}

export const SearchableList: React.FC<SearchableListProps> = ({ items, onSelect }) => {
  const [searchKey, setSearchKey] = useState("");

  const itemsSearchable = useMemo(() => items.map((item) => ({ ...item, labelLowerCase: item.label.toLowerCase() })), [items]);
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
                <div key={key} onClick={() => onSelect(key)} className={styles.listItem} title={label}>
                  {label}
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

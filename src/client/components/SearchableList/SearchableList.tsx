import { Empty, Input } from "antd";
import React, { useMemo, useState, useEffect, CSSProperties } from "react";
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
  style?: CSSProperties;
}

export const SearchableList: React.FC<SearchableListProps> = ({
  items,
  onSelect,
  selectedItem: _selectedItem,
  style = {},
}) => {
  const [searchKey, setSearchKey] = useState("");
  const [selectedItem, setSelectedItem] = useState(_selectedItem);

  const itemsSearchable = useMemo(
    () => items.map((item) => ({ ...item, labelLowerCase: item.label.toLowerCase() })),
    [items]
  );
  const filteredItems = useMemo(() => {
    if (!searchKey) return itemsSearchable;

    const searchKeyLowerCase = searchKey.toLowerCase();
    return itemsSearchable.filter((item) => item.labelLowerCase.match(searchKeyLowerCase));
  }, [searchKey, itemsSearchable]);

  useEffect(() => {
    setSelectedItem(_selectedItem);
  }, [_selectedItem]);

  const onSelectAnimationEnd = () => {
    if (selectedItem && _selectedItem !== selectedItem) onSelect(selectedItem);
  };

  return (
    <div className={styles.container} style={{ ...style }}>
      <Input placeholder={"Search"} className={styles.searchBox} onChange={(e) => setSearchKey(e.target.value)} />

      <div style={{ overflowY: "auto", flex: "1 1" }}>
        <QueAnim
          appear={false}
          animConfig={{ opacity: [1, 0], height: [40, 0] }}
          interval={0}
          onEnd={() => console.log("Hello")}
        >
          {filteredItems.map((item) => {
            const { key, label } = item;
            return (
              <div
                key={key}
                onClick={() => setSelectedItem(key)}
                className={cn(styles.listItem, { [styles.selected]: selectedItem === key })}
                title={label}
              >
                <div className={styles.itemLabel}>{label}</div>{" "}
                {key === selectedItem && (
                  <div className={styles.selectedIcon}>
                    <TweenOne
                      animation={{
                        scale: 0,
                        type: "from",
                        ease: "easeOutElastic",
                        duration: 900,
                        onComplete: onSelectAnimationEnd,
                      }}
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
      {!filteredItems.length && <Empty description={searchKey ? "No Match Found" : "No Data"} />}
    </div>
  );
};

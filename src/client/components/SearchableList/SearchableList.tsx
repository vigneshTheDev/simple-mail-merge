import { Empty, Input } from "antd";
import React, { useMemo, useState, useEffect, CSSProperties } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import cn from "classnames";
import { animated, useTransition, config } from "react-spring";

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

  const selectAnimation = useTransition(selectedItem, {
    from: { scale: 0 },
    enter: { scale: 1 },
    onRest: onSelectAnimationEnd,
    config: config.wobbly,
  });

  const transitions = useTransition(filteredItems, {
    from: {
      opacity: 0,
      height: 0,
    },
    enter: {
      opacity: 1,
      height: 40,
    },
    leave: {
      opacity: 0,
      height: 0,
    },
  });

  return (
    <div className={styles.container} style={{ ...style }}>
      <Input placeholder={"Search"} className={styles.searchBox} onChange={(e) => setSearchKey(e.target.value)} />

      <div style={{ overflowY: "auto", flex: "1 1" }}>
        {transitions(({ opacity, height }, item) => {
          const { key, label } = item;
          return (
            <animated.div
              style={{ opacity, height }}
              onClick={() => setSelectedItem(key)}
              className={cn(styles.listItem, { [styles.selected]: selectedItem === key })}
              title={label}
            >
              <div className={styles.itemLabel}>{label}</div>{" "}
              {selectAnimation(({ scale }, selected) => {
                return (
                  selected === key && (
                    <animated.div className={styles.selectedIcon} style={{ scale }}>
                      <CheckCircleOutlined />
                    </animated.div>
                  )
                );
              })}
            </animated.div>
          );
        })}
        {!filteredItems.length && <Empty description={searchKey ? "No Match Found" : "No Data"} />}
      </div>
    </div>
  );
};

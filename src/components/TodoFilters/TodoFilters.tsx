import React from "react";
import type { FilterStatus, SortOption } from "../../types/types";
import styles from "./TodoFilters.module.css";

interface TodoFilterProps {
  currentFilter: FilterStatus;
  currentSort: SortOption;
  onFilterChange: (filter: FilterStatus) => void;
  onSortChange: (sort: SortOption) => void;
}
export const TodoFilters = ({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
}: TodoFilterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.heading}>Статус</h3>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="filter"
              checked={currentFilter === "all"}
              onChange={() => onFilterChange("all")}
              className={styles.radioInput}
            />
            Все
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="filter"
              checked={currentFilter === "active"}
              onChange={() => onFilterChange("active")}
              className={styles.radioInput}
            />
            Активные
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="filter"
              checked={currentFilter === "completed"}
              onChange={() => onFilterChange("completed")}
              className={styles.radioInput}
            />
            Завершенные
          </label>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.heading}>Сортировка</h3>
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className={styles.select}
        >
          <option value="name">Наименование</option>
          <option value="status">Статус</option>
        </select>
      </div>
    </div>
  );
};

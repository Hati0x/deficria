import styles from "./Chart.module.scss";
import { Children, cloneElement } from "react";

const ChartContainer = ({ children }) => {
  return (
    <div className={styles.charts}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          className: child.props.className ? `${child.props.className} ${styles.chart}` : styles.chart,
        });
      })}
    </div>
  );
};

export default ChartContainer;

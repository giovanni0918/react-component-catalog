import * as React from "react";
import styles from "./Spinner.css";

export type SpinnerProps = { status: "Loading" | "Success" | "Failed" }

export const Spinner = (props: SpinnerProps): React.Node => {
    return props.status === "Loading" ? (
        <div className="Spinner-wrapper">
            <div className="Spinner"></div>
        </div>
    ) : <React.Fragment />;
}
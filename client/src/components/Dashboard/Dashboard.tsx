import * as React from "react";
import Progress from "./Progress/index";
import { IUserState } from "../../containers/User";
import "../../styles/styles.css";

export type DashboardProps = {
    user: IUserState;
    logout: () => void;
};

export default class Dashboard extends React.Component<DashboardProps, {}> {
    public render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.getDate()} - Your intake
                    </h5>
                    <Progress type={"Calories"} />
                    <Progress type={"Proteins"} />
                    <Progress type={"Carbs"} />
                    <Progress type={"Fat"} />
                    <p className="card-text">
                        <small className="text-muted">
                            Logged in as {this.props.user.username}
                        </small>
                    </p>
                    <button
                        type="button"
                        className="link-button"
                        onClick={this.props.logout}
                    >
                        Log out
                    </button>
                </div>
            </div>
        );
    }

    private getDate = () => {
        return "Thursday, 8 March";
    };
}

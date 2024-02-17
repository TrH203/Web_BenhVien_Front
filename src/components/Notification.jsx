import "./Notification.scss";
const Notification = () => {
    return (
        <div>
            <div className="noti-container">
                <div className="noti-content">
                    <div className="header">X</div>
                    <div className="message">
                        Create user succeed
                    </div>
                    <div className="status"></div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
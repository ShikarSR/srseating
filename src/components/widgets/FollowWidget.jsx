import SocialShareV2 from '../utilities/SocialShareV2';

const FollowWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar position-relative">
                <h4 className="font_22 text-capitalize">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <SocialShareV2 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FollowWidget;
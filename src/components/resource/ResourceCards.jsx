import resourceJsonData from '../resource/resourceJsonData/resourceJsonData.json'
import SingleTeamV1 from '../team/SingleTeamV1';
import '../../assets/css/product.css';
import { Link } from 'react-router-dom';
import ResourceListRow1 from './ResourceListRow1';

const ResourceCards = ({data}) => {
    return (
        <>
        {/* <div className="space"></div> */}
            <div className="team-style-one-area product_cards_sec">

                <div className="container">
                    <div className="team-style-one-items">
                        <div className="row">
                            {resourceJsonData.slice(0, 3).map(team =>
                                <div className="col-xl-3 col-lg-4 col-md-4 mb-50" key={team.id}>
                                    <ResourceListRow1 team={team} />
                                </div>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-xl-9 offset-xl-3 col-lg-12">
                                {/* <div className="team-grid"> */}
                                    <div className="row">
                                        {resourceJsonData.slice(3, 6).map(team =>
                                            <div className="col-xl-4 col-lg-4 col-md-4 mb-50" key={team.id}>
                                                <ResourceListRow1 team={team} />
                                            </div>
                                        )}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                      <div className="row">
                            {resourceJsonData.slice(6, 9).map(team =>
                                <div className="col-xl-3 col-lg-4 mb-50 col-md-4" key={team.id}>
                                    <ResourceListRow1 team={team} />
                                </div>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-xl-9 offset-xl-3 col-lg-12 ">
                                {/* <div className="team-grid"> */}
                                    <div className="row">
                                        {resourceJsonData.slice(9, 12).map(team =>
                                            <div className="col-xl-4 col-lg-4 mb-50 col-md-4" key={team.id}>
                                                <ResourceListRow1 team={team} />
                                            </div>
                                        )}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {resourceJsonData.slice(12, 15).map(team =>
                                <div className="col-xl-3 col-lg-4 mb-50 col-md-4" key={team.id}>
                                    <ResourceListRow1 team={team} />
                                </div>
                            )}
                        </div>
                            <div className="row">
                            <div className="col-xl-9 offset-xl-3 col-lg-12">
                                {/* <div className="team-grid"> */}
                                    <div className="row">
                                        {resourceJsonData.slice(15, 19).map(team =>
                                            <div className="col-xl-4 col-lg-4 mb-50 col-md-4" key={team.id}>
                                                <ResourceListRow1 team={team} />
                                            </div>
                                        )}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                        

<div className="space"></div>
                </div>
            </div>
        </>
    );
};

export default ResourceCards;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage} from 'react-intl'
import Slider from "react-slick";

class HandBook extends Component {

    render() {
       
        return ( 
           <div className=" section-share section-handbook">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Cẩm nang</span>
                    <button className="btn-section">Xem thêm</button>
                </div>
                <div className="section-body">
                <Slider {...this.props.settings}>
                    <div className="section-customize"> 
                        <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                    <div className="section-customize">
                    <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                    <div className="section-customize">
                    <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                    <div className="section-customize">
                    <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                    <div className="section-customize">
                    <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                    <div className="section-customize">
                    <div className="bg-image section-handbook"></div>
                        <div>Cơ xương khớp</div>
                    </div>
                </Slider>
                </div>
                
            </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HandBook);